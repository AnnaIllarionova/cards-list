import "./preload.css"

export const Preload = () => {
  return (
    <div className="preload">
      <div className="preload__animation">
        <svg className="preload__animation_spinner" viewBox="0 0 50 50">
          <circle
            className="preload__animation_path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          ></circle>
        </svg>
      </div>
      <p className="preload__text">Подгрузка компаний</p>
    </div>
  )
}
