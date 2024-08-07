import React, { useState, useEffect } from "react";
import Cards from "../Cards";
import axios from "axios";
import "./style.css";

const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://codeguyakash.github.io/server/data.json")
      .then((res) => setData(res.data))
      .catch((e) => {
        console.log(e.message);
      });

    axios
      .get("https://api.github.com/users/codeguyakash")
      .then((res) =>
        console.log(`%c @${res.data.login}`, `font-size:30px; color:white;`)
      )
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <section id="project-section">
      <div id="heading">
        <h1>PROJECT</h1>
        <h3>Our courses are the ultimate brain food</h3>
      </div>
      <div className="projects">
        {data.map((item, index) => (
          <Cards items={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Index;
