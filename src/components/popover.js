import React, { Component } from 'react'
import setStyles, { setTitleStyles, setBodyStyles } from './styleSheet'

export default class Popover extends Component {

  constructor(props) {
    super(props)
    this.state = {
      position: this.getPosition(props),
      show: false,
      target: null,
      css: {}
    }
  }
  componentDidMount() {
    let target = document.getElementById(this.props.targetId)
    this.setState({
      target: target,
      css: {
        main: this.getStyles(this.state.position, target),
        title: this.getTitleStyles(),
        body: this.getBodyStyles()
      }
    })
  }

  getPosition = props => (Object.keys(props).find(
    (prop) => ['right', 'left', 'top', 'bottom'].includes(prop.toLowerCase())
  ) || 'right').toLowerCase()

  getStyles = (position, target) => setStyles(position, target)
  getTitleStyles = () => setTitleStyles()
  getBodyStyles = () => setBodyStyles()

  showPop = () => this.setState({ show: true })
  hidePop = () => this.setState({ show: false })
  togglePop = () => this.setState({ show: !this.state.show })

  listenToEvent = (event, target) => {
    switch (event) {
      case 'hover':
        target.addEventListener("mouseover", this.showPop)
        target.addEventListener("mouseout", this.hidePop)
        target.addEventListener("blur", this.hidePop)
        break;
      default:
        target.addEventListener("click", this.togglePop)
        // target.addEventListener("blur", this.hidePop)
    }
  }
  updateStyle() {
    console.log('updating style')
    setTimeout(() => {
      if (this.updatedCss) {
        if (this.updatedCss.main.left !== 'NaNpx') {
          this.setState({
            css: this.updatedCss
          })
        }
      }
    }, 0)
  }

  render() {
    console.log('rendering')
    this.updateStyle()
    if (this.state.target) { this.listenToEvent(this.props.on, this.state.target) }
    if (this.state.show) {
      return (
        <div
          ref = {node => this.updatedCss = node
            ? {
              ...this.state.css,
              main: {
                ...this.state.css.main,
                left: (this.state.css.main.left - ((node.offsetWidth - this.state.target.offsetWidth)/2.0))+'px',
                opacity: 1
              }
            } : null}
          className = 'popover'
          style = {this.state.css.main}>
          <PopoverTitle
            title = {this.props.title}
            style = {this.state.css.title}
          />
          <PopoverBody
            body = {this.props.body}
            style = {this.state.css.body}
          />
        </div>)
    } else {
      return ("")
    }
  }
}

export const PopoverBody = (props) => {
  if (props.body) {
    return(<div
      className = 'popover-body'
      style = {props.style}>
      {props.body}
    </div>)

  } else {
    return('')
  }
}

export const PopoverTitle = (props) => {
  if (props.title) {
    return(<div
      className = 'popover-title'
      style = {props.style}>
      {props.title}
    </div>)
  } else {
    return('');
  }
}
