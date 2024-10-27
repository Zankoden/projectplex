import Card from "./Card";
import cardContent from "./assets/cardContent.json";
import { useState } from "react";

function TestPage2() {
    const itemsPerPage = 5; // Desired number of items per page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the indices for slicing the content
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = cardContent.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate the total number of pages
    const totalPages = Math.ceil(cardContent.length / itemsPerPage);

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
            <h2>You are now at test page 2!!</h2>

            {/* Render only the current items */}
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

            {/* Pagination controls */}
            <div className="pagination-controls">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </>
    );
}

export default TestPage2;
