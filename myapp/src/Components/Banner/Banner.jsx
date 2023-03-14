import React from 'react'
import styles from './Banner.module.css'
import headphone from '../../assets/headphone.png'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <img className={styles.headphone} src={headphone} alt="" />
        </div>
    )
}

export default Banner