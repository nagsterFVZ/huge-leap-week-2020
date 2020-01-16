import React from 'react';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className='header'>
            <img src="./assets/images/HLW_Header.jpg" className='headerIMG' alt="" height="100%" width="100%"></img>
            <img src="./assets/images/HLW_Header_M.png" className='headerIMGMobile' alt="" height="100%" width="100%"></img>
        </div>
    )
  }

}