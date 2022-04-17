import React from 'react'

export const Footer = (props) => {
  return (
    <footer style={props.styles}>
      <p>
        &copy; {new Date().getFullYear()} - {props.name}
      </p>
    </footer>
  )
}

export default Footer
