
import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext()

// state is previous value
// action is the args that was passed in dispatch
// action is the type property and payload which is the object
export const workoutsReducer = (state, action)=>{
    // check the action type (crud) and run it
    switch(action.type){
        // array of all workouts
        case "SET_WORKOUTS":
            return{
                workouts:action.payload
            }
        case "CREATE_WORKOUTS":
            return{
                workouts:[action.payload, ...state.workouts]
            }
            case "DELETE_WORKOUT":
                return{
                    workouts:state.workouts.filter((workout)=>workout._id !== action.payload._id)
                }
        default:
            return state
    }

}

// dispatch contains args/actions, when called it will invoke function workoutReducer

export const WorkoutsContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts:null
    })

    // dispatch({type: 'CREATE_WORKOUT'})
    return(
        // value provides components to get state or dispatch an action 
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutsContext.Provider>
    )
}