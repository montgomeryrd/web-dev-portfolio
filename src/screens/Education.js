import { useEffect, useState } from 'react';
import './Education.css';

const Education = () => {
    const [myCodewarsStats, setMyCodewarsStats] = useState({});
    const codewarsURL = 'https://www.codewars.com/api/v1/users/montgomeryrd';

    useEffect(() => {
        const pullData = async() => {
            const data = await fetch(codewarsURL).then(response => {
                setMyCodewarsStats(response.json());
            });
            console.log(myCodewarsStats);
        };
        pullData();
    }, []);

    return (
        <div id="education-container" className="desktop mobile" style={{height: `${100}vh`}}>
            <main className="education-content" role="main">
                {myCodewarsStats.username}               
            </main>
        </div>
    )
}

export default Education;