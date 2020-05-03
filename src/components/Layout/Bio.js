import React from 'react'
import styled, {css} from "styled-components"
import { rhythm } from '@utils/typography'






const BioDescription = ({ className, description }) => (
    <div className={className} dangerouslySetInnerHTML={{ __html: description }}></div>
)



export default ({ settings }) => (
  <Bio>
    <Avatar
      src={settings.author_avatar.imgix_url}
      alt={settings.author_name}
    />
    <StyledBioDescription description={settings.author_bio } />
  </Bio>
)

const Bio = styled.div`
  display: flex;
  max-width: ${rhythm(24)};
  margin-right: auto;
  margin-left: auto;
  font-size: .85rem;
  margin-bottom: 2.5rem;
  padding: 0 1.17rem;
  align-items: center;
  text-align: center;
`


const StyledBioDescription = styled(BioDescription)`
  ${props => {
      return css`
        p {  margin-bottom: 0; }
      `
    }
  }
`

const Avatar = styled.img`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  width: 25%;
  height: auto;
  border-radius: 50%;
`
