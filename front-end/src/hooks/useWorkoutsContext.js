import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = ()=>{
    // WorkoutsContext is an object, value we passed into the provider component
    // which is state and dispatch function
    const context = useContext(WorkoutsContext)
    // whenever we want to use our workouts data, invoke useWorkoutsContext hook
    // get that context value back

    if(!context){
        throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
    }
    return context

}