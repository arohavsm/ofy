import React from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import snippets from './snippets'

SyntaxHighlighter.registerLanguage('jsx', jsx)

function Intro({views, toggleAnswer}){
  return(
    <div>
    <h4> What is React? </h4>
      <div className="ify-info p-4">
        <p>
            React is a <strong> JavaScript </strong> libary created by Facebook
        </p>
        <p>
            React is a <strong> User Interface </strong>(UI) library
        </p>  
        <p>
          React is a tool for building <strong> UI Components</strong>
        </p>
        <p>
          ReactJS will let you create <strong>Single Page Application's</strong> on the fly
        </p>
      </div>
      <div>
        <h4> From React Documentation </h4>
        <p>
        React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
        </p>
        <img src="https://i.imgur.com/PGfP89T.png" alt="what is react?" className="w-100"/>
      </div>
      <div>
        <h4> How does React Work ? </h4>
        <p>
          React works by taking over an HTML div and injecting JavaScript into it. React will inject all of the awesome cool JavaScript into this section of our site.
        </p>
      </div>
      <div>
        <h4> Building Blocks of ReactJS</h4>
        <div className="ify-info p-4">
          <p> <strong> Main Building Blocks </strong></p>
          <ul>
            <li> 
              <strong>Components </strong>
              <p>
                Components are like functions that return HTML elements.
              </p>
              <p>
              Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and returns HTML via a render function.
              </p>
              <p>
              Components come in two types, Class components and Function components
              </p>
            </li>
            <li>
              <strong>JSX</strong>
              <p>
              Allows us to write HTML like syntax which gets
transformed to lightweight JavaScript objects.
              </p>
            </li>
            <li>
              <strong>Virtual DOM</strong>
              <p>
              A JavaScript representation of the actual DOM.
              </p>
            </li>
          </ul>
          <p>
            <strong>
              Other Building blocks
            </strong>
          </p>
          <ul>
          <li>
            <strong>render</strong>
            <p>
            Describes what the UI will look like for
the particular component.
            </p>
          </li>
            <li> 
              <strong>React DOM</strong>
              
            </li>
            <li> <strong>ReactDOM.render</strong>
            <p>
              Renders a React component to a DOM node
              </p>
            </li>
            <li>
              <strong>state</strong>
              <p>
              The internal data store (object) of a component
              </p>
            </li>
            <li><strong>constructor(this.state)</strong>
            <p>
            The way in which you establish
the initial state of a component.
            </p>
            </li>
            <li><strong>setState</strong>
            <p>
            A helper method used for updating the state of a
component and re-rendering the UI
            </p>
            </li>
            <li>
              <strong>Props</strong>
              <p>
            The data which is passed to the child component
from the parent component.
            </p>
            </li>
            <li><strong>propTypes</strong>
            <p>
            Allows you to control the presence, or types of
certain props passed to the child component.
            </p>
            </li>
            <li><strong>defaultProps</strong>
            <p>
            Allows you to set default props for your component.
            </p>
            </li>
            <li><strong>Component Life Cycles</strong>
            <ul>
              <li>
                <strong>componentDidMount</strong>
                <p>
                  Fired after the component mounted. Fired only once per the component life cycle.
                </p>
              </li>
              <li>
                <strong>componentWillUnmount </strong>
                <p>
                Fired before the component will unmount 
                </p>
              </li>
              <li>
              <strong>getDerivedStateFromProps</strong>
              <p>
              Fired when the component mounts and
whenever the props change. Used to update the state of a
component when its props change
              </p>
              </li>
            </ul>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h4 className="mt-2"> Let us see it in syntax</h4>
        <div>
            <SyntaxHighlighter language="javascript" style={prism}>
              {snippets.classSyntax}
            </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}

export default Intro