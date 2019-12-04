import React from 'react'

const Similarities = () => (
  <div>
    <h6 className="mt-4">Similarities & Differences </h6>
    <div className="table-responsive">
      <table className="table table-bordered">
          <thead>
            <tr>
              <th> var </th>
              <th> const </th>
              <th> let </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Can be redecalred with in the scope</td>
              <td>Cannot be redeclared with in the scope</td>
              <td>Cannot be redeclared with in the scope</td>
            </tr>
            <tr>
              <td>Can be reassigned</td>
              <td>Cannot be reassigned with in the scope</td>
              <td>Similar to var. Can be reassigned</td>
            </tr>
            <tr>
              <td>No need to initialize at the time of declaration</td>
              <td>Have to initialize at the time of the declaration. otherwise will throw error</td>
              <td>Same as var. No need to initialize at the time of declaration</td>
            </tr>
            <tr>
              <td>Default value will be undefined if not defined or initialized</td>
              <td>Have to intialize at the time of declaration</td>
              <td>Default value will be undefined if not defined or initialized</td>
            </tr>
            <tr>
              <td>Hoisted</td>
              <td>Not Hoisted</td>
              <td>Not Hoisted</td>
            </tr>
            <tr>
              <td>Cannot be used before declaring</td>
              <td>Cannot be used before initializing</td>
              <td>Cannot be used before declaring</td>
            </tr>
            <tr>
              <td>Can change value</td>
              <td>Cannot change value. It is constant through out the parent scope</td>
              <td>Can change value</td>
            </tr>
          </tbody>
      </table>
    </div>
  </div>
)

export default Similarities