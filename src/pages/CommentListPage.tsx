import React from 'react'
import Header from '../components/organisms/Header/Header'
import CommentList from '../components/molecules/UserComment/CommentList'

function CommentListPage() {
  return (
    <div >
      <div className="container">
        <div className="row">
          <Header />
        </div>

        <div className="row mt-5">
          <CommentList />
        </div>
      </div>
    </div>
  )
}

export default CommentListPage
