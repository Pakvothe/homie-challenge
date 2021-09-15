import styled from 'styled-components';
import { device } from '../../breackpoints.styles';

export const PortfolioContainer = styled.div`
    height: 80%;
	padding: 30px 10px;
    display: flex;
    flex-wrap: wrap;
`;

export const PortfolioCard = styled.div`
    min-height: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    width: 45%;
    border: 1px solid red;
    margin: 0 auto 24px auto;
    background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%);
    border: 1px solid #8F7CFF;
    box-sizing: border-box;
    box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px -1px 1px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    padding: 12px;

    @media ${device.mobile} { 
        width: 100%;
    }
`;

export const PortfolioImage = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`;

export const CardTitle = styled.h3`
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.0015em;
    margin: 3px 0 0 0;
`;

export const CardDate = styled.p`
    margin: 0 0 3px 0;
    color: #8F7CFF;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
`;

export const CardText = styled.p`
    margin: 0;
    font-size: 14px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.87);
`;