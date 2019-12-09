import React from "react";
import JSONPretty from "react-json-pretty";
import {
	objMethod,
	getAge,
	accessingMethods,
	methodExercies,
	methodExer,
	errorObj,
  getEmails,
  getTicketsCount,
  getIndividualCount
} from "./snippets";
import CodeSnippet from "../../utils/pre";
var JSONPrettyMon = require("react-json-pretty/dist/monikai");

function Methods({ views, toggleAnswer }) {
	return (
		<div>
			<h4> Object Methods </h4>
			<div>
				<p>
					A method is a function associated with an object, or, simply put, a
					method is a property of an object that is a function. Methods are
					defined the way normal functions are defined, except that they have to
					be assigned as the property of an object
				</p>
				or
				<p>
					A function which is assigned to a property inside an object is called
					method.
				</p>
			</div>
			<div>
				ex:
				<div>
					<CodeSnippet classNames="lw line-numbers" snippet={objMethod} />
					<div>
						<table className="table table-striped table-bordered">
							<thead>
								<tr>
									<td>
										{" "}
										<strong>Property/Key </strong>
									</td>
									<td>
										{" "}
										<strong>Value </strong>
									</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td> firstName </td>
									<td> Manasa </td>
								</tr>
								<tr>
									<td> lastName </td>
									<td> R </td>
								</tr>
								<tr>
									<td> age </td>
									<td> 4 </td>
								</tr>
								<tr>
									<td> eyeColor </td>
									<td> blue </td>
								</tr>
								<tr>
									<td> fullName </td>
									<td>
										{" "}
										{
											'function(){ return this.firstName + " " + this.lastName }'
										}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<p>
						Like the way we can add properties after creating the object, we can
						add the methods in the same way.
					</p>
					ex: Continuing the above object snippet
					<div>
						<CodeSnippet classNames="lw line-numbers" snippet={getAge} />
					</div>
				</div>
			</div>
			<div>
				<h4> Accessing Object Methods</h4>
				<div>
					<p>
						Accessing Object methods is same as accessing other properties in
						object. An Object method will execute only when it is invoked/called
						with ()
					</p>
					Syntax:
					<div>
						<CodeSnippet
							classNames="lw line-numbers"
							snippet={accessingMethods}
						/>
					</div>
					<p> Let us understand above syntax</p>
					<div className="code-bg">
						<div>
							<span className="tokent comment">
								// let us take a variable assignment{" "}
							</span>
							<br />
							<span className="token keyword"> var </span> a ={" "}
							<span className="token number">10</span>
							<br />
							<span className="c-console">console</span>.
							<span className="c-log">log</span>(a)
							<span className="token comment"> // what is the output</span>
						</div>
						<hr />
						<div>
							<span className="tokent comment">
								// let us do same thing for functions{" "}
							</span>
							<br />
							<span className="token keyword"> var </span> a ={" "}
							<span className="token function">function</span>()
							<span className="token pun">{"{"}</span>
							<br />
							<span className="c-console"> console</span>.
							<span className="c-log">log</span>("HEllo");<br/>
							<span className="token pun">}</span>
							<br />
							<span className="c-console"> console</span>.
							<span className="c-log">log</span>(a);
							<span className="token comment">// what is the output?</span>
							<br />
							<span className="c-console"> console</span>.
							<span className="c-log">log</span>(a());
							<span className="token comment">// what is the output?</span>
						</div>
						<hr />
						<div>
							<span className="tokent comment">
								// let us do same thing for methods{" "}
							</span>
							<br />
							<span className="token keyword"> var </span> a ={" "}
							<span className="token pun">{"{"}</span>
							<br />
							<span>
								&nbsp;callMe: <span className="token function">function</span>()
								<span className="token pun">{"{"}</span>
							</span>
							<br />
							<span>
								&nbsp;&nbsp; <span className="token context">return </span>
								<span className="token undefined">"Hey"</span>
							</span>
							<br />
							<span>
								&nbsp;<span className="token pun">}</span>
							</span>
							<br />
							<span>
								<span className="token pun">}</span>
							</span>
							<br />
							<span className="c-console"> console</span>.
							<span className="c-log">log</span>(a);
							<span className="token comment">// what is the output?</span>
							<br />
							<span className="c-console"> console</span>.
							<span className="c-log">log</span>(a.callMe());
							<span className="token comment">// what is the output?</span>
							<br />
							<span className="c-console"> console</span>.
							<span className="c-log">log</span>(a.callMe);
							<span className="token comment">// what is the output?</span>
							<br />
							<span className="c-console"> console</span>.
							<span className="c-log">log</span>(a[
							<span className="token undefined">"callMe"</span>]);
							<span className="token comment">// what is the output?</span>
							<br />
							<span className="c-console"> console</span>.
							<span className="c-log">log</span>(a[
							<span className="token undefined">"callMe"</span>]());
							<span className="token comment">// what is the output?</span>
							<br />
						</div>
						{/* </div> */}
					</div>
				</div>
				<div>
					<h4>Quiz TIME</h4>
					<div className="code-bg">
						<div>
							<CodeSnippet snippet={methodExer} />
						</div>
						<hr />
						<div className="row">
							<div className="col-sm-3">
								<strong>Simple Exercies#1</strong>
								<div>Print your full name?</div>
                <div>
									<span
										className="answer-link pointer-cursor"
										onClick={() => toggleAnswer(views.view12, "view12")}
									>
										View Answer
									</span>
									{views.view12 && (
										<div>
											console.log(<span className="q-a">projects.fullName()</span>);
										</div>
									)}
								</div>
							</div>
							<div className="col-sm-3">
								<strong>Simple Exercies#2</strong>
								<div>
									<span className="c-console">console</span>.
									<span className="c-log">log</span>(projects.getName())
								</div>
								<div>
									<span
										className="answer-link pointer-cursor"
										onClick={() => toggleAnswer(views.view13, "view13")}
									>
										View Answer
									</span>
									{views.view13 && (
										<div>
											<span className="q-e">error</span>
										</div>
									)}
								</div>
							</div>
							<div className="col-sm-3">
								<strong>Simple Exercies#3</strong>
								<div>
									Add a property called totalTickets and assign value 20 to it?
								</div>
								<div>
									<span
										className="answer-link pointer-cursor"
										onClick={() => toggleAnswer(views.view14, "view14")}
									>
										View Answer
									</span>
									{views.view14 && (
										<div>
											projects.totalTickets = <span className="token number">20</span>;
										</div>
									)}
								</div>
							</div>
							<div className="col-sm-3">
								<strong>Simple Exercies#4</strong>
								<div>
									Add a method called getNewTickets which will return number of
									new tickets?
								</div>
								<div>
									<span
										className="answer-link pointer-cursor"
										onClick={() => toggleAnswer(views.view15, "view15")}
									>
										View Answer
									</span>
									{views.view15 && (
										<div>
											projects.getNewTickets = <span className="token function">function</span>()<span className="token pun">{"{"}</span><br/>
                      <span>&nbsp;<span className="token function">return</span><span className="token context"> this</span>.newTickets;</span><br/>
                      <span className="token pun">}</span>
										</div>
									)}
								</div>
							</div>
						</div>
						<hr />
						<div className="row">
							<div className="col-sm-3">
								<strong> Simple Exercise#5 </strong>
								<div>
									Add a method called getEmails which will return email &
									company email. The return type should be an object?
								</div>
								<div>
									<span
										className="answer-link pointer-cursor"
										onClick={() => toggleAnswer(views.view16, "view16")}
									>
										View Answer
									</span>
									{views.view16 && (
										<div>
											<CodeSnippet snippet={getEmails} />
										</div>
									)}
								</div>
							</div>
							<div className="col-sm-3">
								<strong> Simple Exercise#5 </strong>
								<div>
									Create a method which will return following output when
									called?
									<ol>
										<li>
											if passed 'new' should return -{" "}
											<i>The number of new tickets are 5(no.of newTickets)</i>
										</li>
										<li>
											if passed 'hold' should return -{" "}
											<i>
												The number of dependency tickets are 2(no.of onHold tickets)
											</i>
										</li>
										<li>
											if passed 'pending' should return -{" "}
											<i>
												The number of pending tickets are 2(no.of pending tickets)
											</i>
										</li>
										<li>
											If nothing/invalid passed should return - Please pass some input
										</li>
									</ol>
								</div>
								<div>
									<span
										className="answer-link pointer-cursor"
										onClick={() => toggleAnswer(views.view17, "view17")}
									>
										View Answer
									</span>
									{views.view17 && (
										<div>
											<CodeSnippet snippet={getTicketsCount} />
										</div>
									)}
								</div>
							</div>
							<div className="col-sm-3">
								<strong> Simple Exercise#5 </strong>
								<div>
									Create a method which will return following output when
									called?
									<ol>
										<li>
											if passed 'completed' should return -{" "}
											<i>Manasa has completed 10 tickets</i>
										</li>
										<li>
											if passed 'continued' should return -{" "}
											<i>Manasa is working on 2 tickets</i>
										</li>
										<li>
											If nothing/invalid passed should return - Please pass some input
										</li>
									</ol>
								</div>
								<div>
									<span
										className="answer-link pointer-cursor"
										onClick={() => toggleAnswer(views.view18, "view18")}
									>
										View Answer
									</span>
									{views.view18 && (
										<div>
											<CodeSnippet snippet={getIndividualCount} />
										</div>
									)}
								</div>
							</div>
							<div className="col-sm-3">
								<strong> Simple Exercise#5 </strong>
								<div>
									<CodeSnippet snippet={errorObj} />
								</div>
								<div>
									<p> What is wrong with above object?</p>
									<div>
										<span
											className="answer-link pointer-cursor"
											onClick={() => toggleAnswer(views.view20, "view20")}
										>
											View Answer
										</span>
										{views.view20 && (
											<div>
												<span className="q-a"> Comma is missing for email property</span>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Methods;
