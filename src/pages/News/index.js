import React from 'react';
import data from '../../common/data/news';
import {useHistory} from 'react-router-dom';
import {
    DatePublish,
    ImgBox,
    NamePage,
    NewsBox,
    NewsContainer,
    NewsDescription,
    NewsImg,
    ShortDescription
} from './News.style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default () => {
    const history = useHistory();

    const formatDate = ms => {
        if (ms) {
            return new Date(ms).toISOString().slice(0, 10);
        }
    };

    const openDetailedNews = (news) => {
        history.push(`/news/${news.id}`);
    };

    return (
        <>
            <div className="container">
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
                                        <ShortDescription>{el.shortDescription}</ShortDescription>
                                        <DatePublish>{formatDate(el.date)}</DatePublish>
                                    </NewsDescription>
                                </NewsBox>
                            )
                        })
                    }
                </NewsContainer>
            </div>
            <Footer/>
        </>
    )
}