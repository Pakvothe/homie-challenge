import React from 'react'
import { ContentBoxContainer } from './contentBox.styles'
import { Route } from 'react-router-dom';

//components ==>
import Education from '../education/education';
import Experience from '../experience/experience';
import Portfolio from '../portfolio/portfolio';
import Skills from '../skills/skills';


const ContentBox = () => {
    return (
        <ContentBoxContainer>
            <Route exact path={["/", "/education"]}>
                <Education />
            </Route>
            <Route exact path="/experience">
                <Experience />
            </Route>
            <Route exact path="/portfolio">
                <Portfolio />
            </Route>
            <Route exact path="/skills">
                <Skills />
            </Route>
        </ContentBoxContainer>
    )
}

export default ContentBox
