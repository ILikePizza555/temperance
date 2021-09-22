import './App.css'

const ApplicationData = [
    {
        company_name: "Dunder Mifflin",
        position_title: "Sales associate",
        position_link: "https://example.com",
        status: "Final Interview"
    },
    {
        company_name: "Aperature Science",
        position_title: "Marketing and Sales Engineer Expert",
        status: "Practical Assessment"
    },
    {
        company_name: "Black Mesa",
        position_title: "Goverment Advertising Associate",
        position_link: "https://blackmesa.org",
        status: "Second Interview"
    }
]

function App() {
    return (
        <div className="App">
            <header>
                <h1>Temperance</h1>
            </header>
            <section className="ItemList">
                <section className="Item">
                    <h2>Dunder Mifflin</h2>
                    <div className="row">
                        <div className="datum-block">
                            <h3>POSITION</h3>
                            <span>Sales associate</span>
                        </div>
                        <div className="datum-block">
                            <h3>LINK</h3>
                            <span><a href="https://example.com">https://example.com</a></span>
                        </div>
                        <div className="datum-block">
                            <h3>STATUS</h3>
                            <span>Final Interview</span>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default App