import React from 'react'

import Image from 'next/image'

import styles from '../styles/news.module.scss'

import placeholder from '../public/placeholder.jpeg'
import NewsPost from './NewsPost'

export default function News() {
  return (
    <section id={styles['newsContainer']}>
        {/* <div className={styles.post}>
            <div className={styles.imageWrapper}>
                <Image 
                    src={placeholder}
                    objectFit='contain' 
                    layout='fill'
                />
            </div>
            <p>Man braid tote bag craft beer vinyl, stumptown disrupt meditation mustache before they sold out snackwave. Normcore irony humblebrag flexitarian cloud bread seitan. Pinterest sus unicorn af, subway tile ennui blue bottle tonx 3 wolf moon fashion axe pickled vape literally cred. Authentic pabst iceland fam prism deep v adaptogen dreamcatcher vinyl cardigan jianbing raclette blue bottle. Tofu biodiesel craft beer taiyaki pabst shaman wolf.</p>
        </div> */}
        <NewsPost 
            title='News Item Title 1'
            image={placeholder}
            date='January 1st 2023'
            text='Man braid tote bag craft beer vinyl, stumptown disrupt meditation mustache before they sold out snackwave. Normcore irony humblebrag flexitarian cloud bread seitan. Pinterest sus unicorn af, subway tile ennui blue bottle tonx 3 wolf moon fashion axe pickled vape literally cred. Authentic pabst iceland fam prism deep v adaptogen dreamcatcher vinyl cardigan jianbing raclette blue bottle. Tofu biodiesel craft beer taiyaki pabst shaman wolf.'
        />
        <NewsPost 
            title='News Item Title 2'
            image={placeholder}
            date='February 1st 2023'
            text='Slow-carb fam mumblecore, paleo schlitz raclette kombucha. Keffiyeh chambray irony adaptogen typewriter fixie neutra knausgaard pickled retro. Paleo williamsburg echo park kogi. Intelligentsia cred hell of health goth. Paleo master cleanse gluten-free biodiesel salvia.'
        />
        <NewsPost 
            title='News Item Title 3'
            image={placeholder}
            date='March 1st 2023'
            text='Slow-carb single-origin coffee subway tile same portland, street art poke readymade fixie cloud bread. Gastropub four dollar toast williamsburg, master cleanse franzen flannel sartorial normcore mlkshk. Dreamcatcher literally prism thundercats master cleanse lumbersexual shabby chic celiac aesthetic. Listicle gatekeep jianbing vaporware viral VHS bicycle rights organic kombucha vegan.'
        />

    </section>
  )
}
