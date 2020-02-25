import React from 'react'

function Create({views, toggleAnser}){

  return(
    <div>
      <h4> Let us create a react application from - without create-react-app</h4>
      <div className="code-snippet p-4">
        <div className="row">
          <div className="col-sm-6">
          <ul className="list-style-none">
            <li>$> mkdir reactproject</li>
            <li>$> cd reactproject</li>
            <li>$> yarn init</li>
            <li>$> yarn add react react-dom</li>
            <li>$> yarn add webpack webpack-cli webpack-dev-server --dev</li>
            <li>$> yarn add babel babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin http-server --dev</li>
          </ul>
          </div>
          <div className="col-sm-6">
                   
            <div>
              <img src="https://i.imgur.com/3ojLrcl.png" alt="project structure" className="w-50"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create