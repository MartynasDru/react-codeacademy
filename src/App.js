import { useEffect, useState } from 'react';
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
      <input className="search-input" onChange={handleInputChange} />
      <div className="posts-wrapper">
        {
          posts
            .filter((post) => post.title.indexOf(searchInputValue) >= 0)
            .map((post) => (
              <div className="post" key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <button>Test</button>
              </div>
            ))
        }
      </div>
    </div>
  );
}

export default App;
