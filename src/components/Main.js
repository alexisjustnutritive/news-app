import React from 'react'
import NewsItem from './NewsItem/NewsItem';
import { Container } from 'react-bootstrap';

const Main = ( { news, Uuid } ) => {
    return (
        <Container className="bg-dark">
            <div className="card-deck justify-content-around">
                { news !== undefined ? news.map( newsitem => <NewsItem newsitem={ newsitem } key={ Uuid() } /> ) : null }
            </div>
        </Container>
    )
}

export default Main;
