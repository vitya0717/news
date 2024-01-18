import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hirek from './Hirek';


function App() {
  const NyelvKontextus = React.createContext();
  const [currentLanguage, setCurrentLanguage] = React.useState('hu')

  const szotar = {
    hu: {
      'navtitle': 'Hirek',
      'hungarian': 'Magyar',
      'english': 'Angol',
      'title': '444.hu a legjobb híroldal',
      'changeLanguage': 'Nyelvválasztó',
      'cardTitle': 'Hírek',
      'read': 'Többet olvasás',
    },
    en: {
      'navtitle': 'News',
      'hungarian': 'Hungarian',
      'english': 'English',
      'title': '444.hu the best news',
      'changeLanguage': 'Change language',
      'cardTitle': 'News',
      'read': 'Read more',
    }
  }

  return (
    <div className='container-fluid'>
      <NyelvKontextus.Provider value={currentLanguage}>
        <BrowserRouter>
          <Navbar NyelvKontextus={NyelvKontextus} szotar={szotar} setCurrentLanguage={setCurrentLanguage} currentLanguage={currentLanguage}/>
          <h1 className='text-center'>{szotar[currentLanguage].title}</h1>
          <Routes>
            <Route path='/' element={<Hirek currentLanguage={currentLanguage} szotar={szotar} setCurrentLanguage={setCurrentLanguage} />} />
          </Routes>
        </BrowserRouter>
      </NyelvKontextus.Provider>
    </div>
  );
}

export default App;
