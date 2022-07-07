// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {list: [], isLoading: true}

  componentDidMount() {
    this.getListData()
  }

  getListData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const listData = await response.json()
    const convertedData = listData.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({list: convertedData, isLoading: false})
  }

  render() {
    const {list, isLoading} = this.state
    return (
      <div>
        <ul className="list-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="BallTriangle" color="red" height={50} width={50} />
            </div>
          ) : (
            list.map(eachItem => (
              <BlogItem key={eachItem.id} eachItem={eachItem} />
            ))
          )}
        </ul>
      </div>
    )
  }
}
export default BlogList
