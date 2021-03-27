import React, { useState } from 'react'
import axios from 'axios';
import Search from './components/Search/Search'

function App() {

  const [state, setState] = useState ({
    s: "",
    results: [],
    selected: {}
  });
  const api = "http://www.omdbapi.com/?apikey=dc214399"

  const search = (e) => {
    if (e.key === "Enter") {
      axios(api + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return {...prevState, results: results}
        })
      })
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return {...prevState, s: s}
    });

    console.log(state.s);
  }

  return (
    <>
      <Search handleInput={handleInput} search={search} />
    </>
  );
}

export default App;
