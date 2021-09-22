import './App.css'

import JobAppView from '../JobAppView';

function App() {
    return (
        <div className="App">
            <header>
                <h1>Temperance</h1>
            </header>
            <section className="ItemList">
                <JobAppView name="Dunder Mifflin" position="Sales Associate" link="https://example.com" status="final interview" />
            </section>
        </div>
    );
}

export default App