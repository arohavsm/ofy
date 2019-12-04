import React, { Component } from 'react'

import { Info, Variables, Constants, ConstExercies, MemoryAlloc, Let, DataTypes } from './basics3/info'
import { toggle } from './basics3/views'
import LetQuiz from './basics3/let_quiz'
import Similarities from './basics3/similarities'

class Basics3 extends Component {
  state = {
    views: {...toggle}
  }

  changeView = (view, name) => {
    const { views } = this.state
    views[name] = !view
    this.setState({
      views
    })
  }
  render() {
    const { views } = this.state
    return(
      <div className="content-placeholder">
        <h2 className="main-title"> #2 Basics - JavaScript In Action</h2>
        <Info />
        <DataTypes />
        <Variables toggleAnswer={this.changeView} views={views} />
        <Constants toggleAnswer={this.changeView} views={views} />
        <ConstExercies toggleAnswer={this.changeView} views={views} />
        <Let toggleAnswer={this.changeView} views={views} />
        <LetQuiz toggleAnswer={this.changeView} views={views} />
        <Similarities />
        <MemoryAlloc />
      </div>
    )
  }
}

export default Basics3