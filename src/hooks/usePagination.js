import { useEffect, useState } from 'react'
import PostService from '../Api/service'

const usePagination = ( url, query ) => {
    const [ data, setData ] = useState( {
        page: 0,
        skip: 0,
        nextPage: 0,
        prevPage: 0,
        total: 0,
        limit: 0,
        total_pages: 0,
        loading: false,
    } )

    useEffect( () => {
        setData( { ...data, loading: true } )
        PostService.getAll( url, query.toString() )
                   .then( data => {
                       setData( {
                           ...data,
                           total_pages: Number( data.total / data.limit ),
                           nextPage: (Number( data.skip ) < Number( data.total - data.limit )) ? Number( data.skip ) + Number( data.limit ) : Number( data.skip ),
                           prevPage: Number( data.skip ) > 0 ? Number( data.skip ) - Number( data.limit ) : 0,
                           loading: false
                       } )
                   } )
    }, [ query.toString() ] )
    return data
}
export {
    usePagination
}
