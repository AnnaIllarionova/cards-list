import { useNavigate } from "react-router-dom"
import "./card-list.css"

export const Card = ({ card }) => {
  const cardBackgroundColor = card?.mobileAppDashboard?.cardBackgroundColor
  const highlightTextColor = card?.mobileAppDashboard?.highlightTextColor
  const textColor = card?.mobileAppDashboard?.textColor
  const mainColor = card?.mobileAppDashboard?.mainColor
  const accentColor = card?.mobileAppDashboard?.accentColor
  const backgroundColor = card?.mobileAppDashboard?.backgroundColor
  const navigate = useNavigate()
  const handleClick = (e) => {
    const buttonName = e.target.dataset.name
    navigate(`/details/${card.company.companyId}/${buttonName}`)
    console.log("e.target.name", e.target.dataset.name)
  }

  return (
    <div
      className="card"
      key={card.company.companyId}
      style={{ backgroundColor: `${cardBackgroundColor}` }}
    >
      <div className="card__top">
        <h3
          className="card__top_title"
          style={{ color: `${highlightTextColor}` }}
        >
          {card?.mobileAppDashboard?.companyName}
        </h3>
        <img
          className="card__top_image"
          src={card?.mobileAppDashboard?.logo}
          alt="small logo"
        />
      </div>

      <div className="card__description">
        <h3
          className="card__description_score"
          style={{ color: `${highlightTextColor}` }}
        >
          {card?.customerMarkParameters?.mark}
          <span
            className="card__description_span"
            style={{ color: `${textColor}` }}
          >
            {" "}
            баллов
          </span>
        </h3>
        <div className="card__box">
          <div className="card__cashback">
            <p
              className="card__cashback_text"
              style={{ color: `${textColor}` }}
            >
              Кешбэк
            </p>
            <p className="card__cashback_percent">
              {card?.customerMarkParameters?.loyaltyLevel?.number} %
            </p>
          </div>
          <div className="card__level">
            <p className="card__level_text" style={{ color: `${textColor}` }}>
              Уровень
            </p>
            <p className="card__level_degree">
              {card?.customerMarkParameters?.loyaltyLevel?.name}
            </p>
          </div>
        </div>
      </div>

      <div className="card__bottom">
        <svg
          className="card__bottom_show"
          data-name="Показать"
          onClick={(e) => handleClick(e)}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="visibility">
            <path
              d="m29.91 15.59c-2.52-5.65-8.24-9.59-13.91-9.59s-11.39 3.94-13.91 9.59a1 1 0 0 0 0 .82c2.52 5.65 8.24 9.59 13.91 9.59s11.39-3.94 13.91-9.59a1 1 0 0 0 0-.82zm-13.91 8.41c-4.69 0-9.63-3.34-11.9-8 2.27-4.66 7.21-8 11.9-8s9.63 3.34 11.9 8c-2.27 4.66-7.21 8-11.9 8z"
              fill={mainColor}
            ></path>
            <path
              d="m16 11a5 5 0 1 0 5 5 5 5 0 0 0 -5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1 -3 3z"
              fill={mainColor}
            ></path>
          </g>
        </svg>

        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Удалить"
          onClick={(e) => handleClick(e)}
          className="card__bottom_delete"
        >
          <g id="Layer_2" data-name="Layer 2">
            <path
              style={{ fill: accentColor }}
              d="m3 7h2v20.48a3.53 3.53 0 0 0 3.52 3.52h15a3.53 3.53 0 0 0 3.48-3.52v-20.48h2a1 1 0 0 0 0-2h-7v-2a2 2 0 0 0 -1.95-2h-8.05a2 2 0 0 0 -2 2v2h-7a1 1 0 0 0 0 2zm9-4h8v2h-8zm-2 4h15v20.48a1.52 1.52 0 0 1 -1.52 1.52h-15a1.52 1.52 0 0 1 -1.48-1.52v-20.48z"
            />
            <path
              style={{ fill: accentColor }}
              d="m12.68 25a1 1 0 0 0 1-1v-12a1 1 0 0 0 -2 0v12a1 1 0 0 0 1 1z"
            />
            <path
              style={{ fill: accentColor }}
              d="m19.32 25a1 1 0 0 0 1-1v-12a1 1 0 0 0 -2 0v12a1 1 0 0 0 1 1z"
            />
          </g>
        </svg>

        <button
          className="card__bottom_details"
          style={{
            color: `${mainColor}`,
            backgroundColor: `${backgroundColor}`,
          }}
          data-name="Подробнее"
          onClick={(e) => handleClick(e)}
        >
          Подробнее
        </button>
      </div>
    </div>
  )
}
