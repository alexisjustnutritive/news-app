import React from 'react';
import Uuid from 'uuid/v4';

import './App.scss';
import Header from './components/common/Header/Header';
import CountryCodes from './country-codes-slim-2.json';
import Footer from './components/common/Footer/Footer';
import Main from './components/Main';

class App extends React.Component {
    state = {
        category: 'general',
        countryName: 'United States of America',
        countryCode: 'US',
        query: '',
        countryCodes: CountryCodes,
        news: []
    }

    componentDidMount() {
        this.loadNews();
    }

    loadNews = async ( category = 'general', countryName = 'United States of America' ) => {

        let country = this.state.countryCodes.find( element => element.name === countryName )[ 'alpha-2' ];

        let apiUrl = `https://newsapi.org/v2/top-headlines?country=${ country }&category=${ category }&apiKey=11eefc26b2054093a04c8a326d74eac6`;
        const res = await fetch( apiUrl );
        const newsData = await res.json();
        console.log( newsData );

        this.setState( {
            category: category,
            countryName: countryName,
            countryCode: country,
            news: newsData.articles
        } );
    }

    loadNewsEverything = async ( query = '' ) => {
        let apiUrl = `https://newsapi.org/v2/everything?q=${ query }&apiKey=11eefc26b2054093a04c8a326d74eac6`;
        const res = await fetch( apiUrl );
        const newsData = await res.json();

        this.setState( {
            query: query,
            news: newsData.articles
        } );
    }

    render() {
        return (
            <React.Fragment>
                <div className="container bg-dark p-0">
                    <Header 
                        category={ this.state.category } 
                        countryName={ this.state.countryName } 
                        countryCodes={ this.state.countryCodes } 
                        Uuid={ Uuid } 
                        loadNews={ this.loadNews }
                        loadNewsEverything={ this.loadNewsEverything }
                    />
                    <Main news= { this.state.news } Uuid={ Uuid }/>  
                    <Footer />
                </div>
            </React.Fragment>
      );
    }
}

export default App;