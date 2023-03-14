import React from 'react'
import styles from './Section.module.css'


const Section = ({ title, toggle, toggleEvent }) => {
    return (
        <div className={styles.section}>
            <h1 className={styles.title}>
                {title}
            </h1>
            <div className={styles.button} onClick={toggleEvent}>
                {toggle}
            </div>
        </div>
    )
}

export default Section