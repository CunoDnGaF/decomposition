/**
 * Компонент отрисовывает рекламный баннер, принимает изображение  
 */

const Banner = function({bannerImage}) {
    
    return (
        <div className='banner'>
            <img src={bannerImage} alt='banner' className="banner-img"/>
        </div>
    )
}

export default Banner;