const top = (head='') =>`
<!doctype html>
<html>
  <head>
    ${head}
  </head>
  <body>
  `

const bottom = ` </body>
</html>
`
export const elementScript = `
<!doctype html>
<html>
  <head>
    
  </head>
  <body>
    <div onclick="alert('clicked')"> Click Me</div>
  </body>
</html>
`
export const insideHtml = `
  <!-- 
       writing javascript inside html file using 
       <script> tag
  -->
  <!doctype html>
  <html>
    <head>
      
    </head>
    <body>
      <script>
        console.log('Hello')
      </script>
    </body>
  </html>
`

export const fileInHtml = `
<!-- including javascript file inside html -->
<!--
  Folder Structure
  Project
    1.index.html
    2. main.js -->
<!-- index.html -->
<!doctype html>
<html>
  <head>
    
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>

<!-- main.js -->
console.log('Hello World')
`

export const goodJS = `
<!doctype html>
<html>
  <head>
    <script src="main1.js"></script> // GOOD 
  </head>
  <body>
    <script src="main3.js"></script> //GOOD
    <div>
      <p id="one">Hello</p>
      <script> //GOOD
          var para = document.getElementById("#one");
      </script>
    </div>
    <script src="main2.js"><script> //GOOD
    <script> // GOOD
        alert('Alert')
    </script>
  </body>
</html>
`

export const badJS = `
<script src="index.js"></script> //VV BAD
<!doctype html>
<html>
  <head>
  </head>
  <script src="main.js"></script> //VV BAD
  <body>
    <div>
      <p id="one">Hello</p>
    </div>
  </body>
  <script src="main2.js"></script> //BAD
  <script> //BAD
    console.log('BAD SCRIPT')
  </script>
</html>
<script src="main3.js"></script> //VV BAD
`

export const badApproach = `<!-- Copy This Code and execute -->
${top(
  `<script>
      var elem = document.getElementById("one")
      elem.style.backgroundColor="Blue";
      </script>`
)}
    <p id="one">
    Add Background color.
    </p>
    <div> Hello </div>
  ${bottom}
`

export const badApproach2 = `<!-- Copy this code and execute -->
<!-- index.html file -->
${top('<script src="main.js"></script>')}
    <p id="one">
      Add Back ground color.
    </p>
${bottom}
<!-- Create main.js file in the same directory and include it in the html file -->
<!-- that you have created and include below content in it -->
<!-- main.js -->
  var elem = document.getElementById("one")
      elem.style.backgroundColor="Blue";
`

export const goodApproach = `<!-- Copy This Code and execute -->
<!-- Write down the parsing process -->
${top()}
  <p id="one">
      Add Background color.
  </p>
  <script> // observe we are not keeping script at the end of the body
      var elem = document.getElementById("one")
      elem.style.backgroundColor="Blue";
  </script>
  <div> Hello </div>
${bottom}
`

export const cantReassign = `
 //Example 1
  const x = 'I am 24th letter'
  if(true) {
    const x = 'I am 3rd from the end' // this is not valid. you cannot re-declare/re-assign const.
  }

  //Example 2
  const y = 'I am 25th letter'
  { // empty brackets creates new block along with new scope declared with in the block.
    y = "I am 2nd from the end" // this is valid
  }

  //Example 3
  const name = "HELLO" // global scope
  function area() { // function creates new block scope.
    const name = "HELIO" // this is valid
    const name = "WORLD" // this is not valid as this declaration is with in the functions where const name is already initialized.
  }
`

export const objConst = `
// Example 1
  const obj = {
    name: 'Helio'
  };
  obj = {
    name: 'Changing text'
  }; // INVALID as we are assigning obj value to new object

// Example 2
  const obj1 = {
    name: 'Wordl'
  }
  obj1.name = "World2'; //VALID.
`

export const arrConst = `
//Example1
const arr = [1,2,3];
arr = []; // INVALID as we are re-assiging new value to arr

//Example 2
const arr = [1,3,4]
arr[0] = 5; // VALID as we are changing value inside array.
`

export const varScope = `
<span><span class='token comment'>//First let us check var</span> </span>
<span><span class='token keyword'>var </span>a = <span class='token number'>10</span></span>
<span><span class='token keyword'>var </span>b = <span class='token number'>20</span></span>
<span><span class='token function'>if</span>(b > <span class='token number'>10</span>)<span class='token pun'>{</span></span>
<span> <span class='token keyword'>var </span>a = '<span class='token number'>hello</span>'; </span>
<span><span class='token pun'>}</span></span>
<span><span class='c-console'>console</span>.<span class='c-log'>log</span>(a)</span>
`

export const constScope = `
<span><span class='token comment'>//const</span> </span>
<span><span class='token keyword'>const </span>a = <span class='token number'>10</span></span>
<span><span class='token keyword'>const </span>b = <span class='token number'>20</span></span>
<span><span class='token function'>if</span>(b > <span class='token number'>10</span>)<span class='token pun'>{</span></span>
<span> <span class='token keyword'>const </span>a = '<span class='token number'>hello</span>'; </span>
<span><span class='token pun'>}</span></span>
<span><span class='c-console'>console</span>.<span class='c-log'>log</span>(a)</span>
`

export const letScope = `
<span><span class='token comment'>//let</span> </span>
<span><span class='token keyword'>let </span>a = <span class='token number'>10</span></span>
<span><span class='token keyword'>let </span>b = <span class='token number'>20</span></span>
<span><span class='token function'>if</span>(b > <span class='token number'>10</span>)<span class='token pun'>{</span></span>
<span> <span class='token keyword'>let </span>a = '<span class='token number'>hello</span>'; </span>
<span><span class='token pun'>}</span></span>
<span><span class='c-console'>console</span>.<span class='c-log'>log</span>(a)</span>
`