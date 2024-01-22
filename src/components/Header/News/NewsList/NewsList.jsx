/**
 * Компонент отрисовывавет блок с новостями
 */


import NewsItem from './NewsItem/NewsItem';

const NewsList = function({newsList}) {

    return (
        <ul className="news-list">
            {newsList.map(news => <NewsItem key={''} news={news}/>)}
        </ul>
    )
}

export default NewsList;