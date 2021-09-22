import './App.css'

const ApplicationData = [
    {
        id: "32b1c6d3-93dc-44f4-9996-183eb8f1440e",
        company_name: "Dunder Mifflin",
        position_title: "Sales associate",
        position_link: "https://example.com",
        status: "Final Interview"
    },
    {
        id: "4e5e9476-e062-4305-94b9-d98389b68aef",
        company_name: "Aperature Science",
        position_title: "Marketing and Sales Engineer Expert",
        status: "Practical Assessment"
    },
    {
        id: "9e80d49b-984d-41d3-892e-998c54b176f1",
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
            <section className="JobAppList">
                {
                    ApplicationData.map(v => 
                        <section key={v.id} className="JobAppView">
                            <h2>{v.company_name}</h2>
                            <div className="row">
                                <div className="datum-block">
                                    <h3>POSITION</h3>
                                    <span>{v.position_title}</span>
                                </div>
                                <div className="datum-block">
                                    <h3>LINK</h3>
                                    <span><a href="{v.position_link}">{v.position_link}</a></span>
                                </div>
                                <div className="datum-block">
                                    <h3>STATUS</h3>
                                    <span>{v.status}</span>
                                </div>
                            </div>
                        </section>
                    )
                }
            </section>
        </div>
    );
}

export default App