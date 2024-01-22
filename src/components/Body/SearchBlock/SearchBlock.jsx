/**
 * Компонент отрисовывает форму поиска и меню поиска
 */

import Menu from '../../Menu/Menu';

const SearchBlock = function({searchMenuList}) {
    
    return (
        <div className='search'>
            <Menu menuList={searchMenuList}/>
            <div className='search-body'>
                <img src='../src/images/remove.svg' alt='logo' className='search-logo'/>
                <form className="search-form">
                    <input className='search-input' type="text"/>
                    <button className="search-button">Найти</button>
                </form>
            </div>
            <p>Найдется всё</p>
        </div>
    )
}

export default SearchBlock;