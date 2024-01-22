/**
 * Компонент отрисовывавет элемент Currency-компонента
 */

const CurrencyItem = function({item}) {
    const {currency, value} = item;

    return (
        <li className='currency-item'>
          {currency} {value}
        </li>
    )
}

export default CurrencyItem;