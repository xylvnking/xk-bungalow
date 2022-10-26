import React from 'react'
import styles from '../styles/pattern.module.scss'
import Image from 'next/image'
import bung1 from '../public/bung1.png'
import bungs from '../public/bungs.png'
import bungs2 from '../public/bungs2.png'
import PatternImage from './PatternImage'

// number


export default function Pattern() {
  return (
    <div id={styles['patternContainer']}>
        <div id={styles['pattern']}>
            <Image 
                src={bungs2}
                layout='fill'
                objectFit='cover'
            />
        </div>
    </div>
  )
}
