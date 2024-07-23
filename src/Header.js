import React from 'react'

const Header = ({title}) => {
  return (
    <div>
      <header>{title}</header></div>
  )
}


Header.defaultProps={
  title:"To Do List"
}
export default Header