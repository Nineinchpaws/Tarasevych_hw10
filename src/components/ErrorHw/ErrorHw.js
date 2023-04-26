import React, { useState } from 'react';
import ErrorHwChild from '../ErrorHwChild/ErrorHwChild';

const ErrorHw = () => {
    const [error, setError] = useState(false);
    const [showErrorHwChild, setShowErrorHwChild] = useState(true);
    
    const handleError = () => {
        setError(true);
    }

    const handleHideChild = () => {
        setShowErrorHwChild(false);
    }

    if(error) {
        return new Error('Error message!');
    }

    return (
        <div>
            <h2>ErrorHw</h2>
            <p>
                <button onClick={handleError}>
                    Create error
                </button>
            </p>

            <p>
                <button onClick={handleHideChild}>
                    Hide ErrorHwChild
                </button>
            </p>

            {showErrorHwChild && <ErrorHwChild />}
        </div>
    )
}

export default ErrorHw;