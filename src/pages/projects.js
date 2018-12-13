import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { ReactComponent as GitHub } from '../icons/github.svg'
import { ReactComponent as Launch } from '../icons/launch.svg'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 24px;
  grid-row-gap: 32px;
  justify-items: center;
  margin-top: 40px;
`

const Project = styled.div`
  cursor: pointer;
  & img {
    box-shadow: rgba(102, 51, 153, 0.1) 0px 4px 10px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    margin-bottom: 0.4rem;
  }
  & h4 {
    margin-bottom: 0.4rem;
    margin-top: 0;
    font-size: 1.1rem;
  }
  & p {
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;
    color: hsla(270, 6.8076334240000005%, 0%, 0.54);
  }
  & div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  & svg:hover {
    fill: rgba(140, 101, 179);
  }
  &:hover {
    & img {
      transform: translateY(-3px);
      box-shadow: rgba(140, 101, 179, 0.5) 0px 8px 20px;
    }
    & h4 {
      color: rgba(140, 101, 179);
    }
  }
`

const ProjectPage = () => (
  <Layout style={{ maxWidth: 1200, width: '80%' }}>
    <SEO title="Projects" />
    <Grid>
      {[
        { name: 'Project-1', description: 'Web App', image: '' },
        { name: 'Project-2', description: 'Web App', image: '' },
        { name: 'Project-3', description: 'Web App', image: '' },
        { name: 'Project-4', description: 'Web App', image: '' },
        { name: 'Project-5', description: 'Web App', image: '' },
      ].map(project => (
        <Project key={project.name}>
          <img
            src={require('../../projects/project-1/project-1.png')}
            alt="project-1"
            height={180}
          />
          <h4>{project.name}</h4>
          <div>
            <p>{project.description}</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <GitHub height="20px" />
              <Launch height="24px" />
            </div>
          </div>
        </Project>
      ))}
    </Grid>
  </Layout>
)

export default ProjectPage
