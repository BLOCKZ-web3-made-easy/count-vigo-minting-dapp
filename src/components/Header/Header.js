import React from 'react';
import vigo_logo from '../../assets/images/vigo_logo.svg';


const Header = ({ children }) => {
  return  <header>
            <div className="row">
                <div className="column column1"></div>
                <div className="column column2">
                  <div className="middle_one">
                   <img src={vigo_logo} alt={'alt'} className="logo"/>
                  </div>
                  <div className="middle_one">
                    <ul class="menu">
                      <li>Roadmap</li>
                      <li>The Lore</li>
                      <li>Vigo Crew</li>
                      <li>Mint</li>
                    </ul>
                  </div>
                </div>
                <div className="column column3"></div>
            </div>
           </header>;
};

export default Header;