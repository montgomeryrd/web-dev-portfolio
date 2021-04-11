import './EducationCard.css';

const EducationCard = ({ image, company, program, courses, website }) => {
    const lessons = courses.map((course, key) => (
        <li key={key}>{course}</li>
    ));

    const toggleSectionsFunction = (company) => {
        const toggleTheElement = (company) => {
            const educationSectionClassNames = ['codefellows', 'codecademy', 'codewars', 'udemy'];

            const element = document.querySelector(`#${company}`);
            const elements = educationSectionClassNames.filter(element => element !== company);

            elements.forEach(index => {
                const e = document.querySelector(`#${index}`);
                if (e.classList[1] === 'card-expand') {
                    e.classList.add('card-retract');
                    e.classList.remove('card-expand');
                };
            });

            if (element.classList[1] === 'card-retract') {
                element.classList.add('card-expand');
                element.classList.remove('card-retract');
            } else {
                element.classList.add('card-retract');
                element.classList.remove('card-expand');
            };
        }

        switch(company) {
            case 'codefellows' : 
                toggleTheElement('codefellows');
                return;
            case 'codecademy' :
                toggleTheElement('codecademy');
                return;
            case 'codewars' :
                toggleTheElement('codewars');
                return;
            case 'udemy' :
                toggleTheElement('udemy');
                return;
            default: return;
        }
    };

    return (
        <div className="education-card-container">
            <img className={`education-card-image ${company}`} src={image} alt={image} onClick={() => {toggleSectionsFunction(company)}}></img>
            <section id={company} className="card card-retract">
                <h3 className="education-card-program">{program}</h3>
                <ul className="education-card-courses">{lessons}</ul>
                <a className="education-card-link" href={website}>visit website</a>
            </section>
        </div>
    )
};

export default EducationCard;