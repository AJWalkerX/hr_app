import React from "react";
import Header from "../components/molecules/Header/Header";

import CompanyLogo from "../components/molecules/CompanyLogo/CompanyLogo";
import Apps from "../components/molecules/Apps";
import UserComments from "../components/molecules/UserComments";
import FreeUse from "../components/molecules/FreeUse";
import Footer from "../components/molecules/Footer";
import Introduction from "../components/molecules/Introduction/Introduction";

function HomePage() {
  return (
    <>
     
        <div className="row">
          <Header />
        </div>
      {/** ACIKLAMA KISMI */}
        <div className="row">
          <Introduction/>
        </div>
      

      <div className="container">
        <div className="row">
          <CompanyLogo />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <Apps />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <UserComments />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <FreeUse />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
     

  );
}

export default HomePage;
