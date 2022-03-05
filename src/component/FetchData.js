import React,{useState,useEffect} from 'react'
import axios from 'axios'

function FetchData() {
    const [posts,setPosts] = useState([])
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response)
            setPosts(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[])
  return (
    <div>FetchData
        <li>
            {posts.map(post =>
            <li key={post.id}>{post.title}</li>)}
        </li>



    </div>
  )
}

export default FetchData