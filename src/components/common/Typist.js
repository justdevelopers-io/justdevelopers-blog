import React, { useEffect, useState, Fragment } from 'react'
import ReactTypist from 'react-typist'
import styled, { keyframes, css } from '@styles'

const Typist = ({ sentences, component: Component }) => {
  const [completed, setCompleted] = useState(true)
  
  useEffect(() => {
    setCompleted(true)
  }, [completed])

  const sentecesWithBackspace = sentences.reduce((sentencesArr, sentence) => {
    sentencesArr.push(<Component key={sentence}>{sentence}</Component>)
    sentencesArr.push(
      <ReactTypist.Backspace
        key={sentence + 'bs'}
        count={sentence.length}
        delay={1000}
      />
    )
    return sentencesArr
  }, [])

  if (!completed) return null

  return (
    <ReactTypistWithStyles
      avgTypingDelay={80}
      onTypingDone={() => setCompleted(false)}
    >
      {sentecesWithBackspace}
    </ReactTypistWithStyles>
  )
}

const blink = keyframes`
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
`

const ReactTypistWithStyles = styled(ReactTypist)`
  ${(props) => {
    return css`
      .Cursor {
        display: inline-block;
        vertical-align: middle;
      }
      .Cursor--blinking {
        opacity: 1;
        animation: ${blink} 1s linear infinite;
      }
    `
  }}
`

export default Typist
