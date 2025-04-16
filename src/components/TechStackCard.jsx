import React from 'react';

const TechStackCard = ({ category, title, image, backgroundColor, animationDelay }) => {
    return (
        <div className="card tech-stack-card-item" style={{ backgroundColor: backgroundColor, animationDelay: animationDelay }}>
            <div className="card-header">
                <h6 className="card-category-title">{category}</h6>
            </div>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">{title}</h5>
            </div>
        </div>
    );
};

export default TechStackCard;
