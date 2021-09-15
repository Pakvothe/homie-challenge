import styled from 'styled-components';
import Book from '../../assets/icons/book.svg';

export const EducationContainer = styled.div`
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
        background-image: url(${Book});
        content: '';
        background-repeat: no-repeat;
        width: 35px;
        height: 27px;
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

export const ConnectedListDate = styled.p`
    font-size: 16px;
    line-height: 24px;
	color:#828282;
	width: 25%;
	margin: 0;
	margin-left:20px;
`

export const EducationContent = styled.div`
    display: flex;
	flex-direction: column;
	width: 75%;
	
	p {margin: 0};

`

export const EducationContentTitle = styled.div`
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
export const EducationContentText = styled.p`
	font-size: 14px;
	font-weight: 400;
	line-height: 20px;
	color: rgba(0, 0, 0, 0.87);
`

export const LicenceContainer = styled.div`
    display: flex;
	flex-direction: column;
	padding-left: 40px;

	h2 {
		margin-top: 50px;
		font-size: 20px;
		font-weight: 400;
		line-height: 28px
	}
`

export const LicenceContent = styled.div`
    display: flex;
	width: 100%;
	margin-bottom: 14px;

	img {
		width: 150px;
		height: 100px;
	}

	div {
		display:flex;
		flex-direction: column;
		margin-left: 23px;
		width: 100%;
	}
	
`

export const LicenceTitle = styled.p`
	margin:0 ;
	font-size: 20px;
	font-weight: 400;
	line-height: 28px
`

export const LicenceSubtitle = styled.p`
	margin:0 0 5px 0;
	font-size: 16px;
	font-weight: 700;
	line-height: 16px
`

export const LicenceDate = styled.p`
	margin: 5px 0;
	font-size: 16px;
	font-weight: 400;
	line-height: 16px
`

export const LicenceCredential = styled.p`
	margin: 5px 0;
	font-size: 16px;
	font-weight: 400;
	line-height: 16px;
	text-transform: uppercase;
	color: #828282;
`