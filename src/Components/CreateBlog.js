import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import axios from 'axios'

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('mario');
    const [isPending,setPending] = useState(false);
    let navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        // console.log('hi')
        const blog = {title,body,author}
        setPending(true);
        axios.post('http://localhost:8000/blogs/',{
            title:blog.title,
            body:blog.body,
            author:blog.author
        }).then((res) => {
            console.log(res)
            setPending(false)
            navigate('/')
        }).catch((err) => {
            console.log(err)
            setPending(false)
        })
    }
    return (
        <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={submitHandler}>
        <label>Blog title:</label>
        <input 
          required
          type="text"
          value={title}
          onChange={(e) => {setTitle(e.target.value)}}
        />
        <label>Blog body:</label>
        <textarea
        required
        value={body}
        onChange={(e) => {setBody(e.target.value)}}
        ></textarea>
        <label>Blog author:</label>
        <select
          required
          onChange={(e) => {setAuthor(e.target.value)}}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding a Blog</button>}
      </form>
    </div>
    ); 
}

export default CreateBlog;