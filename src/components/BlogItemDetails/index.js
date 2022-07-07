// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount() {
    this.gettingBlogDetails()
  }

  gettingBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const request = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await request.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
      content: data.content,
    }
    console.log(updatedData)
    this.setState({blogDetails: updatedData, isLoading: false})
  }

  BlogItem = () => {
    const {blogDetails} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogDetails
    return (
      <div className="blog-item-details-container">
        <h1 className="detail-heading">{title}</h1>
        <div className="icon-author">
          <img className="icon" src={avatarUrl} alt={author} />
          <p className="author-name">{author}</p>
        </div>
        <img className="main-image" src={imageUrl} alt={title} />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Plane" color="blue" height={50} width={50} />
          </div>
        ) : (
          this.BlogItem()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
