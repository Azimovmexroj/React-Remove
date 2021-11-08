import React , {useState} from 'react'

const ObjectHook =()=>{
    const [person,setPerson] = useState({
        name:"Azimov Mexrojiddin",
        age:"18",
        message:"Welcom to Uzbekiston"
    })

    function personChage () {
        setPerson({...person,message:35})
    }

    return(
        <div>
            <h1>{person.name}</h1>
            <h1>{person.age}</h1>
            <h1>{person.message}</h1>
            <button onClick={()=>personChage()}>Person</button>
        </div>
    )
}

export default ObjectHook














































// import React, {useState} from 'react';

// const ObjectHook = () => {
//     const [person, setPerson] = useState({
//         name:"Murodjon",
//         age:22,
//         message:"Welcome to Codemy!"
//     })

//   function changeObject(){
//       setPerson({...person, message:35})
//   }

//     return (
//         <div>
//            <h1>{person.name}</h1>
//            <h1>{person.age}</h1>
//            <h1>{person.message}</h1>

//             <button onClick={()=>changeObject()}>click me</button>
            
//         </div>
//     )
// }

// export default ObjectHook
