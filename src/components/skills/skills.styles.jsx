import styled from 'styled-components';

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const SkillsContent= styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    padding: 40px;

    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
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
`;

export const InterestIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;