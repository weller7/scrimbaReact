import React from "react"

export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    
    let [isGoingOut, setAnswer] = React.useState(true)
    
    function changeVal (){
        setAnswer(prevVal => prevVal ? false : true)
    }
    
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeVal} className="state--value">
                <h1>{isGoingOut ? "yes": "no"}</h1>
            </div>
        </div>
    )
}
