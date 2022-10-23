import React from 'react'
import Image from 'next/image'

import styles from '../styles/merch.module.scss'

export default function Merch() {
    const [hasMounted, setHasMounted] = React.useState(false);
    React.useEffect(() => {
        setHasMounted(true);
      }, []);
      if (!hasMounted) {
        return null;
      }

    // const returnIframe = () => {
    //     return (
    //         <iframe style={{border: 0, width: '350px', height: '442px'}} src="https://bandcamp.com/EmbeddedPlayer/track=3044914175/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://bungalowjonathan.bandcamp.com/track/love-online">Love Online by Bungalow Jonathan</a></iframe>
    //     )
    // }
  return (
    <section id={styles['merchContainer']}>
        <div id={styles['grid']}>
        {/* <iframe style="border: 0; width: 350px; height: 442px;" src="https://bandcamp.com/EmbeddedPlayer/track=3044914175/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://bungalowjonathan.bandcamp.com/track/love-online">Love Online by Bungalow Jonathan</a></iframe> */}
        {/* <iframe className={styles.gridItem} src="https://bandcamp.com/EmbeddedPlayer/track=3044914175/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://bungalowjonathan.bandcamp.com/track/love-online">Love Online by Bungalow Jonathan</a></iframe>
        <iframe className={styles.gridItem} src="https://bandcamp.com/EmbeddedPlayer/track=3044914175/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://bungalowjonathan.bandcamp.com/track/love-online">Love Online by Bungalow Jonathan</a></iframe>
        <iframe className={styles.gridItem} src="https://bandcamp.com/EmbeddedPlayer/track=3044914175/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://bungalowjonathan.bandcamp.com/track/love-online">Love Online by Bungalow Jonathan</a></iframe>
        <iframe className={styles.gridItem} src="https://bandcamp.com/EmbeddedPlayer/track=3044914175/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://bungalowjonathan.bandcamp.com/track/love-online">Love Online by Bungalow Jonathan</a></iframe>
        <iframe className={styles.gridItem} src="https://bandcamp.com/EmbeddedPlayer/track=3044914175/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://bungalowjonathan.bandcamp.com/track/love-online">Love Online by Bungalow Jonathan</a></iframe>
        <iframe className={styles.gridItem} src="https://bandcamp.com/EmbeddedPlayer/track=3044914175/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://bungalowjonathan.bandcamp.com/track/love-online">Love Online by Bungalow Jonathan</a></iframe> */}
        {/* {returnIframe} */}
        {/* <iframe style={{border: 0, width: '100%', height: '120px'}} src="https://bandcamp.com/EmbeddedPlayer/track=3044914175/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://bungalowjonathan.bandcamp.com/track/love-online">Love Online by Bungalow Jonathan</a></iframe> */}
            <div className={styles.gridItem}>
                <Image />
            </div>
        </div>

    </section>
  )
}
