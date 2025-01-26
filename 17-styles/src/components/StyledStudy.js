import React from 'react';
import styles from '../styles/StyleStudy.scss';

export const StyledStudy = () => {
    return (
        <div className="larva">
            <div className="body body1">
                <div className="eye eye-white">
                    <div className="eye eye-black"></div>
                </div>
            </div>
            <div className="body body2"></div>
            <div className="body body3"></div>
            <div className="body body4"></div>
            <div className="body body5"></div>

            <img className="grass" src="/images/grass.jpg" alt="잔디" />
        </div>
    );
};
