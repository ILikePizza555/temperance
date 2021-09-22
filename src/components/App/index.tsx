import './App.css'

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