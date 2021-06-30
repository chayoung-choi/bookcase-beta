import React from "react";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

import { authService, firebaseInstance } from "src/service/firebaseApp";
// import AuthForm from "src/components/AuthForm";

const Auth = () => {
    const onSocialClick = async (event) => {
        const {
            target: { name },
        } = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        await authService.signInWithPopup(provider);
    };
    return (
        <div className="authContainer">
            {/*<AuthForm />*/}
            <div className="authBtns">
                <button onClick={onSocialClick} name="google" className="authBtn">
                    Continue with Google <FcGoogle/>
                </button>
                <button onClick={onSocialClick} name="github" className="authBtn">
                    Continue with Github <FaGithub/>
                </button>
            </div>
        </div>
    );
};
export default Auth;
