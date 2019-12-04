import React from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-github';
import * as EntityHelpers from '../../../Entities/htmltags';
import { cantReassign, objConst, arrConst, letScope, varScope, constScope } from "../snippets"

import CodeSnippet from '../../../utils/pre'

export const DataTypes = () => (
  <div>
    <h4> Data Types </h4>
    <p> In JavaScript there are two types of data types. </p>
    <ul>
      <li><strong>Primitive Data Types</strong> - string, number, undefined, boolean, etc </li>
      <li><strong> Object Data Types </strong> - Objects, Arrays, functions, null. Basically, except primitives all are objects. </li>.
    </ul>
  </div>
)

export const Info = () => (
  <section className="basic-info">
    <h4>Let us start writing JavaScript</h4>
    <p>
      In Universe everything is made up of building blocks. Like Universe is made up of Many Galaxies and Each Galaxy is made of millions or billions of stars.
            <br />
      The very best example you can take is human. A human is made up of head, hands, legs, eyes, which in turn are made up of many cells.
            <br />
      The same way JavaScript is also made up of many building blocks.
          </p>
    <h3> Basic Buliding Blocks of JavaScript</h3>
    <ul>
      <li> <strong> Variables </strong></li>
      <li>
        <strong>Data Types</strong> (String, Number, Boolean, undefined, etc.)
                <ul className="list-style-none">
          <li><i className="fa fa-level-up rotate-90 tree-icon-color" aria-hidden="true"></i> <a className="remove-decoration-on-hover ml-2" href="https://launchschool.com/books/javascript/read/basics" target="_blank">A Very Good Resource on Data Types</a></li>
        </ul>
      </li>
      <li className="mt-1">
        <strong>Operators</strong> (+ , -, *, /, %, =, ==, ==, >, &lt;, >>, &lt;&lt;,  etc.)
                <ul className="list-style-none">
          <li><i className="fa fa-level-up rotate-90 tree-icon-color" aria-hidden="true"></i> <a className="remove-decoration-on-hover ml-2" href="https://www.w3schools.com/js/js_operators.asp" target="_blank">Good Info On W3Schools</a></li>
          <li><i className="fa fa-level-up rotate-90 tree-icon-color" aria-hidden="true"></i> <a className="remove-decoration-on-hover ml-2" href="https://launchschool.com/books/javascript/read/basics#operations" target="_blank">A Very Good Resource on Operators</a></li>
        </ul>
      </li>
      <li className="mt-1">
        <strong> Conditionals( if, else if, else, switch) </strong>
      </li>
      <li className="mt-1">
        <strong> Loops( for, while, do while) </strong>
      </li>
      <li className="mt-1">
        <strong>Objects</strong>
        <ul className="list-style-none">
          <li><i className="fa fa-level-up rotate-90 tree-icon-color" aria-hidden="true"></i> <a className="remove-decoration-on-hover ml-2" href="https://launchschool.com/books/javascript/read/objects#whatareobjects" target="_blank">A Very Good Resource on Objects</a></li>
        </ul>
      </li>
      <li className="mt-1">
        <strong>Arrays</strong>
        <ul className="list-style-none">
          <li><i className="fa fa-level-up rotate-90 tree-icon-color" aria-hidden="true"></i> <a className="remove-decoration-on-hover ml-2" href="https://launchschool.com/books/javascript/read/arrays#whatisanarray" target="_blank">A Very Good Resource on Arrays</a></li>
        </ul>
      </li>
      <li className="mt-1">
        <strong>Functions</strong>
        <ul className="list-style-none">
          <li><i className="fa fa-level-up rotate-90 tree-icon-color" aria-hidden="true"></i> <a className="remove-decoration-on-hover ml-2" href="https://launchschool.com/books/javascript/read/functions#usingfunctions" target="_blank">A Very Good Resource on Functions</a></li>
        </ul>
      </li>
      <li className="mt-1">
        <strong>Events</strong> (onclick, onchange, onsubmit, oninput, onkeypress, onkeyup, etc.)
            </li>
    </ul>
  </section>
)

export const Variables = (props) => (
  <section className="mb-5">
    <h4> Variables </h4>
    <div className="snippets border-style-none">
      <h6> Creating Variables</h6>
      <div className="basic-var">
        <p>
          Variable means anything that can vary. JavaScript includes variables which hold the data value and it can be changed anytime.
        </p>
        <p>
          JavaScript uses reserved keyword <b>var</b> to declare a variable. A variable must have a unique name. You can assign a value to a variable using <b>equal to </b>(=) operator when you declare it or before using it.
        </p>
      </div>
      <div className="var-syntax">
        <div className="code-block code-bg">
          <strong> Syntax: </strong>
          <div>
            <EntityHelpers.Keywords keyword={"var"} name="<variable-name>" />
            <br />
            <EntityHelpers.Keywords keyword={"var"} name="<variable-name> = <value>" />
          </div>
        </div>
      </div>
      <div className="code-block code-bg mt-2">
        <strong>Snippet#1</strong>
        <div>
          <EntityHelpers.Keywords
            keyword={"var"}
            name="a" />
          <br />
          <EntityHelpers.SingleLineComment
            comment={'The value of "a" is undefined becuase no value has been assigned to the variable a. When there is no value assigned to a variable then it is declared but not defined.'} />
        </div>
      </div>
      <div className="code-block code-bg mt-2">
        <strong> Snippet#2 </strong>
        <div>
          <EntityHelpers.Keywords
            keyword={"var"}
            name="a = 10" />
          <EntityHelpers.SingleLineComment comment={'The value of a is 10. Here the variable has been declared and defined. Defined means some value has been assigned to the variable'} />
        </div>
      </div>
      <div className="mt-2">
        <h6> What is declaration? and What is definition?</h6>
        <p> A variable can be declared or defined. For a variable, declaration means just stating data type and giving it a name as in the <b>Snippet#1 </b>; while the definition means assigning a value to the variable as in <b>Snippet#2</b> </p>
        <p>
          A variable declaration is made up of data type and name. ex: <span className="code-block code-bg"><EntityHelpers.Keywords
            keyword={"var"}
            name="a" /></span>. Here the data type of variable "a" is <b>undefined</b> and its name is a.
              Basically when ever you create a variable without a value it will be changed to the value undefined. Like <span className="code-black code-bg"><EntityHelpers.Keywords keyword={"var"} name="a" /> </span> <i className="fa fa-long-arrow-right" aria-hidden="true"></i><span className="code-black code-bg"><EntityHelpers.Keywords keyword={"var"} name="a = undefined" /></span>
        </p>

        <h6> What are different keywords used to create variables? </h6>
        <ul>
          <li><span><strong>var</strong> - Can reassign/change the value. Can be redeclared.</span></li>
          <li><span><strong>const</strong> - Cannot reassign/change the value with in the block. Cannot be redeclared with in the block scope</span></li>
          <li><span><strong>let</strong> - Can reassign/change with in the block. Cannot be redeclared with in the block scope</span></li>
        </ul>
        <div className="row snippets">
          <div className="col-sm-6">
            <img className="w-100" src="https://miro.medium.com/max/1000/1*kZXDtoVrpI8Ynwjo2jtKSA.png" alt="Variables" />
          </div>
          <div className="col-sm-6">
            <img className="w-100" src="https://qphs.fs.quoracdn.net/main-qimg-44b6caf27337a5f2d63eee2a214696c3" alt="Memory" />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h5>Let us understand each keyword</h5>
        <h6> <strong> var </strong> - Can reassign/change the value. Can be redeclared. </h6>
        <div className="code-block code-bg">
          <div>
            <strong> Snippet#1 </strong> - Declraration & Initialization
              <div>
              <EntityHelpers.SingleLineComment comment={'//Declaring a variable'} />
            </div>
            <div>
              <EntityHelpers.Keywords keyword={"var"} name="a" />;
                <EntityHelpers.SingleLineComment comment={' //The value of "a" is undefined'} />
            </div>
          </div>
          <div className="mt-2">
            <div>
              <EntityHelpers.SingleLineComment comment={'//initializing a declared variable'} />
            </div>
            <div>
              <EntityHelpers.Initialize name="a = " value="10" />;
                <EntityHelpers.SingleLineComment comment={' //Here the value of "a" has been reassigned/changed from '} />
              <EntityHelpers.Misc type="undefined" value="undefined " />
              <EntityHelpers.Misc type="to" value="to " />
              <EntityHelpers.Misc type="number" value="10" />

            </div>
          </div>
          <hr />
          <div className="mt-2">
            <strong> Snippet#2 - Definition </strong> = Declaration + initialization
            <div>
              <EntityHelpers.SingleLineComment comment={'//Defining a variable'} />
            </div>
            <div>
              <EntityHelpers.Keywords keyword={"var"} name="a" />
              <EntityHelpers.Initialize name=" = " value="10" />;
            </div>
            <div>
              <EntityHelpers.Initialize name="a = " value="10" />;
              <EntityHelpers.SingleLineComment comment={'//reassigning the value'} />
            </div>
          </div>
          <hr />
          <div>
            <strong> Snippet#</strong>  Redeclartion
            <div>
              <EntityHelpers.SingleLineComment comment={'//Redeclaring a variable'} />
            </div>
            <div>
              <EntityHelpers.Keywords keyword={"var"} name="a" />;
            </div>
            <div>
              <EntityHelpers.Keywords keyword={"var"} name="a" />;
              <EntityHelpers.SingleLineComment comment={'//Valid - Here the variable a is redeclared again with keyword "var". JavaScript allows redeclarion of variables for keyword "var".'} />
            </div>
            <hr />
            <div>
              <div>
                <EntityHelpers.Keywords keyword={"var"} name="name" />
                <EntityHelpers.Initialize name=" = " value="'Hello'" />;
              </div>
              <div>
                <EntityHelpers.Keywords keyword={"var"} name="name" />;
                <EntityHelpers.SingleLineComment comment={'//Redeclaring a variable'} />
              </div>
              <div>
                <EntityHelpers.SingleLineComment comment={'/* Now, what do you think the value of "name" is?? */'} />
              </div>
              <div>
                <span
                  className="answer-link pointer-cursor"
                  onClick={() => props.toggleAnswer(props.views.view1, 'view1')}
                >View Answer </span>
                <br />
                {
                  props.views.view1 &&
                  <div>
                    <span className="answer-desc">The value of "name" will be "hello". Why??</span>
                    <span> In JavaScript redeclaring a variable does not change the previous value of the variable. In other programming languages redeclaring a variable may thorow error or will assign undefine value to it.</span>
                  </div>
                }
              </div>
              <div>
                <hr />
                <EntityHelpers.SingleLineComment comment={"//Variables cannot be used before "} />
                <strong>declaring</strong> <EntityHelpers.SingleLineComment comment={"them. Meaning..."} />
                <p className="mb-0">
                  console.log(z);
                </p>
                If you copy this code and execute in browser it throws error saying z has not been declared.
                <br />
                <p className="mt-2">
                  <EntityHelpers.Keywords keyword={"var"} name="z" />;
                  <br />
                  console.log(z);
                  <EntityHelpers.SingleLineComment comment={'// this is valid as z has been declared.'} />
                </p>
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
        <h6 className="mt-2"> Let us solve some simple expressions...</h6>
        <div className="code-block code-bg">
          <div className="row pb-4">
            <div className='col-sm-3'>
              <strong>Simple Exercise#1: </strong>
              <div>
                <EntityHelpers.Keywords keyword={"var"} name="height" />;
              <p className="mb-0 mt-2"> Is the above variable declared or defined? </p>
                <div>
                  <span
                    className="answer-link pointer-cursor"
                    onClick={() => props.toggleAnswer(props.views.view2, 'view2')}
                  >View Answer </span>
                  {
                    props.views.view2 &&
                    <div>
                      <span className="q-a">Declared</span>
                  </div>
                  }
                </div>
              </div>
            </div>
            <div className='col-sm-3 border-left'>
              <strong>Simple Exercise#2: </strong>
              <div>
                <EntityHelpers.Keywords keyword={"var"} name="width" />
              <EntityHelpers.Initialize name=" = " value="100" />;
              <p className="mb-0 mt-2"> Is the above variable declared or defined? </p>
                <div>
                  <span
                    className="answer-link pointer-cursor"
                    onClick={() => props.toggleAnswer(props.views.view3, 'view3')}
                  >View Answer </span>
                  {
                    props.views.view3 &&
                    <div>
                      <span className="q-a">Defined</span>
                  </div>
                  }
                </div>
              </div>
            </div>
            <div className='col-sm-3 border-left'>
              <strong>Simple Exercise#3: </strong>
              <div>
                <EntityHelpers.Keywords keyword={"var"} name="age" />;
                <p className="mb-0 mt-2"> What is the value of <EntityHelpers.Misc type="undefined" value="age " />? </p>
                <div>
                  <span
                    className="answer-link pointer-cursor"
                    onClick={() => props.toggleAnswer(props.views.view4, 'view4')}
                  >View Answer </span>
                  {
                    props.views.view4 &&
                    <div>
                      <EntityHelpers.Misc type="undefined" value="undefined " />
                    </div>
                  }
                </div>
              </div>
            </div>
            <div className='col-sm-3 border-left'>
              <strong>Simple Exercise#4: </strong>
              <div>
                <EntityHelpers.Keywords keyword={"var"} name="age" />;
            </div>
              <div>
                <span className="c-console">console</span>.<span className="c-log">log</span>(age);
              <p className="mb-0 mt-2"> What is the output of above snippet? </p>
                <span className="answer-link pointer-cursor"
                  onClick={() => props.toggleAnswer(props.views.view5, 'view5')}>View Answer</span>
                {
                  props.views.view5 &&
                  <div>
                    <EntityHelpers.Misc type="undefined" value="undefined " />
                  </div>
                }
              </div>
            </div>
          </div>
          <hr className="border-top" />
          <div className="row pb-4">
            <div className="col-sm-3">
              <strong>Simple Exercise#5: </strong>
              <div>
                <EntityHelpers.Keywords keyword={"var"} name="a" />;
              </div>
              <div>
                <EntityHelpers.Keywords keyword={"var"} name="a" />
                <EntityHelpers.Initialize name=" = " value="10" />;
              </div>
              <div>
                <div>
                  <p className="mb-0 mt-2"> What is the value of "a" ? </p>
                  <span className="answer-link pointer-cursor"
                    onClick={() => props.toggleAnswer(props.views.view6, 'view6')}>View Answer</span>
                  {
                    props.views.view6 &&
                    <div>
                    <span className="q-a">10</span>
                    </div>
                  }
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <strong>Simple Exercise#6: </strong>
              <div>
                <EntityHelpers.Keywords keyword={"var"} name="c" />
                <EntityHelpers.Initialize name=" = " value="10" />;
              </div>
              <div>
                <EntityHelpers.Keywords keyword={"var"} name="c" />
                <EntityHelpers.Initialize name=" = " value="'javascript'" />;
              </div>
              <div>
                <div>
                  <p className="mb-0 mt-2"> What is the value of "c" ? </p>
                  <span className="answer-link pointer-cursor"
                    onClick={() => props.toggleAnswer(props.views.view7, 'view7')}>View Answer</span>
                  {
                    props.views.view7 &&
                    <div>
                      <span className="q-a">javascript</span>
                    </div>
                  }
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <strong>Simple Exercise#7: </strong>
              <div>
                <EntityHelpers.Keywords keyword={"var"} name="x" />
                <EntityHelpers.Initialize name=" = " value="10" />;
              </div>
              <div>
                <EntityHelpers.Keywords keyword={"var"} name="y" />
                <EntityHelpers.Initialize name=" = " value="'javascript'" />;
              </div>
              <div>
                <div>
                  <span className="c-console">console</span>.<span className="c-log">log</span>(x);
                  <p className="mb-0 mt-2"> What is the output of the above snippet? </p>
                  <span className="answer-link pointer-cursor"
                    onClick={() => props.toggleAnswer(props.views.view8, 'view8')}>View Answer</span>
                  {
                    props.views.view8 &&
                    <div>
                    <span className="q-a">10</span>
                    </div>
                  }
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <strong>Simple Exercise#8: </strong>
              <div>
                Create a variable with name 'gender' and assign a value "Female" to it?
              </div>
              <div>
                <div>
                  <span className="answer-link pointer-cursor"
                    onClick={() => props.toggleAnswer(props.views.view9, 'view9')}>View Answer</span>
                  {
                    props.views.view9 &&
                    <div>
                      <EntityHelpers.Keywords keyword={"var"} name="gender" /> = "Female";
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export const Constants = (props) => (
  <section className="mb-5">
    <h6> <strong>Constants</strong> - Cannot reassign/change the value with in the block. Cannot be redeclared with in the block scope </h6>
    <div className="snippets border-style-none">
      <h6> Creating Constants</h6>
      <p>
        In JavaScript, <strong>constants</strong> are declared with <strong>const</strong> keyword and assigned at the time of the declaration. A constant can be global or local to a function where it is declared. Constants are <strong>read-only</strong>, therefore you can not modify them later on
      </p>
      <h6> Lets take it step by step</h6>
      <div className="const-info">
        <div className="code-block code-bg">
          <div>
            <div>
              <EntityHelpers.SingleLineComment comment={"// creating const"} />
            </div>
            <div>
              <EntityHelpers.Keywords keyword={"const"} name={""} />
              <EntityHelpers.Initialize name={"PI = "} value="3.14" />;
                <EntityHelpers.SingleLineComment comment={"// as you can see const can only be defined but cannot be declared alone. We must assign the value at the time of the declaration/creation."} />
            </div>
          </div>
          <hr />
          <div>
            <div>
              <EntityHelpers.SingleLineComment comment={"// another exmaple"} />
            </div>
            <div>
              <EntityHelpers.Keywords keyword={"const"} name={""} />
              <EntityHelpers.Initialize name={"name = "} value="'Hello'" />;
              </div>
          </div>
          <hr />
          <div>
            <p> <strong> Constants </strong> have to be initialized at the time of the declaration.</p>
            <EntityHelpers.Keywords keyword={"const"} name={"name"} />;
                <EntityHelpers.SingleLineComment comment={"//INVALID. We simply cannot do this because const has to be initialized at the time of declaration.It will throw error similar to this"} />
            <p className="error-msg">VM13267:1 Uncaught SyntaxError: Missing initializer in const declaration</p>
          </div>
          <div>
            <EntityHelpers.Keywords keyword={"const"} name={""} />
            <EntityHelpers.Initialize name={"name = "} value="'I am Constant and I cant be re-assigned'" />;
                <EntityHelpers.SingleLineComment comment={"//VALID. The const name has been declared and initialized."} />
          </div>
          <hr />
          <p> <strong> Constants </strong>are read-only. Meaning once created you cannot re-declare or reassign the value to it with in the scope. Lets see what it means.</p>
          <div>
            <div>
              <EntityHelpers.Keywords keyword={"const"} name={""} />
              <EntityHelpers.Initialize name={"firstname = "} value="'Manasa'" />;
                </div>
            <div>
              <EntityHelpers.Initialize name={"firstname = "} value="'Rangaswamy'" />;
                </div>
            <p className="mt-2">
              Execute above snippets and see.
                  <br />
              You will get error similar to this:
                </p>
            <p>
              <span className="error-msg">
                VM204:1 Uncaught TypeError: Assignment to constant variable.<br />
                &nbsp;&nbsp;at :1:11
                  </span>
            </p>
          </div>
          <hr />
          <div>
            <strong> #Snippet </strong> - Cannot be re-assigned with in the scope.
              <div>
              <AceEditor
                mode="js"
                theme="github"
                className="ace-editor"
                value={cantReassign}
                readOnly={true}
                editorProps={{ $blockScrolling: true }}
              />
            </div>
          </div>
          <hr />
          <div>
            <div>
              <EntityHelpers.SingleLineComment comment={"//Constants cannot be used before "} />
              <strong>initializing </strong> <EntityHelpers.SingleLineComment comment={"them. Meaning..."} />
            </div>
            <div>
              console.log(firstname);
                <EntityHelpers.SingleLineComment comment={"//INVALID as we are trying to access firstname before initialzing."} />
              <br />
              <EntityHelpers.Keywords keyword={"const"} name={""} />
              <EntityHelpers.Initialize name={"firstname = "} value="'Manasa'" />;
              </div>
            <hr />
            <div>
              <EntityHelpers.Keywords keyword={"const"} name={""} />
              <EntityHelpers.Initialize name={"firstname = "} value="'Manasa'" />;
                  <br />
              console.log(firstname);
                  <EntityHelpers.SingleLineComment comment={"//VALID as we are trying to access firstname before initialzing."} />
            </div>
          </div>
        </div>
        <p className="mt-3">
          Constants cannot be re-declared or re-assigned once it is created. This is actually misleading.
        </p>
        <h6> What ??? What is it again????</h6>
        <p>
          Lets take constant objects & arrays
        </p>
        <div className="code-block code-bg">
          <strong> Objects </strong>
          <div>
            <AceEditor
              mode="js"
              theme="github"
              className="ace-editor"
              value={objConst}
              readOnly={true}
              editorProps={{ $blockScrolling: true }}
            />
          </div>
          <strong> Arrays </strong>
          <div>
            <AceEditor
              mode="js"
              theme="github"
              className="ace-editor"
              value={arrConst}
              readOnly={true}
              editorProps={{ $blockScrolling: true }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export const ConstExercies = (props) => (
  <div>
    <h6> Let us do some simple exercises on const</h6>
    <div className="code-block code-bg">
      <div className="row">
        <div className="col-sm-3">
          <p>
            <strong>Simple Exercise#1</strong>
          </p>
          console.log(world);<br />
          <EntityHelpers.Keywords keyword={"const"} name={"world"} />
          <EntityHelpers.Initialize name={" = "} value={"'Hello'"} />
          <p className="mt-2">
            What is the output?
        </p>
          <div>
            <span className="answer-link pointer-cursor"
              onClick={() => props.toggleAnswer(props.views.view10, 'view10')}>View Answer</span>
            {
              props.views.view10 &&
              <div>
              <span className="q-a">Syntax error as we are trying to use const variable before initializing it.</span>
            </div>
            }
          </div>
        </div>
        <div className="col-sm-3 border-left">
          <p>
            <strong>Simple Exercise#2</strong>
          </p>
          <EntityHelpers.Keywords keyword={"const"} name={"world"} />
          <EntityHelpers.Initialize name={" = "} value={"'Hello'"} /><br />
          <p className="mt-2">
            What is the output?
        </p>
          <div>
            <span className="answer-link pointer-cursor"
              onClick={() => props.toggleAnswer(props.views.view11, 'view11')}>View Answer</span>
            {
              props.views.view11 &&
              <div>
              <span className="q-a">Nothing as we are not printing anything.</span>
            </div>
            }
          </div>
        </div>
        <div className="col-sm-3 border-left">
        <p>
            <strong>Simple Exercise#3</strong>
          </p>
          <EntityHelpers.Keywords keyword={"const"} name={"world"} />;<br />
          <EntityHelpers.Print value={"world"} />
          <p className="mt-2">
            What is the output?
        </p>
          <div>
            <span className="answer-link pointer-cursor"
              onClick={() => props.toggleAnswer(props.views.view12, 'view12')}>View Answer</span>
            {
              props.views.view12 &&
              <div>
                <EntityHelpers.Ans ans={"Syntax error as we are not initializing const variable."} />
            </div>
            }
          </div>
        </div>
        <div className="col-sm-3 border-left">
            <strong> Simpel Exercise#4</strong>
            <div>
              <EntityHelpers.Keywords keyword={"const"} name={"world"} />
              <EntityHelpers.Initialize name={" = "} value={"'Big'"} />;
            </div>
            <div>
              <EntityHelpers.funcDefinition name="hello" params={[]} /> {'{'}
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;<EntityHelpers.Keywords keyword={"const"} name={"world"} />
              <EntityHelpers.Initialize name={" = "} value={"'Dream'"} />;
              <br/>
              }
            </div>
            <div>
              <span className="c-console">console</span>.<span className="c-log">log</span>(world);
              <p className="mt-2">
                What is the output of the above snippet?
              </p>
            </div>
            <div>
              <span className="answer-link pointer-cursor"
                onClick={() => props.toggleAnswer(props.views.view13, 'view13')}>View Answer</span>
              {
                props.views.view13 &&
                <div>
                  <span className="q-a">Big</span>
              </div>
              }
            </div>
        </div>
      </div>
      <hr className="border-top" />
      <div className="row">
        <div className="col-sm-3">
        <strong> Simpel Exercise#5</strong>
            <div>
              <EntityHelpers.Keywords keyword={"const"} name={"world"} />
              <EntityHelpers.Initialize name={" = "} value={"'Big'"} />;
            </div>
            <div>
              <EntityHelpers.funcDefinition name="hello" params={[]} /> {'{'}
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;<EntityHelpers.Keywords keyword={"const"} name={"world"} />
              <EntityHelpers.Initialize name={" = "} value={"'Dream'"} />;
              <br/>
              }
            </div>
            <div>
              {/* <EntityHelpers.callFun name="" */}
              <EntityHelpers.callFun name="hello" params={[]} />;<br/>
              <span className="c-console">console</span>.<span className="c-log">log</span>(world);
              <p className="mt-2">
                What is the output of the above snippet?
              </p>
            </div>
            <div>
              <span className="answer-link pointer-cursor"
                onClick={() => props.toggleAnswer(props.views.view14, 'view14')}>View Answer</span>
              {
                props.views.view14 &&
                <div>
                  <span className="q-a">Big</span>
              </div>
              }
            </div>
        </div>
        <div className="col-sm-3 border-left">
        <strong> Simpel Exercise#6</strong>
            <div>
              <EntityHelpers.Keywords keyword={"const"} name={"world"} />
              <EntityHelpers.Initialize name={" = "} value={"'Test Me'"} />;
            </div>
            <div>
              <EntityHelpers.funcDefinition name="hello" params={[]} /> {'{'}
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;<EntityHelpers.Print value={'"Hola"'} />;<br/>
              &nbsp;&nbsp;&nbsp;<EntityHelpers.Print value={"world"} />;<br/>
              &nbsp;&nbsp;&nbsp;<EntityHelpers.Keywords keyword={"const"} name={"world"} />
              <EntityHelpers.Initialize name={" = "} value={"'Dream'"} />;<br/>
              &nbsp;&nbsp;&nbsp;<EntityHelpers.Print value={"world"} />;
              <br/>
              }
            </div>
            <div>
              {/* <EntityHelpers.callFun name="" */}
              <EntityHelpers.callFun name="hello" params={[]} />;<br/>
              <span className="c-console">console</span>.<span className="c-log">log</span>(world);
              <p className="mt-2">
                What is the output of the above snippet?
              </p>
            </div>
            <div>
              <span className="answer-link pointer-cursor"
                onClick={() => props.toggleAnswer(props.views.view15, 'view15')}>View Answer</span>
              {
                props.views.view15 &&
                <div>   
                  <span className="q-a">Uncaught ReferenceError: Cannot access 'world' before initialization</span>
              </div>
              }
            </div>
        </div>
        <div className="col-sm-3 border-left">
              <strong> Simpel Exercise#7</strong>
            <div>
              <EntityHelpers.Keywords keyword={"var"} name={"world"} />
              <EntityHelpers.Initialize name={" = "} value={"'Big'"} />;
            </div>
            <div>
            <EntityHelpers.Keywords keyword={"const"} name={"world"} />
              <EntityHelpers.Initialize name={" = "} value={"'testing'"} />;
            </div>
            <div>
              <span className="c-console">console</span>.<span className="c-log">log</span>(world);
              <p className="mt-2">
                What is the output of the above snippet?
              </p>
            </div>
            <div>
              <span className="answer-link pointer-cursor"
                onClick={() => props.toggleAnswer(props.views.view16, 'view16')}>View Answer</span>
              {
                props.views.view16 &&
                <div>
                  <span className="q-a">Error</span>
              </div>
              }
            </div>
        </div>
        <div className="col-sm-3 border-left">
          <strong> Simpel Exercise#8</strong>
            <div>
              <EntityHelpers.Keywords keyword={"var"} name={"world"} />
              <EntityHelpers.Initialize name={" = "} value={"'Big'"} />;
            </div>
            <div>
              <span className="answer-link pointer-cursor"
                onClick={() => props.toggleAnswer(props.views.view17, 'view17')}>View Answer</span>
              {
                props.views.view17 &&
                <div>
                  <span className="q-a">Nothing as we are not printing anything.</span>
              </div>
              }
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const Let = (props) => (
  <section className="mb-5">
    <h6 className="mt-2"> <strong>let</strong> - Can reassign/change with in the block. Cannot be redeclared with in the block scope </h6>
    <p>
    let allows you to declare variables that are limited to a scope of a block statement, or expression on which it is used, unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope
    </p>
    <div className="snippets border-style-none">
      <div className="code-bg">
        //declaring a let variable
        <div>
          <EntityHelpers.Keywords keyword={'let'} name="m" />;
          <EntityHelpers.SingleLineComment comment={'//let can be declared without value similar to var'} />
        </div>
        <div>
          <EntityHelpers.Keywords keyword={'let'} name="n" />
          <EntityHelpers.Initialize name=" = " value={'14'} />;
          <EntityHelpers.SingleLineComment comment={'//initialization'} />
        </div>
        <hr/>
        <div>
          //Unlike const you can re-assign or change the value of let
          <div>
            <EntityHelpers.Keywords keyword={'let'} name="remainder" />;
            <EntityHelpers.Initialize name={" = "} value="'In JavaScript everything is object'" />;
          </div>
          <div>
            <EntityHelpers.Initialize name={" remainder = "} value="'let can change its value'" />;
          </div>
        </div>
        <hr/>
        <div>
          //Cannot be redeclared with in the block scope
          <div>
            <EntityHelpers.Keywords keyword={'let'} name="tip" />
            <EntityHelpers.Initialize name={" = "} value="'In JavaScript null is an object'" />;
          </div>
          <div>
            <EntityHelpers.Keywords keyword={'let'} name="tip" />
            <EntityHelpers.Initialize name={" = "} value="'We cannot redeclare let with in the scope'" />;
            <EntityHelpers.SingleLineComment comment={"// throws error"} />
          </div>
        </div>
        <hr/>
        <div>
            //let cannot be used before declaring them. Meaning...
            <div>
              <EntityHelpers.Print value={"x"} />;<br/>
              <EntityHelpers.Keywords keyword={'let'} name="x" />;
              <EntityHelpers.SingleLineComment comment={'// this will throw error as we are trying to use x before declaring it.'} />
            </div>
        </div>
        <hr/>
        <div>
          <div className="row">
            <div className="col-sm-4">
              <span><span class='token comment'>//let scope is limit to block. Lets see what it is.</span></span>
              <CodeSnippet classNames="line-numbers" snippet={varScope} />
              <div>
                <span className="answer-link pointer-cursor"
                  onClick={() => props.toggleAnswer(props.views.view18, 'view18')}>View Answer</span>
                {
                  props.views.view18 &&
                  <div>
                    <span className="q-a">hello</span>
                </div>
                }
              </div>
            </div>
            <div className="col-sm-4">
            <span><span class='token comment ml-4'>//Const.</span></span>
              <CodeSnippet classNames="line-numbers" snippet={constScope} />
              <div className="ml-4">
                <span className="answer-link pointer-cursor"
                  onClick={() => props.toggleAnswer(props.views.view19, 'view19')}>View Answer</span>
                {
                  props.views.view19 &&
                  <div>
                    <span className="q-e">error</span>
                </div>
                }
              </div>
            </div>
            <div className="col-sm-4">
            <span><span class='token comment ml-4'>//let.</span></span>
            <CodeSnippet classNames="line-numbers" snippet={letScope} />
              <div className="ml-4">
                <span className="answer-link pointer-cursor"
                  onClick={() => props.toggleAnswer(props.views.view20, 'view20')}>View Answer</span>
                {
                  props.views.view20 &&
                  <div>
                    <span className="q-a">10</span>
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

)
export const MemoryAlloc = () => (
  <div>
    
  </div>
)