import React from 'react'
import styled from "styled-components"
import { rhythm } from '@utils/typography'

export default ({ settings }) => (
  <Bio>
    <Avatar
      src={settings.author_avatar.imgix_url}
      alt={settings.author_name}
    />
    <div dangerouslySetInnerHTML={{ __html: settings.author_bio }} />
  </Bio>
)

const Bio = styled.div`
  display: flex;
  margin-right: ${rhythm(2)};
  margin-left: ${rhythm(2)};
  margin-bottom: ${rhythm(1)};
`

const Avatar = styled.img`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  width: ${rhythm(2)};
  height: ${rhythm(2)};
  border-radius: 50%;
`
