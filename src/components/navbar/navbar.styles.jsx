import styled from 'styled-components';

export const NavbarContainer = styled.ul`
   width: 100%;
   height: 54px;
   list-style: none;
   display: flex;
   justify-content: space-between;
   margin: 0;
   padding: 0;
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
`;