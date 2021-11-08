 import React from 'react'
 import './App.css';
 import BeginExample from './hooks/BeginExample';
 import ObjectHook from './objectuse/ObjectHook'
 import ArrayHook from './arrayhooks/ArrayHook'



const App = () => {
    return (
    <div>
        <ObjectHook/>
        <ArrayHook/>
        <BeginExample/>
    </div>   
    )
}

export default App
