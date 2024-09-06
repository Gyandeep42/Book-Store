import React from 'react'

import { Link } from 'react-router-dom'
import {HiUpload , HiViewBoards} from 'react-icons/hi'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <h1>Dashboard</h1>
        <hr />

        <div className="list-group">
            <Link to="upload" className='list-group-item-action'><HiUpload/>Uplode</Link>
            <Link to="ManageBook" className='list-group-item-action'><HiViewBoards/>ManageBook</Link>
        </div>
      
    </div>
  )
}

export default Sidebar
