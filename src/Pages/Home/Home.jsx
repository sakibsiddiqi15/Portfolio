import React from 'react';
import Page from '../../Shared/Component/Page';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Projects from './Components/Projects';
import "./home.css";
const Home = () => {
    return (
        <Page>
            <Header/>
            <Projects/>
            <Contact/>
        </Page>
    );
};

export default Home;