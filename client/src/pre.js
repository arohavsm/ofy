<pre><code class="language-jsx"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> makeStyles <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@material-ui/core/styles'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'@material-ui/core/Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> useStyles <span class="token operator">=</span> <span class="token function">makeStyles</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  root<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    background<span class="token punctuation">:</span> <span class="token string">'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'</span><span class="token punctuation">,</span>
    border<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    borderRadius<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    boxShadow<span class="token punctuation">:</span> <span class="token string">'0 3px 5px 2px rgba(255, 105, 135, .3)'</span><span class="token punctuation">,</span>
    color<span class="token punctuation">:</span> <span class="token string">'white'</span><span class="token punctuation">,</span>
    height<span class="token punctuation">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
    padding<span class="token punctuation">:</span> <span class="token string">'0 30px'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Hook</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> classes <span class="token operator">=</span> <span class="token function">useStyles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>classes<span class="token punctuation">.</span>root<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span>Hook<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

/* code css */
.jss242 code[class*="language-"] {
    color: #fff;
    background-color: #333;
}

.jss242 p code, .jss242 ul code, .jss242 pre code {
    font-size: 14px;
}

.jss242 code {
    color: rgba(0, 0, 0, 0.87);
    display: inline-block;
    padding: 2px 6px;
    font-size: 14px;
    font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
    border-radius: 2px;
    background-color: rgba(255,229,100,0.1);
    -webkit-font-smoothing: subpixel-antialiased;
}

/* end of code */

token keyword

.token.keyword {
    color: #66d9ef;
    font-size: 14px;
}

.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted {
    color: #a6e22e;
}

.token.punctuation {
    color: #f8f8f2;
}

.jss242 .token.operator {
    background: transparent;
}

.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string, .token.variable {
    color: #f8f8f2;
}

.token.atrule, .token.attr-value, .token.function, .token.class-name {
    color: #e6db74;
}
.token.boolean, .token.number {
    color: #b78eff;
}