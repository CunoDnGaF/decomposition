/**
 * Компонент отрисовывавет Header приложения
 */


import News from './News/News';
import AdCard from './AdCard/AdCard';

const Header = function({newsMenuList, newsList, currencyList, adBlock}) {
    
    return (
        <div className='header'>
            <News 
                newsList={newsList}
                currencyList={currencyList}
                newsMenuList={newsMenuList}
            />
            <AdCard 
                adBlock={adBlock}
            />
        </div>
    )
}

export default Header;