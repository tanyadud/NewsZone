import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import data from '../../common/data/news';
import { DateStyle, HeaderBox, ImgDescription, ImgStyle, NewsContainer } from "./NewsDetailed.style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default () => {
    const [news, setNews] = useState({});
    let {id} = useParams();


    const formatDate = ms => {
        if (ms) {
            return new Date(ms).toISOString().slice(0, 10);
        }

    };


    useEffect(() => {
        const newsDescription = data.news.find((el) => {
            if (el.id === id) {
                return el
            }
        });
        setNews(newsDescription);

    }, []);


    return (
        <>
            <Header/>
            <NewsContainer>
                <HeaderBox>{news.name}</HeaderBox>
                <ImgDescription>
                    <ImgStyle style={{backgroundImage: `url(${news.img})`}}/>
                    <p>{news.description}</p>
                </ImgDescription>
                <DateStyle>Published {formatDate(news.date)}</DateStyle>
            </NewsContainer>
            <Footer/>
        </>
    )
}