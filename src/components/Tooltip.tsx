import React, { useState } from 'react';
import './../styles/tooltip.css';

interface TooltipProps {
    title: string;
    description: string[];
    author?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ title, description, author }) => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsActive(false);
    };

    return (
        <div
            className={`tooltip ${isActive ? 'tooltip-active' : ''}`}
            onClick={handleToggle}
            tabIndex={0}
        >
            {title}
            <div className="tooltip-text" onClick={(e) => e.stopPropagation()}>
                {description.map((desc, index) => (
                    <span key={index}>{desc}</span>
                ))}
                {author && (
                    <span className="author">
                        {author}'s leaked pack.
                    </span>
                )}
                <button className="close-btn" onClick={handleClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Tooltip;
