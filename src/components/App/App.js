import king_vigo from '../../assets/images/king_vigo.png';

import './App.css';

const App = () => {
  return (
    <div className="header">
      <header>
        {/* Header content goes here */}
      </header>
      <main className='main'>
        <div className="overlay">
          <div className="container">
            <img src={king_vigo} alt="Count Vigo" className="mint_vigo_img"/>
            <button className="mint-button">Connect Wallet</button>
          </div>
        </div>
      </main>
    </div>  
  );
};

export default App;
