import React from 'react';
import './styles/card container.css';

const CardContainer = ({cardTexts}) => {
    const suggestedNames = (cardTexts).map((cardText) => {
        return(
			<div className = "card">
				<p className="card-content">{cardText}</p>
			</div>

		)
    })

    return(
        <div className="card-container">
            {suggestedNames}
        </div>
    );
};

export default CardContainer;