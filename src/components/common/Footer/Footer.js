import React from 'react'
import './footer.scss';

const Footer = () => {
    return (
        <footer className="w-100 text-center bg-dark text-white">
            <p>News App { new Date().getFullYear() }</p>
        </footer>
    )
}

export default Footer
