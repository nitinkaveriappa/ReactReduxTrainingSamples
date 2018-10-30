import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Octicon, { Sync } from '@githubprimer/octicons-react';

function Square(props) {
  const className = `square ${props.lightemup ? 'highlight' : ''}`;
  return (
    <button className={className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends Component {
  renderSquare(i) {
    let lightemup = false;
    if (this.props.highlight) {
      const [a, b, c] = this.props.highlight;
      if (a === i || b === i || c === i) {
        lightemup = true;
      }
    }
    return (
      <Square
        value={this.props.squares[i]}
        lightemup={lightemup}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          location: {
            row: -1,
            col: -1
          }
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (
      calculateWinner(squares).winner != null ||
      calculateDraw(squares) ||
      squares[i]
    ) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    const [row, col] = findRowCol(i);
    this.setState({
      history: history.concat([
        {
          squares: squares,
          location: {
            row: row,
            col: col
          }
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      toggle: true
    });
    console.log(this.state);
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const highlight = winner.highlight;
    const draw = calculateDraw(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button
            className={move === this.state.stepNumber ? 'boldit' : ''}
            onClick={() => this.jumpTo(move)}
          >
            {desc}({step.location.row},{step.location.col})
          </button>
        </li>
      );
    });
    const togglemoves = this.state.toggle ? moves : moves.reverse();
    let status;
    if (winner.winner) {
      status = 'Winner: ' + winner.winner;
    } else if (draw) {
      status = 'Draw';
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            highlight={highlight}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          Toggle History:
          <div>
            <button
              type="button"
              onClick={() => this.setState({ toggle: !this.state.toggle })}
            >
              <Octicon icon={Sync} size="small" ariaLabel="GitHub" />{' '}
              Ascending/Decending
            </button>
          </div>
          History:
          <ol>{togglemoves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        highlight: lines[i]
      };
    }
  }
  return {
    winner: null,
    highlight: null
  };
}

function calculateDraw(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return false;
    }
  }
  return true;
}

function findRowCol(index) {
  const rowcol = [
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3]
  ];
  if (index >= 0 && index <= 8) {
    return rowcol[index];
  } else {
    return;
  }
}
