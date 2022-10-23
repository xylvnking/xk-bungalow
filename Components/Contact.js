import React, { useState } from 'react'

import Image from 'next/image'

import styles from '../styles/contact.module.scss'

export default function Contact() {

    const [buttonPressed, setButtonPressed] = useState(false)

    const handleClick = () => {
        // setButtonPressed(!buttonPressed)
        setButtonPressed(true)
        navigator.clipboard.writeText('contact@bungalowjonathan.com');
    }
  return (
    <section id={styles['contactContainer']}>
        <div id={styles['flexBox']}>
                <div id={styles['textContainer']}>
                    <h1>Let's make love, online:</h1>
                    <div id={styles['email']}>
                        <div id={styles['linkIconGridItem']}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14 34q-4.25 0-7.125-2.875T4 24q0-4.25 2.875-7.125T14 14h7q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075Q21.65 17 21 17h-7q-3 0-5 2t-2 5q0 3 2 5t5 2h7q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075Q21.65 34 21 34Zm3.75-8.5q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075.425-.425 1.075-.425h12.5q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425ZM27 34q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075Q26.35 31 27 31h7q3 0 5-2t2-5q0-3-2-5t-5-2h-7q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075Q26.35 14 27 14h7q4.25 0 7.125 2.875T44 24q0 4.25-2.875 7.125T34 34Z" /></svg>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 44q-4.15 0-7.8-1.575-3.65-1.575-6.35-4.275-2.7-2.7-4.275-6.35Q4 28.15 4 24t1.575-7.8Q7.15 12.55 9.85 9.85q2.7-2.7 6.35-4.275Q19.85 4 24 4t7.8 1.575q3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24v2.65q0 2.8-1.975 4.725Q40.05 33.3 37.2 33.3q-1.8 0-3.4-.875-1.6-.875-2.45-2.475-1.3 1.7-3.25 2.525T24 33.3q-3.9 0-6.625-2.7T14.65 24q0-3.9 2.725-6.65Q20.1 14.6 24 14.6t6.625 2.75Q33.35 20.1 33.35 24v2.65q0 1.55 1.125 2.6T37.2 30.3q1.55 0 2.675-1.05Q41 28.2 41 26.65V24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.1 0-12.05 4.95Q7 16.9 7 24q0 7.1 4.95 12.05Q16.9 41 24 41h9.2q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075Q33.85 44 33.2 44Zm0-13.7q2.65 0 4.5-1.825T30.35 24q0-2.7-1.85-4.55-1.85-1.85-4.5-1.85t-4.5 1.85Q17.65 21.3 17.65 24q0 2.65 1.85 4.475Q21.35 30.3 24 30.3Z"/></svg> */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm34-26.25-16.2 10.6q-.2.1-.375.175-.175.075-.425.075t-.425-.075q-.175-.075-.375-.175L7 13.75V37h34ZM24 21.9 40.8 11H7.25ZM7 13.75v.35-1.975.025V11v1.15-.05 2-.35V37Z"/></svg> */}
                        </div>
                        <div id={styles['linkTextGridItem']}>
                            <h2>contact@bungalowjonathan.com</h2>
                        </div>
                        <div id={styles['linkButtonGridItem']}>
                            <button onClick={() => handleClick()} 
                                style={buttonPressed ? {backgroundColor: '#00c735'} : {backgroundColor: '#00a3ff'}}
                                className={buttonPressed ? styles.copied : styles.copy}
                                >
                                    {buttonPressed ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M7.75 14.833q-.729 0-1.24-.51-.51-.511-.51-1.24V3.417q0-.729.51-1.24.511-.51 1.24-.51h7.167q.729 0 1.239.51.511.511.511 1.24v9.666q0 .729-.511 1.24-.51.51-1.239.51Zm0-1.75h7.167V3.417H7.75v9.666Zm-3.5 5.25q-.729 0-1.24-.51-.51-.511-.51-1.24V5.938q0-.355.26-.615.261-.261.615-.261t.615.261q.26.26.26.615v10.645h8.146q.354 0 .614.261.261.26.261.614t-.261.615q-.26.26-.614.26Zm3.5-14.916v9.666-9.666Z"/></svg> */}
                    </div>
                </div>
            </div>

    </section>

    
  )
}
