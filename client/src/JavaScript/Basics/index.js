import React from 'react'
import Example1 from './example1'

class Basics extends React.Component {
  state = {
    serverError: false,
    message: ''
  }
  componentDidMount() {
    var url = new URL(window.location);
    var params = new URLSearchParams(url.search);
    const tags = params.get('val');
    if(params.has('val') && !tags){
      this.setState({
        serverError: true,
        message: "Please enter value in input"
      })
    }
  }
  render() {
    const { serverError, message } = this.state
    return (
      <div className="content-placeholder">
        <h2 className="main-title"> Basics </h2>
        <section className="content">
          <div className="what">
            <h4> What ? </h4>
            <p>
              JavaScript is a programming language that adds <b>interactivity</b> to your website.
        </p>

          </div>
          <div className="why">
            <h4>Why ? </h4>
            <p>
              JavaScript enhances the user experience.
        </p>
          </div>
          <div className="test">
            <h4> What is interactivity? </h4>
            <p> <strong> The ability of a computer to respond to a user's input/action.</strong></p>
            <div className="row">
              <div className="col-sm-8 pr-0">
                <div className="px-5 py-3 code-snippet">
                  <h5> Sending Form To The Server</h5>
                  <Example1
                    preventRefresh={false}
                    displayErrors={false}
                    displayAlert={false}
                  />
                </div>
              </div>
              <div className="col-sm-4 test-desc pt-4">
                <p className="mb-0">
                    Submit the form without entering any input. You can see that the page gets refreshed as soon as you submit the form.
                </p>
                {
                  serverError && 
                    <div>
                      <span className="error-msg">Error: {message}</span> - <span className="info-msg"> Error from Server</span>
                      <p className="mb-0"> Here the request is going to the server where the server is checking the input box value and sending the error message if you have not entered any value in the input</p>
                    </div>
                }
              </div>
            </div>
          </div>
          <div>
            <h5> What happens when the above form is submitted without input value? </h5>
            <div className="test-desc py-4">
              <ol className="mb-0">
                <li> First browser will send the request to the server with form data</li>
                <li> The Server tries to validate the input </li>
                <li> If there is no value in the input box it will send the error message</li>
              </ol>
            </div>
          </div>
          <div>
            <p className="mt-2">
              What is the problem with above approach?<br/>
              Lets say you have slow internet connection and you are trying to submit the form. Since the internet is slow browser will take some time to send the data to the server. If you have not entered any data and submit the form, you have to wait for the server to send the response. If it is once or twice you can wait for the response from the server.
            </p>
            <p className="mt-2">
                Imagine you are working in bank where you have to fill lot of input fields. Accidentally you missed filling one or two input fields and submitted the form.
                Now, you have to wait until you get the response from server.
            </p>
            <p className="mt-2">
                Wouldn't it be nice if we can validate the form before submitting it to the server. That way you are sure that you have filled all the values before sending to backend.
            </p>
          </div>
          <div>
            <h5> Now, Lets try the same example with JavaScript validation </h5>
            <div className="row">
              <div className="col-sm-8 pr-0">
                <div className="px-5 py-3 code-snippet">
                  <h5> Validating Form Before Sending It To The Server</h5>
                  <Example1
                    preventRefresh={true}
                    displayErrors={false}
                    displayAlert={true}
                  />
                </div>
              </div>
              <div className="col-sm-4 test-desc pt-4">
                <p className="mb-0">
                    Submit the form without entering any input. Now, You can observe that the page will not get refreshed and it will also tell you that we have missed entering input value. <br/>
                    Now thats what we call interactivity. You click on the button and it tells you that you have missed entering input value without sending it to server.
                </p>
              </div>
            </div>
            <div>
              <p>
                JavaScript lets you add interactivity with event listneres such as onclick, onchange, oninput, onkey up, etc.,
              </p>
              <h5> Some of the other examples of interactivity</h5>
              <ol>
                <li>Show or hide more information with the click of a button</li>

                <li>Change the color of a button when the mouse hovers over it</li>

                <li>Slide through a carousel of images on the homepage</li>

                <li>Zooming in or zooming out on an image</li>

                <li>Displaying a timer or count-down on a website</li>

                <li>Playing audio and video in a web page</li>

                <li>Displaying animations</li>

                <li>Using a drop-down hamburger menu</li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    )
  }

}

export default Basics