import React,{useState} from 'react'
import {data} from './data'
const ArrayHook = () => {
    const [person,setperson] = useState(data)

    const removeItem=(id)=>{
        var newPerson = person.filter((people)=>people.id !==id)
        setperson(newPerson)
    }
    return (
        <>
         {
             person.map((people)=>{
                 const {id,name} =people
                 return(
                     <div key={id} className="item">
                         <h1>{name}</h1>
                         <button onClick={()=>removeItem(id)}>remove</button>
                     </div>
                 )
             })
         } 
         <button onClick={()=>setperson([])}>Clear</button>  
        </>
    )
}

export default ArrayHook

































// import React, {useState} from 'react'
// import {data} from './data'

// const ArrayHook = () => {
//   const [people, setPeople] = useState(data)

//   const removeItem = (id)=>{
//       let newPeople = people.filter((person)=>person.id !==id);
//       setPeople(newPeople)
//   }

//     return (
//         <>
//         {
//    people.map((person)=>{
//        const {id, name} = person
//      return(
//          <div key={id} className="item">
//      <h1>{name}</h1>
//       <button onClick={()=>removeItem(id)}>remove</button>
//      </div>
         
//      )
      
//         })
//             }
//             <button onClick={()=>setPeople([])}>Clear</button>
//         </>
//     )
// }

// export default ArrayHook
