import React, { Component } from 'react'

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  };

  increment = () => {
    this.setState(prev => ({
      count : prev.count + 1
    }));
  }

  decrement = () => {
    this.setState(prev => ({
      count : prev.count - 1
    }));
  }

  render() {
    return (
      <main className='w-[500px] h-[200px] bg-white text-black shadow-md shadow-black/40 flex flex-col gap-6 items-center justify-center text-3xl mt-36 mx-auto rounded-lg'>
        <p>This is the footer count: {this.state.count}</p>
        <div className='flex items-center gap-5'>

          <button onClick={this.decrement} className='bg-red-400 rounded-lg p-2 text-xl px-10 cursor-pointer text-white font-bold'>Decrement</button>

          <button onClick={this.increment} className='bg-blue-500 rounded-lg p-2 text-xl px-10 cursor-pointer text-white font-bold'>{this.props.buttonText}</button>
        </div>
      </main>
    )
  }
}
