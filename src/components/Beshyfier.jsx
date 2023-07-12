import React from 'react'
import module from './beshyfier.module.css'
import { useState } from 'react'

export default function Beshyfier() {
    const [beshyfiedValue, setBeshyfiedValue] = useState()
    const onChangeHandler = (e) => {
        setBeshyfiedValue(e.target.value.replace(/\s/g, "🤸"))
    }
  
    return (
        <div className={module.beshyfierContainer}>
            <h1>
                Bakit🤸malungkot🤸ang🤸beshy🤸ko
            </h1>
            <p>A Sentence Beshyfier </p>
            <div className={module.beshyfier}>
                <input value={beshyfiedValue} onChange={onChangeHandler} placeholder='I-Beshyfy🤸na🤸yan'></input>
                <div className={module.beshyfyAction}>
                    <button onClick={() => navigator.clipboard.writeText(beshyfiedValue)}>Copy</button>
                    <button onClick={() => setBeshyfiedValue("")}>Clear</button>
                </div>
            </div>
        </div>
    )
}