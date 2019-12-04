import React from 'react'
import createMarkup from './markup'
export const CodeSnippet = (props) => (
  <pre className={props.classNames}>
    <code dangerouslySetInnerHTML={
      createMarkup(props.snippet)
    }>
    </code>
  </pre>
)

export default CodeSnippet