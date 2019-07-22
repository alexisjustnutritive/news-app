import React from 'react'
import NewsItem from './NewsItem/NewsItem';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Main = ( { news, Uuid } ) => {
    return (
        <Container className="bg-dark">
            <div className="card-deck justify-content-around">
                { news !== undefined ? news.map( newsitem => <NewsItem newsitem={ newsitem } key={ Uuid() } /> ) : null }
            </div>
        </Container>
    )
}

Main.propTypes = {
    news: PropTypes.array.isRequired,  
    Uuid: PropTypes.func.isRequired
}

export default Main;
