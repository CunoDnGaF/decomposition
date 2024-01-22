/**
 * Компонент используется для отрисовки всех menu-компонентов в приложении
 */

import MenuItem from './MenuItem/MenuItem';

const Menu = function({menuList}) {
    return (
        <ul className='menu'>
            {menuList.map(item => <MenuItem key={item} item={item} />)}
        </ul>
    )
}

export default Menu;