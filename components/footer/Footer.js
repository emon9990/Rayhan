"use client"

import css from './footer.module.scss';
import { footerVariants, staggerChildren } from "@/utils/motion";
import {motion} from 'framer-motion'

export default function Footer(){
    return(
        <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className='primaryText'>
            <span>Let's</span> make something <br />
            amazing together.
          </span>
          <span className='primaryText'>
            Start by <a href='mailto:zainkeepscode@gmail.com'>saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className='secondaryText'>Information</span>
            <p>Rangpur, Pirgonj</p>
          </div>
          <ul className={css.menu}>
            <li><a className={css.link} href='https://www.facebook.com/ToriqulTSR'>Facebook</a></li>
            <li><a className={css.link} href='https://twitter.com/Toriqulislamtsr?fbclid=IwAR1vnVQB21CTFZTJTPUhwE-cW2DJKZYv8bF3yOsx1EKMFY7RzTJ8N0vKbSY'>Twitter</a></li>
            <li><a className={css.link} href='https://www.linkedin.com/in/tusherseo?fbclid=IwAR3sBNnZQsfr6BxJ7gQCLjy9XpQWIr9fnXmHvrsTBfYKM42fMjq3e7sxLcM'>Linkedin</a></li>
            <li><a className={css.link} href='https://www.instagram.com/toriqulpg/?fbclid=IwAR2COyWP5w2k64goRhC3_KnifnioFe4hzpvEo3R1rTJvkFIqBCd-CiHbsY4'>Instagram</a></li>
            <li><a className={css.link} href='https://www.pinterest.com/toriqulislamtusher/'>Pinterest</a></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
    )
}


