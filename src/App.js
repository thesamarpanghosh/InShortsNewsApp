import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';

function App() {

  const [query,setQuery] = useState("");

  const [state, setState] = useState({
    articles: [],
    loading: true,
    totalResults: 0,
    loadmore: 20,
    category: "general"
});
  
  return (
    <div className="App">
      <Navbar state={state} setState={setState} query={query} setQuery={setQuery} />
      <News state={state} setState={setState} query={query} />
      <Footer />
    </div>
  );
}

export default App;
