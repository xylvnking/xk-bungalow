import React from 'react'

import Image from 'next/image'

import styles from '../styles/tours.module.scss'

export default function Tours() {
  return (
    <section id={styles['toursContainer']}>
        <ul id={styles['flexBox']}>
            <li className={styles.tourDate}>
                <div className={styles.innerFlex1}>
                    <h1>London, Ontario</h1>
                    <h2>Some Venue Name</h2>
                </div>
                <div className={styles.innerFlex2}>
                    <p>January 1st, 2023</p>
                    <a>Get tickets</a>
                </div>
            </li>
            <li className={styles.tourDate}>
                <div className={styles.innerFlex1}>
                    <h1>Toronto, Ontario</h1>
                    <h2>Another Fake Name</h2>
                </div>
                <div className={styles.innerFlex2}>
                    <p>February 7th, 2023</p>
                    <a>Get tickets</a>
                </div>
            </li>
            <li className={styles.tourDate}>
                <div className={styles.innerFlex1}>
                    <h1>Ottawa, Ontario</h1>
                    <h2>3rd fake vanue name!</h2>
                </div>
                <div className={styles.innerFlex2}>
                    <p>March 14th, 2023</p>
                    <a>Get tickets</a>
                </div>
            </li>
        </ul>
    </section>
  )
}
