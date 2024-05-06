
import React, { Component } from 'react';
import {
  HomeWrapper,
  HomeWrapperLeft,
  NavWrapper,
  NavItem,
  MoreWrapper, 

} from './style';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false 
    };
  }

  toggleOptions = () => {
    this.setState({ showOptions: !this.state.showOptions });
  };

  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeWrapperLeft>
            <NavWrapper>
              <NavItem><Link to="/discover">Discovery</Link></NavItem>
              <NavItem><Link to="/publish">Publish</Link></NavItem>
              <NavItem>Notification</NavItem>
              <NavItem>Me</NavItem>
              <MoreWrapper> 
                <NavItem onClick={this.toggleOptions}>More</NavItem>
                {this.state.showOptions && ( 
                  <div>
                    <NavItem>Help&Customer Service</NavItem>
                    <NavItem>Privacy</NavItem>
                    <NavItem>About Redbook</NavItem>
                  </div>
                )}
              </MoreWrapper>
            </NavWrapper>
          </HomeWrapperLeft>
        </HomeWrapper>
      </div>
    );
  }
}
