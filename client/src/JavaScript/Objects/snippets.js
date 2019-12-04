export const example1 = `
  <span class='token function'> function </span>fun(){
    <span class="c-console">console</span>.<span class="c-log">log</span>('hello')
  }
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
<span>  state<span class='token cstr'>:</span> <span class='token cstr-name'> 'KA'</span><span class='token cstr'>,</span></span>
<span> city<span class='token cstr'>:</span> <span class='token cstr-name'> 'Bangalore'</span></span>
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
<span><span class='token keyword'>var </span>person = <span class='token pun'></span></span>
<span> name: '<span class='token cstr-name'>Manasa R</span>',</span>
<span> city: '<span class='token cstr-name'>Durga </span>',</span>
<span><span class='token pun'>}</span></span>
<span><span class='token comment'>//Accessing using dot notation </span></span>
<span><span class='c-console'>console</span>.<span class='c-log'>log</span>(person.name)</span>
<span><span class='token comment'>//Accessing using bracket notation </span></span>
<span><span class='c-console'>console</span>.<span class='c-log'>log</span>(person<span class='token pun'>[</span>'<span class='token cstr-name'>city</span>'<span class='token pun'>]</span>)</span>
`