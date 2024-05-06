import styled from 'styled-components';
import logoPic from '../../statics/img/logo.png';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.04);
  z-index: 999;
  padding-top: 5px; 
  
`;

export const HeaderWrapperInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  padding-top: 15px; 
  
`;

export const Logo = styled.div`
  display: block;
  width: 72px;
  height: 25px;
  background: url(${logoPic}) no-repeat;
  background-size: contain;
  
`;

export const HeaderWrapperNav = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px; 
  
  
`;

export const HeaderWrapperNavItem = styled.a`
  margin-left: 20px;
  color: #555;
  font-size: 14px;
  
`;

export const HeaderWrapperNavItemAboutUs = styled(HeaderWrapperNavItem)`
  cursor: pointer;
  position: relative;
  right: 100px;
`;

export const HeaderWrapperNavItemList = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  width: 110px;
  height: 129px;
  z-index: 1000;
  background: #fff;
  border: 1px solid #eee;
  color: #000;
  border-radius: 4px;
  box-shadow: 0 1px 2px #eee;
  display: none;
  
`;

export const HeaderWrapperNavItemListItem = styled.a`
  width: 88px;
  height: 30px;
  display: block;
  line-height: 30px;
  margin-left: 10px;
  margin-top: 8px;
  font-size: 16px;
  color: #555;
  &:hover {
    color: black;
  }
`;

export const StyledSearchBox = styled.input`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  background-color: #f2f2f2;
  color: #333;
  font-size: 14px;
  width: 300px;
  ::placeholder {
    color: #999;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: #999;
  cursor: pointer;
  
`;

export const SearchBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  margin-top: 5px;
`;