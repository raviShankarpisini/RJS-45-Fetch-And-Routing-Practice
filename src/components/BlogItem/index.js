// Write your JS code here

import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = eachItem
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <li>
        <div className="blog-item">
          <img src={imageUrl} alt={title} className="blog-item-image" />
          <div className="blog-item-text-container">
            <p className="blog-topic">{topic}</p>
            <h1 className="blog-title">{title}</h1>
            <div className="author-icon-name-container">
              <img className="image-icon" src={avatarUrl} alt={author} />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
