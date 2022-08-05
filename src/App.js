import {useCallback, useEffect, useState} from 'react';
// NPM PACKAGE
import axios from 'axios';

import Characters from './components/characters/Index';
import SearchBar from './components/searchBar/Index';

import "./App.scss";

const App = () => {
  const [characters, setCharacters] = useState(null);
  const [characterSearch, setCharacterSearch] = useState("");

  const getCharacters = useCallback(async () => {
    if (characterSearch !== "") {
      await axios
        .get(`http://localhost:4000/?query=${characterSearch}`)
        .then(({ data }) => setCharacters(data.personajes));
    } else {
      await axios
        .get("http://localhost:4000/")
        .then(({ data }) => setCharacters(data.personajes));
    }
  }, [characterSearch]);

  console.log(characters)

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return (
    <div>
      <SearchBar characters setCharacterSearch={setCharacterSearch} />
      <Characters characters={characters} />
    </div>
  );
};

export default App;