/**
 * Компонент отрисовывавет блок с курсом валют 
 */


import CurrencyItem from './CurrencyItem/CurrencyItem';

const Currency = function({currencyList}) {

    return (
        <ul className='currency'>
            {currencyList.map(item => <CurrencyItem key={''} item={item} />)}
        </ul>
    )
}

export default Currency;