import React from 'react'
import IFrame from 'react-iframe'
import createMarkup from '../../utils/markup'
import * as Snippets from "./snippets"
import CodeSnippet from '../../utils/pre'

function Intro() {
  return (
    <div>
      <h2 className="main-title"> Objects </h2>
      <div>
        <p>
          A JavaScript object is a collection of properties where each property has a name and a value. An object, is a reference data type. Variables that are assigned a reference value are given a reference or a pointer to that value. That reference or pointer points to the location in memory where the object is stored. The variables don’t actually store the value.
        </p>
        <p>
          Objects are used to define properties of an entity.Lets take an example
        </p>
        <div>
          <div className="row">
            <div className="col-sm-6">
                <img className="w-100" src="https://media.istockphoto.com/vectors/part-of-body-vocabulary-in-illustration-vector-id680093944" />
            </div>
            <div className="col-sm-6">
                <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThtWw2fhoXTDXzb67BNlCayp97MRMcqKKltDC2jnBrrRkoiGRz" />
            </div>
          </div>
        </div>
        <p>
          <strong>Loosely speaking, objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs</strong>
        </p>
      </div>
      <div>
        <h5> Creating Objects</h5>
        <div>
          <p>
            There are many ways to create objects in javascript.
          </p>
          <ol>
            <li>Using Object literal
              <pre className="lw line-numbers">
                <code dangerouslySetInnerHTML={
                  createMarkup(Snippets.objLiteral)
                }>

                </code>
              </pre>
            </li>
            <li>
              Using Object constructor
              <div>
                <CodeSnippet classNames="lw line-numbers" snippet={Snippets.objConstrucotr} />
              </div>
            </li>
            <li>
              Using Object.create
              <CodeSnippet classNames="lw line-numbers" snippet={Snippets.objCreate} />
            </li>
            <li>
              Using a function constructor - It is also called as constructor function
              <CodeSnippet classNames="lw line-numbers" snippet={Snippets.fnContstructor} />
            </li>
          </ol>
        </div>
        <div>
          <p> Since we have learned how to create objects. Lets add some properties to the empty object</p>
          <div>
            <p>
              <span className="token comment">//Create an object which has state & city</span>
            </p>
            <div>
              <CodeSnippet classNames="lw line-numbers" snippet={Snippets.objInitialize} />
              <p>
                Lets revisit one of the definition of Object.<br/>
                Objects in JavaScript may be defined as an <strong>unordered collection</strong> of <strong>related data</strong>
              </p>
              <h6> Unordered collection </h6>
              <p>
                As you can see in the <strong>ex:1</strong> , the state & city are not ordered in anyway. You can rearrange the place of state to line number 3 and city to line number 2. That is why objects are defined as unordered collection.
              </p>
              <h6> Related data </h6>
              <p>
                Now, if you observe the snippet, you can see that we are trying to represant data of city's that belongs to states.
              </p>
            </div>
            <div>
              <p>
              <i class="fa fa-hand-o-right" aria-hidden="true"></i> Since you understood objects, can you try to write down the object for the images in the above sections and for the <strong> WORLD </strong>.
              </p>
            </div>
          </div>
          <div>
            <p>
              Objects can be initialized with empty object data or with some initialization data. Once the object created with or with out data you can always add the data even after the initialization. Properties of an object can be created event after creating the objects. You can add the data to initialized object either using dot-nation or using brackets
            </p>
            <div>
                <CodeSnippet classNames="lw line-numbers" snippet={Snippets.access1} />
            </div>
          </div>
        </div>
      </div>
      {/* <pre>
        <code dangerouslySetInnerHTML={
          createMarkup(
            `let school = {
          name : <span className="token undefined">"Vivekananda School</span>",
          location : "Delhi",
          established : "1971"
        }`
          )
        }>
        </code>
      </pre> */}
      {/* <IFrame 
        url="https://codesandbox.io/embed/flamboyant-fire-6xfsp?fontsize=14&hidenavigation=0&theme=dark&runonclick=1"
        id="intro-1" dispaly="initial" position="relative"
        className="code-sandbox"
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        /> */}
    </div>
  )
}

export default Intro