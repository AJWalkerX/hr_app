import React from "react";
import Header from "../components/organisms/Header/Header";

import CompanyLogo from "../components/molecules/CompanyLogo/CompanyLogo";

import UserComments from "../components/molecules/UserComment/UserComments";
import FreeUse from "../components/molecules/FreeUse/FreeUse";
import Footer from "../components/molecules/Footer/Footer";
import Introduction from "../components/molecules/Introduction/Introduction";
import Apps from "../components/molecules/Application/Apps";
import './HomePage.css'

function HomePage() {
  return (
    <div className="container-fluid">
      <div className="row">
      <Header />
      </div>
      
      
      
      <div className="row ">
        <Introduction />
      </div>
      

        <div className="row companylogo-style">
          <CompanyLogo />
        </div>

        <div className="row apps-style">
          <Apps />
        </div>
        
        <div className="row freeuse-style">
          <UserComments />
        </div>
      
        

        <div className="row freeuse-style">
          <FreeUse />
        </div>

        <div className="row ">
          <Footer />
        </div>
      </div>
  

    
      
  );
}

export default HomePage;
