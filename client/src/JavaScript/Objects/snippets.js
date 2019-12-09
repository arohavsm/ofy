export const example1 = `
  <span class='token function'> function </span>fun(){
    <span class="c-console">console</span>.<span class="c-log">log</span>('hello')
  }
`
export const example2 = `
<span><span class='token keyword'>var </span>person = <span class='token pun'>{</span></span>
<span> firstName: '<span class='token cstr-name'>Manasa</span>',</span>
<span> lastName: '<span class='token cstr-name'>R</span>',</span>
<span> age: <span class='token number'>4</span>,</span>
<span> eyeColor: '<span class='token cstr-name'>blue</span>'</span>
<span><span class='token pun'>}</span>;</span>
`
export const objLiteral = `
<span class='token keyword'>var <span class="token normal">obj = </span><span class='token pun'>{};</span></span>
`

export const objConstrucotr = `
<span><span class='token keyword'>var </span>myObj = <span class="token cstr"> new </span><span class="token cstr-name">Object()</span></span>
`

export const objCreate = `
<span><span class='token keyword'>var </span>x = <span class="token cstr-name">Object</span>.create(<span class='token cstr-name'>null</span>)</span>
`

export const fnContstructor = `
<span><span class='token function'>function</span> Example(name)<span class='token pun'>{</span></span>
<span>  <span class='token keyword'>this</span>.name = name</span>;
<span><span class="token pun">}</span></span>
<span><span class='token keyword'>var </span>ex = <span class='token cstr'>new </span><span class='token cstr-name'>Example</span>('hello');</span>
`

export const objInitialize = `
<span><span class='token comment'>//ex: 1 - using object literal</span></span>
<span><span class='token keyword'>var </span>cities = <span class='token pun'>{</span></span>
<span>  state<span class='token cstr'>:</span> <span class='token undefined'> 'KA'</span><span class='token cstr'>,</span></span>
<span> city<span class='token cstr'>:</span> <span class='token undefined'> 'Bangalore'</span></span>
<span><span class='token pun'>}</span></span>
<span><span class='token comment'>//ex:2 - using object constructor</span></span>
<span><span class='token keyword'>var </span>person = <span class='token cstr'>new </span><span class='token cstr-name'>Object</span>({name: '<span class='token cstr-name'>Manasa</span>'})</span>
<span class='token comment'>//Object.create</span>
<span class='token comment'>//Using function constructor</span>
`

export const access1 = `
<span class='token comment'>//ex: 1</span>
<span><span class='token keyword'>var </span>person = <span class='token cstr'>new </span><span class='token cstr-name'>Object</span>();<span class='token comment'>//empty object has been created.</span></span>
<span>person.name= <span class='token cstr-name'> 'Manasa'</span>;</span>
<span>person.age=<sapn class='token number'> 5</span>;</span>
<span class='token comment'>//ex: 2</span>
<span><span class='token keyword'>var </span>ticket = <span class='token pun'>{</span><span class='token comment'>//Object with existing data</span></span>
<span> project: '<span class='token cstr-name'>Huddle Meeting</span>'</span>
<span><span class='token pun'>}</span></span>
<span><span class='token comment'>// using dot notation </span></span>
<span>token.status = '<span class='token cstr-name'>Completed</span>';<span><span class='token comment'>//This ability to add key value pairs even after creating the object is called dynamic behaviour of objects.</span></span></span>
<span><span class='token comment'>// using bracket notation </span></span>
<span>token<span class='token pun'>[</span>'id'<span class='token pun'>]</span> = '<span class='token cstr-name'>Completed</span>';</span>
`

export const access2 = `
<span><span class='token comment'>//Object</span></span>
<span><span class='token keyword'>var </span>person = <span class='token pun'>{</span></span>
<span> name: '<span class='token cstr-name'>Manasa R</span>',</span>
<span> city: '<span class='token cstr-name'>Durga </span>',</span>
<span><span class='token pun'>}</span></span>
<span><span class='token comment'>//Accessing using dot notation </span></span>
<span><span class='c-console'>console</span>.<span class='c-log'>log</span>(person.name)</span>
<span><span class='token comment'>//Accessing using bracket notation </span></span>
<span><span class='c-console'>console</span>.<span class='c-log'>log</span>(person<span class='token pun'>[</span>'<span class='token cstr-name'>city</span>'<span class='token pun'>]</span>)</span>
`

export const dotSyntax = `
<span>objectName.property    <span class='token comment'>// person.age</span></span>
`
export const bracketSyntax = `
<span>objectName<span class='token pun'>[</span>'<span class='token cstr-name'>property</span>'<span class='token pun'>]</span>   <span class='token comment'>//person['age']</span></span>
`

export const bracketExpr = `
<span>objectName<span class='token pun'>[</span>expression<span class='token pun'>]</span>            <span class='token comment'>// var x = 'age'; person[x]</span></span>
`

export const objMethod = `
<span><span class='token keyword'>var </span>person = <span class='token pun'>{</span></span>
<span> firstName: '<span class='token undefined'>Manasa</span>',</span>
<span> lastName: '<span class='token undefined'>R</span>',</span>
<span> age: <span class='token number'>4</span>,</span>
<span> eyeColor: '<span class='token undefined'>blue</span>',</span>
<span> <span class='token method'>fullName</span>:<span class='token function'>function</span>()<span class='token pun'>{</span></span>
<span>  <span class='token return'>return </span> <span class='token context'>this</span>.firstName+<span class="token undefined">" </span><span class="token undefined">"</span>+<span class="token context"> this</span>.lastName</span>
<span> <span class='token pun'>}</span></span>
<span><span class='token pun'>}</span>;</span>
`

export const getAge = `
<span>person.getAge = <span class='token function'>function</span>()<span class="token pun">{</span></span>
<span> <span class="token return">return</span> <span class="token context">this</span>.age; </span>
<span><span class='token pun'>}</span></span>
`

export const accessingMethods = `
<span>objectName.methodName() <span class="token comment">// VALID - OK </span></span>
<span>objectName["methodName"]() <span class="token comment"> // VLAID - WEIRD </span>
`

export const methodExercies = {
  project: 'Huddle Meeting',
  firstName: 'Manasa',
  lastName: 'R',
  email: 'manasarangaswamy93@gmail.com',
  companyEmail: 'manasa.rangaswamy@aroha.co.in',
  newTickets: 5,
  completed: 10,
  pending: 4,
  onHold: 2,
  continued: 3,
  fullName: function(){
    return this.firstName+ " " + this.lastName;
  }
}

export const methodExer = `
<span><span class='token keyword'>const </span>projects = <span class='token pun'>{</span></span>
<span> firstName: <span class='token undefined'>'Manasa'</span>,</span>
<span> lastName: <span class='token undefined'>'R'</span>,</span>
<span> project: <span class='token undefined'>'Huddle Meeting'</span>,</span>
<span> email: <span class='token undefined'>'manasarangaswamy93@gmail.com'</span>,</span>
<span> companyEmail: <span class='token undefined'>'manasa.rangaswamy@aroha.co.in</span>,</span>
<span> newTickets: <span class='token number'>5</span>,</span>
<span> completed: <span class='token number'>10</span>,</span>
<span> pending: <span class='token number'>1</span>,</span>
<span> onHold: <span class='token number'>2</span>,</span>
<span> continued: <span class='token number'>3</span>,</span>
<span> <span class='token methodKey'>fullName</span>: <span class='token function'>function</span>()<span class='token pun'>{</span></span>
<span>  <span class='token function'>return </span><span class='token context'>this</span>.firstName + " " + <span class='token context'>this</span>.lastName;</span>
<span> <span class='token pun'>}</span></span>
<span><span class='token pun'>}</span></span>
`

export const errorObj = `
<span><span class='token keyword'>const </span>projects = <span class='token pun'>{</span></span>
  <span> lastName: <span class='token undefined'>'R'</span>,</span>
  <span> project: <span class='token undefined'>'Huddle Meeting'</span>,</span>
  <span> email: <span class='token undefined'>'manasarangaswamy93@gmail.com'</span></span>
  <span> companyEmail: <span class='token undefined'>'manasa.rangaswamy@aroha.co.in</span>,</span>
  <span> newTickets: <span class='token number'>5</span>,</span>
  <span> completed: <span class='token number'>10</span>,</span>
  <span> pending: <span class='token number'>1</span>,</span>
<span><span class='token pun'>}</span></span>
`
export const getEmails = `
<span> <span class='token methodKey'>projects.getEmails</span>= <span class='token function'>function</span>()<span class='token pun'>{</span></span>
<span>  <span class='token function'>return </span><span class='token pun'>{</span></span>
  <span>email: <span class='token context'>this</span>.email,</span>
  <span>companyEmail: <span class='token context'>this</span>.lastName</span>
<span> <span class='token pun'>}</span></span>
<span> <span class='token pun'>}</span></span>
`
//new, hold, pending, nothing, invalid
/*
getTicketsCount = function(type){
  switch(type){
    case 'new':
        return 'The number of tickets are '+this.newTickets
    case 'hold':
    case 'pending':
    default:

  }
}
*/
export const getTicketsCount = `
<span>projects.getTicketsCount = <span class='token function'>function</span>(type)<span class='token pun'>{</span></span>
<span> <span class='token undefined'>switch</span>(type)<span class='token pun'>{</span></span>
<span> <span class='token'>case <span class='token number'>'new': </span></span></span>
<span>    <span class="token return">return </span><span class='token number'>'The number of new tickets are'</span>+ this.newTickets;</span>
<span> <span class='token'>case <span class='token number'>'pending': </span></span></span>
<span>    <span class="token return">return </span><span class='token number'>'The number of pending tickets are'</span>+ this.pending;</span>
<span> <span class='token'>case <span class='token number'>'new': </span></span></span>
<span>    <span class="token return">return </span><span class='token number'>'The number of dependency tickets are'</span>+ this.onHold;</span>
<span> <span class='token'>deault <span class='token number'>: </span></span></span>
<span>    <span class="token return">return </span><span class='token number'>'Please pass valid input'</span></span>
<span><span class='token pun'>}</span></span>
<span><span class='token pun'>}</span></span>
`

export const getIndividualCount = `
<span>projects.getTicketsCount = <span class='token function'>function</span>(type)<span class='token pun'>{</span></span>
<span> <span class='token undefined'>switch</span>(type)<span class='token pun'>{</span></span>
<span> <span class='token'>case <span class='token number'>'completed': </span></span></span>
<span>    <span class="token return">return <span class='token context'>this</span>.firstName+ <span class='token number'>'has completed'</span>+<span class='token context'>this.</span>completed+ <span class='token number'>'tickets'</span>;</span><span class='token number'></span></span>
<span> <span class='token'>case <span class='token number'>'undefined': </span></span></span>
<span>    <span class="token return">return <span class='token context'>this</span>.firstName+ <span class='token number'>'is working on'</span>+<span class='token context'>this.</span>continued+ <span class='token number'>'tickets'</span>;</span><span class='token number'></span></span>
<span> <span class='token'>deault <span class='token number'>: </span></span></span>
<span>    <span class="token return">return </span><span class='token number'>'Please pass valid input'</span></span>
<span><span class='token pun'>}</span></span>
<span><span class='token pun'>}</span></span>
`

export const objRef1 = `
<span class='token keyword'>const </span>education = {</span>
<span> university: <span class='token undefined'>'My University'</span>,</span>
<span> specialization: <span class='token undefined'>'CSE'</span></span>
<span>}</span>
`

export const objRef2 = `
<span><span class="token function">function</span> foo(obj){</span>
<span> obj.specialization = <span class="token undefined">"Mechanical"</span>;</span>
<span>}</span>
<span class='token keyword'>const </span>education = {</span>
<span> university: <span class='token undefined'>'My University'</span>,</span>
<span> specialization: <span class='token undefined'>'CSE'</span></span>
<span>}</span>
<span>foo(education);</span>
<span><span class='c-console'>console</span>.<span class='c-log'>log</span>(education);</span>
`

export const objRef2Ans = `
<span>{</span>
<span> university: <span class='token undefined'>'My University'</span>,</span>
<span> specialization: <span class='token undefined'>'Mechanical'</span></span>
<span>}</span>
`

export const objRef3 = `
<span><span class="token function">function</span> foo(obj){</span>
  <span> obj = {</span>
    location: <span class="token undefined">"Bangalore"</span>
<span>  }</span>
<span>}</span>
<span class='token keyword'>const </span>education = {</span>
<span> university: <span class='token undefined'>'My University'</span>,</span>
<span> specialization: <span class='token undefined'>'CSE'</span></span>
<span>}</span>
<span>foo(education);</span>
<span><span class='c-console'>console</span>.<span class='c-log'>log</span>(education);</span>
`

export const objRef3Ans = `
<span>{</span>
<span> university: <span class='token undefined'>'My University'</span>,</span>
<span> specialization: <span class='token undefined'>'CSE'</span></span>
<span>}</span>
`