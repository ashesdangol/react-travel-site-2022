import axios from "axios";
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function WorkoutDetails({workout}){
    const {dispatch} = useWorkoutsContext();
    const handleClick = async () =>{
        await axios.delete('/api/workouts/'+workout._id)
        .then(
           res =>{
            dispatch({type:'DELETE_WORKOUT', payload:res.data})
           }
        ).catch(err =>{
            console.log(console.log(err))
        }) 
    }
    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg) : </strong>{workout.load}</p>
            <p><strong>Reps (kg) : </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
        
    )
}
export default WorkoutDetails;