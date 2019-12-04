import React, { Component } from 'react'
import Sidebar from 'react-sidebar'

class LeftSidebar extends Component {

  render() {
    const { lfsOpen, openLeftSidebar } = this.props
    return(
      <Sidebar
        sidebar={<b> Sidebar Content </b>}
        open={lfsOpen}
        onSetOpen={openLeftSidebar}
        styles={{sidebar: {background: 'white' }}}
      />
    )
  }
}

export default LeftSidebar