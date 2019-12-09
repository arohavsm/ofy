
import React from 'react'
import createMarkup from '../../utils/markup'
import * as Snippets from "./snippets"
import * as Quiz from './quiz'
import CodeSnippet from '../../utils/pre'
import JSONPrettify from 'react-json-pretty';
var JSONPrettyMon = require('react-json-pretty/dist/monikai');
function Access({views, toggleAnswer}) {
  return (
    <div>
      <h4> Accessing Objects</h4>
      <div>
        <p> Accessing object data is very easy in JavaScript. It is same as setting the data except we use assignment operator to set the data. While accessing the data we dont need to use assignment operator.
        </p>
      </div>
      <ol>
        <li> 
          Using dot notation 
          <ol>
            <CodeSnippet classNames="lw line-numbers" snippet={Snippets.dotSyntax} />
          </ol>
        </li>
        <li> Using bracket notation
          <ol>
            <CodeSnippet classNames="lw line-numbers" snippet={Snippets.bracketSyntax} />
          </ol>
        </li>
      </ol>
      <div>
        <CodeSnippet classNames="lw line-numbers" snippet={Snippets.access2}/>
      </div>
      <div>
        There is another way to access the objects. That is using expression<br/>ex:<br/>
        <CodeSnippet classNames="lw line-numbers" snippet={Snippets.bracketExpr} />
        It is always better to use bracket notation. The order of preference.
        <ol>
          <li>Bracket Notation</li> 
          <li>Dot Notation</li>
        </ol>
      </div>
      <div>
        <h4> Quiz TIME</h4>
        <div className="code-bg">
          <div className="row">
            <div className="col-sm-3">
              <strong> Simple Example#1 </strong>
              <div>
                <CodeSnippet snippet={Quiz.obj_q1} />
              </div>
              <div>
                <span className="answer-link pointer-cursor"
                      onClick={() => toggleAnswer(views.view1, 'view1')}>View Answer</span>
              {
                views.view1 &&
                  <div>
                      <span className="q-a">4</span>
                      <ul>
                        <li><span className='token keyword'>var</span> cars = <span class='token pun'>{'{'}</span><span className='token pun'>}</span>
                        </li>
                        <li>
                          <span className='token keyword'>var </span>myCar = <span className='token number'>new </span>Object(<span>{'{'}</span>name: '<span className='token number'>Ford</span>'})
                        </li>
                        <li>
                          <span className='token keyword'>var </span>myCar = Object.create(<span>{'{'}</span>name: '<span className='token number'>Ford</span>'})
                        </li>
                      </ul>
                  </div> 
              }
              </div>
            </div>
            <div className="col-sm-3">
            <strong> Simple Example#2 </strong>
              <div>
                <CodeSnippet snippet={Quiz.obj_q2} />
              </div>
              <div>
                <span className="answer-link pointer-cursor"
                      onClick={() => toggleAnswer(views.view2, 'view2')}>View Answer</span>
                {
                  views.view2 && 
                  <div>
                    <span className="token keyword"> var </span>obj = <JSONPrettify className="pretty-json" data={{}} />
                  </div>
                }  
              </div>
            </div>
            <div className="col-sm-3">
            <strong> Simple Example#3 </strong>
              <div>
                <CodeSnippet snippet={Quiz.obj_q3} />
              </div>
              <div>
                <span className="answer-link pointer-cursor"
                      onClick={() => toggleAnswer(views.view3, 'view3')}>View Answer</span>
                {
                  views.view3 && 
                  <div>
                    <span className="token keyword"> var </span>obj = <JSONPrettify className="pretty-json" theme={JSONPrettyMon} data={{name: 'Manasa'}} />
                  </div>
                }  
              </div>
            </div>
            <div className="col-sm-3">
            <strong> Simple Example#4 </strong>
              <div>
                <CodeSnippet snippet={Quiz.obj_q4} />
              </div>
              <div>
                1. Access name using dot notation<br/>
                2. Access name using bracket notation<br/>
                3. Access name using bracket expression
              </div>
              <div>
                <span className="answer-link pointer-cursor"
                      onClick={() => toggleAnswer(views.view4, 'view4')}>View Answer</span>
                {
                  views.view4 && 
                  <div>
                    <ol>
                      <li>obj.project</li>
                      <li>obj["<span className='token number'>project</span>"]</li>
                      <li>
                        <span className="token keyword">var </span> name = <span className="token number">'project'</span>;<br/>
                        obj[name]
                      </li>
                    </ol>
                  </div>
                }  
              </div>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-sm-3">
            <strong> Simple Example#5 </strong>
              <div>
                <CodeSnippet snippet={Quiz.obj_q5} />
              </div>
              <div>
                1. Add a property called location and assign value Jayanagar to existing object<br/>
                2. Print when did Aroha established?
              </div>
              <div>
                <span className="answer-link pointer-cursor"
                      onClick={() => toggleAnswer(views.view5, 'view5')}>View Answer</span>
                {
                  views.view5 && 
                  <div>
                    1. company.location = <span className="token number">"Jayanagar"</span>;<br/>
                    2. company[<span className="token number">"since"</span>]
                  </div>
                }  
              </div>
            </div>
            <div className="col-sm-3">
            <strong> Simple Example#6 </strong>
              <div>
                <CodeSnippet snippet={Quiz.obj_q6} />
              </div>
              <div>
                Print "Aroha is established in 2010 and is owned by Rajesh".
              </div>
              <div>
                <span className="answer-link pointer-cursor"
                      onClick={() => toggleAnswer(views.view6, 'view6')}>View Answer</span>
                {
                  views.view6 && 
                  <div>
                    <span className="c-console">console</span>.<span classname="c-log">log</span>(company[<span className="token number">"name"</span>]+ " is estiablished in " + company[<span className="token number">"since"</span>]+ " and is owned by" + company[<span className="token number">"ownedBy"</span>]);
                  </div>
                }  
              </div>
            </div>
            <div className="col-sm-3">
            <strong> Simple Example#7 </strong>
              <div>
                <CodeSnippet snippet={Quiz.obj_q7} />
              </div>
              <div>
                What is the output?
              </div>
              <div>
                <span className="answer-link pointer-cursor"
                      onClick={() => toggleAnswer(views.view7, 'view7')}>View Answer</span>
                {
                  views.view7 && 
                  <div>
                    <span className="token undefined">undefined</span>
                  </div>
                }  
              </div>
            </div>
            <div className="col-sm-3">
            <strong> Simple Example#8 </strong>
              <div>
                <CodeSnippet snippet={Quiz.obj_q8} />
              </div>
              <div>
                Write Property & value table
              </div>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-sm-3">
              <strong> Simple Example#9 </strong>
              <div>
                <CodeSnippet snippet={Quiz.obj_q9} />
              </div>
              <div>
                <span className="answer-link pointer-cursor"
                      onClick={() => toggleAnswer(views.view8, 'view8')}>View Answer</span>
                {
                  views.view8 && 
                  <div>
                    <span className="token boolean">true</span>
                  </div>
                }  
              </div>
            </div>
            <div className="col-sm-3">
              <strong> Simple Example#10 </strong>
              <div>
                <span className="token keyword">var </span>techStack = <span className="token undefined">Object</span>.create(<JSONPrettify className="pretty-json" theme={JSONPrettyMon} data={{tech: 'javascript'}}/>)
                <div>
                  <span className="c-console">console</span>.<span className="c-log">log</span>(techStack);
                  <div>
                    <ol>
                    <li className="mb-0"><JSONPrettify className="pretty-json" theme={JSONPrettyMon} data={{}}/></li>

                    <li className="mb-0"><JSONPrettify className="pretty-json" theme={JSONPrettyMon} data={{"tech": "javascript"}}/></li> 
                    <li className="mb-0">null </li>  
                    </ol>
                  </div>

                </div>
              </div>
              <div>
                <span className="answer-link pointer-cursor"
                      onClick={() => toggleAnswer(views.view9, 'view9')}>View Answer</span>
                {
                  views.view9 && 
                  <div>
                    <span className="token boolean">1</span>
                  </div>
                }  
              </div>
            </div>
            <div className="col-sm-3">
              <strong> Simple Example#11 </strong>
              <div>
                <span className="token keyword">var </span>techStack = <span className="token undefined">Object</span>.create(<JSONPrettify className="pretty-json" theme={JSONPrettyMon} data={{tech: 'javascript'}}/>)
                <div>
                  <span className="c-console">console</span>.<span className="c-log">log</span>(techStack.tech);
                </div>  
              </div>
              <div>
                <span className="answer-link pointer-cursor"
                      onClick={() => toggleAnswer(views.view10, 'view10')}>View Answer</span>
                {
                  views.view10 && 
                  <div>
                    <span className="token number">javascript</span>
                  </div>
                }  
              </div>
            </div>
            <div className="col-sm-3">
              <strong> Simple Example#12 </strong>
              <div>
              <span className="token keyword">const </span>techStack = <span className="token undefined">Object</span>.create(<JSONPrettify className="pretty-json" theme={JSONPrettyMon} data={{tech: 'javascript'}}/>)<br/>
              <span className="token keyword">const </span>techStack = <JSONPrettify className="pretty-json" theme={JSONPrettyMon} data={{}} />
                <div>
                  <span className="c-console">console</span>.<span className="c-log">log</span>(techStack.tech);
                </div> 
              </div>
              <div>
                <span className="answer-link pointer-cursor"
                      onClick={() => toggleAnswer(views.view11, 'view11')}>View Answer</span>
                {
                  views.view11 && 
                  <div>
                    <span className="q-e">Error</span>
                  </div>
                }  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Access