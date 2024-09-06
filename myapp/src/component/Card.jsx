import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Card = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/all-book")
            .then((Response) => Response.json())
            .then((data) => {
                setBooks(data)
                console.log(data)
            })
    }, [])
    return (
        <div>
            <div className='row'>

                {books.map((book, index) => (



                    <div className='col-md-4'>

                        <div className="card">
                            <img src={book.bookImage}className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title{book.bookName}</h5>
                                <p className="card-text">{book.bookdiscription}</p>
                                <Link to={`./Singlecard/${book._id}`}>sea details</Link>
                            </div>
                        </div>

                    </div>
                ))}

            </div>



        </div>
    )
}

export default Card
