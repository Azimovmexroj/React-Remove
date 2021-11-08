import React, { useState } from 'react'

const BeginExample = () =>{
    
    const [text,setText] = useState('Codemy')

    function textChange (){
        
        if (text === 'Codemy') {

            setText('welcome Uzbekiston')

        }else{

            setText("Codemy")
        }
    }
    return(
        <div> <h1> { text } </h1>
        <button onClick = {() => textChange() }>Remove   </button> </div>
    )
}

export default BeginExample

















// import React, {useState} from 'react'

// const BeginExample = () => {

//     const [text,
//         setText] = useState('Codemy');

//     function textChange() {
//         if (text === "Codemy") 
//             setText('Salom bolalar!')
//         else {
//             setText('Codemy')
//         }
//     }

//     return (
//         <div>
//             <h1 >{text}</h1>
//             <button onClick={() => textChange()}>click me!</button>

//         </div>
//     )
// }

// export default BeginExample
