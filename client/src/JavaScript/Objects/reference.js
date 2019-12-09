import React from 'react'
import CodeSnippet from '../../utils/pre'
import { objRef1, objRef2, objRef2Ans, objRef3 } from './snippets'
function Reference({views, toggleAnswer}) {
  return (
    <div>
      <h4 className="mt-3"> Objects in JavaScript are Passed By Reference </h4>
      <p>
        In JavaScript objects are passed by copy-reference.
      </p>
      <h5> What is pass by reference? </h5>
      <p>
        A variable holding an object does not "directly" hold an object. What it holds is a reference to an object. When you assign that reference from one variable to another, you're making a copy of that reference. Now both variables hold a reference to an object. Modifying the object through that reference changes it for both variables holding a reference to that object.
      </p>
      <div>
        <a href="https://imgur.com/l952Xwg"><img src="https://i.imgur.com/l952Xwg.png" title="source: imgur.com" /></a>
      </div>
      <div>
        <div className="code-bg mt-4">
          <span className="token comment">//Let us see it in example</span>
          <div>
            <CodeSnippet snippet={objRef1} />
          </div>
          <p> Lets re-assign it to some other variable </p>
          <div>
            <span className='token keyword'>const </span> edu = education;
            <p>Now change the specialization in edu object.</p>
            <span>edu.specialization = <span className="token undefined">"ECE"</span>;</span><br/>
            <span className="c-console">console</span>.<span className="c-log">log</span>(edu.specialization);<br/>
            <span className="c-console">console</span>.<span className="c-log">log</span>(education.specialization);
            <p className="mt-2">
              When you see the values in console you can observe that the specialization in education object also got changed. From this we can observe that when you re-assign one object to another variable both object are refering to copy of the same data. So changing value in one Object will change value of another object. That is why we call Objects are passed by reference.
            </p>
            <p>
              This case holds true even when you pass object to another function. Let us see an example
            </p>
            <div>
              <CodeSnippet snippet={objRef2} />
              <div>
              <span
											className="answer-link pointer-cursor"
											onClick={() => toggleAnswer(views.view30, "view30")}
										>
											View Answer
										</span>
                {
                  views.view30 && 
                    <div>
                      <CodeSnippet snippet={objRef2Ans} />
                    </div>
                }
              </div>
            </div>
            <div>
              <p> How ever this is not true when you re-assign the passed object value inside function. Lets see an example</p>
              <div>
                <CodeSnippet snippet={objRef3} />
              </div>
              <div>
              <span
											className="answer-link pointer-cursor"
											onClick={() => toggleAnswer(views.view31, "view31")}
										>
											View Answer
										</span>
                {
                  views.view31 && 
                    <div>
                      <CodeSnippet snippet={objRef2Ans} />
                    </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="mt-2"> Quiz TIME</h4>
      </div>
    </div>
  )
}

export default Reference