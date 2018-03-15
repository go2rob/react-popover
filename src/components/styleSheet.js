const setStyles = (position, target) => {
  return ({
    opacity: 0,
    zIndex:  '999',
    padding: '5px',
    borderRadius: '2px',
    position:  'absolute',
    border: '1px solid black',
    backgroundColor: 'white'
  })
}

export default setStyles

export const setTitleStyles = () => {
  return ({
    borderBottom: '0.75px solid black',
    paddingBottom: '3px'
  })
}

export const setBodyStyles = () => {
  return ({
    paddingTop: '3px'
  })
}

export const setArrowStyles = (position) => {
  return ({
    ...arrowCommonProps,
    borderWidth: styleFor(position).borderWidth,
    borderColor: styleFor(position).borderColor,
    margin: styleFor(position).margin,
    bottom: styleFor(position).bottom,
    top: styleFor(position).top,
    left: styleFor(position).left,
    right: styleFor(position).right
  })
}

export const setArrowBorderStyles = (position) => {
  // console.log(position, styleFor(position))
  // console.log(styleFor(position).leftAfter || styleFor(position).left)
  return ({
    ...arrowBorderCommonProps,
    borderWidth: styleFor(position).borderWidth,
    borderColor: styleFor(position).borderColorAfter,
    margin: styleFor(position).margin,
    bottom: styleFor(position).bottomAfter,
    top: styleFor(position).topAfter || styleFor(position).top,
    left: styleFor(position).leftAfter || styleFor(position).left, // : styleFor(position).leftAfter,
    right: styleFor(position).rightAfter
  })
}

const arrowCommonProps = {
  position: 'absolute',
  borderColor: 'transparent',
  borderStyle: 'solid',
  zIndex: '100'
}

const arrowBorderCommonProps = {
  position: 'absolute',
  borderStyle: 'solid'
}

const styleFor = (position) => {
  switch (position) {
    case 'right':
      return ({
        borderWidth: '11px 11px 11px 0px',
        borderColor: 'transparent white transparent transparent',
        borderColorAfter: 'transparent black transparent transparent',
        margin: '-11px 0px -11px 0px',
        left: '-9.5px',
        leftAfter: '-11px',
        top: '50%'
      })
    case 'left':
      return ({
        borderWidth: '11px 0px 11px 11px',
        borderColor: 'transparent transparent transparent white',
        borderColorAfter: 'transparent transparent transparent black',
        margin: '-11px 0px 0px 0px',
        right: '-9.5px',
        rightAfter: '-11px',
        top: '50%'
      })
    case 'top':
      return ({
        borderWidth: '11px 11px 0px 11px',
        borderColor: 'white transparent transparent transparent',
        borderColorAfter: 'black transparent transparent transparent',
        margin: '0px 0px 0px -11px',
        bottom: '-9.5px',
        bottomAfter: '-11px',
        left: '50%',
      })
    case 'bottom':
      return ({
        borderWidth: '0px 11px 11px 11px',
        borderColor: 'transparent transparent white transparent',
        borderColorAfter: 'transparent transparent black transparent',
        margin: '0px -11px 0px -11px',
        top: '-9.5px',
        topAfter: '-11px',
        left: '50%',
      })
    default:
      console.log('error while computing style')
  }
}
