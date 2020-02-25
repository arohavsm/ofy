const snippets = {}
export default snippets

snippets.classSyntax = `
import React, { Component } from 'react'
//Without importing React JSX cannot be rendered.

class Example extends Component { // Class has to extend Component and it shoud implement render method which will return JSX
  constructor () {
    this.state = {}
  }
 // or more simply
  //this.state = {}

  render() { // render which returns JSX
    return(
      //return JSX(HTML code that we want to see in view)
    )
  }
}

export default Example
`