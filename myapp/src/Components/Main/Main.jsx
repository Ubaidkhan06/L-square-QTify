import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetchNewAlbums, fetchTopAlbums } from '../../Helpers/service'
import Caraousel from '../Caraousel/Carousel'
import Card from '../Card/Card'
import CarouselSection from '../CarouselSection/CarouselSection'
import Section from '../Section/Section'
import styles from './Main.module.css'


const Main = () => {

    const [topAlbums, setTopAlbums] = useState([])
    const [newAlbums, setNewAlbums] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetchTopAlbums()
            const newRes = await fetchNewAlbums()
            setTopAlbums(res)
            setNewAlbums(newRes)
        })()
    }, [])


    return (
        <>
            <CarouselSection data={topAlbums} sectionTitle={'Top Albums'} />
            <CarouselSection data={newAlbums} sectionTitle={'New Albums'} />
            <hr color='green'/>
            <CarouselSection data={newAlbums} sectionTitle={'New Albums'} />

        </>
    )
}

export default Main