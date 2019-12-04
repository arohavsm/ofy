export const let_q1 = `
<span><span class='token keyword'>let </span><span>x = <span class='token number'>10</span></span></span>
<span>x = x+<span class='token number'>20</span></span>
<span><span class='c-console'>console</span>.<span class='c-log'>log</span>(x)</span>
`

export const let_q2 = `
<span><span class='token keyword'>let </span><span>x = '<span class='token number'>one</span>'</span></span>
<span><span class='token function'>if</span>(<spanclass='token boolean'>true</span>)<span class='token pun'>{</span></span>
<span> <span class='token keyword'>let </span>a = <span class='token number'>100</span></span>
<span><span class='token pun'>}</span></span>
<span><span class='c-console'>console</span>.<span class='c-log'>log</span>(x + a)</span>
<span><span class='c-console'>console</span>.<span class='c-log'>log</span>(x + y)</span>
`

export const let_q3 = `
<span><span class='token keyword'>let </span><span>x = '<span class='token number'>one</span>'</span></span>
<span><span class='c-console'>console</span>.<span class='c-log'>log</span>(y)</span>
<span><span class='token keyword'>let </span>y = <span class='token number'>100</span></span>
<span><span class='c-console'>console</span>.<span class='c-log'>log</span>(x)</span>
`
export const let_q4 = `
<span><span class='token keyword'>let </span><span>x = '<span class='token number'>one</span>'</span></span>
<span><span class='token function'>if</span>(<spanclass='token boolean'>true</span>)<span class='token pun'>{</span></span>
<span> <span class='token keyword'>var </span><span>x = '<span class='token number'>two</span>'</span></span>
<span><span class='token pun'>}</span></span>
<span><span class='c-console'>console</span>.<span class='c-log'>log</span>(x)</span>
`
export const let_q5 = `
<span><span class='token keyword'>let </span>x</span>
<span><span class='token keyword'>var </span>x</span>
<span><span class='c-console'>console</span>.<span class='c-log'>log</span>(x)</span>
`

export const let_q6 = `
<span><span class='token keyword'>let </span><span>x</span></span>
<span>x = 'WWII'</span>
<span><span class='c-console'>console</span>.<span class='c-log'>log</span>(x)</span>
`

export const let_q7 = `
<span>Can let be redeclared with in the scope?</span>
`
export const let_q8 = `
<span>Can let be reassigned with in the scope?</span>
`