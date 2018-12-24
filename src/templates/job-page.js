import React from 'react'

import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const JobWrap = styled.div`

  text-decoration: none;
  color: black;
  @media(max-width: 1000px) {
  & .category {
      display:none;
  }
}
`
const Job = styled.div`
    font-size: 0.94rem;
    font-family: 'Roboto', sans-serif;  
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 10px;
    padding-top: 10px;
    border-bottom: 1px solid #eee;
    & .jobs-wrap {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: flex-start;
      
    }
    
` 
const JobSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 280px;
    margin-left: 10px;
    & a {
        text-decoration: none;
        color: black;

        &:hover {
            color: #663399;
        }
    }
`
const JobSectionWithImage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;  
`

const StyledImg = styled(Img)`
  
`
const Techstacks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items:center;
    flex-wrap:wrap;
    margin: 2px 2px;
    
    
    & p {
        padding: 3px !important;
        margin: 2px 2px;
        border: 1px solid grey;
        border-radius: 3px;
        text-align:center;
    }
`
const Body = styled.div`
font-size: 0.94rem;
font-family: 'Roboto', sans-serif;
margin-top: 60px;
margin-bottom: 100px;

` 

const JobPage = ({data})=> {
    const jobdata= data.markdownRemark;
    const {
      job,
      jobURL,
      company,
      logo,
      companyURL,
      location,
      category,
      techstack,
      date,
    } = jobdata.frontmatter;
    
    return(
    <Layout  style={{ maxWidth: 1200, width: '80%' }}>
    <SEO title={job} /> 
    
    <Job>
    <JobWrap className="jobs-wrap" >
            <JobSectionWithImage>
            <StyledImg fixed={logo.childImageSharp.fixed} />
            <JobSection>
            <a href={jobURL} target="_blank" rel="noopener noreferrer" ><h4>{job}</h4></a>
            <a href={companyURL} target="_blank" rel="noopener noreferrer">
            {company}
            </a>
            </JobSection>
            </JobSectionWithImage>
            <p className="location" style={{width:200}}>Location: <b>{location}</b></p>
            <p className="category" style={{width:200}}>Category: <b>{category}</b></p>
            <Techstacks style={{width:320}}>
            {techstack.split(",").slice(0,5).map((tech, i)=>
               <p key={tech + i}>{tech}</p>     
            )
            }
            </Techstacks>
            <span>Date Posted: <em>{date}</em></span>
            </JobWrap>
    </Job>
        <Body dangerouslySetInnerHTML={{ __html : jobdata.html}}/>
   
    </Layout>

)
}

export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        logo {
            childImageSharp {
              fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed
              }
            }
           }
           job
           jobURL
           company
           companyURL
           location
           category
           techstack
           date
      }
    }
}
`

export default JobPage

