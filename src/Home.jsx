import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { usePagination } from './hooks/usePagination'
import './style.css'

const Home = () => {
    const [ searchParams ] = useSearchParams()

    const { products, limit, nextPage, prevPage, loading, skip } = usePagination(
        'https://dummyjson.com/products',
        searchParams
    )
    return (
        <div className="container">
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>brand</th>
                    <th>title</th>
                    <th>price</th>
                    <th>rating</th>
                </tr>
                </thead>
                <tbody>
                { products?.map( ( el, id ) => {
                    return <tr key={ el.id }>
                        <td>{ el.id }</td>
                        <td>{ el.brand }</td>
                        <td>{ el.title }</td>
                        <td>{ el.price }</td>
                        <td>{ el.rating }</td>
                    </tr>
                } ) }
                </tbody>
            </table>
            <div className="box__loader"> { loading && <span className="loader"></span> }</div>
            <div className="navPanel">
                { skip > 0 && <Link to={ `?skip=${ prevPage }&limit=${ limit }` }>Prev page</Link> }
                { skip < 90 && <Link to={ `?skip=${ nextPage }&limit=${ limit }` }>Next page</Link> }
            </div>
        </div>
    )
}

export default Home
