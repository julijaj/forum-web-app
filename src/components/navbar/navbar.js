import styles from "./styles.module.css";
import cookieCutter from "cookie-cutter";
import { useRouter } from 'next/router';
import React, { useState, useEffect } from "react";

const Navbar = () => {
    const router = useRouter()

    const [username, setUsername] = useState();

    const getUsername = async () => {
        setUsername(cookieCutter.get('username'))
    };

    useEffect(() => {
        getUsername();
    }, []);

    const checkUserId = async () => {
        const userId = cookieCutter.get('userId');
        if (userId == null || userId === '') {
            const redirectUrl = `/login`
            router.push(redirectUrl);
        }
    }
    checkUserId();

    const logOut = async () => {
        cookieCutter.set('userId', '', { expires: new Date(0) });
        const redirectUrl = `/login`
        router.push(redirectUrl);
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src='https://www.pngmart.com/files/11/Chat-Logo-PNG-Free-Download.png' />
            </div>
            <div>
                {username && <h3 className={styles.greeting}>Hello, {username}!</h3>}
            </div>
            <ul className={styles.list}>
                <li className={styles.navbutton}>
                    <a href="/">Home</a>
                </li>
                <li className={styles.navbutton}>
                    <a href="/insertQuestion">Ask Question!</a>
                </li>
                <li className={styles.navbutton}>
                    <button className={styles.logbutton} onClick={() => logOut()}>Log Out</button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;