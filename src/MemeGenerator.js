import React, { Component } from 'react';


class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      randImg: '',
      allMemes: [],
      loading: false,
    }
  }

componentDidMount() {
  this.setState({loading: true})
  fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => {
      this.setState({
        allMemes: response.data.memes,
        loading: false,
      })
    })
}

handleClick = () => {
  const numberOfMemes = this.state.allMemes.length
  const randNum = Math.floor(Math.random() * Math.floor(numberOfMemes))
  
  this.setState({
    randImg: this.state.allMemes[randNum].url
  })
}

  
  render() {
    return(
      <div className='img-container'>
        {this.state.loading ? 
          'loading...' : 
          <button onClick={this.handleClick}>
          MEME NOW!</button>}
          <img src={this.state.randImg} alt='' />
      </div>
    )
  }
}


export default MemeGenerator