import React from 'react'
import Header from '../components/organisms/Header/Header'
import CommentList from '../components/molecules/UserComment/CommentList'
import Footer from '../components/molecules/Footer/Footer'
import FreeUse from '../components/molecules/FreeUse/FreeUse'

function CommentListPage() {
  return (
    
      <div className="container-fluid">
        <div className="row">
          <Header />
        </div>

        <div className="row mt-5">
          <div className="col-2"></div>
          <div className="col-8">
          <CommentList />
          </div>
          <div className="col-2"></div>
          
        </div>

        <div className="row mt-5">
          <FreeUse/>
        </div>
        <div className="row">
          <Footer/>
        </div>
      </div>

  );
}

export default CommentListPage
