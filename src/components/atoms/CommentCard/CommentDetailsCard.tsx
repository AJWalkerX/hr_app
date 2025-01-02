import React from 'react'
import { ICommentDetailsResponse } from '../../../models/Response/ICommentDetailsResponse'

function CommentDetailsCard(props: ICommentDetailsResponse) {
  return (
   <div className="col">
    <div className="row">
        <div className="col">
            <p>Sektör</p> <br />
            {props.companyType}
        </div>
        <div className="col">
            <p>Ülke</p><br />
            {props.companyRegion}
        </div>

    </div>
    <div className="row">
        <div className="col-3">
            <div className="row">
                {props.companyLogo}
            </div>
            <div className="row">
                <img src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/61d23ab0d86cde48fb5d8e92_comment-icon.svg" alt="" />
            </div>
            <div className="row">
                {props.content}
            </div>
            <div className="row">
                {props.firstName} {props.lastName}
            </div>
        </div>
        <div className="col-9">
            <div className="row">
                <p>{props.firstName} {props.lastName} - {props.companyName} {props.position}</p>
            </div>
            <div className="row">
                {props.description}
            </div>
        </div>
    </div>
   </div>
  )
}

export default CommentDetailsCard