import React from 'react'
import Image from 'next/image'

import styles from '../styles/news.module.scss'

import placeholder from '../public/placeholder.jpeg'

export default function NewsPost(props) {
  return (
    <div className={styles.post}>
        <div className={styles.imageWrapper}>
            <Image 
                src={props.image}
                objectFit='contain' 
                // layout='fill'
            />
        </div>
        <div className={styles.textDiv}>
            <h1>{props.title}</h1>
            <p className={styles.date}>{props.date}</p>
            <p>{props.text}</p>
        </div>
    </div>
  )
}
