import React from 'react'
import './footer.scss';

const Footer = () => {
    return (
        <footer className="w-100 text-center bg-dark text-white py-2">
            <div className="card mx-auto">
                <div className="card-body bg-dark text-white text-left">
                    <p> Framework: ReactJs </p>
                    <p> Concepts: state, props, prop-types, react-bootstrap.</p>
                    <p> Api: https://newsapi.org</p>

                </div>

            </div>
            
            <p>News App { new Date().getFullYear() }</p>
        </footer>
    )
}

export default Footer;
