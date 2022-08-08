import {useState, useEffect} from 'react'
import axios from 'axios'
import WorkoutDetails from '../components/WorkoutDetails'
import cssModule from '../assets/styles/components/WorkoutDetail.module.scss'

function Home(){
    const [workouts, setWorkouts] = useState(null)
    useEffect(()=>{
        const fetchWorkouts = async ()=>{
            await axios.get('/api/workouts')
            .then(res =>{
                setWorkouts(res.data)
            })
            .catch(err => {
                console.log(err);
            })
           
        }
        fetchWorkouts()
    },[])
    return (
        <div className="container mx-auto">
            <div className={cssModule.home}>
            <div className="workouts">
            {/* if not workouts is not null run workouts.map */}
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout={workout} />
                    
                ))}
            </div>
        </div>
        </div>
        
    )
}
export default Home;