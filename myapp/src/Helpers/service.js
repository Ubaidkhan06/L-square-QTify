import axios from 'axios'

export const fetchTopAlbums = async() =>{
    const result = await axios.get("https://qtify-backend-labs.crio.do/albums/top") 
    return result.data
}