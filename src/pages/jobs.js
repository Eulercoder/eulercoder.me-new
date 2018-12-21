import React, { Component } from 'react';
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const JobWrap = styled(Link)`
  font-size: 0.94rem;
  font-family: 'Roboto', sans-serif;  
  text-decoration: none;
  color: black;
  @media(max-width: 1000px) {
  & .category {
      display:none;
  }
}
`

const StyledImg = styled(Img)`
  
`
const Job = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 90vw;
    border-bottom: 1px solid #eee;
    & .jobs-wrap {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        width: 95vw;
        box-sizing: border-box;
        padding-bottom: 10px;
        padding-top: 10px;
    }
    
    &:hover {
        background: #F9F9F9;
    }
` 
const JobSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 280px;
    margin-left: 20px;

    & a {
        text-decoration: none;
        color: black;

       
    }
`
const JobSectionWithImage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;  
`

const Jobs = styled.div`
  
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

const Form = styled.form`
    width: 300px;
    margin: 30px auto;
`

const SearchButton = styled.input`
    font-family: 'Roboto', sans-serif; 
    background:linear-gradient(207deg, rgba(102,51,153,0.9) 10%, rgba(81,24,138,1) 73%);
    border:none;
    color: white;
    cursor:pointer;
    padding: 4px 10px;
    margin-left: 6px;
    outline: none;
`

const SearchInput = styled.input`
    font-family: 'Roboto', sans-serif;
    outline: none;
    border: none;
    border-bottom: 2px solid #8346c1;  
    padding: 2px 4px; 

    &:focus {
       border-bottom: 2px solid #663399; 
    }
`

export default class JobsPage extends Component {  
   
    state = {
        inputTechType:"",
        techType:"",
    }

    hanldeChange = (e)=>{
        if(this.state.inputTechType.trim().length < 3) {
            this.setState({
                techType:"",
            });
        }
        this.setState({
            inputTechType : e.target.value,
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        this.setState({
            techType : this.state.inputTechType.toLowerCase().trim(),
        });
        console.log(this.state.techType);
    }
    
    render () {

    const {data} = this.props; 
    return(
    <Layout style={{ maxWidth: 1300, width: '90%' }}>
    <SEO title="JOBS" />
    <Form onSubmit={(e)=>this.handleSubmit(e)}>
    <SearchInput  type="text" placeholder="&#x1F50D; Search tech here..." value={this.state.inputTechType} onChange={(e)=>this.hanldeChange(e)}/>
    <SearchButton type="submit" value="Search"/>
    </Form>
    <Jobs style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
    
    { this.state.techType && data.allMarkdownRemark.edges.map((
        {
            node: {
                fields: { slug },
                frontmatter: {
                    logo,
                    job,
                    jobURL,
                    company,
                    techstack,
                    companyURL,
                    location,
                    category,
                    date,
                },
              },
        }, i
    )=> { 
        if(techstack.split(/\s*,\s*/,5).toString().includes(this.state.techType)) {
        console.log("search "+techstack.split(",",5).toString() );
        return(
        <Job key={jobURL + companyURL + `${i}`}>
            <JobWrap className="jobs-wrap" to={slug}>
            <JobSectionWithImage>
            <StyledImg fixed={logo.childImageSharp.fixed} />
            <JobSection>
            <a  target="_blank" rel="noopener noreferrer" ><h4>{job}</h4></a>
            <a  target="_blank" rel="noopener noreferrer">
            {company}
            </a>
            </JobSection>
            </JobSectionWithImage>
            <p className="location" style={{width:200}}>Location: <b>{location}</b></p>
            <p className="category" style={{width:200}}>Category: <b>{category}</b></p>
            <Techstacks style={{width:320}}>
            {techstack.split(",").slice(0,5).map((tech, i)=>
               <p>{tech}</p>     
            )
            }
            </Techstacks>
            <span>Date Posted: <em>{date}</em></span>
            </JobWrap>
        </Job>);}
        else return;    
    }
    )}

    {
        !this.state.techType && data.allMarkdownRemark.edges.map((
            {
                node: {
                    fields: { slug },
                    frontmatter: {
                        logo,
                        job,
                        jobURL,
                        company,
                        techstack,
                        companyURL,
                        location,
                        category,
                        date,
                    },
                  },
            }, i
        )=> { 
           if(!this.inputTechType)
            return(
            <Job key={jobURL + companyURL + "all" + `${i}`}>
                <JobWrap className="jobs-wrap" to={slug}>
                <JobSectionWithImage>
                <StyledImg fixed={logo.childImageSharp.fixed} />
                <JobSection>
                <a  target="_blank" rel="noopener noreferrer" ><h4>{job}</h4></a>
                <a  target="_blank" rel="noopener noreferrer">
                {company}
                </a>
                </JobSection>
                </JobSectionWithImage>
                <p className="location" style={{width:200}}>Location: <b>{location}</b></p>
                <p className="category" style={{width:200}}>Category: <b>{category}</b></p>
                <Techstacks style={{width:320}}>
                {techstack.split(",").slice(0,5).map((tech, i)=>
                   <p>{tech}</p>     
                )
                }
                </Techstacks>
                <span>Date Posted: <em>{date}</em></span>
                </JobWrap>
            </Job>);
             
        }
        )

    } 
                
    </Jobs>
    </Layout>
        )
    }

    
}

export const query = graphql`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
      ) 
      {
          edges {
              node {
                  fields {
                      slug
                  }
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
      }
  }
  `


