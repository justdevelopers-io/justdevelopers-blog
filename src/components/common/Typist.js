import React, {useEffect, useState} from 'react'
import ReactTypist from 'react-typist';

const Typist = ({sentences, component: Component}) => {
    const [completed, setCompleted] = useState(true)
    useEffect(() => {
        setCompleted(true)
      }, [completed]);
    return (
        completed &&
        <ReactTypist avgTypingDelay={80} onTypingDone={() => setCompleted(false)}>
            {sentences.map(sentence => (
              <>
                <Component>{ sentence }</Component>
                <ReactTypist.Backspace count={sentence.length} delay={1000} />
              </>
            ))}

        </ReactTypist>
    )
}


export default Typist