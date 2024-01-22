/**
 * Компонент отрисовывает body приложения
 */

import SearchBlock from './SearchBlock/SearchBlock';
import Banner from './Banner/Banner';

const Body = function({searchMenuList, bannerImage}) {
    
    return (
        <div className='app-body'>
            <SearchBlock 
                searchMenuList={searchMenuList}
            />
            <Banner 
                bannerImage={bannerImage}
            />
        </div>
    )
}

export default Body;