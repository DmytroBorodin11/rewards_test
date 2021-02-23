import React from 'react'
import '../css/Header.css';
import { Grid } from '@material-ui/core';
import headerImg from '../assets/imgs/header_img.png'; 
import logo from '../assets/imgs/logo.svg';

export default function Header() {
    return (
        <header className='header'>
            <div className="wrap">
                <Grid container>
                    <Grid item xs={6} className="header__title__block">
                       <img src={logo} className='logo__img' alt=""/>
                       <h1 className="page__title">
                            Everybody Gets Rewarded!
                       </h1>
                       <div className="page__header__text">
                       Turn your everyday customer into a loyal one. It’s never been easier.
                       </div>
                    </Grid>
                    <Grid container direction="row" className="header__img__block" justify="flex-end" xs={6}>
                       <img src={headerImg} alt="" className="header__img"/>
                    </Grid>
                </Grid>
            </div>
        </header>
    )
}
