import React, { Component } from 'react'
import AceEditor from 'react-ace'
import { Emoji } from 'emoji-mart'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/theme-github';
import * as Snippets from './snippets'

class Basics2 extends Component {

  state = {
    code: Snippets.insideHtml,
    usingFile: Snippets.fileInHtml,
    elementScript: Snippets.elementScript,
    goodJs: Snippets.goodJS,
    badJS: Snippets.badJS,
    badApproach: Snippets.badApproach,
    badApproach2: Snippets.badApproach2,
    goodApproach: Snippets.goodApproach
  }

  render() {
    const { 
      code, usingFile, elementScript, goodJs, badJS,badApproach, badApproach2,
      goodApproach
     } = this.state
    const lt = '<'
    const gt = '>'
    return(
      <div className="content-placeholder">
        <h2 className="main-title"> #2 Basics </h2>
        <h4>How To Use JavaScript in any web application?</h4>
         <p> There three ways to write javascript in a web application</p>
         <ul>
           <li> At Tag/Element Level </li>
           <li> Using Script Tag inside html file</li>
           <li> Using JS file and including it in html file</li>
         </ul>
        <br/>
        <div className="row">
          <div className="col-sm-4 pr-0">
            <h6>1. Writing script at Tag/Element Level</h6>
            <div className="snippets">
              <div className="code-block">
                <AceEditor
                  mode="html"
                  theme="github"
                  className="ace-editor"
                  value={elementScript}
                  readOnly={true}
                  editorProps={{ $blockScrolling: true }}
                />
                </div>

            </div>
          </div>
          <div className="col-sm-4 pr-0">
            <h6>2. USING SCRIPT TAG INSIDE HTML </h6>

            <div className="snippets">
              <div className="code-block">
              <AceEditor
                mode="html"
                theme="github"
                className="ace-editor"
                value={code}
                readOnly={true}
                editorProps={{ $blockScrolling: true }}
              />
              </div>
            </div>
          </div>
          <div className="col-sm-4 pr-0">
          <h6>3. USING JS FILE AND INCLUDING IT IN HTML FILE</h6>
            <div className="snippets">
              <div className="code-block">
              <AceEditor
                mode="html"
                theme="github"
                className="ace-editor"
                value={usingFile}
                readOnly={true}
                editorProps={{ $blockScrolling: true }}
              />
              </div>
            </div>
          </div>
        </div>
        <div className="where-to-js mt-4">
          <p>
            If you observe the above snippets we have written <strong>&lt;script&gt;</strong> tag inside body of html. <br/>
            Is it the only place to include <strong>&lt;script&gt;</strong> tag? Obliviously No. You can write script tag in any part of the the html file. You can keep it inside <strong>&lt;head&gt;</strong> or <strong>&lt;body&gt; </strong> tag. 
          </p>
          <h6> Let us see some of the examples of writing good and bad ways of including &lt;script&gt; tag in HTML</h6>
          <div className="row">
            <div className="col-sm-6">
              <strong> Good </strong>
              <div className="snippets">
                <div className="code-block">
                <AceEditor
                  mode="html"
                  theme="github"
                  className="ace-editor"
                  value={goodJs}
                  readOnly={true}
                  editorProps={{ $blockScrolling: true }}
                />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <strong> Bad </strong>
              <div className="snippets">
                <div className="code-block">
                <AceEditor
                  mode="html"
                  theme="github"
                  className="ace-editor"
                  value={badJS}
                  readOnly={true}
                  editorProps={{ $blockScrolling: true }}
                />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="better-approach">
          <h6 className="mt-4"> What is the better place to keep &lt;script&gt; tag?</h6>
          Basically it is good to keep &lt;script&gt; at the end of the body tag. Why?? Lets see what happens when we try to visit any website which has script tag.
          <img src="https://miro.medium.com/max/850/1*Lp5ghTs7iuHyku4NaHjqgw.png" alt="Web Server Architecture" />
          <ol>
            {/* https://stackoverflow.com/questions/436411/where-should-i-put-script-tags-in-html-markup */}
            <li>Fetch the HTML page (e.g. index.html)</li>
            <li>Browser starts parsing the HTML file once it receives html content from Server</li>
            <li>The parser encounters a &lt;script&gt; tag referencing an external script file.</li>
            <li>The browser requests the script file. Meanwhile, the parser blocks and stops parsing </li>
            <li>the other HTML on your page.</li>
            <li>After some time the script is downloaded and subsequently executed.</li>
            <li>The parser continues parsing the rest of the HTML document.</li>
            <li> <a href="https://stackoverflow.com/questions/436411/where-should-i-put-script-tags-in-html-markup" target="_blank"> Find More Info Here</a></li>
            <li> <a href="https://www.youtube.com/watch?v=h4k-2tNY52E" target="_blank"> And an youtube link</a></li>
          </ol>
          <p><strong>Some Other examples why we may have to keep JS at the end of the body tag</strong> </p>
          <div className="row">
            <div className="col-sm-6">
              <h6> Snippet#1 </h6>
              <div className="snippets">
                  <div className="code-block">
                  <AceEditor
                    mode="html"
                    theme="github"
                    className="ace-editor"
                    value={badApproach}
                    readOnly={true}
                    editorProps={{ $blockScrolling: true }}
                  />
                  </div>
                </div>
            </div>
            <div className="col-sm-6">
            <h6> Snippet#2 </h6>
              <div className="snippets">
                  <div className="code-block">
                  <AceEditor
                    mode="html"
                    theme="github"
                    className="ace-editor"
                    value={badApproach2}
                    readOnly={true}
                    editorProps={{ $blockScrolling: true }}
                  />
                  </div>
                </div>
            </div>
          </div>
          <p className="mb-0">
            If you execute the above scripts you will get error similar to the below one in both the cases.
          </p>
          <Emoji emoji={{ id: 'sob', skin: 3 }} size={50} />
          <p>
            <span className="d-block error-msg">(index):42 Uncaught TypeError: Cannot read property 'style' of null</span>
                  <span className="error-msg">at (index):42</span>
          </p>
          <p><strong>Okay??? What is happening??? </strong></p>
          <strong> Snippet#1 </strong>
          <ol>
            <li> Browser starts parsing html file </li>
            <li> It parses {lt}! doctype html{gt}</li>
            <li> parses {lt}html{gt} tag</li>
            <li> parses {lt}head{gt} tag</li>
            <li> parses {lt}script{gt} tag </li>
            <li> parses <strong>var elem = document.getElementById("one") </strong></li>
            <li> In the above line browser is trying to get element by an ID which is not parsed by html yet. Since Browser did not parse the element with ID it returns <b>undefined</b> value </li>
            <li> Now variable <b>elem</b> contains value <b>Undefined</b></li>
            <li> In the next line we are trying to add background style to an elment which is undefined. That is why we get the above error.
            </li>
            <li> parses end {lt}/script{gt} tag </li>
            <li> parses end {lt}/head{gt} tag </li>
            <li> parses {lt}body{gt} tag</li>
            <li> Process continues......</li>
          </ol>
          <p>
            <strong> Snippet#2 </strong>
          </p>
          <ol>
            <li>
              The steps will be same till 4
            </li>
            <li> parses script tag. Since it has src attribute browser fetches file from the server. Until it fetches file from server browser will not go to next line. </li>
            <li>
              Once browser receives the file, it tries to execute the file contents.
              <pre>
                  var elem = document.getElementById("one");<br/>
                  elem.style.backgroundColor="Blue";
              </pre>
            </li>
            <li>
              Again the process will be same as Snippet#1. parses <strong>var elem = document.getElementById("one") which is inside main.js file</strong>
            </li>
            <li> Now variable <b>elem</b> contains value <b>Undefined</b></li>
            <li> In the next line we are trying to add background style to an elment which is undefined. That is why we get the above error.
            </li>
            <li> parses end {lt}/script{gt} tag </li>
            <li> parses end {lt}/head{gt} tag </li>
            <li> parses {lt}body{gt} tag</li>
            <li> Process continues......</li>
          </ol>

          <p><strong>Okay!!! Let us make it work </strong></p>
          <div className="row">
            <div className="col-sm-12">
            <h6> Snippet#1 </h6>
              <div className="snippets">
                  <div className="code-block">
                  <AceEditor
                    mode="html"
                    theme="github"
                    className="ace-editor"
                    value={goodApproach}
                    readOnly={true}
                    editorProps={{ $blockScrolling: true }}
                  />
                  </div>
                </div>
            </div>
          </div>
          <p> Now, Can you try the second approach??? </p>
          <p><strong> Hey!!!! Wait! But why do we keep CSS files in the head section???</strong></p>
          
        </div>
        <div className="px-5 py-3 folder-structure left-border">
          <dl className="dl-horizontal">
            <dt> <i className="fa fa-folder-open-o" aria-hidden="true"></i> Project</dt>
            <dd className="ml-3"><i className="fa fa-level-up rotate-90" aria-hidden="true"></i> index.html</dd>
            <dd className="ml-3"> <i className="fa fa-level-up rotate-90" aria-hidden="true"></i> main.js</dd>
          </dl>
        </div>
        <div className="code-snippet">
            <pre>
              <code>
                //Create a 
              </code>
            </pre>
        </div>
      </div>
    )
  }
}

export default Basics2