import Footer from 'src/components/footer/footer'
import React, { useState, useEffect } from "react";
import axios from "axios";
import cookieCutter from "cookie-cutter";
import { useRouter } from 'next/router'

const login = () => {
    const [usernameLogin, setUsernameLogin] = useState();
    const [passwordLogin, setPasswordLogin] = useState();
    const [usernameRegister, setUsernameRegister] = useState();
    const [passwordRegister, setPasswordRegister] = useState();
    const router = useRouter();

    const tryLogin = async () => {
        const data = {
            username: usernameLogin,
            password: passwordLogin
        }
        console.log(data);

        const url = `http://localhost:8080/users/login`
        const response = await axios.post(url, data)
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data.response);
                    alert(error.response.data.response);
                }
            });

        if (response) {
            const user=response.data.user
            login(user._id, user.username);
        }
    }

    const tryRegister = async () => {
        const data = {
            username: usernameRegister,
            password: passwordRegister
        }
        console.log(data);

        const url = `http://localhost:8080/users/register`
        const response = await axios.post(url, data)
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data.response);
                    alert(error.response.data.response);
                }
            });
        if (response) {
            const user=response.data.user
            login(user._id, user.username);
        }
    }

    const login = async (userId, username) => {
        console.log(userId);
        console.log(username);
        cookieCutter.set('userId', userId);
        cookieCutter.set('username', username);
        const redirectUrl = `/`
        router.push(redirectUrl);
    }

    return (
        <div>
            <main>
                <div>
                    <h3>Login</h3>
                    <input
                        value={usernameLogin}
                        onChange={(event) => setUsernameLogin(event.target.value)}
                        placeholder='Username'
                    />
                    <input
                        value={passwordLogin}
                        onChange={(event) => setPasswordLogin(event.target.value)}
                        placeholder='Password'
                        type='password'
                    />
                    <button onClick={() => tryLogin()}>Login</button>
                </div>
                <div>
                    <h3>Register</h3>
                    <input
                        value={usernameRegister}
                        onChange={(event) => setUsernameRegister(event.target.value)}
                        placeholder='Username'
                    />
                    <input
                        value={passwordRegister}
                        onChange={(event) => setPasswordRegister(event.target.value)}
                        placeholder='Password'
                        type='password'
                    />
                    <button onClick={() => tryRegister()}>Register</button>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default login;