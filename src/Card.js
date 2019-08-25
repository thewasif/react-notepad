import React from 'react';

export let childArray = [];

const Card = (props) => {
    const {id, children} = props;
    localStorage.setItem('current_read', id);
    childArray.push(children);
    let array = [];
    for(let i = 0; i < children.length; i++){
        if(children[i] + children[i+1] == '</'){
            break;   
        }else{
            array.push(children[i]);
        }      
    }
    return <div className="card" dangerouslySetInnerHTML={{__html: array.join('') + '</h1>'}} ></div>;    
}

export default Card;