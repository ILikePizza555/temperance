import './App.css'

import JobAppView, { JobAppData } from '../JobAppView';

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
                    ApplicationData.map(v => {
                        const data: JobAppData = {
                            position: v.position_title,
                            link: v.position_link,
                            status: v.status
                        }

                        return <JobAppView heading={v.company_name} data={data}/>
                    })
                }
            </section>
        </div>
    );
}

export default App