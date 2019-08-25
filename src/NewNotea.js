import React from 'react';
import './NewNote.css';

function NewNotea({match}){
    let id = match.params.id;
    let note = JSON.parse(localStorage.getItem('notes'))[id];
    
    return <div className="read" dangerouslySetInnerHTML={{__html: note.content}}></div>;
}

export default NewNotea;