import React, { memo, useEffect } from 'react'

// import hljs from 'highlight.js'
// import 'highlight.js/styles/an-old-hope.css'

import Prism from "prismjs";
import './prismTheme.css'

const PostContent = ({ content }) => {
  useEffect(() => {
    Prism.highlightAll();
    // return () => {
    //   hljs.initHighlighting.called = false
    // }
  }, [])

  return (
    <div
      className="post-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default memo(PostContent)
