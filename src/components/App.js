import { useEffect, useState } from 'react';
import Header from './Header';
import Dummy from './Dummy';
import Instructions from './Instructions';
import Options from './Options';
// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';
import '../styles/Letters.scss';
import '../styles/Form.scss';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events
  const handleKeyDown = (ev) => {
    // Sabrías decir para qué es esta línea
    ev.target.setSelectionRange(0, 1);
  };

  const handleChange = (ev) => {
    let re = /^[a-zA-ZñÑá-úÁ-Ú´]$/; //add regular pattern
    if (re.test(ev.target.value) || ev.target.value === '') {
      handleLastLetter(ev.target.value);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter((letter) => word.includes(letter) === false);
    return errorLetters.length;
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      const exists = userLetters.includes(letter.toLocaleLowerCase());
      return (
        <li key={index} className='letter'>
          {exists ? letter : ''}
        </li>
      );
    });
  };

  const renderErrorLetters = () => {
    const errorLetters = userLetters.filter((letter) => word.toLocaleLowerCase().includes(letter.toLocaleLowerCase()) === false);
    return errorLetters.map((letter, index) => {
      return (
        <li key={index} className='letter'>
          {letter}
        </li>
      );
    });
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  return (
    <div className='page'>
      <Header></Header>

      <main className='main'>
        <Routes>
          <Route
            path='/'
            element={
              <section>
                <SolutionLetters renderSolutionLetters={renderSolutionLetters}></SolutionLetters>
                <ErrorLetters renderErrorLetters={renderErrorLetters}></ErrorLetters>
                <Form handleSubmit={handleSubmit} handleKeyDown={handleKeyDown} handleChange={handleChange} lastLetter={lastLetter}></Form>
              </section>
            }
          />
          <Route path='/instructions' element={<Instructions />} />
          <Route path='/options' element={<Options />} />
        </Routes>

        <Dummy numberOfErrors={getNumberOfErrors()}></Dummy>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
