import React, { memo, useEffect } from 'react'

import Prism from 'prismjs'
import './prismTheme.css'

const PostContent = ({ content }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div
      className="post-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default memo(PostContent)
