import React, { useState, useEffect } from "react";
import { render } from "react-dom";

import "./App.css";

import Header from "./components/header/Header";

const App = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <Header headerName="User List" />
            <div className="container">
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.name}, {user.age}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

render(<App />, document.querySelector("#app"));
