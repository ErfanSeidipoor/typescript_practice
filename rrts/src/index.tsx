import React from 'react'
import ReactDom from "react-dom";

interface AppProps {
  color?: string
}

class App extends React.Component<AppProps> {

  state = {
    counter: 0
  }

  onIncrement = ():void => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  onDecrement = ():void =>{
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render(){
    return (
      <>
        <h1>{`${this.state.counter} Hi there ${this.props.color || 'green'}`}</h1>
        <button onClick={this.onIncrement}>increment</button>
        <button onClick={this.onDecrement}>decrement</button>
      </>
    )    
  }
}

ReactDom.render(<App color={"red"}/>, document.getElementById('root'))