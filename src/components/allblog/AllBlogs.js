import React from 'react'
import { NavLink } from 'react-router-dom'
import './allBlog.css'

const AllBlogs = () => {
    return (
        <div className="allBlogs">
            <NavLink to="/blog/245" exact>
                All blogs
                
            </NavLink>
        </div>
    )
}

export default AllBlogs
