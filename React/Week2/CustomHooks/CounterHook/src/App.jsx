import {useState, useEffect} from 'react'

function useFetchTitle() {
  const [post, setPost] = useState({});

   async function fetchPost () {
     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
     const json = await response.json();
     setPost(json);  
   }

   useEffect(() => {
      fetchPost ();
   },[])
   
   return post.title; 

}


function App() {
   const postTitle = useFetchTitle();
  return (
    <>
      <div> {postTitle} </div>
      <div> {postTitle} </div>
      <div> {postTitle} </div>
      <div> {postTitle} </div>
    </>
  );
}

export default App;


