import './Home.css'

import useAxios from '../CustomHooks/useAxios'

import BlogList from './BlogList'

const Home = () => {

    const {data,isPending,isError} = useAxios('http://localhost:8000/blogs');
   

  
    
   
    return (
        <div className="home">
            {isError && <p>{isError}</p>}
            {isPending && <p>Loading...</p>}
            {data && <BlogList blogs={data} title="All Blogs" />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs"/> */}
        </div>
    );
}

export default Home;