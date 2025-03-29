import React, { useState, useRef } from 'react';
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons';
import { useSpring, animated } from '@react-spring/web';

const TechStackCard = ({ scrollFunc, category, title, image, description, backgroundColor }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    let cardRef = useRef(null);
    let contentRef = useRef(null);

    const expandAnimation = useSpring({
        from: { height: 0, opacity: 0 },
        to: {
            height: isExpanded ? contentRef.current?.scrollHeight : 0,
            opacity: isExpanded ? 1 : 0,
        },
        config: { tension: 250, friction: 25 }
    });

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
        if (!isExpanded) {
            setTimeout(() => {
                contentRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            setTimeout(() => {
                cardRef.current?.scrollIntoView({ behavior: 'smooth' });
                if (scrollFunc) scrollFunc();
            }, 100);
        }
    }

    return (
        <div className="card" ref={cardRef} onClick={handleExpand} style={{ cursor: 'pointer', backgroundColor: backgroundColor }}>
            <div className="card-header">
                <h6 className="card-category-title">{category}</h6>
            </div>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">{title}</h5>

                <animated.div className="card-description" style={expandAnimation}>
                    <div ref={contentRef}>
                        <p className="card-text text-center">{description}</p>
                    </div>
                </animated.div>

                <div
                    className="toggle-expand text-center"
                >
                    {isExpanded ? (
                        <CaretUpFill size={24} />
                    ) : (
                        <CaretDownFill size={24} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TechStackCard;
