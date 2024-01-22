/**
 * Компонент отрисовывавет элемент NewsList-компонента
 */


const NewsItem = function({news}) {
    const {newsImage, newsTitle} = news;

    return (
        <li className='news-item'>
            <img className="news-img" src={newsImage} alt="" />
            <p>{newsTitle}</p>
        </li>
    )
}

export default NewsItem;