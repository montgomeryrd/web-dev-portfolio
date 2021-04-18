import { useEffect, useState } from 'react';
import EducationCard from '../components/EducationCard';
import education from '../assets/data/education';
import axios from 'axios';
import './Education.css';

import codefellowsLogo from '../assets/links/codefellows-logo.png';
import codecademyLogo from '../assets/links/codecademy-logo.png';
import udemyLogo from '../assets/links/udemy-logo.png';
import codewarsLogo from '../assets/links/codewars-logo.png';

const Education = ({ styling }) => {
    const [myCodewarsStats, setMyCodewarsStats] = useState({});
    
    useEffect(() => {
        // utilizing cors-anywhere
        const proxy = 'https://damp-reaches-88279.herokuapp.com/';
        const codewarsURL = 'https://www.codewars.com/api/v1/users/montgomeryrd';
        axios.get(`${proxy}${codewarsURL}`).then(res => {
            setMyCodewarsStats(res.data);
        });
    }, []);

    const codefellows = (
        <EducationCard
            image = {codefellowsLogo}
            company = {education[0].company}
            program = {education[0].program}
            courses = {education[0].courses}
            website = {education[0].website}
        />
    );

    const codecademy = (
        <EducationCard
            image = {codecademyLogo}
            company = {education[1].company}
            program = {education[1].program}
            courses = {education[1].courses}
            website = {education[1].website}
        />
    );
    
    const codewars = (
        <EducationCard 
            image = {codewarsLogo}
            company = {education[3].company}
            program = {education[3].program}
            courses = {
                [
                    `Rank: ${myCodewarsStats.ranks?.overall?.name}`,
                    `Honor: ${myCodewarsStats.honor}`,
                    `Leaderboard Position: ${myCodewarsStats.leaderboardPosition}`,
                    `Total Completed Kata: ${myCodewarsStats.codeChallenges?.totalCompleted}`
                ]
            } 
            website = 'https://www.codewars.com/users/montgomeryrd'
        /> 
    );

    const udemy = (
        <EducationCard
            image = {udemyLogo}
            company = {education[2].company}
            program = {education[2].program}
            courses = {education[2].courses}
            website = {education[2].website}
        />
    );

    return (
        <div id="education-container" className={styling}>
            <main className="education-content" role="main">

                {codefellows}
                {codecademy}
                {codewars}        
                {udemy}

                <section className="contact">
                    I'm seeking an opportunity to develop myself in a career of web development. 
                    Though my primary education in full stack javascript was served through a fire-
                    hose supplemented by online modules and tutorials, I feel that extra months of 
                    code challenges and learning-by-doing have primed me for a position as a junior 
                    developer. I'm ready to get paid-while-learning.
                </section>

            </main>
        </div>
    )
}

export default Education;