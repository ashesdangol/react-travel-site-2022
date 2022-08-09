import axios from 'axios';
import {useState} from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import cssModule from '../assets/styles/components/WorkoutForm.module.scss'


function WorkoutForm(){
    const {dispatch} = useWorkoutsContext();

    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [emptyFields, setEmptyFields] = useState([])

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
                setEmptyFields([])
                console.log("new workout added", res.data)
                dispatch({type:'CREATE_WORKOUTS', payload: res.data})
            }
        )
        .catch(error => {
            setErrorMsg(error.response.data.error)
            setEmptyFields(error.response.data.emptyFields)
            console.log(error.response.data)
        })
    }
    return(
        <form className={cssModule.workout__form} onSubmit={handleSubmit}>
            <h3>Add A New Workout</h3>

            <label htmlFor="">Exercise Title:</label>
            <input type="text" 
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label htmlFor="">Load (in kg):</label>
            <input type="number" 
                onChange={(e)=>setLoad(e.target.value)}
                value={load}
                className={emptyFields.includes('load') ? 'error' : ''}
            />

            <label htmlFor="">Reps :</label>
            <input type="number" 
                onChange={(e)=>setReps(e.target.value)}
                value={reps}
                className={emptyFields.includes('reps') ? 'error' : ''}
            />
            <button type='submit'>Submit</button>
            {errorMsg && <div className='error error-msg'>{errorMsg}</div>}   
        </form>
    )
}
export default WorkoutForm;