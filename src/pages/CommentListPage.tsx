import React from 'react'
import Header from '../components/organisms/Header/Header'
import CommentList from '../components/molecules/UserComment/CommentList'

function CommentListPage() {
  return (
    <div >
      <div className="container">
        <div className="row mb-3 ">
          <Header />
        </div>

        <div className="row d-flex">
          <CommentList />
        </div>
      </div>
    </div>
  )
}

export default CommentListPage
