import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../global-state/store';
import { PortfolioContainer, PortfolioCard, PortfolioImage, CardTitle, CardDate, CardText } from './portfolio.styles';

const Portfolio = () => {
    const [state] = useContext(Context);
    const [portfolio, setPortfolio] = useState();

    useEffect(() => {
        getPortfolio();
        // eslint-disable-next-line
    }, [state.profileId]);

    const getPortfolio = async () => {
        const response = await fetch(`http://localhost:3000/briefcase?profile_id=${state.profileId}`, {
            method: 'GET'
        });

        response.json().then(body => {
            if (response.ok) {
                setPortfolio(body);
            };
        });
    };

    return (
        <PortfolioContainer>
            {portfolio && portfolio.map((port) => (
                <PortfolioCard key={port.id}>
                    <PortfolioImage src={port.image} alt="portfolio-img" />
                    <CardTitle>{port.title}</CardTitle>
                    <CardDate>{port.date}</CardDate>
                    <CardText>{port.body}</CardText>
                </PortfolioCard>
            ))}
        </PortfolioContainer>
    );
};

export default Portfolio;
