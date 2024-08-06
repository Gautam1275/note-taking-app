import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io"
import { RiDeleteBin6Line } from "react-icons/ri";
import UseCreateDate from '../Components/useCreateDate';
const EditNote = ({notes, setNotes}) => {
    const {id} = useParams();
    const note = notes.find((item) => item.id === id);
    const [title, setTitle] = useState(note ? note.title : '');
    const [details, setDetails] = useState(note ? note.details : '');
    const date = UseCreateDate();
    const navigate = useNavigate();
    const handleForm = (e) => {
        e.preventDefault();
        if(title && details){
            const updateNote = { ...note, title,details,date}

            const newNotes = notes.map(item => item.id === id ? updateNote : item);
            setNotes(newNotes);
            navigate('/');
        }

    }
    const handleDelete = ()=>{
        if(window.confirm('Are you sure, you want to delete?')){
        const newNotes = notes.filter(item => item.id !== id);

        setNotes(newNotes);
        navigate('/');
    }}
    useEffect(()=>{
        if(!note){
            navigate('/');
        }
    }, [note, navigate]);

return (
    <section>
        <header className="create-note__header">
            <Link to='/' className='btn'><IoIosArrowBack /></Link>
            <button className="btn lg primary" onClick={handleForm}>Save</button>
            <button className="btn danger" onClick={handleDelete}><RiDeleteBin6Line /></button>
        </header>
        <form onSubmit={handleForm} className="create-note__form">
            <input type="text" placeholder='Title' autoFocus value={title} onChange={(e)=> setTitle(e.target.value)}/>
            <textarea rows='28' placeholder='Note details...' value={details} onChange={(e)=> setDetails(e.target.value)}></textarea>
        </form>
    </section>
)
}

export default EditNote