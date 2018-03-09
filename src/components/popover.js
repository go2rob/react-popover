import React, { Component } from 'react'
import setStyles from './styleSheet'

export default class Popover extends Component {

  constructor(props) {
    super(props)
    this.state = {
      position: this.getPosition(props),
      show: false,
      target: null,
      css: {display: 'none'}
    }
  }
  componentDidMount() {
    let target = document.getElementById(this.props.targetId)
    this.setState({
      target: target,
      css: this.getStyles(this.state.position, target)
    })
  }

  getPosition = props => (Object.keys(props).find(
    (prop) => ['right', 'left', 'top', 'bottom'].includes(prop.toLowerCase())
  ) || 'right').toLowerCase()

  getStyles = (position, target) => setStyles(position, target)

  showPop = () => this.setState({ show: true })
  hidePop = () => this.setState({ show: false })
  togglePop = () => this.setState({ show: !this.state.show })

  listenToEvent = (event, target) => {
    switch (event) {
      case 'hover':
        target.addEventListener("mouseover", this.showPop)
        target.addEventListener("mouseout", this.hidePop)
        break;
      default:
        target.addEventListener("click", this.togglePop)
    }
  }

  render() {
    if (this.state.target) { this.listenToEvent(this.props.on, this.state.target) }
    if (this.state.show) {
      return (
        <div
          className = 'react-popover'
          style = {this.state.css}>
          <PopoverTitle title = {this.props.title}/>
          <PopoverBody body = {this.props.body}/>
        </div>)
    } else {
      return ("")
    }
  }
}

export const PopoverBody = (props) => {
  if (props.body) {
    return(props.body)
  } else {
    return('');
  }
}

export const PopoverTitle = (props) => {
  return('');
}
