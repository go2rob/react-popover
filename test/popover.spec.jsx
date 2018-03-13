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

    it("should render a div with className popover", () => {
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

    it("with title should render a div with className popover-title", () => {
      let popover = shallow(<Popover title = 'Title text'/>)
      popover.setState({show: true})

      expect(popover.find(PopoverTitle).dive().find('div')).to.have.length(1)
      expect(popover.find(PopoverTitle).dive().find('div')).to.have.className('popover-title')
    })

    it("with body should render a div with className popover-body", () => {
      let popover = shallow(<Popover body = 'Body text'/>)
      popover.setState({show: true})

      expect(popover.find(PopoverBody).dive().find('div')).to.have.length(1)
      expect(popover.find(PopoverBody).dive().find('div')).to.have.className('popover-body')
    })
  })

  context("Styles", () => {
    let popover = shallow(<Popover title = 'Title' body = 'Body'/>)
    popover.setState({show: true})

    it("should receive styles as props", () => {
      expect(popover.prop('style')).to.an('object')
    })

    it("should have padding 4px", () => {
      expect(popover.prop('style').padding).to.equal('5px')
    })

    it("should have border 1px solid black", () => {
      expect(popover.prop('style').border).to.equal('1px solid black')
    })

    context("PopoverTitle", () => {
      it("should be receiving titleStyles", () => {
        expect(popover.find(PopoverTitle).prop('style')).to.be.an('object')
      })

      it("should have bottomBorder", () => {
        expect(popover.find(PopoverTitle).prop('style').borderBottom).to.equal('0.75px solid black')
      })

      it("should have paddingBottom 3px", () => {
        expect(popover.find(PopoverTitle).prop('style').paddingBottom).to.equal('3px')
      })

    })

    context("PopoverBody", () => {
      it("should be receiving bodyStyles", () => {
        expect(popover.find(PopoverBody).prop('style')).to.be.an('object')
      })

      it("should have paddingTop 3px", () => {
        expect(popover.find(PopoverBody).prop('style').paddingTop).to.equal('3px')
      })

    })

  })

})
