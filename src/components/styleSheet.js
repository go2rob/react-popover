const setStyles = (position, target) => {

  return ({
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
