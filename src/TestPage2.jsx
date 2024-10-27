import Card from "./Card"
import cardContent from "./assets/cardContent.json";

function TestPage2() {
    return (
        <>
            <h2>You are now at test page 2!!</h2>

            {cardContent.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    cardImage={card.cardImage}
                    cardTitle={card.cardTitle}
                    cardDescription={card.cardDescription}
                    link={card.link}
                />
            ))}
            
        </>
    )
}

export default TestPage2