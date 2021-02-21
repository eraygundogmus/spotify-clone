import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';
import twitter from './twitter.png';
import instagram from './instagram.png';
import facebook from './facebook.png';

{/* Login Page: Header  Body  Footer
          Header : Logo, Navbar
          Body : Background img and button
          Footer : Logo, Navbar, Social Media buttons */}

function Login() {
    return (
<div className="wrap"> 
    <div className="login-container">
    <div className="login">
        <div className="login__header">
                <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                alt="Logo"
                /> 
        </div>
        <div className="login__navbar">    
                    <ul>
                        <li><a>Premium</a></li>
                        <li><a>Destek</a></li>
                        <li><a>İndir</a></li>
                        <li className="seperator">|</li>
                        <li><a>Kaydol</a></li>
                        <li><a>Oturum aç</a></li>
                    </ul>
        </div>                      
    </div>
    </div>

    <div className="login__body">
        <div className="body-info">
                <h1>Dinlemek her şeydir</h1>
                <h3>Milyonlarca şarkı ve podcast. Kredi kartına gerek yok.</h3>
                <div className="button-login-css">
                <div className="button-login "><a href={loginUrl}> GİRİŞ YAP</a></div>
        </div>  
        </div>
        </div>
        
    <div className="login__footer">
            <div className="footer__container"> 
            <div className="footer_container-info">
            <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                alt="Logo"
                />          
            <ul>ŞİRKET
                <li>Hakkında</li>
                <li>İşler</li>
                <li>For the record</li>
            </ul>
            <ul>TOPLULUKLAR
                <li>Sanatçılar için</li>
                <li>Geliştiriciler</li>
                <li>Reklam</li>
                <li>Yatırımcılar</li>
                <li>Satıcılar</li>
            </ul>
            <ul>YARARLI BAĞLANTILAR
                <li>Destek</li>
                <li>Web çalar</li>
                <li>Ücretsiz mobil uygulama</li>
            </ul>
            <div className="socials">
            <img
                src={twitter}
                alt="Logo"
                />
            <img
                src={instagram}
                alt="Logo"
            />
            <img
                src={facebook}
                alt="Logo"
            />
            </div>
            </div>
            </div>
    </div>
</div>

    )
}

export default Login
