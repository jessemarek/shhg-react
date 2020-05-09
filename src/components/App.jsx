import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Components
import Navbar from './Navbar'
import HeroMenu from './HeroMenu'
import Footer from './Footer'

const App = () => {

    return(
        <Router>
            <Navbar />
            <Route exact path='/(heroes|awakenings)/' component={HeroMenu} />
            <Footer />
        </Router>
    )
}

export default App