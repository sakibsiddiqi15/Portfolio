import React from 'react';
import Page from '../../Shared/Component/Page';
import Header from './Components/Header';
import Projects from './Components/Projects';

const Home = () => {
    return (
        <Page>
            <Header/>
            <Projects/>
        </Page>
    );
};

export default Home;