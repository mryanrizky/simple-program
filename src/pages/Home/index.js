import React from "react";
import "./home.scss";
import { Tabel, Header, Forms } from "../../components/molecules";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="main-page">
        <div className="left">
          <Tabel />
        </div>
        <div className="right">
          <Forms />
        </div>
      </div>
    </div>
  );
};

export default Home;
