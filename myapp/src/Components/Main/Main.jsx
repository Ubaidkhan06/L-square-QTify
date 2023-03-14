import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetchTopAlbums } from '../../Helpers/service'
import Caraousel from '../Caraousel/Carousel'
import Card from '../Card/Card'
import Section from '../Section/Section'
import styles from './Main.module.css'


const Main = () => {

    const [topAlbums, setTopAlbums] = useState([])

    const [isShowAll, setIsShowAll] = useState(false)

    useEffect(() => {
        (async () => {
            const res = await fetchTopAlbums()
            setTopAlbums(res)
        })()
    }, [])

    const toggleEvent = () =>{
        setIsShowAll(prev => !prev)
    }

    return (
        <>
            <Section title={'Top Albums'} toggle={isShowAll ? 'Collapse' : 'Show All'} toggleEvent={toggleEvent}/>
            <div className={styles.main}>
                {isShowAll ? (
                    topAlbums?.map(album => (
                        <Card {...album} />
                    ))) : (
                        <Caraousel isButton data={topAlbums} renderComponent={(data) =>  <Card {...data} />} />
                )}

            </div>
        </>
    )
}

export default Main