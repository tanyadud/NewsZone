import React from 'react';
import data from '../../common/data/news';
import {useHistory} from "react-router-dom";

import {
    DatePublish, ImgBox,
    NamePage,
    NewsBox,
    NewsContainer,
    NewsDescription,
    NewsImg,
    ShortDescription
} from "./News.style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default () => {
    let history = useHistory();

    const formatDate = ms => {
        return new Date(ms).toISOString().slice(0, 10);
    };

    const openDetailedNews = (news) => {
        history.push(`/news/${news.id}`);
    };

    return (
        <>
            <Header/>
            <NamePage>We seek the truth and help people understand the world.</NamePage>
            <NewsContainer>
                {
                    data.news.map(el => {
                        return (
                            <NewsBox key={el.id}>
                                <ImgBox onClick={() => openDetailedNews(el)}>
                                    <NewsImg style={{backgroundImage: `url(${el.img})`}}/>
                                </ImgBox>
                                <NewsDescription>
                                    <h3 onClick={() => openDetailedNews(el)}>{el.name}</h3>
                                    <ShortDescription>{el.description.slice(0, 200) + '...'}</ShortDescription>
                                    <DatePublish>{formatDate(el.date)}</DatePublish>
                                </NewsDescription>
                            </NewsBox>
                        )
                    })
                }
            </NewsContainer>
            <Footer/>

        </>
    )
}