import React from 'react'
import ReactDOM from 'react-dom'
import WordCounter from './WordCounter'

ReactDOM.render(
    <WordCounter text="The rain in spain falls mainly on the plain" targetWordCount={50} />,
    document.getElementById('app')
)