import { useContext } from "react"
import { ErrorContext } from "../../routes"
import { useParams } from "react-router-dom"

export const ErrorPopup = ({ handleClosePopup }) => {
  const { errorStatus } = useParams()

  const { errorMessage } = useContext(ErrorContext)

  return (
    <div className="popup">
      <div className="popup__info">
        <img className="popup__info_img" src="/img/exclamation_white.png" alt="warning" />
        <h3 className="popup__info_title">{"Ошибка " + errorStatus}</h3>
        <p className="popup__info_text">{errorMessage}</p>
        <button className="popup__info_button" onClick={handleClosePopup}>
          Вернуться назад
        </button>
      </div>
      <img
        className="popup__button_close"
        src="/img/close.png"
        alt="close"
        onClick={handleClosePopup}
      />
    </div>
  )
}
