import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

import axios from 'axios'


import useAxios from '../CustomHooks/useAxios'



const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog,isPending,isError} = useAxios('http://localhost:8000/blogs/'+ id)
    let navigate = useNavigate();

    const deleteHandler = () => {
        axios.delete('http://localhost:8000/blogs/'+ id).then((res) => {
            navigate('/')
        })
    }
    return(
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {isError && <div>{isError}</div>}
            {blog &&( <article>
                <h2>{blog.title}</h2>
                <p>Written By {blog.author}</p>
                <div>{blog.body}</div>

                <button onClick={deleteHandler}>Delete Blog</button>
                </article>)
            }
        </div>
    );
}

export default BlogDetails;