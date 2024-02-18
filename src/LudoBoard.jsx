import { useState } from "react"
export default function Ludo(){
let [Move, setMove] = useState({blue:0,red:0, yellow:0, green:0})

let updateblue = () => {
setMove((preMove) =>{
    return  {...preMove , blue : preMove.blue + 1}
})
}

let updateRed = () => {
    setMove((preMove) =>{
        return  {...preMove , red : preMove.red + 1}
    })
    }
    let updateYellow = () => {
        setMove((preMove) =>{
            return  {...preMove , yellow : preMove.yellow + 1}
        })
        }
        let updateGreen = () => {
            setMove((preMove) =>{
                return  {...preMove , green : preMove.green + 1}
            })
            }

    return(
        <div>
         <h1>Ludo Game Begins</h1>
         <div className="board">
            <p>Blue moves: {Move.blue}</p>
            <button onClick={updateblue} style={{backgroundColor:"blue", color:"black"}}>+1</button>
            <p>Yellow moves: {Move.yellow}</p>
            <button onClick={updateYellow} style={{backgroundColor:"yellow", color:"black"}}>+1</button>
            <p>Red moves: {Move.red}</p>
            <button onClick={updateRed} style={{backgroundColor:"red", color:"white"}}>+1</button>
            <p>Green moves: {Move.green}</p>
            <button onClick={updateGreen} style={{backgroundColor:"green", color:"black"}}>+1</button>
         </div>
        </div>
    )
}