import React from 'react'
import styles from '../styles/pattern.module.scss'
import Image from 'next/image'
import bung1 from '../public/bung1.png'

export default function PatternImage(props) {
  return (
    <div className={styles.imageWrapper}>
        <Image 
            src={props.img}
            objectFit='contain'
            // layout='fill'
        />
    </div>
  )
}






