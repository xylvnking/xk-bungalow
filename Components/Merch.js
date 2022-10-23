import React from 'react'
import Image from 'next/image'

import styles from '../styles/merch.module.scss'

export default function Merch() {
    // const [hasMounted, setHasMounted] = React.useState(false);
    // React.useEffect(() => {
    //     setHasMounted(true);
    //   }, []);
    //   if (!hasMounted) {
    //     return null;
    //   }

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
                <div className={styles.imageWrapper}>
                    <Image 
                        src='https://i.etsystatic.com/26267173/r/il/204a96/3736851009/il_1588xN.3736851009_e5f0.jpg' 
                        objectFit='contain' 
                        layout='fill'
                    />
                </div>
                <div className={styles.text}>
                    <h1>Item Name 1</h1>
                    <p>Coloring book swag deep v etsy small batch, pinterest bicycle rights celiac.  Messenger bag neutra YOLO flannel lo-fi skateboard. Small batch kitsch vibecession whatever.</p>
                    <a>Buy</a>
                </div>
            </div>
            <div className={styles.gridItem}>
                <div className={styles.imageWrapper}>
                    <Image 
                        src='https://img.cloudimgs.net/rx/1000x1250,q_90,ofmt_webp/s4/l_p:3105952:848395672d227194/fl_cutter,fl_layer_apply/u_p:3105952:5c686d9586bdf838/co_rgb:181818,e_colorize:100/fl_layer_apply/l_p:3105952:80ecbd_sh/fl_layer_apply/u_p:3105952:49a4b356879b6fab/fl_layer_apply/c_thumb,w_1280/f_jpg/v1/p/40558605/1e08315f8244e171728c4999050a1737/t/4e4b3ce2f52f8ad7.jpg' 
                        objectFit='contain' 
                        layout='fill'
                    />
                </div>
                <div className={styles.text}>
                    <h1>Item Name 2</h1>
                    <p>Swag organic etsy whatever selvage DSA, pitchfork stumptown glossier sus DIY fanny pack tbh meggings biodiesel. Quinoa kombucha humblebrag retro yuccie lumbersexual sartorial messenger bag. </p>
                    <a>Buy</a>
                </div>
            </div>
            <div className={styles.gridItem}>
                <div className={styles.imageWrapper}>
                    <Image 
                        src='https://res.cloudinary.com/teepublic/image/private/s--Z7byx781--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1563228924/production/designs/5323915_0.jpg' 
                        objectFit='contain' 
                        layout='fill'
                    />
                </div>
                <div className={styles.text}>
                    <h1>Item Name 3</h1>
                    <p>Green juice jianbing tumblr actually vice ennui before they sold out same poutine bruh craft beer gochujang. Bespoke poke mumblecore disrupt vice mukbang. Beard live-edge +1 try-hard. Drinking vinegar messenger bag chia edison bulb church-key.</p>
                    <a>Buy</a>
                </div>
            </div>
            <div className={styles.gridItem}>
                <div className={styles.imageWrapper}>
                    <Image 
                        src='https://i.etsystatic.com/22836434/c/704/559/135/60/il/f3a2bf/4212216103/il_340x270.4212216103_r9qb.jpg' 
                        objectFit='contain' 
                        layout='fill'
                    />
                </div>
                <div className={styles.text}>
                    <h1>Item Name 4</h1>
                    <p>Portland letterpress banh mi yr, lumbersexual bicycle rights umami gentrify live-edge. Trust fund hell of PBR&B selvage retro, pok pok activated charcoal ugh narwhal woke polaroid neutra Brooklyn craft beer semiotics. Viral raw denim taxidermy cronut.</p>
                    <a>Buy</a>
                </div>
            </div>
            <div className={styles.gridItem}>
                <div className={styles.imageWrapper}>
                    <Image 
                        src='https://stylesatlife.com/wp-content/uploads/2017/09/V-neck-Funny-T-Shirt.jpg.webp' 
                        objectFit='contain' 
                        layout='fill'
                    />
                </div>
                <div className={styles.text}>
                    <h1>Item Name 5</h1>
                    <p>Typewriter raw denim XOXO dreamcatcher artisan master cleanse distillery humblebrag pickled. Skateboard whatever keytar waistcoat. Small batch cardigan tilde, cold-pressed tattooed jianbing gentrify forage fashion axe chia.</p>
                    <a>Buy</a>
                </div>
            </div>
            <div className={styles.gridItem}>
                <div className={styles.imageWrapper}>
                    <Image 
                        src='https://i.etsystatic.com/20116867/r/il/4e5a57/3742478897/il_1588xN.3742478897_2lvg.jpg' 
                        objectFit='contain' 
                        layout='fill'
                    />
                </div>
                <div className={styles.text}>
                    <h1>Item Name 5</h1>
                    <p>Vexillologist squid wolf offal pabst cray. Authentic migas banjo slow-carb portland bushwick. Pickled mixtape asymmetrical, yes plz raclette heirloom prism. Slow-carb salvia hashtag Brooklyn flexitarian fashion axe craft beer YOLO yr. </p>
                    <a>Buy</a>
                </div>
            </div>
        </div>

    </section>
  )
}
