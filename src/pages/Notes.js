import React, { useMemo, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { BsPlusLg } from "react-icons/bs";
import NoteItem from '../Components/NoteItem';
import { MdClose } from "react-icons/md";

const Notes = ({ notes }) => {
    const [showSearch, setShowSearch] = useState(false);
    const [text, setText] = useState('');

    const filterNotes = useMemo(() => 
        notes.filter(note =>
            note.title.toLowerCase().includes(text.toLowerCase())
        ),
        [text, notes]
    );

    return (
        <section>
            <header className="notes__header">
                { !showSearch && <h2>My Notes</h2> }
                { showSearch && 
                    <input
                        type="text"
                        autoFocus
                        placeholder='Keyword...'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    /> 
                }
                <button  className='btn' onClick={() => setShowSearch(prevState => !prevState)}>
                    {showSearch ? <MdClose /> : <CiSearch />}
                </button>
            </header>
            <div className="notes__container">
                {filterNotes.length === 0 && <p className='empty__notes'>No Notes Found.</p>}
                { filterNotes.map(note => (
                    <NoteItem key={note.id} note={note} />
                )) }    
            </div>
            <Link to='/create-note' className='btn add__btn'>
                <BsPlusLg />
            </Link>
        </section>
    );
};

export default Notes;
