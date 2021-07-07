import React, { Component } from 'react'
import Board from './Board'
export default class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            xIsNext: true,
            squares: Array(9).fill(null),
        } 

    }
   
    handleClick = (i) => {
        const squares = this.state.squares
        const winner = calculateWinner(squares)
        if(winner || squares[i]){
        return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            squares:squares,
            xIsNext: !this.state.xIsNext
        })
    }
    
    render() {
        const squares = this.state.squares
        const winner = calculateWinner(squares);
        let status;
        if(winner){
            status = 'Winner is ' + (winner==='X' ?  this.props.location.state.player1:this.props.location.state.player2)
        }else{
            status = 'Next Player is ' + (this.state.xIsNext ? this.props.location.state.player1:this.props.location.state.player2)
        }
        return (
            <div className="game">
               <div className="game-load">
                 <Board onClick={this.handleClick} squares={squares}/>
               </div>
               <div className="game-info">
                   <div className>{status}</div>
               </div>
                
            </div>
        )
    }
}

function calculateWinner(squares){
    const winnerLine = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for(let i=0;i<winnerLine.length;i++){
        let[a,b,c]=winnerLine[i];
        if(squares[a]&&squares[a]===squares[b]&&squares[b]===squares[c]){
           return squares[a];
        }
    }
    return null
}


