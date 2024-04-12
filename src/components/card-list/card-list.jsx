import { Card } from "./card"
import "./card-list.css"

export const CardList = ({ allCards }) => {
  console.log("allCards", allCards)

  return (
    <div>
      {allCards?.companies?.length !== 0 ? (
        allCards?.companies?.map((card) => (
          <Card card={card} key={card.company.companyId} />
        ))
      ) : (
        <p className="no__cards">Нет компаний</p>
      )}
    </div>
  )
}
