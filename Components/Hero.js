import React from 'react'
import Image from 'next/image'
import bung1 from '../public/bung1.png'
import styles from '../styles/hero.module.scss'

export default function Hero() {
  return (
    <section id={styles['heroContainer']}>
        <div id={styles['flexBox']}>
            <div id={styles['bung1WrapperWrapper']}>
                <div id={styles['bung1Wrapper']}>
                    <Image src={bung1} objectFit='contain'  height={300} width={300}/>
                </div>
            </div>
            <h1>Bungalow Jonathan</h1>
        </div>
    </section>
  )
}
