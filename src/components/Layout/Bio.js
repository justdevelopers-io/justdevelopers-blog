import React from 'react'
import styled, { css, device } from '@styles'
import { rhythm } from '@utils/typography'

const BioDescription = ({ className, description }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{ __html: description }}
  ></div>
)

export default ({ settings }) => (
  <Bio>
    <Avatar src={settings.author_avatar.imgix_url} alt={settings.author_name} />
    <StyledBioDescription description={settings.author_bio} />
  </Bio>
)

const Bio = styled.div`
  display: flex;
  /* max-width: ${rhythm(24)}; */
  /* margin-right: auto;
  margin-left: auto; */
  font-size: 0.75rem;
  margin-bottom: 2.5rem;
  padding: 0 1.17rem;
  align-items: center;
  text-align: center;
  width: 100%;
  background: var(--yellow);
  padding: 1rem calc((100% - 34.8rem) / 2);

  @media ${device.TABLET} {
    font-size: 0.85rem;
  }
`

const StyledBioDescription = styled(BioDescription)`
  ${(props) => {
    return css`
      p {
        margin-bottom: 0;
        color: var(--bgColor);
      }
      strong {
        color: #213843;
      }
      a {
        background: var(--bgColor);
        padding: 1px 5px;
        border-radius: 4px;
        :hover {
          text-decoration: none;
        }
      }
    `
  }}
`

const Avatar = styled.img`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  width: 25%;
  height: auto;
  border-radius: 50%;
`
