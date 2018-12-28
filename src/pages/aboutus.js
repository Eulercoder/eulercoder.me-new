import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Body = styled.div`
    
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
    <Layout >
        <SEO title="About Eulercoder"/>
        <Body>
        <h1>Hi Welcome to Eulercoder!</h1>    
        <hr />
            <p>Eulercoder is a non-profit organization on a mission to be the best Computer Science portal on the web. We are a team of developers, software engineers, tech geeks and amazing content writers. If you are a computer science student or someone who loves programming and web development then this site is for you. We write about Open Source, Internship, programming languages (C, C++, Python, Swift, R etc), web development (React, JavaScript, node.js etc), web design, mobile development, tech reviews and mobile tricks.</p>
            
            <p>Eulercoder is run and maintained by Vikesh Tiwari. Vikesh is currently working as freelance developer and handles Eulercoder as well. Recently we started Eulercoder for Startups, where our community of developers help non-tech founders in building the
             MVP and work as a tech team. Vikesh previously worked at Speedbox as CTO in Mumbai, interned at <a href="/2017/07/slack-internship-sf-silicon-valley/">Slack in summer 2016 </a>and twice at <a href="http://www.directi.com/">Directi</a>, Mumbai. He has contributed to many open source projects and worked as freelance bot developer. See all <a href="https://www.github.com/vicky002">open soure projects by Vikesh</a> on Github. His project <a href="https://github.com/vicky002/AlgoWiki">AlgoWiki</a> was used in a workshop at MIT. Read his interview with GeeksforGeeks. </p>
            
            <ul>
            <li>GeeksforGeeks Feature- <a href="http://www.geeksforgeeks.org/geek-on-the-top-vicky-tiwari/">Geek on the Top - Vikesh Tiwari</a></li>
            </ul>
        </Body>
    </Layout>    
)

export default AboutUs