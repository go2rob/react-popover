import React, { Component } from 'react'

const PopWindow = (props) => {
  // console.log(props)
  if (props.pop) {
    return (<div>Pop Over</div>)
  } else {
    return ("")
  }
}

export default class Popover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      direction: this.getPosition(props),
      popover: false
    }
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
      popover: !this.state.popover
    })
  }
  render() {
    return (
      <div>
        <div className = 'buttons'>
          <button onClick = {this.togglePop}>
            Down
          </button>
          <PopWindow pop = {this.state.popover}/>
        </div>
      </div>
    )
  }
}
