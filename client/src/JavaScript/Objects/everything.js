import React from 'react'
import createMarkup from '../../utils/markup'

function Everything() {
  return(
    <div>
    <p>
        In Javascript everything is object. Ok we will see what it means.
      </p>
      <div className="code-bg">
        <pre>
          {/* <code dangerouslySetInnerHTML={createMarkup(Snippets.example1)} /> */}
        </pre>
      </div>
      </div>
  )
}

export default Everything