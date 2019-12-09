import React, { Component } from 'react'
import Intro from './intro'
import Access from './access'
import Everything from './everything'
import PendingItems from './pending'
import { toggle } from "./views";
import Methods from './methods'
import { quiz_enabled } from '../../globals'
import SweetAlert from 'sweetalert-react'
import Finding from './finding'
import Reference from './reference'

class Objects extends Component {
  state = {
    views: {...toggle}
  }
  changeView = (view, name) => {
    const { views } = this.state

    if(!quiz_enabled){
      // SweetAlert('You are blocked from viewing results');
      alert('You are blocked from viewing results')
      return;
    }
    views[name] = !view
    this.setState({
      views
    })
  }
  render(){
    const { views } = this.state
    return (
      <div>
        <div className="content-placeholder">
          <Intro />
          <Access toggleAnswer={this.changeView} views={views}/>
          <Methods toggleAnswer={this.changeView} views={views} />
          <Finding toggleAnswer={this.changeView} views={views} />
          <Reference toggleAnswer={this.changeView} views={views} />
          <Everything/>
          <PendingItems />
        </div>
      </div>
    )
  }
}

export default Objects