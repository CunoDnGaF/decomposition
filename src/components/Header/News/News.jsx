/**
 * Компонент отрисовывавет блок с новостями, меню и курсом валют 
 */


import Menu from '../../Menu/Menu';
import NewsList from './NewsList/NewsList';
import Currency from './Currency/currency';

const News = function({newsMenuList, newsList, currencyList}) {
   
    return (
        <div className='news'>
            <div className='news-header'>
                <Menu menuList={newsMenuList}>
                </Menu>
                <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className='news-body'>
                <NewsList newsList={newsList}/>
            </div>
            <div className='news-footer'>
                <Currency currencyList={currencyList}/>
            </div>
        </div>
    )
}

export default News;