import React from 'react'
import Nav from './Nav'
import Pdf from './kjw_resume.pdf'

class Resume extends React.Component {
    render() {
        return (
            <div >
                <Nav />
                <div className='resume-title'><h1>Katy Welyczko - Software Developer</h1>
                    <p>I am a full stack developer with a passion for data and testing. I am highly analytical and process-oriented with in-depth knowledge of database types. I thrive in areas that need process improvement and a focus on efficiency. My code experience is supported by 5+ years of dedicated technical project management.</p>
                    <h2>Recent Work Experience</h2>
                    <h3>Apto</h3>	
                    <p>Denver, CO -- Software Engineer	-- Apr. 2018 to Current</p>
                    <p>Drive feature creation with work in React, Typescript, and Node on a Salesforce backend</p>
                    <p>Write automated tests in Java for Selenium WebDriver</p>
                    <p>Work in IntelliJ with Gradle to execute test suite and run regressions against custom built API</p>
                    <p>Improve API layer with load testing and DevOps tools</p>
                    <h2>Education</h2>
                    <h3>Turing School of Software & Design</h3>	
                    <p>Denver, CO -- Ruby on Rails	-- Aug. 2017 to Apr. 2018</p>
                    <p>Backend specific program with emphasis on API consuming and database structure</p>
                    <p>Logged over 2000 hours in development</p>
                    <h2> - </h2>
                    <br />
                    <a href={Pdf} target="_blank">download a PDF of my full resume here</a>
                </div>         
            </div>
        )
    }
}

export default Resume