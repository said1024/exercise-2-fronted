import axios from 'axios'
import React ,{useState,useEffect} from 'react'


export default function Task() {
const [Tasks, setFilms] = useState([])
useEffect(()=>{taskRequest()},[])
const taskRequest = async()=>{
  await axios.get('http://127.0.0.1:8000/api/task').then((res)=>{
    console.log(res)
  })
}


  return (
    <div>Task</div>
  )
}
