import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hrDispatch, hrUseSelector } from '../../../stores'
import { ICommentDetailsResponse } from '../../../models/Response/ICommentDetailsResponse';
import { fetchGetCommentDetails } from '../../../stores/features/commentSlice';
import { useParams } from 'react-router-dom';
import { companySlice } from '../../../stores/features';
import './CommentDetails.css'

function CommentDetails () {
    const commentDetails: ICommentDetailsResponse | null = hrUseSelector((state)=>state.comment.commentDetails);
const dispatch = useDispatch<hrDispatch>();
const {commentId} = useParams();

useEffect(()=>{
    dispatch(fetchGetCommentDetails(parseInt(commentId ? commentId: '0')))
},[dispatch, commentId])
  return (
   
            <div className="row  mt-5">
                
                <div className="col-6 text-center">
                <p style={{fontWeight:'bold'}}>Sektör: {commentDetails?.companyType}</p>
                </div>
                <div className="col-6 " style={{fontWeight:'bold'}}>
                    <p>Ülke: {commentDetails?.companyRegion}</p>
                
                </div>
               
            <div className="row">
               
                        <div className="col-3">
                            <div className="row mt-5">
                                <img style={{height:'60px', width:'300px'}} src={commentDetails?.companyLogo} alt="" />
                            </div>
                            <div className="row mt-4" style={{display:'flex', justifyContent:'flex-start' }}>
                                <img style={{height:'30px', width:'130px'}} src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/61d23ab0d86cde48fb5d8e92_comment-icon.svg" alt="" />
                            </div>
                            <div className="row mt-3">
                                <p>{commentDetails?.content}</p>
                            </div>
                            <div className="row mb-5">
                                <p style={{fontWeight:'bold'}}>{commentDetails?.firstName} {commentDetails?.lastName}</p>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="row ms-3" style={{marginTop:'60px'}}>
                            <p style={{fontWeight:'bold', fontSize:'20px'}}>{commentDetails?.firstName} {commentDetails?.lastName} - {commentDetails?.companyName}  {commentDetails?.position}</p>
                            </div>
                            <div className="row mt-4 ms-3 mb-5">
                                <span className=''>{commentDetails?.description}</span>
                            </div>
                        </div>
                    </div>
                </div>
      
  )
}

export default CommentDetails