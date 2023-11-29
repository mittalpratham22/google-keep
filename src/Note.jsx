import React from 'react';
// import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note=(props)=>{

    function deleteNode(){
        props.deleteItem(props.id);
    }

    return(
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br />
                <p>{props.content}</p>
                <button className='btn' onClick={deleteNode}>
                    <DeleteOutlineIcon className='deleteIcon'/>
                </button>
            </div>
        </>
    )
}
export default Note;