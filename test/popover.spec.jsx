import React from 'react';
import { shallow, mount } from 'enzyme';
import Popover, { PopoverBody, PopoverTitle } from '../src/components/popover';

describe("Component", () => {
  let popover = shallow(<Popover/>)

  context("with no props", () => {
    it("should have position right by default", () => {
      expect(popover.state().position).to.eq('right')
    })

    it("should have show false", () => {
      expect(popover.state().show).to.be.false
    })

    it("should have target null", () => {
      expect(popover.state().target).to.be.null
    })
  })

  context("should render nothing when show state is false", () => {
    it("should render nothing", () => {
      expect(popover.state().show).to.be.false
      expect(popover.type()).to.be.null
    })

    it("should render a div when state show is true", () => {
      popover.setState({show: true})
      expect(popover.state().show).to.be.true
      expect(popover.type()).not.to.be.null
      expect(popover.type()).to.equal('div')
    })
  })

  context("with position given", () => {
    let popoverBottom = shallow(<Popover bottom/>)
    let popoverTop = shallow(<Popover top bottom right left/>)
    let popoverLeft = shallow(<Popover Left/>)

    it("should have given position", () => {
      expect(popoverBottom.state().position).to.eq('bottom')
    })

    it("can have position - case insensitive", () => {
      expect(popoverLeft.state().position).to.eq('left')
    })

    it("should have first mentioned position when given multiple positions", () => {
      expect(popoverTop.state().position).to.eq('top')
    })
  })

  context("when show state is true", () => {
    let popover = shallow(<Popover/>)
    popover.setState({show: true})

    // it("should get position of the target element", () => {
    //   let popover = shallow(<Popover/>)
    //   console.log(popover.state())
    // })

    it("should render a div with className react-popover", () => {
      expect(popover).to.have.length(1)
      expect(popover.name()).to.equal('div')
      expect(popover).to.have.className('react-popover')
    })

    it("should render an empty PopoverBody", () => {
      expect(popover.find(PopoverBody)).to.have.length(1)
      expect(popover.find(PopoverBody).html()).to.equal('')
    })

    it("PopoverBody should receive body prop from Popover Component", () => {
      let popoverWithBody = mount(<Popover body = 'body text'/>)
      popoverWithBody.setState({show: true})
      expect(popoverWithBody.find(PopoverBody)).to.have.prop('body').deep.equal('body text')
    })

    it("should render an empty PopoverTitle", () => {
      expect(popover.find(PopoverTitle)).to.have.length(1)
      expect(popover.find(PopoverTitle).html()).to.equal('')
    })

    it("PopoverTitle should receive title prop from Popover Component", () => {
      let popoverWithTitle = shallow(<Popover title = 'title text'/>)
      popoverWithTitle.setState({show: true})
      expect(popoverWithTitle.find(PopoverTitle)).to.have.prop('title').deep.equal('title text')
    })
  })
})
