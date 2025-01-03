import React from 'react'
import Header from '../components/organisms/Header/Header'

import FreeUse from '../components/molecules/FreeUse/FreeUse'
import Footer from '../components/molecules/Footer/Footer'
import CommentDetails from '../components/atoms/CommentCard/CommentDetails'

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