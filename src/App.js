import React, { useState } from 'react'
import axios from 'axios';
import Search from './components/Search/Search'
import Results from './components/Results/Results'
import Popup from './components/Popup/Popup'

function App() {

  const [state, setState] = useState ({
    s: "",
    results: [],
    selected: {}
  });
  const api = "https://www.omdbapi.com/?apikey=dc214399"

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

  const openPopup = id => {
    axios(api + "&i=" + id).then(({ data }) => {
      let results = data;

      console.log(results);

      setState(prevState => {
        return {...prevState, selected: results}
      })
    })
  }

  const closePopup = () => {
    setState(prevState => {
      return {...prevState, selected: {}}
    })
  }

  return (
    <>
      <Search handleInput={handleInput} search={search} />
      <Results results={state.results} openPopup={openPopup}/>
      {(typeof state.selected.Title != "undefined")
       ? 
      <Popup selected={state.selected} closePopup={closePopup} />
       : 
      false}
    </>
  );
}

export default App;
