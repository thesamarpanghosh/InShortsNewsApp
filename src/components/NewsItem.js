import React from 'react'

const NewsItem = (props) => {

    const { articles } = props;

    return (
        <>
            {articles.map((elem, index) => {

                const { title, description, url, urlToImage, author, publishedAt, source } = elem;

                return (
                    <div key={index}>
                        <div className="news-card">
                            <div className="news-card-image">
                                <img src={urlToImage ? urlToImage : "https://preyash2047.github.io/assets/img/no-preview-available.png?h=824917b166935ea4772542bec6e8f636"} alt="" />
                            </div>
                            <div className="news-card-body">
                                <div className="news-card-body-text">
                                    <h4>{title ? title : "no title"}</h4>
                                    <p className="author"><span><a href={url} target="_blank" rel="noreferrer">short </a></span>by {author ? author : "Unknown"} / {new Date(publishedAt).toLocaleString()} </p>
                                    <p className="desc">{description ? description : "no description"}</p>
                                    <p className="source">Read more at <span><a href={source.name} target="_blank" rel="noreferrer">{source.name}</a></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}

export default NewsItem
