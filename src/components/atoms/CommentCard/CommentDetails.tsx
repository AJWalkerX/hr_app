import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hrDispatch, hrUseSelector } from '../../../stores'
import { ICommentDetailsResponse } from '../../../models/Response/ICommentDetailsResponse';
import { fetchGetCommentDetails } from '../../../stores/features/commentSlice';
import { useParams } from 'react-router-dom';

function CommentDetails () {
    const commentDetails: ICommentDetailsResponse | null = hrUseSelector((state)=>state.comment.commentDetails);
const dispatch = useDispatch<hrDispatch>();
const {commentId} = useParams();

useEffect(()=>{
    dispatch(fetchGetCommentDetails(parseInt(commentId ? commentId: '0')))
},[dispatch, commentId])
  return (
    <div >

        <div className="col-2"></div>
        <div className="col-8">
            <div className="row">
                <p>Sektör: {commentDetails?.companyType}</p>
            </div>
            <div className="row"></div>
        </div>
        <div className="col-2"></div>

    </div>
  )
}

export default CommentDetails