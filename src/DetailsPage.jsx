import Card from "./Card";
import { useParams } from "react-router-dom";
import cardContent from "./assets/cardContent.json";

function DetailsPage() {
    const { id } = useParams();
    const mainCard = cardContent.find((card) => card.id === id);

    return (
        <>
            <h2>This is the details page!</h2>
            <div className="main-container">
                <div className="main-card">
                    <p>Main Content</p>
                    {mainCard ? (
                        <Card
                            id={mainCard.id}
                            cardImage={mainCard.cardImage}
                            cardTitle={mainCard.cardTitle}
                            cardDescription={mainCard.cardDescription}
                            link={mainCard.link}
                        />
                    ) : (
                        <p>No card selected</p>
                    )}
                </div>
                <div className="divider"></div>
                <div className="sidebar-column">
                    <p>Other Contents</p>
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
                </div>
            </div>
        </>
    );
}

export default DetailsPage;
