import React from 'react';
import './newsItem.scss';

const NewsItem = ( { newsitem } ) => {
    return (
        <div className="card">
            <img className="card-img-top" src={ newsitem.urlToImage } alt="" />
            <div className="card-body">
                <h4 className="card-title">{ newsitem.title }</h4>
                <p className="card-text">
                    { newsitem.description }
                </p>
                <a href={ newsitem.url } className="text-dark font-weight-bold">see more..</a>
            </div>
        </div>
    )
}

export default NewsItem;
