import React from 'react'
import { PortfolioContainer, PortfolioCard, PortfolioImage, CardTitle, CardDate, CardText} from './portfolio.styles';

const Portfolio = () => {
    return (
        <PortfolioContainer>
            <PortfolioCard>
                <PortfolioImage src="https://franco-ortiz.com/static/media/gaminghub.2d13042a.png" alt="portfolio-img"/>
                <CardTitle>Nombre de la empresa</CardTitle>
                <CardDate>2012-2019</CardDate>
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, ipsum quis maximus facilisis, est ante rutrum magna, vel faucibus orci nunc sit amet enim. Cras sit amet elit tempus, dignissim odio non, posuere tellus. </CardText>
            </PortfolioCard>
            <PortfolioCard>
                <PortfolioImage src="https://franco-ortiz.com/static/media/gaminghub.2d13042a.png" alt="portfolio-img"/>
                <CardTitle>Nombre de la empresa</CardTitle>
                <CardDate>2012-2019</CardDate>
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, ipsum quis maximus facilisis, est ante rutrum magna, vel faucibus orci nunc sit amet enim. Cras sit amet elit tempus, dignissim odio non, posuere tellus. </CardText>
            </PortfolioCard>
            <PortfolioCard>
                <PortfolioImage src="https://franco-ortiz.com/static/media/gaminghub.2d13042a.png" alt="portfolio-img"/>
                <CardTitle>Nombre de la empresa</CardTitle>
                <CardDate>2012-2019</CardDate>
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, ipsum quis maximus facilisis, est ante rutrum magna, vel faucibus orci nunc sit amet enim. Cras sit amet elit tempus, dignissim odio non, posuere tellus. </CardText>
            </PortfolioCard>
            <PortfolioCard>
                <PortfolioImage src="https://franco-ortiz.com/static/media/gaminghub.2d13042a.png" alt="portfolio-img"/>
                <CardTitle>Nombre de la empresa</CardTitle>
                <CardDate>2012-2019</CardDate>
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, ipsum quis maximus facilisis, est ante rutrum magna, vel faucibus orci nunc sit amet enim. Cras sit amet elit tempus, dignissim odio non, posuere tellus. </CardText>
            </PortfolioCard>
        </PortfolioContainer>
    )
}

export default Portfolio
