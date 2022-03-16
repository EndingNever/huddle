import React from 'react';
import './Avatar.css'

export default function Avatar() {
    return (
        <>
            <div className="container-seed-data">
                <div className='avatar-container'>
                    <div className="avatar avatar-image-1"></div>
                    <div className="avatar avatar-image-2"></div>
                    <div className="avatar avatar-image-3"></div>
                </div>
                <div className="avatar-text-container">
                    <div className="filler-text-container">
                        <div className="filler-text filler-text-line-1"></div>
                        <div className="filler-text filler-text-line-2"></div>
                        <div className="filler-text filler-text-line-3"></div>
                        <div className="filler-text filler-text-line-4"></div>
                    </div>
                    <div className="filler-text-container">
                        <div className="filler-text filler-text-line-1"></div>
                        <div className="filler-text filler-text-line-2"></div>
                        <div className="filler-text filler-text-line-3"></div>
                        <div className="filler-text filler-text-line-4"></div>
                    </div>
                    <div className="filler-text-container">
                        <div className="filler-text filler-text-line-1"></div>
                        <div className="filler-text filler-text-line-2"></div>
                        <div className="filler-text filler-text-line-3"></div>
                        <div className="filler-text filler-text-line-4"></div>
                    </div>
                </div>
                <div className="avatar-reactions-container">
                    <div className="reactions"></div>
                    <div className="reactions"></div>
                    <div className="reactions"></div>
                </div>
            </div>
        </>
    );
}
