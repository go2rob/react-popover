const setStyles = (position, target) => {

  const calculatePosition = () => {
    if (target) {
      switch (position) {
        case 'right':
          return ({
            top: target.offsetTop - target.offsetHeight,
            left: target.offsetLeft + target.offsetWidth
          })
        case 'left':
          return ({
            top: target.offsetTop - target.offsetHeight,
            right: document.body.clientWidth - target.offsetLeft
          })
        case 'top':
          return ({
            bottom: window.innerHeight - target.offsetTop,
            left: target.offsetLeft // NOTE: temporary (need measure resulting element)
          })
        case 'bottom':
          return ({
            top: target.offsetTop + target.offsetHeight,
            left: target.offsetLeft // NOTE: temporary (need measure resulting element)
          })
        default:
          return ({})
      }
    } else {
      return ({});
    }
  }

  return ({
    top: calculatePosition().top,
    left: calculatePosition().left,
    right: calculatePosition().right,
    bottom: calculatePosition().bottom,
    visibility: 'visible',
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
