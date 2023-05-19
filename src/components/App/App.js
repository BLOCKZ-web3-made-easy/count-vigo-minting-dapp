import king_vigo from '../../assets/images/king_vigo.png';

import appStyles from './App.css';
import mintButtonStyles from '../../components/Mint_Button/Mint_Button.css';
import Vigo_Image_GalleryStyles from '../../components/Vigo_Image_Gallery/Vigo_Image_Gallery.css';

import MintButton from '../Mint_Button/Mint_Button';
import Vigo_Image_Gallery from '../Vigo_Image_Gallery/Vigo_Image_Gallery';

const App = () => {
  return (
    <div className="header">
      <header>
        {/* Header content goes here */}
      </header>
      <main className='main'>
        <div className="overlay">
          <div className="container">
            <Vigo_Image_Gallery src={king_vigo} alt="Count Vigo" className="mint_vigo_img"/>
            <MintButton>Connect Wallet</MintButton>
          </div>
        </div>
      </main>
    </div>  
  );
};

export default App;
