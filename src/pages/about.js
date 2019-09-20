import React from "react"
import { Link } from "gatsby"
import '../styles/main.css'
import {
    Segment,
    Header,
    Label,
    Container,
    Icon
  } from 'semantic-ui-react'
  import 'semantic-ui-less/semantic.less'

import SEOComponent from "../components/SEOComponent"
import HomepageLayout from "../layouts/HomepageLayout"

const About = (props) => {
    return(
        <HomepageLayout>
            <SEOComponent title="About" />
            <div className='media__hero'></div>
            <p className='hero__overlay'>About</p>
            <Container style={{padding:'100px 0'}}>
                <Segment className='page__segment'>
                    <p className='segment__txt' style={{textAlign:'left'}}>
                    Tara Richter is the President of Richter Publishing LLC. She specializes in helping business owners how to write their non-fiction story in four weeks & publish a book in order to become an expert in their industry. She has been featured on CNN, ABC, Daytime TV, FOX, SSN, Channel 10 News, USA TODAY, Beverly Hills Times and radio stations all over the world.
                    <ul>
                        <li>Her degree is in Graphic Design and she worked in the copy and print industry in the Silicon Valley. She has written and published 11 of her own books in just a few short years. Tara now has published many other authors all over the world including Anthony Amos & celebrity entrepreneur, Kevin Harrington, Shark from ABC’s “Shark Tank” with their joint book, “How to Catch a Shark.”</li>
                        <li>Writing your story is a very therapeutic journey.  Tara knows this first hand from writing her own books in the Dating Jungle Series. She utilizes her certifications in Professional Coaching & Reiki Energy Healing to help authors through the fear of publishing their stories for the world to hear. Richter’s team guides their authors through every step of the process to make sure it’s a fulfilling experience.</li>
                        <li>Find her books here: <a href="http://www.amazon.com/Tara-Richter/e/B00CGKD8FG">http://www.amazon.com/Tara-Richter/e/B00CGKD8FG</a></li>
                        <li><strong>AWARDS:</strong>
                            <ul>
                                <li>2013 Finalist for Tampa Bay’s Business Woman of the Year Award</li>
                                <li>2014 Nominee for Tampa’s Up & Coming Businesses</li>
                                <li>2015 Nominee for 2015 Iconic Woman of the Year</li>
                                <li>2015 Finalist for Best in Biz</li>
                                <li>2015 Amazon Best Selling Author & #4 Amazon Hot New Release</li>
                                <li>2016 Recipient of H.E.R.O. Award</li>
                                <li>2017 Commencement Speaker for Keiser University Graduation</li>
                                <li>2019 Nominee for Tampa Bay’s Corporate Philanthropy  Award</li>
                            </ul>
                        </li>
                    </ul>
                    </p>
                </Segment>
            </Container>
        </HomepageLayout>
)}

export default About