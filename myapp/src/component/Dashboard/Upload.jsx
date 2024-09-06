import React from 'react'
import './css/Upload.css'

const Upload = () => {
    return (
        <div>

            
            <h2>Uploade books</h2>
            <form action="">

                <label for="fname">Book title</label>
                <input type="text" id="" name="firstname" placeholder="Your Book Title" />

                <label for="lname">Author Name</label>
                <input type="text" id="" name="Author Name" placeholder="Your Author Name" />

                <label for="lname">Book Image</label>
                <input type="text" id="" name="Book Image" placeholder="Your book Image" />

                <label for="lname">Book Discription</label>
                <input type="text" id="" name="" placeholder="Book discription" />

                <label for="country">category</label>
                <select id="country" name="country">
                    <option value="australia">horror</option>
                    <option value="canada">fiction</option>
                    <option value="usa">Sci-Fi</option>
                </select>

                <button className='btn btn-outline-danger' >Upload</button>

            </form>
        </div>
    )
}

export default Upload
