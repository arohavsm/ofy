import React, { Component } from 'react';

class Example1 extends Component {

  state = {
    val: '',
    methodType: 'GET',
    serverError: false,
    message: '',
    showMessage: false,
    displayMessage: ''
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleUnnamedInput = (e) => {
    const { value } = e.target
    this.setState({
      methodType: value,
      displayMessage: ''
    })
  }

  handleCheckbox = e => {
    const { showMessage } = this.state
    this.setState({
      showMessage: !showMessage
    })
  }

  handleSubmit = (e) => {
    const { preventRefresh, displayErrors, displayAlert } = this.props
    const { val, methodType, showMessage } = this.state
    if(preventRefresh && !val)
      e.preventDefault()
    if(showMessage && !val) {
      this.setState({
        displayMessage: 'Please enter input value'
      })
      return;
    }

    if(!val && displayAlert){
      alert('Please enter value')
      return
    }
  }

  render() {
    const { val, methodType, displayMessage, showMessage } = this.state
    const { preventRefresh, displayErrors } = this.props
    return(
      <form method={methodType} onSubmit={ (e) => this.handleSubmit(e) }>
      <div className="form-check-inline">
        <label className="form-check-label">
         <input type="radio" className="form-check-input" 
          value="GET" checked={methodType === 'GET'}
          onChange={ (e) => this.handleUnnamedInput(e)}
          />GET
        </label>
       </div>
       <div className="form-check-inline">
        <label className="form-check-label">
          <input type="radio" className="form-check-input" 
          value="POST" checked={methodType === 'POST'}
          onChange={ (e) => this.handleUnnamedInput(e)}
          />POST
        </label>
      </div>
      <div className="form-check-inline">
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" 
          value="true" checked={showMessage}
          onChange={ (e) => this.handleCheckbox(e)}
          />Dont Show alert. Display the error message
        </label>
      </div>
        <div className="form-group">
          <label htmlFor="val">Enter value:</label>
          <input type="text" className="form-control" placeholder="Enter value" name="val" value={val} onChange={ (e) => this.handleChange(e)} />
          {
            displayMessage && 
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <strong>Holy guacamole!</strong> You should check in on some of those fields above.
            </div>
          }
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary"> Submit </button>
        </div>
      </form>
    )
  }
}

export default Example1