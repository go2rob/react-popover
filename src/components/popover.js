import React, { Component } from 'react'
import setStyles, { setTitleStyles, setBodyStyles, setArrowStyles, setArrowBorderStyles } from './styleSheet'
import { debounce, throttle } from 'lodash'


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
        main: setStyles(this.state.position, target),
        title: setTitleStyles(),
        body: setBodyStyles(),
        arrow: setArrowStyles(this.state.position),
        arrowBorder: setArrowBorderStyles(this.state.position)
      }
    })
  }

  getPosition = props => (Object.keys(props).find(
    (prop) => ['right', 'left', 'top', 'bottom'].includes(prop.toLowerCase())
  ) || 'right').toLowerCase()

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
        target.addEventListener("blur", this.hidePop)
    }
  }
  updatePosition() {
    setTimeout(() => {
      if (this.updatedCss) {
        this.setState({
          css: this.updatedCss
        })
        this.updatedCss = null
      }
    }, 0)
  }

  // handleResize(node) {
  //   this.snapPosition(node)
  //   if (this.updatedCss) {
  //     console.log('here I am')
  //     this.setState({
  //       css: this.updatedCss
  //     })
  //   }
  // }

  snapPosition(node) {
    if (node) {
      let target = this.state.target
      let [targetWidth, targetHeight] = [target.offsetWidth, target.offsetHeight]
      let [nodeWidth, nodeHeight] = [node.offsetWidth, node.offsetHeight]
      let [l, t, w, h] = [target.offsetLeft, target.offsetTop, target.offsetWidth, target.offsetHeight]
      let [docWidth, docHeight] = [document.documentElement.clientWidth, document.documentElement.clientHeight]
      let left, right, top, bottom;
      switch (this.state.position) {
        case 'right':
          left = (l + w + 10)
          top = (t - ((nodeHeight - targetHeight)/2.0))+'px'
          break;
        case 'left':
          right = docWidth - l + 10
          top = (t - ((nodeHeight - targetHeight)/2.0))+'px'
          break;
        case 'top':
          bottom = docHeight - t + 10
          left = (l - ((nodeWidth - targetWidth)/2.0))+'px'
          break;
        case 'bottom':
          left = (l - ((nodeWidth - targetWidth)/2.0))+'px'
          top = t + h + 10
          break;
        default:

      }

      this.updatedCss = {
        ...this.state.css,
        main: {
          ...this.state.css.main,
          right: right,
          left: left,
          top: top,
          bottom: bottom,
          opacity: 1
        }
      }
    } else {
      this.updatedCss = null
    }
  }

  render() {
    this.updatePosition()
    if (this.state.target) { this.listenToEvent(this.props.on, this.state.target) }
    if (this.state.show) {
      return (
        <div
          ref = {
            node => {
              // window.addEventListener('resize', throttle(() => {
              //    this.handleResize(node)
              // }, 1000))
              this.snapPosition(node)
            }
          }
          className = 'popover'
          style = {this.state.css.main}>
          <div>
            <span className = 'arrow' style = {this.state.css.arrow}/>
            <span className = 'arrow-border' style = {this.state.css.arrowBorder}/>
          </div>
          <center>
            <PopoverTitle
              title = {this.props.title}
              style = {this.state.css.title}
            />
            <PopoverBody
              body = {this.props.body}
              style = {this.state.css.body}
            />
          </center>
        </div>)
    } else {return ("")}
  }
}

export const PopoverBody = (props) => {
  if (props.body) {
    return(<div
      className = 'popover-body'
      style = {props.style}>
      {props.body}
    </div>)
  } else {return('')}
}

export const PopoverTitle = (props) => {
  if (props.title) {
    return(<div
      className = 'popover-title'
      style = {props.style}>
      {props.title}
    </div>)
  } else {return('')}
}
