import "./popup.css"
import { useParams } from "react-router-dom"

export const Popup = ({ handleClosePopup }) => {
  const { companyId } = useParams()
  const { buttonName } = useParams()

  return (
    <div className="popup">
      <div className="popup__info">
        <h3 className="popup__info_title">
          {"Вы нажали на кнопку" + " '" + buttonName + "'"}
        </h3>
        <p className="popup__info_text">id компании: {companyId}</p>
        <button className="popup__info_button" onClick={handleClosePopup}>
          Хорошо
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
