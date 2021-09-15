import styled from 'styled-components';
import Portfolio from '../../assets/icons/portfolio.svg';

export const ExperienceContainer = styled.div`
    height: 80%;
	padding: 40px;
`;

export const ConnectedList = styled.ul`
    list-style: none;
`

export const ConnectedListItem = styled.li`
    position: relative;
    padding-bottom: 2em;
    padding-left: 2em;

	&:last-child {
		padding-bottom: 0;
    }

    &::before {
        content: '\f111';
        font-family: 'Font Awesome 5 Pro';
        font-weight: 400;
        background-color: #8F7CFF;
        border-radius: 99em;
        width: 15px;
        height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8F7CFF;
        position: absolute;
        left: -7px;
        top: 0;
    }

    &:first-child::before {
        content: '';
        border-radius: 0;
        background-color: transparent;
        background-image: url(${Portfolio});
        content: '';
        background-repeat: no-repeat;
        width: 35px;
        height: 36px;
        left: -17px;
    }

    &::after {
        content: '';
        width: 1px;
        height: 100%;
        background-color: rgba(171, 171, 171, 0.65);
        position: absolute;
        left: 0;
        top: 17px;
    }

    &:first-child::after {
        top: 27px;
    }

    &:last-child::after {
        height: 100%;
    }
`
export const ConnectedListContent = styled.div`
    display: flex;
	justify-content: flex-start;
`

export const ConnectedListDate = styled.div`
   width: 25%;
   display: flex;
   flex-direction: column;

	p {
		font-size: 16px;
		line-height: 24px;
		color:#828282;
		margin: 0;
		margin-left:20px;
	} 
	.red-text{
		font-size: 12px;
		color:#F49EBE;
		text-transform: lowercase;
	}
`

export const ExperienceContent = styled.div`
    display: flex;
	flex-direction: column;
	width: 75%;
	
	p {margin: 0};

`

export const ExperienceContentTitle = styled.div`
    display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	
	h3 {
		margin: 0 0 16px 0;
		font-size: 20px;
		font-weight: 500;
		line-height: 24px
	}
	p {
		margin: 0 0 16px 0;
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		color: #828282;
	};

`

export const ExperienceContentSubtitle = styled.p`
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 8px !important;
	font-weight: 400;
	color: rgba(0, 0, 0, 0.87);
`
export const ExperienceContentText = styled.p`
	font-size: 14px;
	font-weight: 400;
	line-height: 20px;
	color: rgba(0, 0, 0, 0.87);
`