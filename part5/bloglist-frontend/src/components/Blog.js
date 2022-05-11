import React from 'react'
import { useState } from 'react'

const Blog = ({ blog, handleUpdateBlog, handleRemoveBlog }) => {
  const [show, setShow] = useState(false)

  const hideWhenVisible = { display: show ? 'none' : '' }
  const showWhenVisible = { display: show ? '' : 'none' }

  const handleClick = () => {
    setShow(!show)
  }

  const handleLike = () => {
    blog.likes = blog.likes + 1
    handleUpdateBlog(blog)
  }

  const handleRemove = () => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      handleRemoveBlog(blog)
    }
  }

  let showButton = show === true? "hide" : "view"

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  //console.log(blog)

  return (
    <div style={blogStyle}>
      <div style={hideWhenVisible}>
        <p className='title'>
          {blog.title}
          <button onClick={handleClick}>{showButton}</button>
        </p>
      </div>
      <div style={showWhenVisible}>
        <p>
          {blog.title}
          <button onClick={handleClick}>{showButton}</button>
        </p>
        <p>{blog.url}</p>
        <p>
          {blog.likes}
          <button onClick={handleLike}>like</button>
        </p>
        <p>{blog.author}</p>
        <button onClick={handleRemove}>remove</button>
      </div>
    </div>
  )
}

export default Blog