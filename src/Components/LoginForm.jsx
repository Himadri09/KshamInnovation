
import React from 'react';

const LoginForm = () => {
    const handleForgotPassword = () => {
        // Handle forgot password action (e.g., navigate to reset password page)
        window.location.href = '/reset-password';
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <div className="forgot-password" onClick={handleForgotPassword}>
                <a href="/reset-password">Forgot Password?</a>
            </div>
        </div>
    );
}

export default LoginForm;