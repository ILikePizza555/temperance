import React from 'react'
import LinearCalendar from '../LinearCalendar';
import './App.css'

const TestData = [
    {
        name: "Dunder Mifflin",
        progression: [
            { status: "Applied", date: new Date(2021, 6, 15) },
            { status: "Phone Screen", date: new Date(2021, 7, 24) },
            { status: "Technical Interview", date: new Date(2021, 9, 2) }
        ]
    },
    {
        name: "Quills and Sofas",
        progression: [
            { status: "Applied", date: new Date(2021, 8, 14) },
            { status: "Phone Screen", date: new Date(2021, 8, 18) },
            { status: "Rejected", date: new Date(2021, 8, 22) }
        ]
    },
    {
        name: "Hay's Hardware",
        progression: [
            { status: "Applied", date: new Date(2021, 9, 8) }
        ]
    }
]

function App() {
    return (
        <div className="App">
            <header>
                <h1>Temperance</h1>
            </header>
            <LinearCalendar />
        </div>
    );
}

export default App