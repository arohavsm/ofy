function PrettyObj({object, children}) {
  const keys = Object.keys(object) || []
  let html = ''
  let childCount = 0;
  for(let key in object){
      if(typeof object[item] === 'function') {
        return `
        <span>
        <span class='token function'>function</span>()<span class='token pun'>{</span>
        </span>
        `
      }
  }
  // let html = keys.map( item => {
  //   if(typeof object[item] === 'function') {
  //     return '&nbsp;&nbsp'
  //   }
  // })
}

class ParseFuntion{
  fun = '';
  parsed = '';
  cosntructor(fun) {
    this.fun = fun.toString();
    this.parsed = ''
  }
  splitFun() {
    const regex = /function\(\){([\n\s\w\W]*)}$/;
    const parsed = this.fun.match(regex)
  }
}