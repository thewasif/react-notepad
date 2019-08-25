import React, {useState} from 'react';
import './NewNote.css';
import ReactQuill from 'react-quill';

function EditNoteComp({match}){
    const id = match.params.id
    let [text, setText] = useState(JSON.parse(localStorage.getItem('notes'))[id].content)
    let [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')));
    console.log(notes)
    return (
        <div className='new_note_modal' style={{right: '0%'}}>
            <ReactQuill 
                value={text}
                onChange={(value) => {
                    setText(value)
                }}
                className="editor"
            />
            <div className='btn-group'>
                    <button className='save' onClick={() => {
                        if(text != ''){
                            notes[id].content = text;
                            console.log(notes)
                            localStorage.setItem('notes', JSON.stringify(notes));
                            setText('')
                            window.location.href = '/';
                        }
                    }}>
                        <i className="fa fa-save"></i> Save
                    </button>
                </div>
        </div>
    );
}

export default EditNoteComp;