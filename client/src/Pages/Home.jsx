import React, { useEffect, useState } from "react";
import MonacoEditor, { getEditorValue, setEditorValue } from "../Components/MonacoEditor";
import { NavLink } from "react-router-dom";
import axios from "axios";

import "../css/Home.css";

const Home = () => {
    const [state, setState] = useState({ name: "", doc: "" });

    useEffect(() => {
        setState({ name: "default", doc: "test" }); // use effect to set value from whatever source on component load
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(state);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        payspin
                    </NavLink>
                    <ul className="navbar-nav ms-auto">
                        <li className="navbar-item">
                            <NavLink to="/" className="nav-link">
                                Hello Guest!
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container-fluid">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-2 mt-2">
                        <input
                            type="name"
                            className="form-control"
                            id="documentName"
                            placeholder="Document Name"
                            value={state.name}
                            onChange={(e) => setState({ ...state, name: e.target.value })}
                        />
                    </div>
                    <MonacoEditor height="50vh" defaultValue={state.doc} onChange={(newDoc) => setState({ ...state, doc: newDoc })} />
                    <button type="submit" className="btn btn-primary mb-2 mt-2">
                        Create Document
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Home;
