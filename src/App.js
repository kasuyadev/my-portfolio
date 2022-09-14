// import { createContext, useEffect, useRef, useState } from 'react';
import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Router from './components/router/Router';

export const flgContext = createContext();

function App() {
  const [flg, setFlg] = useState('Top')
  const flgM = {
    flg,
    setFlg,
  };
  // スクロールを無効にする処理、聞かなかったのでコメントアウト
  // useEffect(() => {
  //   window.addEventListener('touchmove', function(e){
  //     e.preventDefault();
  //   });
  // },[])

  return (
    <div className="App">
      <flgContext.Provider value={flgM}>
        <Header />
        <Router />
      </flgContext.Provider>
    </div>
  );
};

export default App;
