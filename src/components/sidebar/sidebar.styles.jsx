import styled from 'styled-components';
import BackgroundSidebar from '../../assets/img/backgroundDesign.svg';

export const SidebarContainer = styled.div`
   width: 404px;
   background-image: url(${BackgroundSidebar});
`;

export const Photo = styled.img`
   width: 291px;
   height: 291px;
   border-radius: 99em;
   object-fit: cover;
   display: block;
   margin: 70px auto 0 auto;
`;

export const SidebarContent = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   margin-top: 30px;
   padding: 0 12px;
   height: calc(100% - 390px);

   .overflow-cont{
      overflow: auto;
      width: calc(100% + 25px);
   }
   div{
      text-align: center;
     
   }
`;

export const LanguageButton = styled.button`
   background-color: #E9E9E9;
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

      p {
         font-weight: 400;
         text-align: left;
         line-height: 20px;
         font-size: 14px;
         margin-left: 8px;
      }
   }
`;