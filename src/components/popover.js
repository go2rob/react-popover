import React, { Component } from 'react'

export const PopContent = (props) => {
  // console.log(props)
  if (props.pop) {
    return (
      <div  className = 'popover-content'
      style={{
        'zIndex':  '99',
        'position':  'absolute',
        'top': '50px',
        'left': '535px',
        'border': '1px solid black',
        'backgroundColor': 'white'
      }}>
        <button>Pop Over</button>
        <button>Pop Over</button>
      </div>)
  } else {
    return ("")
  }
}

export default class Popover extends Component {

  constructor(props) {
    super(props)
    this.state = {
      position: this.getPosition(props),
      popup: false,
      targetId: props.targetId
    }
  }
  componentDidMount() {
    this.setState({
      targetId: this.props.targetId
    })
  }

  getPosition = (props) => {
    if (props.right) {
      return 'right'
    } else if (props.left) {
      return 'left'
    } else if (props.top) {
      return 'top'
    } else if (props.bottom) {
      return 'bottom'
    } else {
      return 'right'
    }
  }
  togglePop = () => {
    this.setState({
      popup: !this.state.popup
    })
  }
  render() {
    let source = document.getElementById(this.state.targetId)
    if (source) { source.addEventListener("click", this.togglePop) }
    return (
      <div className = 'react-popover'>
        <PopContent pop = {this.state.popup}/>
      </div>
    )
  }
}
