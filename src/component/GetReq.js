import React, { Component } from 'react'
import axios from 'axios'

class getReq extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            this.setState({posts:response.data})
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }
  render() {
      const {posts}=this.state
    return (
      <div>
    getReq
      {
          posts.length>0 ? 
          posts.map(post =><div key={post.id}>
              {post.title}
          </div>):null
      }
      </div>
    )
  }
}

export default getReq