import React from 'react'
import Image from 'next/image'

import styles from '../styles/music.module.scss'


export default function Watch() {
  return (
    <section id={styles['musicContainer']}>
            

        {/* <blockquote 
            className="tiktok-embed"
            cite="https://www.tiktok.com"
            data-embed-type="curated"
            data-video-id-list="7144725450613329158"
            data-embed-from="embed_page"
            style={{maxWidth: '780px', minWidth: '325px'}}>
                <section>
                    <a 
                        // target="_blank" 
                        href="https://www.tiktok.com?refer=embed_page">
                            TikTok
                    </a>
                </section>
        </blockquote>
        <script async src="https://www.tiktok.com/embed.js"></script> */}
        {/* <iframe src='https://www.tiktok.com/@bungalow_jonathan/video/7144725450613329158?is_from_webapp=1&sender_device=pc&web_id=7130064976832251398'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        // allowfullscreen
        title='video'
/> */}
<div id={styles['flexBox']}>
    <iframe 
        // width="1423" 
        // height="597"
        // height='100%' 
        // width='100%'
        // width='597'
        src="https://www.youtube.com/embed/2JDPRAnqHDw" 
        title="Bungalow Jonathan - Love Online (Music Video)" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;" 
        allowFullScreen
        className={styles.youtubeVideo}
        
        >
    </iframe>
    <iframe 
        style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/artist/56tAyiRk1Ea33YJ4C8K5Xv?utm_source=generator&theme=0" 
        width="100%" 
        height="200px" 
        frameBorder="0" 
        // allowFullScreen="true" 
        className={styles.spotifyEmbed}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
    </iframe>
    {/* <iframe 
        // width="1423" 
        // height="597"
        // height='100%' 
        // width='100%'
        // width='597'
        src="https://www.youtube.com/embed/2JDPRAnqHDw" 
        title="Bungalow Jonathan - Love Online (Music Video)" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className={styles.youtubeVideo2}
        
        >
    </iframe> */}

</div>


    </section>
  )
}
