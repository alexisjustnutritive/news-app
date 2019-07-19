import React from 'react';
import './App.scss';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import CountryCodes from './country-codes-slim-2.json';

class App extends React.Component {

    state = {
        countryCodes: CountryCodes
    }

    render() {
        return (
        <React.Fragment>
            <Container fluid={true}>
                <Header countryCodes={ this.state.countryCodes } />
            </Container>
        </React.Fragment>
      );
    }
}

export default App;
