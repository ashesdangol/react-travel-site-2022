import { useEffect} from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import axios from 'axios'

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import cssModule from '../assets/styles/components/WorkoutDetail.module.scss'

function Home(){
    // const [workouts, setWorkouts] = useState(null)
    const {workouts, dispatch} = useWorkoutsContext()
    useEffect(()=>{
        const fetchWorkouts = async ()=>{
            await axios.get('/api/workouts')
            .then(res =>{
                // setWorkouts(res.data)
                dispatch({type:'SET_WORKOUTS', payload: res.data})
            })
            .catch(err => {
                console.log(err);
            })
           
        }
        fetchWorkouts()
    },[dispatch])
    return (
       
            <div className={cssModule.home}>
                <div className="workouts container ">
                    <WorkoutForm />
                    {/* if not workouts is not null run workouts.map */}
                    <div className='workout-detail-wrapper'>
                    {workouts && workouts.map((workout)=>(
                        <WorkoutDetails key={workout._id} workout={workout} />
                        
                    ))}
                    </div>
                </div>
                
            </div>
        
        
    )
}
export default Home;