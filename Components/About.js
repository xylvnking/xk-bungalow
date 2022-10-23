import React from 'react'
import styles from '../styles/about.module.scss'
import Image from 'next/image'
import about from '../public/about.jpg'

export default function About() {
  return (
    <section id={styles['aboutContainer']}>
        <div id={styles['about']}>
            <div className={styles.text}>
                <h1>Bungalow Jonathan</h1>
                {/* <p>Hell of pug kitsch banjo food truck migas. Mustache banjo bitters celiac, green juice cred enamel pin polaroid keytar meh fingerstache bushwick ugh. Vice direct trade post-ironic sustainable +1 synth. Flannel green juice tousled actually fam man braid palo santo bodega boys try-hard 3 wolf moon hammock crucifix iceland. 8-bit cliche ennui gatekeep blog craft beer, pug offal ramps sus microdosing scenester williamsburg. Pork belly same bushwick four dollar toast slow-carb, vexillologist street art copper mug pabst fingerstache mustache JOMO pickled.</p> */}
                <p>This is where you'll write a bio. Or Somebody will write a bio. I don't care. Bios are weird. I need to write a temporary filler text here. I actually really like this font but I don't know how legible it is. I think this and the thicker marker one I've been using are dope cause they aren't so 'serious' but like some other stylistic choices I've made I'm not sure if they're actually what you'll vibe with. I'm not a designer so I sort of just have to lay down <em>something</em> and then make it better after cause i have no idea what I want to do when I sit down to make stuff.</p>
            </div>
            <div className={styles.imageWrapper}>
                <Image src={about} objectFit='cover'/>
            </div>
        </div>
    </section>
  )
}
