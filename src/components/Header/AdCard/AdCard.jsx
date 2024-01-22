/**
 * Компонент отрисовывает рекламный card-компонент
 */

import Card from '../../Card/Card';

const AdCard = function({adBlock}) {
    const {adTitle, adText, adImage} = adBlock;

    return (
        <div className='NotAd-card'>
            <img className="ad-img" src={adImage} alt="" />
            <Card title={adTitle}>
                <p>{adText}</p> 
            </Card>
        </div>
    )
}

export default AdCard;