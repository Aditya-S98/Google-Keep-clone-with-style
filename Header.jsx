import React from 'react';
import logo from './Images/logo.png'
const Header = () => {
   return(
      <>
         <div className='header'>
            <img src={logo} alt='logo' className='logo_img'/>
            <h1>&nbsp;Google Keep</h1>
         </div>
      </>
   );
};

export default Header;