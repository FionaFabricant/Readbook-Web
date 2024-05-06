import React, { Component } from 'react';
import { 
  HeaderWrapper,
  HeaderWrapperInner,
  Logo,
  HeaderWrapperNav,
  HeaderWrapperNavItemAboutUs,
  HeaderWrapperNavItemList,
  HeaderWrapperNavItemListItem,
  SearchBoxWrapper, 
} from './style';
import SearchBox from './searchBox';

export default class Header extends Component {
  render() {
    return (
      <div>
        <HeaderWrapper>
          <HeaderWrapperInner>
            <Logo />
            <HeaderWrapperNav>
              <SearchBoxWrapper> 
                <SearchBox />
              </SearchBoxWrapper>
              <div>
                <HeaderWrapperNavItemAboutUs
                  onMouseEnter={() => {
                    this.refs.aboutUsRef.style.display = 'block';
                  }}
                  onMouseLeave={() => {
                    this.refs.aboutUsRef.style.display = 'none';
                  }}
                >
                  Creaction Center
                  <HeaderWrapperNavItemList ref="aboutUsRef">
                    <HeaderWrapperNavItemListItem>Creation</HeaderWrapperNavItemListItem>
                    <HeaderWrapperNavItemListItem>Live</HeaderWrapperNavItemListItem>
                    <HeaderWrapperNavItemListItem>Assist</HeaderWrapperNavItemListItem>
                  </HeaderWrapperNavItemList>
                </HeaderWrapperNavItemAboutUs>
                <HeaderWrapperNavItemAboutUs
                  onMouseEnter={() => {
                    this.refs.businessRef.style.display = 'block';
                  }}
                  onMouseLeave={() => {
                    this.refs.businessRef.style.display = 'none';
                  }}
                >
                  Business Cooperation
                  <HeaderWrapperNavItemList ref="businessRef">
                    <HeaderWrapperNavItemListItem>ProAccount</HeaderWrapperNavItemListItem>
                    <HeaderWrapperNavItemListItem>Cooperation</HeaderWrapperNavItemListItem>
                    <HeaderWrapperNavItemListItem>Merchants</HeaderWrapperNavItemListItem>

                  </HeaderWrapperNavItemList>
                </HeaderWrapperNavItemAboutUs>
              </div>
            </HeaderWrapperNav>
          </HeaderWrapperInner>
        </HeaderWrapper>
      </div>
    );
  }
}
