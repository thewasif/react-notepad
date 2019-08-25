import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    let [x, setX] = useState('100%');
    return (
        <footer className="center">
            <Link to={x == '0%' ? '/' : '/new'} >
            <button className="btn-add center" onClick={() => {
                setX(x == '0%' ? '100%':'0%')
                console.log(x);
            }}
            style={x == '0%' ? {background: '#ff4444', transform: 'rotate(45deg)'} : {background: 'rgb(0, 148, 246)'}}>
            <i className="fas fa-plus"></i>
            </button></Link>
        </footer>  
    );
}

export default Footer;






