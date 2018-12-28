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
-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
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
    & .location {
        margin-left: 20px;
    }
    @media (max-width: 384px) {
    & .location {
        margin-left: 100px;
    }
    }
` 
const JobSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 280px;
    margin-left: 20px;
    @media (max-width: 384px) {
        width: 200px;
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
        z-index: 3;
        &:hover {
            background:linear-gradient(207deg, rgba(102,51,153,0.9) 10%, rgba(81,24,138,1) 73%);
            color: white;
            border: 1px solid #F9F9F9;
        }
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

const TechNotFound = styled.p`
   
`

export default class JobsPage extends Component {  
   
    state = {
        inputTechType:"",
        techType:"",
     
    }

    techFound = false;
    hanldeChange = (e)=>{
        this.techFound = false;
        this.setState({
            inputTechType : e.target.value,
        },()=>{
            if(this.state.inputTechType === "")
            this.setState({techType:""});
        })
    }

    handleSubmit = (e)=> {
        if(e)
        e.preventDefault();
        this.setState({
            techType : this.state.inputTechType.toLowerCase().trim(),
        });
        
    }
   
   
    render () {

    const {data} = this.props; 
    return(
    <Layout style={{ maxWidth: 1300, width: '100%' }}>
    <SEO title="JOBS" />
    <Form onSubmit={(e)=>this.handleSubmit(e)}
    
    >
    <SearchInput  type="text" placeholder="&#x1F50D; Search tech here..." value={this.state.inputTechType} onChange={(e)=>this.hanldeChange(e)}/>
    <SearchButton type="submit" ref={(button)=>{this.searchtechbutton = button}} value="Search"/>
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
        
        let tech = techstack ? techstack.split(/\s*,\s*/,5).map(t=>{ if ((new RegExp(`^${this.state.techType}$`,"g")).test(t.trim().toLowerCase())) return true; else return false; }) : false ;
        if( tech && tech.reduce((a,c)=> { return a || c}) ) {  
        this.techFound = true;    
        return(
        <Job key={jobURL + companyURL + i}>
            <JobWrap className="jobs-wrap" to={slug}>
            <JobSectionWithImage>
            <StyledImg fixed={logo.childImageSharp.fixed} />
            <JobSection>
            <span><h4>{job}</h4></span>
            <span >
            {company}
            </span>
            </JobSection>
            </JobSectionWithImage>
            <p className="location" style={{width:200}}>Location: <b>{location}</b></p>
            <p className="category" style={{width:200}}>Category: <b>{category}</b></p>
            <Techstacks style={{width:320}}>
            {techstack.split(",").slice(0,5).map((tech, i)=>
               <p key={tech + i} onClick={(e)=>{e.preventDefault(); this.setState({inputTechType: tech.toLowerCase().trim(), techType: tech.toLowerCase().trim()},()=>{this.searchtechbutton.click();});}} >{tech}</p>
            )
            }
            </Techstacks>
            <span>Date Posted: <em>{date}</em></span>
            </JobWrap>
        </Job>);}
        else { 
            this.techFound = this.techFound || tech.reduce((a,c)=> { return a || c} );
            return <></>;
        };    
    }
    )}

    {
     this.state.techType && !this.techFound && <TechNotFound> <span role="img" aria-label="tech " >🙈</span> not found... </TechNotFound>
    }
   

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
            <Job key={jobURL + companyURL + "all" + i}>
                <JobWrap className="jobs-wrap" to={slug}>
                <JobSectionWithImage>
                <StyledImg fixed={logo.childImageSharp.fixed} />
                <JobSection>
                <span ><h4>{job}</h4></span>
                <span >
                {company}
                </span>
                </JobSection>
                </JobSectionWithImage>
                <p className="location" style={{width:200}}>Location: <b>{location}</b></p>
                <p className="category" style={{width:200}}>Category: <b>{category}</b></p>
                <Techstacks style={{width:320}}>
                {techstack.split(",").slice(0,5).map((tech, i)=>
                   <p key={tech + "all" + i} onClick={(e)=>{ e.preventDefault(); this.setState({inputTechType: tech.toLowerCase().trim(), techType: tech.toLowerCase().trim()},()=>{this.searchtechbutton.click();});   }} >{tech}</p>     
                )
                }
                </Techstacks>
                <span>Date Posted: <span style={{color: "grey"}}>{date}</span></span>
                </JobWrap>
            </Job>);
            else return <React.Fragment></React.Fragment>
             
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
                      date(formatString: "DD MMMM, YYYY")
                  }
              }
          }
      }
  }
  `


