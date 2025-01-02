import React from 'react'
import Header from '../components/organisms/Header/Header'
import CommentDetails from '../components/molecules/UserComment/CommentDetails'
import CommentList from '../components/molecules/UserComment/CommentList'
import FreeUse from '../components/molecules/FreeUse/FreeUse'
import Footer from '../components/molecules/Footer/Footer'

function CommentDetailsPage() {
  return (
    <div className="container-fluid">
        <div className="row">
            <Header/>
        </div>
        <div className="row">
            <CommentDetails/>
        </div>
        <div className="row">
            <FreeUse/>
        </div>
        <div className="row">
            <Footer/>
        </div>
    </div>
  )
}

export default CommentDetailsPage