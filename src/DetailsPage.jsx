import Card from "./Card";
import { useParams } from "react-router-dom";
import cardContent from "./assets/cardContent.json";
import { useState } from "react";

function DetailsPage() {
    const { id } = useParams();
    const mainCard = cardContent.find((card) => card.id === id);

    // Filter out the main card from other content
    const otherCards = cardContent.filter((card) => card.id !== id);

    // Pagination for Other Contents
    const itemsPerPage = 5; // Adjust the number of items per page as desired
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = otherCards.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(otherCards.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

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

                    {/* Render only the current items for Other Contents */}
                    {currentItems.map((card) => (
                        <Card
                            key={card.id}
                            id={card.id}
                            cardImage={card.cardImage}
                            cardTitle={card.cardTitle}
                            cardDescription={card.cardDescription}
                            link={card.link}
                        />
                    ))}

                    {/* Pagination controls for Other Contents */}
                    <div className="pagination-controls">
                        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailsPage;
