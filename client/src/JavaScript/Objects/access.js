
import React from 'react'
import createMarkup from '../../utils/markup'
import * as Snippets from "./snippets"
import CodeSnippet from '../../utils/pre'
function Access() {
  return (
    <div>
      <h4> Accessing Objects</h4>
      <div>
        <p> Accessing object data is very easy in JavaScript. It is same as setting the data except we use assignment operator to set the data. While accessing the data we dont need to use assignment operator.
        </p>
      </div>
      <ol>
        <li> Using dot notation </li>
        <li> Using bracket notation</li>
      </ol>
      <div>
        <CodeSnippet classNames="lw line-numbers" snippet={Snippets.access2}/>
      </div>
    </div>
  )
}

export default Access