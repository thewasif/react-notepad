import React, {useState} from 'react';
import './NewNote.css';
import ReactQuill from 'react-quill';

function NewNote(props){
    let  [text, setText] = useState('');
    let  notes = JSON.parse(localStorage.getItem('notes'));
    let  len = notes.length;
    return (
            <div className='new_note_modal' style={{right: '0%'}} >
                <center>
                <ReactQuill  
                    value={text} 
                    onChange={(e) => setText(e)} 
                    className="editor" />
                </center>
                <div className='btn-group'>
                    <button className='save' onClick={() => {
                        if(text != ''){
                            const obj = {
                                id: len,
                                content: text
                            }  
                            notes.push(obj)
                            localStorage.setItem('notes', JSON.stringify(notes));
                            setText('');
                            window.location.href = '/';
                        }
                    }}>
                        <i className="fa fa-save"></i> Save
                    </button>
                </div>
            </div>
        );
   
}

export default NewNote;