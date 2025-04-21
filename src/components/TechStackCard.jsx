import React from 'react';

const TechStackCard = ({ category, title, image, backgroundColor, animationDelay }) => {
    return (
        <div className="card tech-stack-card-item hover:cursor-pointer" style={{ backgroundColor: backgroundColor, animationDelay: animationDelay }}>
            <div className="card-header">
                <h6 className="card-category-title">{category}</h6>
            </div>
            <img src={image} className="card-img-top my-4 mx-auto" alt="..." />
            <div className="card-body">
                <h5 className="card-title py-3 font-bold text-center">{title}</h5>
            </div>
        </div>
    );
};

export default TechStackCard;
