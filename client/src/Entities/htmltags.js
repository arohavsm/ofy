import React from 'react'
import { Tag, Punctuation, KeyWord } from './hoc';

export const HTML = ({closing, tagName, symbol='/'}) => (
    <Tag>
        {
          closing
            ? 
            <Punctuation>&lt;{symbol}</Punctuation>
            :
            <Punctuation>&lt;</Punctuation>
        }
        {tagName}
        <Punctuation>&gt;</Punctuation>
    </Tag>
)

export const Keywords = ({keyword, name}) => (
    <span>
      <KeyWord> {keyword} </KeyWord>
      {name}
    </span>
)

export const SingleLineComment = ({comment}) => (
  <span className="token comment"> {comment}</span>
)

export const Initialize = ({name, value}) => (
  <span>{name} <span className="token number">{value}</span></span>
)

export const Misc = ({value, type}) => (
  <span className={'token '+type}>{value}</span>
)

export const funcDefinition = ({name, params}) => (
  <span className="token function"> function 
      <span className="token definition"> {name} ( {params.join(',')} ) </span>
      </span>
)

export const callFun = ({name, params}) => (
  <span className="token definition"> {name} ( {params.join(',')} ) </span>
)

export const Ans = ({ans}) => (
  <span className="q-a">{ans}</span>
)

export const Print = ({value}) => (
  <span><span className="c-console">console</span>.<span className="c-log">log</span>({value})</span>
)