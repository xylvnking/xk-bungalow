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
            title='News Item Title'
            image={placeholder}
            text='Man braid tote bag craft beer vinyl, stumptown disrupt meditation mustache before they sold out snackwave. Normcore irony humblebrag flexitarian cloud bread seitan. Pinterest sus unicorn af, subway tile ennui blue bottle tonx 3 wolf moon fashion axe pickled vape literally cred. Authentic pabst iceland fam prism deep v adaptogen dreamcatcher vinyl cardigan jianbing raclette blue bottle. Tofu biodiesel craft beer taiyaki pabst shaman wolf.'
        />
        <NewsPost 
            title='News Item Title'
            image={placeholder}
            text='Man braid tote bag craft beer vinyl, stumptown disrupt meditation mustache before they sold out snackwave. Normcore irony humblebrag flexitarian cloud bread seitan. Pinterest sus unicorn af, subway tile ennui blue bottle tonx 3 wolf moon fashion axe pickled vape literally cred. Authentic pabst iceland fam prism deep v adaptogen dreamcatcher vinyl cardigan jianbing raclette blue bottle. Tofu biodiesel craft beer taiyaki pabst shaman wolf.'
        />
        <NewsPost 
            title='News Item Title'
            image={placeholder}
            text='Man braid tote bag craft beer vinyl, stumptown disrupt meditation mustache before they sold out snackwave. Normcore irony humblebrag flexitarian cloud bread seitan. Pinterest sus unicorn af, subway tile ennui blue bottle tonx 3 wolf moon fashion axe pickled vape literally cred. Authentic pabst iceland fam prism deep v adaptogen dreamcatcher vinyl cardigan jianbing raclette blue bottle. Tofu biodiesel craft beer taiyaki pabst shaman wolf.'
        />

    </section>
  )
}
