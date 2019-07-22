import React from 'react';
import Uuid from 'uuid/v4';

import './App.scss';
import { Container } from 'react-bootstrap';
import Header from './components/common/Header/Header';
import CountryCodes from './country-codes-slim-2.json';
import Footer from './components/common/Footer/Footer';
import Main from './components/Main';

class App extends React.Component {
    state = {
        category: 'general',
        country: 'US',
        countryCodes: CountryCodes,
        news: []
    }

    componentDidMount() {
        this.loadNews();
    }

    loadNews = async ( category = 'general', country = 'US' ) => {
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=${ country }&category=${ category }&apiKey=11eefc26b2054093a04c8a326d74eac6`;
        const res = await fetch( apiUrl );
        const newsData = await res.json();

        this.setState( {
            news: newsData.articles
        } );
    }

    render() {
        return (
        <React.Fragment>
            <div className="container bg-dark p-0">
                <Header category={ this.state.category } country={ this.state.country } countryCodes={ this.state.countryCodes } Uuid={ Uuid }/>
                <Main news= { this.state.news } Uuid={ Uuid }/>  
                <Footer />
            </div>
        </React.Fragment>
      );
    }
}

export default App;
