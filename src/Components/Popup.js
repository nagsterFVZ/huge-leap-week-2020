import React from 'react';

//Components
import BoxContainer from '../Components/BoxContainer';

export default class Popup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      active: this.props.active? this.props.active : false
    };
  }

  /**
   * @brief Set active state.
   */
  setActive(active) {
    this.setState({active: active});
  }

  /**
   * @brief Get active state.
   */
  getActive() {
    return this.state.active;
  }

  render() {
    return (
      <div className={'popup' + (this.state.active? ' active' : '')}>
        <BoxContainer className={'container' + (this.props.className? ' ' + this.props.className : '')}>
          {this.props.children}
        </BoxContainer>
      </div>
    )
  }

}