import styled from 'styled-components';
import { device } from '../../breackpoints.styles';

export const ContentBoxContainer = styled.div`
   overflow: auto;
    height: 95%;
    background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%);
    box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
   
    @media ${device.mobile} { 
      width: 100%;
    }
`;