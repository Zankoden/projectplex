import Card from "./Card"

function DetailsPage() {

    return (
        <>
            <h2>This is details page!</h2>
            <div className="main-container">
                <div className="main-card">
                <p>Main Content</p>
                    <Card /> {/* Main Card at the top */}
                    
                </div>
                <div className="divider"></div>
                <div className="sidebar-column">
                    <p>Other Contents</p>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}

export default DetailsPage