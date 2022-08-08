import axios from 'axios';
import {useState} from 'react'


function WorkoutForm(){
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        const workout = {title, load, reps}
        await axios.post('/api/workouts',workout)
        .then(
            (res) => {
                setTitle('')
                setLoad('')
                setReps('')
                setErrorMsg(null)
                console.log("new workout added", res)
            }
        )
        .catch(error => {
            setErrorMsg(error.response.data.error)
        })
    }
    return(
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <h4>Add A New Workout</h4>

            <label htmlFor="">Exercise Title:</label>
            <input type="text" 
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
            />

            <label htmlFor="">Load (in kg):</label>
            <input type="number" 
                onChange={(e)=>setLoad(e.target.value)}
                value={load}
            />

            <label htmlFor="">Reps :</label>
            <input type="number" 
                onChange={(e)=>setReps(e.target.value)}
                value={reps}
            />
            <button type='submit'>Submit</button>
            {errorMsg && <div className='error'>{errorMsg}</div>}   
        </form>
    )
}
export default WorkoutForm;