import React, {useState} from 'react';
import Card from './Card';
import {Link} from 'react-router-dom';

function Main() {
    let [x, setX] = useState('100%');
  let [cond, setCond] = useState('old');
    let array = [{id: 0, content: '<h1>Hello World</h1>'}];
  if(localStorage.getItem('notes') == null || localStorage.getItem('notes') == [])
      localStorage.setItem('notes', JSON.stringify(array));

  let notesStorage = JSON.parse(localStorage.getItem('notes'));
  let [notes, setNotes] = useState(notesStorage);
    return (

        <div>
            {notes.map((note, index) => 
                <div key={index}  className="card-cont">
                    <Card id={note.id}>{note.content}</Card>
                    <div className="icons">
                    <Link to={`/old/${note.id}`}  className="fa fa-book-open">
                        <i  onClick={(e) => {
                            x === '100%'? setX('0%'):setX('100%');
                            setCond('old');
                            localStorage.setItem('current_read', note.id)
                        }}></i>
                    </Link>
                        <i className="fa fa-trash" id={index} onClick={() => {
                        notes.splice(index, 1);
                        notes.map((l, i) => l.id = i);
                        setNotes(notes);
                        localStorage.setItem('notes', JSON.stringify(notes));
                        window.location.reload();
                        }}></i>
                    <Link to={`/edit/${note.id}`} className="fa fa-edit">
                        <i onClick={() => {
                            setX('0%')
                            
                        }}></i>
                    </Link>
                    </div>
                </div> 
                )}
            </div>
    )
}

export default Main;