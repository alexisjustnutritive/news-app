import React from 'react';
import './App.scss';
import { Container } from 'react-bootstrap';
import Header from './components/common/Header/Header';
import CountryCodes from './country-codes-slim-2.json';
import Footer from './components/common/Footer/Footer';

class App extends React.Component {

    state = {
        countryCodes: CountryCodes
    }

    render() {
        return (
        <React.Fragment>
            <Header countryCodes={ this.state.countryCodes } />
            <Container fluid={true}>
            </Container>
            <Footer />
        </React.Fragment>
      );
    }
}

export default App;
