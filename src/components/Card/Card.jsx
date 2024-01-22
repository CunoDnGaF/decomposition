/**
 * Компонент используется для отрисовки всех card-компонентов в приложении
 */

const Card = function({title, children}) {
    return (
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default Card;