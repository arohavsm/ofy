import React from 'react'
import CodeSnippet from '../../utils/pre'
import { dotSyntax, bracketSyntax, example2, objMethod } from './snippets'
function Finding({views, toggleAnswer}) {
  return (
    <div>
      <h4 className="mt-4"> Finding/Checking for a property existence in an object</h4>
      <div>
        There are couple of ways of finding a property/key in an object. we will see most used ones.
      </div>
      <div>
        <h5> Simple One - Returns actual value which will be validated to true if used in conditions</h5>
        Syntax:
        <div>
          <span className="token comment">returns value</span>
          <CodeSnippet classNames="lw line-numbers" snippet={dotSyntax} />
          <CodeSnippet classNames="lw line-numbers" snippet={bracketSyntax} />
        </div>
        <div className="code-bg">
          <CodeSnippet snippet={example2} />
          <hr/>
          <div className="row">
            <div className="col-sm-4">
              <span className="token comment">//Let us check with existing key first</span><br/>
              <span className="token function">if</span>(person["<span className="token undefined">firstName</span>"])<span className="token pun">{"{"}</span><br/>
              <span> <span className="c-console">&nbsp;console</span><span className="c-log">log</span>("EXISTS")</span><br/>
              <span className="token pun">}</span><span className="token function">else</span><span className="token pun">{"{"}</span><br/>
              <span>&nbsp;<span className="c-console">console</span>.<span className="c-log">log</span>("DOESNT")</span><br/>
              <span className="token pun">}</span>
            </div>
            <div className="col-sm-4">
            <span className="token comment">//Let us check with non-existing key first</span><br/>
              <span className="token function">if</span>(person["<span className="token undefined">color</span>"])<span className="token pun">{"{"}</span><br/>
              <span> <span className="c-console">&nbsp;console</span><span className="c-log">log</span>("EXISTS")</span><br/>
              <span className="token pun">}</span><span className="token function">else</span><span className="token pun">{"{"}</span><br/>
              <span>&nbsp;<span className="c-console">console</span>.<span className="c-log">log</span>("DOESNT")</span><br/>
              <span className="token pun">}</span>
            </div>
            <div className="col-sm-4">
              <span className="token comment">//Calling Non-existing methods</span><br/>
              <span className="token comment">// if you try to call a non-existing method in an object it will throw error</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5 className="mt-3">Using <span className="token function">'hasOwnProperty'</span> operator - returns true/false</h5> 
        <div className="code-bg">
          <CodeSnippet snippet={objMethod} />
          <div>
            <strong>Syntax:</strong>
            <div>
              objectName.<i>hasOwnProperty</i>(<span className="token undefined">'propertyName'</span>)
            </div>

          </div>
          <hr/>
          <div>
            <div className="row">
              <div className="col-sm-4">
              <span className="token function">if</span>(person.hasOwnProperty(<span className="token undefined">'firstName'</span>))<span className="token pun">{"{"}</span><br/>
              <span> <span className="c-console">&nbsp;console</span><span className="c-log">log</span>("EXISTS")</span><br/>
              <span className="token pun">}</span><span className="token function">else</span><span className="token pun">{"{"}</span><br/>
              <span>&nbsp;<span className="c-console">console</span>.<span className="c-log">log</span>("DOESNT")</span><br/>
              <span className="token pun">}</span>
              </div>
              <div className="col-sm-4">
              <span className="token function">if</span>(person.hasOwnProperty(<span className="token undefined">'fullName'</span>))<span className="token pun">{"{"}</span><br/>
              <span> <span className="c-console">&nbsp;console</span><span className="c-log">log</span>("EXISTS")</span><br/>
              <span className="token pun">}</span><span className="token function">else</span><span className="token pun">{"{"}</span><br/>
              <span>&nbsp;<span className="c-console">console</span>.<span className="c-log">log</span>("DOESNT")</span><br/>
              <span className="token pun">}</span>
              </div>
              <div className="col-sm-4">
              <span className="token function">if</span>(person.hasOwnProperty(<span className="token undefined">'height'</span>))<span className="token pun">{"{"}</span><br/>
              <span> <span className="c-console">&nbsp;console</span><span className="c-log">log</span>("EXISTS")</span><br/>
              <span className="token pun">}</span><span className="token function">else</span><span className="token pun">{"{"}</span><br/>
              <span>&nbsp;<span className="c-console">console</span>.<span className="c-log">log</span>("DOESNT")</span><br/>
              <span className="token pun">}</span>
              </div>
            </div>
            
          {/* https://stackoverflow.com/questions/455338/how-do-i-check-if-an-object-has-a-key-in-javascript */}
          </div>
        </div>
      </div>
      <div>
        <h5 className="mt-3">Using <span className="token function">'in'</span> operator - returns true/false</h5>

        {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in */}
        <div className="code-bg">
          <CodeSnippet snippet={objMethod} />
          <div>
            <strong>Syntax:</strong>
            <div>
              <span className="token undefined">'propertyName'</span> <span className="token function">in</span> objectName
            </div>

          </div>
          <hr/>
          <div>
            <div className="row">
              <div className="col-sm-4">
              <span className="token function">if</span>(<span className="token undefined">'firstName'</span> <span className="token function">in</span> person )<span className="token pun">{"{"}</span><br/>
              <span> <span className="c-console">&nbsp;console</span><span className="c-log">log</span>("EXISTS")</span><br/>
              <span className="token pun">}</span><span className="token function">else</span><span className="token pun">{"{"}</span><br/>
              <span>&nbsp;<span className="c-console">console</span>.<span className="c-log">log</span>("DOESNT")</span><br/>
              <span className="token pun">}</span>
              </div>
              <div className="col-sm-4">
              <span className="token function">if</span>(<span className="token undefined">'age'</span> <span className="token function">in</span> person )<span className="token pun">{"{"}</span><br/>
              <span> <span className="c-console">&nbsp;console</span><span className="c-log">log</span>("EXISTS")</span><br/>
              <span className="token pun">}</span><span className="token function">else</span><span className="token pun">{"{"}</span><br/>
              <span>&nbsp;<span className="c-console">console</span>.<span className="c-log">log</span>("DOESNT")</span><br/>
              <span className="token pun">}</span>
              </div>
              <div className="col-sm-4">
              <span className="token function">if</span>(<span className="token undefined">'weight'</span> <span className="token function">in</span> person )<span className="token pun">{"{"}</span><br/>
              <span> <span className="c-console">&nbsp;console</span><span className="c-log">log</span>("EXISTS")</span><br/>
              <span className="token pun">}</span><span className="token function">else</span><span className="token pun">{"{"}</span><br/>
              <span>&nbsp;<span className="c-console">console</span>.<span className="c-log">log</span>("DOESNT")</span><br/>
              <span className="token pun">}</span>
              </div>
            </div>
            
          {/* https://stackoverflow.com/questions/455338/how-do-i-check-if-an-object-has-a-key-in-javascript */}
          </div>
        </div>
        <p className="mt-4">
          A very good article on <strong>in</strong> vs <strong>hasOwnProperty </strong> 
          <a href="http://adripofjavascript.com/blog/drips/the-uses-of-in-vs-hasownproperty.html" rel="noopener" target="_blank">Read Here</a>
        </p>
      </div>
      <div>
        <h4 className="mt-2"> Quiz TIME</h4>
        <div className="code-bg">
          <CodeSnippet snippet={objMethod} />
          <hr/>
          <div className="row">
            <div className="col-sm-4">
              <strong>Simple Example#1</strong> 
              <div>
              <span className="c-console">console</span>.<span className="c-log">log</span>(<span className="token undefined">'eyeColor'</span> <span className="token function">in</span> person);
              </div>
              <div>
                <p> What is the ouput?</p>
                <div>
                <span
											className="answer-link pointer-cursor"
											onClick={() => toggleAnswer(views.view21, "view21")}
										>
											View Answer
										</span>
										{views.view21 && (
											<div>
												<span className="q-a"> true</span>
											</div>
										)}
                </div>
              </div>
            </div>
            <div className="col-sm-4">
            <strong>Simple Example#2</strong> 
              <div>
              <span className="c-console">console</span>.<span className="c-log">log</span>(person.<span className="token function">hasOwnProperty</span>(<span className="token undefined">'fullName'</span>));
              </div>
              <div>
                <p> What is the ouput?</p>
                <div>
                <span
											className="answer-link pointer-cursor"
											onClick={() => toggleAnswer(views.view22, "view22")}
										>
											View Answer
										</span>
										{views.view22 && (
											<div>
												<span className="q-a"> true</span>
											</div>
										)}
                </div>
              </div>
            </div>
            <div className="col-sm-4">
            <strong>Simple Example#3</strong> 
            <div>
              <span className="c-console">console</span>.<span className="c-log">log</span>(person[<span className="token undefined">'fullName'</span>]);
              </div>
              <div>
                <p> What is the ouput?</p>
                <div>
                <span
											className="answer-link pointer-cursor"
											onClick={() => toggleAnswer(views.view23, "view23")}
										>
											View Answer
										</span>
										{views.view23 && (
											<div>
												<span className="q-a"> It will pring function definition</span>
											</div>
										)}
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="row">
          <div className="col-sm-4">
              <strong>Simple Example#1</strong> 
              <div>
              <span className="c-console">console</span>.<span className="c-log">log</span>(<span className="token undefined">'newTickets'</span> <span className="token function">in</span> person);
              </div>
              <div>
                <p> What is the ouput?</p>
                <div>
                <span
											className="answer-link pointer-cursor"
											onClick={() => toggleAnswer(views.view24, "view24")}
										>
											View Answer
										</span>
										{views.view24 && (
											<div>
												<span className="q-a"> false</span>
											</div>
										)}
                </div>
              </div>
            </div>
            <div className="col-sm-4">
            <strong>Simple Example#2</strong> 
              <div>
              <span className="c-console">console</span>.<span className="c-log">log</span>(person.<span className="token function">hasOwnProperty</span>(<span className="token undefined">'person'</span>));
              </div>
              <div>
                <p> What is the ouput?</p>
                <div>
                <span
											className="answer-link pointer-cursor"
											onClick={() => toggleAnswer(views.view25, "view25")}
										>
											View Answer
										</span>
										{views.view25 && (
											<div>
												<span className="q-a"> false</span>
											</div>
										)}
                </div>
              </div>
            </div>
            <div className="col-sm-4">
            <strong>Simple Example#3</strong> 
            <div>
              <span className="c-console">console</span>.<span className="c-log">log</span>(person[<span className="token undefined">'fullName'</span>]());
              </div>
              <div>
                <p> What is the ouput?</p>
                <div>
                <span
											className="answer-link pointer-cursor"
											onClick={() => toggleAnswer(views.view26, "view26")}
										>
											View Answer
										</span>
										{views.view26 && (
											<div>
												<span className="q-a"> Manasa R</span>
											</div>
										)}
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="row">
              <div className="col-sm-4">
                <strong>Simple Exercie#7</strong>
                <p>Write code to find a property 'name' in an object called 'company' using 'in' operator?</p>
                <div>
                <span
											className="answer-link pointer-cursor"
											onClick={() => toggleAnswer(views.view27, "view27")}
										>
											View Answer
										</span>
										{views.view27 && (
											<div>
												<span className="token undefined">"name" </span><span className="token function">in </span> company
											</div>
										)}
                </div>
              </div>
              <div className="col-sm-4">
              <strong>Simple Exercie#8</strong>
                <p>Write code to find a property'location' in an object called 'company' using 'hasOwnProperty'?</p>
                <div>
                <span
											className="answer-link pointer-cursor"
											onClick={() => toggleAnswer(views.view28, "view28")}
										>
											View Answer
										</span>
										{views.view28 && (
											<div>
												company.<span className="token function">hasOwnProperty</span>(<span className="token undefined">"location"</span>)
											</div>
										)}
                </div>
              </div>
              <div className="col-sm-4">
              <strong>Simple Exercie#9</strong>
              <p>Write code to find a property 'originated' in an object called 'company' using 'dot&/bracket' Notation?</p>
              <div>
                <span
											className="answer-link pointer-cursor"
											onClick={() => toggleAnswer(views.view29, "view29")}
										>
											View Answer
										</span>
										{views.view29 && (
											<div>
												company[<span className="token undefined">"originated"</span>]<br/>
                        comapny.originated
											</div>
										)}
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Finding