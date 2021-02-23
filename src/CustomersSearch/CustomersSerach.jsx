import React from 'react';
import '../css/CustomersSearch.css';
import google from '../assets/imgs/google.svg';
import rightImg from '../assets/imgs/right_img.svg';
import phoneImg from '../assets/imgs/phone__img.png';
import call from '../assets/imgs/call.svg';
import callImg from '../assets/imgs/call_img.svg';
import geo from '../assets/imgs/geo.svg';
import greenArrow from '../assets/imgs/green_arrow.svg';
import redArrow from '../assets/imgs/red_arrow.svg';
import { useState } from 'react';

export default function CustomersSerach(props) {

    const [leftMargin, setLeftMargin] = useState(null);

    const changeView = () => {
        leftMargin === null ? setLeftMargin('left__margin') : setLeftMargin(null)
    }

    let buttons = [
        {
            id: 1,
            value: 1,
            className: 'number__btn'
        },
        {
            id: 2,
            value: 2,
            className: 'number__btn'
        },
        {
            id: 3,
            value: 3,
            className: 'number__btn'
        },
        {
            id: 4,
            value: 4,
            className: 'number__btn'
        },
        {
            id: 5,
            value: 5,
            className: 'number__btn'
        },
        {
            id: 6,
            value: 6,
            className: 'number__btn'
        },
        {
            id: 7,
            value: 7,
            className: 'number__btn'
        },
        {
            id: 8,
            value: 8,
            className: 'number__btn'
        },
        {
            id: 9,
            value: 9,
            className: 'number__btn'
        },
        {
            id: 10,
            value: "*",
            className: 'number__btn'
        },
        {
            id: 11,
            value: 0,
            className: 'number__btn'
        },
        {
            id: 12,
            value: "#",
            className: 'number__btn'
        },
        {
            id: 13,
            value: null,
            className: 'btn'
        },
        {
            id: 14,
            value: null,
            className: 'call__btn',
            src: call
        },
        {
            id: 15,
            value: null,
            className: 'btn'
        },
    ]

    let buttonsArr = buttons.map(btn => <button className={btn.className} key={btn.id} >{btn.value}<img src={btn.src}/></button>);

    return (
        <div className='customers__block'>
            <div className="wrap">
                <h2 className="customers__title">
                Don't lose your customers to <img src={google}/> oogle search
                </h2>
                <p className="subtitle">
                    They might go elsewhere
                </p>
                <div className="phone__wrapper">
                    <div className={"phone__block" + ' ' + leftMargin}>
                        <div className="img__block side__img__block left">
                            <p className="block__title">
                                +1 123-345-6789
                            </p>
                            <div className="border__block"></div>
                            <div className="buttons__block">
                                {buttonsArr}
                            </div>
                        </div>
                        <div className={"img__block main__img__block" + ' ' + leftMargin}>
                            <div className="phone">
                                <img src={greenArrow} alt="" className="arrow left"/>
                                <img src={redArrow} alt="" className="arrow right"/>
                                <div className="top__side__block">
                                    <div className="long__bar"></div>
                                    <div className="circle__bar"></div>
                                </div>
                                <div className="phone__wrap">
                                    <p className="phone__title">
                                        Smart Business Card
                                    </p>
                                    <div className="phone__customer__block">
                                        <img src={phoneImg} className='phone__bg__img' alt=""/>
                                        <div className="phone__container">
                                        <div className="info__bar top"></div>  
                                            <div className="info__block">
                                                <img src={geo} alt="" className='geo'/>
                                                <div className="info__text">
                                                    <p>80 Delancey St, </p>
                                                    <p>New York, NY, 10001</p>
                                                </div>
                                            </div>
                                            <div className="info__block">
                                                <img src={callImg} alt=""/>
                                                <div className="info__text">
                                                    <p>+1 123-345-6789</p>
                                                </div>
                                            </div>
                                            <div className="info__bar"></div>    
                                            <div className="close__block">
                                                Close
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom__bar"></div>
                            </div>
                        </div>
                        <div className="img__block side__img__block right">
                            <img src={rightImg} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="change__view__block">
                    <div className="switch__btn" onClick={changeView}>
                        <input type="checkbox" className="checkbox"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
