import React, {useEffect, useState} from 'react'
import ReactTypist from 'react-typist';

const Typist = ({sentences, component: Component}) => {
    const [completed, setCompleted] = useState(true)
    useEffect(() => {
        setCompleted(true)
      }, [completed])

  
    const sentecesWithBackspace = sentences.reduce((sentencesArr, sentence) => {
      sentencesArr.push(<Component>{ sentence }</Component>)
      sentencesArr.push(<ReactTypist.Backspace count={sentence.length} delay={1000} />)
      return sentencesArr
    },[])

    return (
        completed &&
        <ReactTypist avgTypingDelay={80} onTypingDone={() => setCompleted(false)}>
            { sentecesWithBackspace }
        </ReactTypist>
    )
}


export default Typist