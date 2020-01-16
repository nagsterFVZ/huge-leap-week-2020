import React from 'react';

export default class BoxContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'box-container' + (this.props.className? ' ' + this.props.className : '')}>
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    )
  }

}