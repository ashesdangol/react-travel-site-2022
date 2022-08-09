import axios from "axios";
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

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
            <p>{workout.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
        
    )
}
export default WorkoutDetails;