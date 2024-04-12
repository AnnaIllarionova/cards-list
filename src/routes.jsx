import { Routes, Route, useNavigate } from "react-router-dom"
import { MainPage } from "./pages/main-page/main-page"
import { Popup } from "./pages/popup/popup"
import { ErrorPopup } from "./pages/error-popup/error-popup"
import React, { useState } from "react"

export const ErrorContext = React.createContext(null)

export const AppRoutes = () => {
 const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const handleClosePopup = () => {
    navigate("/")
  }
  return (
    <ErrorContext.Provider value={{errorMessage, setErrorMessage}}>

    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route
          path="details/:companyId/:buttonName"
          element={
            <Popup
              handleClosePopup={handleClosePopup}
            />
          }
        />
        <Route
          path="error/:errorStatus"
          element={
            <ErrorPopup
              handleClosePopup={handleClosePopup}
            />
          }
        />
      </Route>
    </Routes>
    </ErrorContext.Provider>

  )
}
