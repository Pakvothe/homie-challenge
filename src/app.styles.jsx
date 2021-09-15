import styled from 'styled-components';
import { device } from './breackpoints.styles';

export const AppContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 36px 60px;
    background-color: #e5e5e5;
    width: 100%;

    @media ${device.tabletL} { 
      margin-left: 50px;
   }
   @media ${device.mobile} { 
      padding: 10px;
      width: calc(100% - 20px);
   }
`;
