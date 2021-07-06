import React, { Component } from 'react'

class Players extends Component {
      constructor(props) {
          super(props)
      
          this.state = {
               player1:'',
               player2:''
          }
      }
      HandlePlayer1= (e)=>{
            this.setState({
                player1 : e.target.value
            })
      }
      HandlePlayer2= (e)=>{
        this.setState({
            player2 : e.target.value
        })

  }
 
   HadleSubmit = (e) =>{
    e.preventDefault();
   this.props.history.push({
       pathname:'/Game/',
       state:{
           player1: this.state.player1,
           player2: this.state.player2,
       }
    } )

   }
      
    render() {
        return (
            <div className="container">
                <div className="header">
		            <h2>Tic Tac Toe </h2>
	            </div>
            <form className="form" onSubmit={this.HadleSubmit}>
                <div className="form-control">
                <label for="player1">1st Player Name</label>
                <input type="text" value={this.state.player1} onChange={this.HandlePlayer1} className="play1" required></input>
                </div>
                <div className="form-control">
                <label for="player2">2nd Player Name</label>
                <input type="text" value={this.state.player2} onChange={this.HandlePlayer2} className="play2" required></input>
                </div>
                <button className=""type="submit">Start The Game</button>
            </form>
            </div>
        )
    }
}
export default Players
