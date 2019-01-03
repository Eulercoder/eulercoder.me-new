import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Body = styled.div`
    margin: 5%;
    font-size: 0.94rem;
    font-family: 'Roboto', sans-serif;
    & a {
        color: #663399;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

`

const AboutUs = ()=>(
    <Layout title="About Eulercoder">
        <SEO title="About Eulercoder"/>
        <Body>
        <h1>About Us</h1>
        <hr />
            <p>Eulercoder.me is a non-profit organization on a mission to help computer science students
              learning new technologies, getting internships, jobs and promote open source work.
              We are a team of developers, software engineers, tech geeks and
               amazing content writers. If you are a computer science student or someone
               who loves programming and Open Source then this site is for you.
               We write about Open Source, Internship, programming languages (C, C++, Python, Swift, R etc),
               web development (React, JavaScript, node.js etc), web design, backend architecture and
               computer science in general.</p>

            <p>Eulercoder.me is run and maintained by Vikesh Tiwari and the core Eulercoder Technologies team.
              Eulercoder Technologies is a development studio focusing on Automation, Chatbots
              and Web application development. We started "Eulercoder for Startups" initiative to work
              with Co-Founder who struggle to build a product in the beginning phase when they don't have a team.
              We have worked with over 12+ startups and co-founders from all around the globe. <br></br>
              <br></br>
              If you are a startup and want to launch your first MVP with us, please write to us at - hello [at] eulercoder [dot] com.
              We work, manage and help you scale until you have your team to work and manage the product.</p>
        </Body>
    </Layout>
)

export default AboutUs
