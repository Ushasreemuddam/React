import { useReducer } from "react";

let initialstate={count:0};

function reducer(state,action){
    switch(action.type){
        case "join":
            return {count:state.count+1}
        case "exit":
            return {count:state.count-1}
    }
}

export function ReducerDemo(){
    const[state,dispatch]=useReducer(reducer,initialstate);
    
    function handleJoinClick(){
        dispatch({type:'join'});
    }
    function handleExitClick(){
        dispatch({type:'exit'})
    }

    return(
        <div>
            <h3>Video Streaming</h3>
            <div className="bg-primary text-white p-4 w-25">
                ....Buffering Video....
            </div>
            <div className="mt-4 mb-4">
                Live Count:{state.count}
            </div>
            <div>
                <button className="btn btn-success me-2" onClick={handleJoinClick}>Join</button>
                <button className="btn btn-danger me-2" onClick={handleExitClick}>Exit</button>
            </div>
        </div>
    )
}