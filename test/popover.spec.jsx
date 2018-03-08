import React from 'react';
import { shallow, mount } from 'enzyme';
import Popover, { PopContent } from '../src/components/popover';
// import jsdom from 'jsdom';
// import sinon from 'sinon'

describe("popover with no props", () => {
  let popover = shallow(<Popover/>)

  it("should have a single div with className react-popover", () => {
    expect(popover.type()).to.equal('div')
    expect(popover).to.have.length(1)
    expect(popover).to.have.className('react-popover')
  })

  context("state", () => {
    it("should have default position right", () => {
      expect(popover.state().position).to.eq('right')
    })

    it("should have popup false", () => {
      expect(popover.state().popup).to.be.false
    })
  })
})

describe("popover", () => {
  context("position given with no targetId", () => {
    let popoverBottom = shallow(<Popover bottom/>)

    it("should have a single div with className react-popover", () => {
      expect(popoverBottom.type()).to.equal('div')
      expect(popoverBottom).to.have.length(1)
      expect(popoverBottom).to.have.className('react-popover')
    })

    context("state", () => {
      it("should have given position", () => {
        expect(popoverBottom.state().position).to.eq('bottom')
      })

      it("should have popup false", () => {
        expect(popoverBottom.state().popup).to.be.false
      })
    })
  })

  context("position & target element id given", () => {
    let popover = shallow(<Popover bottom targetId = 'button'/>)

    it("should receive target element id in state", () => {
      expect(popover.state().targetId).to.eq('button')
    })

    it("state should have given position", () => {
      expect(popover.state().position).to.eq('bottom')
    })
  })
})

describe("PopContent", () => {
  let popContent = shallow(<PopContent pop/>)
  it("should have a div with className popover-content", () => {
    expect(popContent.type()).to.equal('div')
    expect(popContent).to.have.length(1)
    expect(popContent).to.have.className('popover-content')
  })

})
