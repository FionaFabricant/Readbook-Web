import styled from 'styled-components';
import homeWrapperTopLeftPic from '../../statics/img/homeWrapperTopLeft_pic.jpg';

export const HomeWrapper = styled.div`
  width: 100%;
`;

export const HomeWrapperTop = styled.div`
  overflow: hidden;
  width: 78%; 
  max-width: 1100px; 
  margin: 0 auto; 
  margin-top: 90px;
  margin-left: 22%; 
`;

export const HomeWrapperTopLeftPic = styled.div`
  width: 248px;
  height: 16px;
  display: block;
  margin-top: 10px;
  background: url(${homeWrapperTopLeftPic}) no-repeat;
  background-size: contain;
`;

export const HomeWrapperTopLeftPhone = styled.div`
  width: 150px;
  height: 40px;
`;

export const BlogImage = styled.img`
  max-width: 100%; 
  height: auto; 
`;

export const VideoWrapper = styled.div`
  max-width: 100%; 
  height: auto; 
  margin-top: 30px; 

`;

