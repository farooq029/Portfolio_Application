import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Head from "./components/Head";
import Services from "./components/Services";
import Widgets from "./components/Widgets";

export default function App() {
  return (
    <div className="App">
      <div
        className="main"
        style={{
          backgroundImage: "url('https://i.picsum.photos/id/990/1700/1000.jpg')"
        }}
      >
        <Header />
        <Head />
        <Services />
        <Widgets />
      </div>
    </div>
  );
}
