import React from 'react'

export const Tag = ({children}) => (
  <span className="token tag">{children}</span>
)

export const Punctuation = ({children}) => (
  <span className="token punctuation">{children}</span>
)

export const KeyWord = ({children}) => (
  <span className="token keyword">{children}</span>
)