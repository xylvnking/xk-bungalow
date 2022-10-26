import React from 'react'
// import bung1 from '../public/bung1.png'
import styles from '../styles/nav.module.scss'

export default function Nav() {
  return (
    <nav id={styles['navContainer']}>
        <ul>
            <li id={styles['music']}>
                <a>
                    Music
                </a>
            </li>
            <li id={styles['news']}>
                <a>
                    News
                </a>
            </li>
            <li id={styles['merch']}>
                <a>
                    Merch
                </a>
            </li>
            <li id={styles['about']}>
                <a>
                    About
                </a>
            </li>
            <li id={styles['tours']}>
                <a>
                    Tours
                </a>
            </li>
            <li id={styles['contact']}>
                <a>
                    Contact
                </a>
            </li>
            {/* <li>
                <a>
                    News
                </a>
            </li> */}
            {/* <li>
                <a>
                    Watch
                </a>
            </li> */}
        </ul>

    </nav>
  )
}
