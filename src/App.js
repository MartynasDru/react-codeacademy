import { useEffect, useState } from 'react';
import { filterPosts } from './utils';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  const handleInputChange = (event) => setSearchInputValue(event.target.value);

  return (
    <div className="App">
      <input onChange={handleInputChange} />
      {
        posts
          .filter((post) => post.title.indexOf(searchInputValue) >= 0)
          .map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
      }
    </div>
  );
}

export default App;
