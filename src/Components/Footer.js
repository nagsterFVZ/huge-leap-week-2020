import React from 'react';

//Assets
import MailIcon from 'svg-react-loader?name=Icon!../Assets/Icons/ios-mail.svg';
import LinkedinIcon from 'svg-react-loader?name=Icon!../Assets/Icons/logo-linkedin.svg';
import InstaIcon from 'svg-react-loader?name=Icon!../Assets/Icons/logo-instagram.svg';
import FBIcon from 'svg-react-loader?name=Icon!../Assets/Icons/logo-facebook.svg';
import MenuIcon from 'svg-react-loader?name=Icon!../Assets/Icons/ios-menu.svg';

//RouterActions
import { RouterActions } from '../Components/Router';

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menuItems: [
      ],
      activeMenuItem: null,
      menuActive: false
    };
  }
  
  componentDidMount() {
    //Export navigation actions.
    module.exports.NavigationActions = {
      setActiveMenuItem: this.setActiveMenuItem.bind(this),
      getActiveMenuItem: this.getActiveMenuItem.bind(this),
      setMenuActive: this.setMenuActive.bind(this),
      getMenuActive: this.getMenuActive.bind(this),
      toggleMenuActive: this.toggleMenuActive.bind(this)
    };
  }

  /**
   * @brief Sets the active menu item.
   * 
   * @param {string} value 
   */
  setActiveMenuItem(value) {
    this.setState({activeMenuItem: value});
  }

  /**
   * @brief Gets the active menu item.
   * 
   * @returns {string} Active menu item
   */
  getActiveMenuItem() {
    return this.state.activeMenuItem;
  }

  /**
   * @brief Set menu active.
   * 
   * @param {boolean} active 
   */
  setMenuActive(active) {
    this.setState({menuActive: active});
  }

  /**
   * @brief Get menu active.
   * 
   * @returns Menu active.
   */
  getMenuActive() {
    return this.state.menuActive;
  }

  /**
   * @brief Toggles the menu its active state.
   */
  toggleMenuActive() {
    this.setMenuActive(!this.state.menuActive);
  }

  /**
   * @brief Handles the click event of a menu item.
   * 
   * @param {string} route 
   */
  onClickMenuItem(route) {
    RouterActions.navigate(route);
    this.setMenuActive(false);
  }

  render() {
    return (
      <nav className={'footer' + (this.props.className? ' ' + this.props.className : '')}>
        <div className='content content-width'>

          <MenuIcon onClick={this.toggleMenuActive.bind(this)} className='menu-button' />

          <div className='left-container'>
            <h1 className='logo' onClick={this.onClickMenuItem.bind(this, '/')}><span>Save the Date: 5, 6 & 7 February 2020</span></h1>
          </div>

          <div className={'right-container' + (this.state.menuActive? ' active' : '')}>

            <div className='menu'>

              <div className='menu-items'>
                {this.state.menuItems.map((item, key) => {
                  return (
                    <h3 
                      key={item.value} 
                      onClick={this.onClickMenuItem.bind(this, item.route)}
                      className={this.state.activeMenuItem === item.value? 'active' : ''}
                      >{item.name}</h3>
                  )
                })}
              </div>
              
            {
              <div className='social-media-items'>
                <a href='https://www.instagram.com/hugeleapweek/' target='_blank'><InstaIcon /></a>
                <a href='https://www.facebook.com/hugeleapweek/' target='_blank'><FBIcon /></a>
              </div>
            }

            </div>

          </div>

        </div>
      </nav>
    )
  }

}