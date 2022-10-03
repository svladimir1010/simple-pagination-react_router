import axios from 'axios'

export default class PostService {
    static async getAll( url, query ) {
        const res = await axios.get( `${ url }?${ query }` )
        return res.data
    }
}

