import React, { useState } from 'react'
import Caraousel from '../Caraousel/Carousel'
import Card from '../Card/Card'
import Section from '../Section/Section'
import styles from './CarouselSection.module.css'


const CarouselSection = ({ sectionTitle, data:topAlbums }) => {

    const [isShowAll, setIsShowAll] = useState(false)

    const toggleEvent = () =>{
        setIsShowAll(prev => !prev)
    }


    return (
        <div className={styles.sectionWrapper}>
            <Section title={sectionTitle} toggle={isShowAll ? 'Collapse' : 'Show All'} toggleEvent={toggleEvent} />
            <div className={styles.main}>
                {isShowAll ? (
                    topAlbums?.map(album => (
                        <Card {...album} />
                    ))) : (
                    <Caraousel isButton data={topAlbums} renderComponent={(data) => <Card {...data} />} />
                )}

            </div>
        </div>
    )
}

export default CarouselSection