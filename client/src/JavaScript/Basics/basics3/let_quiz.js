import React from 'react'
import * as quiz from '../quiz'
import createMarkup from '../../../utils/markup'
import CodeSnippet from '../../../utils/pre'

const LetQuiz = (props) => (
  <div>
    <h6> Let us do some simple exercies</h6>
    <div className="code-bg">
      <div className="row">
        <div class="col-sm-3">
          <strong>Simple Exercise#1</strong>
          <div>
              <CodeSnippet snippet={quiz.let_q1} />
          </div>
          <p> What is the output?</p>
          <div>
          <span className="answer-link pointer-cursor"
                    onClick={() => props.toggleAnswer(props.views.view21, 'view21')}>View Answer</span>
          {
            props.views.view21 &&
              <div>
                  <span className="q-a">30</span>
              </div> 
          }
          </div>
        </div>
        <div class="col-sm-3 border-left">
        <strong>Simple Exercise#2</strong>
          <div>
            <CodeSnippet snippet={quiz.let_q2} />
          </div>
          <p> What is the output?</p>
          <div>
          <span className="answer-link pointer-cursor"
                    onClick={() => props.toggleAnswer(props.views.view22, 'view22')}>View Answer</span>
          {
            props.views.view22 &&
              <div>
                  <span className="q-e">Error</span>
              </div> 
          }
          </div>
        </div>
        <div class="col-sm-3 border-left">
        <strong>Simple Exercise#3</strong>
          <div>
          <CodeSnippet snippet={quiz.let_q3} />
          </div>
          <p> What is the output?</p>
          <div>
          <span className="answer-link pointer-cursor"
                    onClick={() => props.toggleAnswer(props.views.view23, 'view23')}>View Answer</span>
          {
            props.views.view23 &&
              <div>
                  <span className="q-e">Error</span>
              </div> 
          }
          </div>
        </div>
        <div class="col-sm-3 border-left">
        <strong>Simple Exercise#4</strong>
          <div>
          <CodeSnippet snippet={quiz.let_q4} />
          </div>
          <p> What is the output?</p>
          <div>
          <span className="answer-link pointer-cursor"
                    onClick={() => props.toggleAnswer(props.views.view24, 'view24')}>View Answer</span>
          {
            props.views.view24 &&
              <div>
                  <span className="q-e">Error</span>
              </div> 
          }
          </div>
        </div>
      </div>
      <hr/>
      <div className="row">
      <div class="col-sm-3">
      <strong>Simple Exercise#5</strong>
        <div>
        <CodeSnippet snippet={quiz.let_q5} />
        </div>
        <p> What is the output?</p>
        <div>
        <span className="answer-link pointer-cursor"
                  onClick={() => props.toggleAnswer(props.views.view25, 'view25')}>View Answer</span>
        {
          props.views.view25 &&
            <div>
                <span className="q-e">Error</span>
            </div> 
        }
        </div>
      </div>
      <div class="col-sm-3 border-left">
      <strong>Simple Exercise#1</strong>
        <div>
        <CodeSnippet snippet={quiz.let_q6} />
        </div>
        <p> What is the output?</p>
        <div>
        <span className="answer-link pointer-cursor"
                  onClick={() => props.toggleAnswer(props.views.view26, 'view26')}>View Answer</span>
        {
          props.views.view26 &&
            <div>
                <span className="q-a">WWII</span>
            </div> 
        }
        </div>
      </div>
      <div class="col-sm-3 border-left">
      <strong>Simple Exercise#1</strong>
        <div dangerouslySetInnerHTML={createMarkup(quiz.let_q7)}>
        </div>
        {/* <p> What is the output?</p> */}
        <div>
        <span className="answer-link pointer-cursor"
                  onClick={() => props.toggleAnswer(props.views.view27, 'view27')}>View Answer</span>
        {
          props.views.view27 &&
            <div>
                <span className="q-a">No</span>
            </div> 
        }
        </div>
      </div>
      <div class="col-sm-3 border-left">
      <strong>Simple Exercise#8</strong>
        <div dangerouslySetInnerHTML={createMarkup(quiz.let_q8)}>
        </div>
        {/* <p className="mt-2"> What is the output?</p> */}
        <div>
        <span className="answer-link pointer-cursor"
                  onClick={() => props.toggleAnswer(props.views.view28, 'view28')}>View Answer</span>
        {
          props.views.view28 &&
            <div>
                <span className="q-a">Yes</span>
            </div> 
        }
        </div>
      </div>
    </div>
    </div>
  </div>
)
export default LetQuiz