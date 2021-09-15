import styled from 'styled-components';
import { device } from '../../breackpoints.styles';

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    @media ${device.mobile} { 
        overflow-x: hidden;
	}
`;

export const SkillsContent= styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    padding: 30px 40px;

    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    @media ${device.mobile} { 
        padding: 30px 10px;      
	}
`;

export const SkillsTitle = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.0015em;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 20px;
`;

export const SkillsBar = styled.div`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;

        p{
            width: 50%;
        }
        progress {
            width: 50%;
            
        }
        progress[value]::-webkit-progress-bar {
            width: 100%;
            background: #E0E0E0;
            border: 0;
            height: 5px;
            border-radius: 9px;
        }

        progress[value] {
            background-color: #8F7CFF;
            border-radius: 5px;
            position: relative;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            height: 5px; 
        }

        progress[value]::-moz-progress-bar { /* Firefox */
            border-radius: 2px;
            background-color: #8F7CFF;
            height: 5px;
        }

        progress[value]::-webkit-progress-value { /* Chrome */
            border-radius: 2px;
            background-color: #8F7CFF;
            height: 5px;
        }
    }

    @media ${device.mobile} { 
		div {
            align-items: flex-start;
            flex-direction: column;

            progress {
                width: 100%;
            }
        }
	}
`;

export const InterestContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1;
    background-color: rgba(255, 0, 86, 0.1);

  
`;

export const InterestTitle = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.0015em;
    color: rgba(0, 0, 0, 0.87);
    margin: 25px auto;

    @media ${device.mobile} { 
        width: 100%;
        text-align: left;
        margin: 25px 0 25px 16px;
	}
`;

export const InterestIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media ${device.mobile} { 
        justify-content: flex-start;
       
        svg {
           height: 30px;
           width: 30px;
           margin: 0 auto 20px auto;
       }
	}
`;