import React, { useState } from 'react';
import LoginForm from '../Components/LoginForm';
import SignupForm from '../Components/SignupForm';

const ToggleableForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="container">
            {isLogin ? <LoginForm /> : <SignupForm />}
            <div className="toggle-option">
                {isLogin ? (
                    <p>
                        Don't have an account? <span onClick={toggleForm}>Sign Up</span>
                    </p>
                ) : (
                    <p>
                        Already have an account? <span onClick={toggleForm}>Login</span>
                    </p>
                )}
            </div>
        </div>
    );
}

export default ToggleableForm;