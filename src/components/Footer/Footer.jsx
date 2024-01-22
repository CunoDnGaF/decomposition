/**
 * Компонент отрисовывает footer приложения
 */

import CardContent from './CardContent/CardContent';
import Card from '../Card/Card';

const Footer = function({cardList}) {
    
    return (
        <div className='footer'>
            {cardList.map(card => 
            <div className='footer-card'>
                <Card key={''} title={card.title}>
                    {card.content.map(content => <CardContent key={''} content={content}/>)}
                </Card>
            </div>
            )}
        </div>
    )
}

export default Footer;