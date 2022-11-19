import React, { useEffect } from 'react';
import NewsItem from './NewsItem';
import Loading from './loading.gif';

const News = (props) => {

    const { state, setState, query } = props;

    const updateNews = async () => {
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${state.category}&q=${query}&apiKey=1f1573508ba64d3b82ec80c69f679ff2&pageSize=${state.loadmore}`;
            setState({ ...state, loading: true })
            let data = await fetch(url);
            let parsedData = await data.json();
            setState({ ...state, articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
        }
        catch (error) {
            console.log(error)
        }
    }

    console.log(state.articles);

    useEffect(() => { updateNews() }, [query, state.totalResults, state.category, state.loadmore]);

    return (
        <div className="news-container">
            <div className="header">
                <p className="header-title">For the best experience use inshorts app on your smartphone</p>
                <div className="header-images">
                    <img src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="appstrore" />
                    <img src="	https://assets.inshorts.com/website_assets/images/playstore.png" alt="playstore" />
                </div>
            </div>

            <div className="news-body">
                <NewsItem articles={state.articles} />
            </div>

            {state.loading && (<img style={{height: "3rem", width: "3.5rem", marginTop: "1rem"}} src={Loading} alt="loading"/>)}

            {state.loadmore <= state.totalResults && (
                <>
                    <div className="button-body">
                        <button onClick={() => setState({ ...state, loadmore: state.loadmore + 20 })}>Load More</button>
                    </div>
                </>
            )}

            <div className="footer-banner">
                <p className="footer-banner-title">For the best experience use inshorts app on your smartphone</p>
                <div className="footer-banner-images">
                    <img src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="appstrore" />
                    <img src="	https://assets.inshorts.com/website_assets/images/playstore.png" alt="playstore" />
                </div>
            </div>
        </div>
    )
}

export default News
