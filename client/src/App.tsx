import React from "react";

import Home from "./pages/Home";
import Algorithms from "./pages/algorithms/Algorithms";
import Computations from "./pages/computations/Computations";
import Conversions from "./pages/conversions/Conversions";
import DataStructures from "./pages/datastructures/DataStructures";
import Login from "./pages/accounts/Login";
import Register from "./pages/accounts/Register";
import Account from "./pages/accounts/Account";
import History from "./pages/accounts/History";
import SelectionSort from "./pages/algorithms/SelectionSort";
import BinarySearchTree from "./pages/datastructures/BinarySearchTree";

import {Container} from "react-bootstrap";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import hotkeys from "hotkeys-js";
// import useNavigate from "react-router-dom";

// Layout
import Layout from "./layout/Layout";
import Search from "./pages/Search";
import OtherFeatures from "./pages/OtherFeatures";


function App() {
    const style = document.getElementById('dark-mode')
    if (localStorage.getItem('darkMode') == null) {
        localStorage.setItem('darkMode', JSON.stringify(false));
    }
    if (localStorage.getItem('keyBinds') == null || true) {
        localStorage.setItem('keyBinds',
            JSON.stringify(
                {KeyBindString: "alt+1,alt+2,alt+3,alt+4,alt+8,alt+9,alt+0",
                    KeyBindDict: {
                        algorithms: "alt+1",
                        computations: "alt+2",
                        datastructures: "alt+3",
                        conversions: "alt+4",
                        account: "alt+8",
                        history: "alt+9",
                        home: "alt+0",}}));}
    let bindsDict = JSON.parse(localStorage.getItem("keyBinds") || '');

    style?.setAttribute("href", JSON.parse(localStorage.getItem('darkMode') || '') ? 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.1.3/darkly/bootstrap.min.css' : 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.1.3/flatly/bootstrap.min.css')


    hotkeys(bindsDict.KeyBindString, function(event, handler){
        switch (handler.key) {
            case bindsDict.KeyBindDict.algorithms:
                window.location.href=("/algorithms");
                break;
            case bindsDict.KeyBindDict.computations:
                window.location.href=("/computations");
                break;
            case bindsDict.KeyBindDict.datastructures:
                window.location.href=("/datastructures");
                break;
            case bindsDict.KeyBindDict.conversions:
                window.location.href=("/conversions");
                break;
            case bindsDict.KeyBindDict.account:
                window.location.href=("/account");
                break;
            case bindsDict.KeyBindDict.history:
                window.location.href=("/history");
                break;
            case bindsDict.KeyBindDict.home:
                window.location.href=("/");
                break;
            default: alert(event);
        }
    });

    return (
        <>
            <Layout>
                <Container>
                    <Routes>
                        <Route path="*" element={<Home/>}/>
                        <Route path="/algorithms" element={<Algorithms/>}/>
                        <Route path="/computations" element={<Computations/>}/>
                        <Route path="/conversions" element={<Conversions/>}/>
                        <Route path="/datastructures" element={<DataStructures/>}/>
                        <Route path="/search" element={<Search/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/account" element={<Account/>}/>
                        <Route path="/history" element={<History/>}/>
                        <Route path="/selectionsort" element={<SelectionSort/>}/>
                        <Route path="/binarysearchtree" element={<BinarySearchTree/>}/>
                        <Route path="/otherFeatures" element={<OtherFeatures/>}/>
                    </Routes>
                </Container>
            </Layout>
        </>
    );
}

export default App;
