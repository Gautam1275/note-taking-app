import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({note}) => {
    if (!note || !note.id || !note.title) {
        return null; // Render nothing if note data is missing
    }
    // Truncate title if it exceeds 40 characters
    const truncatedTitle = note.title.length > 40 ? `${note.title.slice(0, 40)}...` : note.title;
return (
    <Link to={`/edit-note/${note.id}`} className='note'>
        <h4>{truncatedTitle } </h4>
        <p>{note.date}</p>
    </Link>
)
}

export default NoteItem