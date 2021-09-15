import styled from 'styled-components';
import { device } from '../../breackpoints.styles';

export const NavbarContainer = styled.ul`
   width: 100%;
   height: 54px;
   list-style: none;
   display: flex;
   justify-content: space-between;
   margin: 0;
   padding: 0;

   @media ${device.mobile} { 
      width: calc(100% - 20px);
    }
`;

export const NavbarLink = styled.li`
     text-align: center;
      color:#8F7CFF;
      font-weight: 500;
      a  {
         text-decoration: none;
         color: inherit;
         border-bottom:${({underline}) => underline && '2px solid #FF0364'};
      }
      svg {
         width: 40px;
         height: 40px;
      }
`;