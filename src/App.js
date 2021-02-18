import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ScrollToTop from './utils/ScrollToTop';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import WorksScreen from './screens/WorksScreen';
import SkillsAndEducationScreen from './screens/SkillsAndEducationScreen';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<div id="desktop">
				<Header />
				<main className="py-3">
					<Container>
						<Route exact path="/" component={HomeScreen} />
						<Route exact path="/about" component={AboutScreen} />
						<Route exact path="/works" component={WorksScreen} />
						<Route exact path="/skills" component={SkillsAndEducationScreen} />
					</Container>
				</main>
				<Footer />
			</div>
			<div id="mobile">
				<Header />
				<HomeScreen />
				<AboutScreen />
				<WorksScreen />
				<SkillsAndEducationScreen />
				<Footer />
			</div>
		</Router>
	);
}

export default App;