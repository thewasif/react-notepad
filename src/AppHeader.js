import React, {useState} from 'react';
import './NewNote.css'
import './App.css'

function AppHeader(){
    
    let [leftPos, setLeftPos] = useState('100%');
    return (
        <header>
            <div className="menu center" onClick={() => setLeftPos('0%')}>
                <i className="fas fa-bars" ></i>
            </div>
            <p>Quick<span>Note</span></p>
    
            <nav style={{left: leftPos}}>
                <div className="nav-header">
                    <div className='center back' onClick={() => setLeftPos('100%')}>
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <p className='owner'>QuickNote</p>
                </div>
                <div className="menu-items">
                    <ul>
                        <li><i className="fas fa-cog"></i> Settings</li>
                        <li><i className="far fa-user-circle"></i> Profile</li>
                    </ul>
                    <hr width='80%'  />
                    <ul>
                        <li><i className="fab fa-dev"></i> About Developer</li>
                    </ul>
                </div>
          </nav>
        </header>
    
        );
}

export default AppHeader;