import { useContext, useEffect, useState } from "react"
import { Header } from "../../components/header/header"
import { StartScreen } from "../start-screen/start-screen"
import "./main-page.css"
import { useGetAllCardsIdealMutation } from "../../server-data/api"
import { Preload } from "../../components/preload/preload"
import { CardList } from "../../components/card-list/card-list"
import { Outlet, useNavigate } from "react-router-dom"
import { ErrorContext } from "../../routes"

export const MainPage = () => {
  const { setErrorMessage } = useContext(ErrorContext)
  const [showLogo, setShowLogo] = useState(false)
  const [
    allCardsIdeal,
    { data: allCards, isLoading: allCardsIsLoading, error: allCardsError },
  ] = useGetAllCardsIdealMutation()

  // console.log("allCardsError", allCardsError)
  // console.log("allCardsErrorStatus", typeof allCardsError?.status)
  const navigate = useNavigate()

  useEffect(() => {
    setShowLogo(true)
    setTimeout(() => {
      setShowLogo(false)
    }, 3000)

    const apiCardsdata = async () => {
      try {
        await allCardsIdeal()
      } catch (error) {
        console.log(error)
      }
    }

    apiCardsdata()
  }, [])
  // console.log("allCardsIdeal", allCards)

  useEffect(() => {
    if (allCardsError) {
      if (allCardsError?.status === 401) {
        setErrorMessage("Ошибка авторизации")
      } else if (allCardsError?.status === 400) {
        setErrorMessage(allCardsError?.data?.message)
      } else if (allCardsError?.status === 500) {
        setErrorMessage("все упало")
      } else {
        setErrorMessage("что-то пошло не так")
      }
    }
    if (allCardsError) {
      navigate(`/error/${allCardsError?.status}`)
    }
  }, [allCardsError])
  // console.log("errorMessage", errorMessage)

  return showLogo ? (
    <StartScreen />
  ) : (
    <>
      <Header />
      <div className="main">
        {allCardsIsLoading ? <Preload /> : <CardList allCards={allCards} />}
      </div>
      <Outlet />
    </>
  )
}
