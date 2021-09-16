import styled from 'styled-components';
import BackgroundSidebar from '../../assets/img/backgroundDesign.svg';
import { device } from '../../breackpoints.styles';

export const SidebarContainer = styled.div`
   width: 404px;
   background-image: url(${BackgroundSidebar});
   position: relative;

   @media ${device.tabletL} { 
      width: ${({sidebar}) => !sidebar && '50px'};
      background-image: none;
      background-color: ${({sidebar}) => !sidebar ? 'white' : '#e5e5e5'};
      position: fixed;
      z-index: 100;
      height: 100%;
      box-shadow: 0px 16px 24px rgb(0 0 0 / 6%), 0px 2px 6px rgb(0 0 0 / 4%), 0px 0px 1px rgb(0 0 0 / 4%);
    }

    @media ${device.mobile} { 
      width: ${({sidebar}) => !sidebar ? '50px' : '100% !important'};
      overflow-y: auto;
    }
  
`;

export const Photo = styled.img`
   width: 291px;
   height: 291px;
   border-radius: 99em;
   object-fit: cover;
   margin: 70px auto 0 auto;
   display: block;
   @media ${device.tabletL} { 
      display:  ${({sidebar}) => !sidebar ? 'none' : 'block'};
   }
   @media ${device.mobile} { 
      width: 200px;
      height: 200px;
    }
`;

export const BurgerButton = styled.button`
   display: none;
   position: absolute;
   border: none;
   background: transparent;
   outline: none;

   svg {
      width: 30px;
      height: 30px;
      fill: #8F7CFF;
   }
   @media ${device.tabletL} { 
      display: block;
      top: 35px;
      left:${({sidebar}) => !sidebar ? "50%": 'none'};
      right:${({sidebar}) => sidebar && '14px'};
      transform: ${({sidebar}) => !sidebar ? 'translate(-50%, 0)' : 'none'} ;
  }

  @media ${device.mobile} { 
      top: 14px;
    }

`;

export const SidebarContent = styled.div`
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   margin-top: 0;
   padding: 0 12px;
   height: calc(100% - 390px);
   display: flex;
   .overflow-cont{
      overflow: auto;
      width: calc(100% + 25px);
   }
   div{
      text-align: center;
     
   }

   @media ${device.tabletL} { 
      display:  ${({sidebar}) => !sidebar ? 'none' : 'flex'};
      height: auto;
    }

    @media ${device.mobile} {
         overflow-x: hidden;
         width:100%;
         padding: 0;
    }
`;

export const LanguageButton = styled.button`
   background-color: #e9e9e9;
   border: none;
   outline: none;
   padding: 8px 10px 8px 8px;
   align-self: flex-end;
   cursor: pointer;
   display: flex;
   justify-content: space-between;
   align-items: center;

   svg {
      width: 28px;
      height: 14px;
      margin-right: 2px;
   }

   @media ${device.tabletL} { 
      background-color: ${({sidebar}) => sidebar ? 'white' : '#e9e9e9'};
    }
   @media ${device.mobile} { 
      margin-right: 20px;
    }
`;

export const SidebarName = styled.h2`
   font-size: 28px;
   font-weight: 700;
   line-height: 32px;
   font-family: Roboto;
`;

export const About = styled.div`
   text-align: center;

   h3{
      color: #8F7CFF;
      font-size: 20px;
   }

   p{
      padding: 0 70px;
      font-weight: 400;
      text-align: left;
      line-height: 20px;
      font-size: 14px;
   }
`;

export const Contact = styled.div`
   text-align: center;

   h3{
      color: #8F7CFF;
      font-size: 20px;
   }

   div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 70px;

      a {
         font-weight: 400;
         text-align: left;
         line-height: 20px;
         font-size: 14px;
         text-decoration: none;
         color: black;
         margin: 14px 0 14px 8px;
         text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      }
   }
`;