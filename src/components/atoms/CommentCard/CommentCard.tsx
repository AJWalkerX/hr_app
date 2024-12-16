import React from 'react'
import { ICommentCard } from '../../../models/ICommentCard';

function CommentCard(props: ICommentCard) {
    const {companyLogo, content, firstName,lastName,position,avatar} = props;
  return (
    <div className="row" style={{backgroundColor:'rgb(242, 244, 247)', borderRadius:'15px'}}>
        <div className="col-7">
            <div className="row mt-3">
                <img  style={{width:'250px'}}src={companyLogo} alt="" />
            </div>
            <div className="row mt-4">
                <span style={{fontSize:'20px', fontWeight:'bold'}}>{content}</span>
            </div>
            <div className="row mt-4">
                <span>{firstName} {lastName} {position}</span>
            </div>
            <div className="row mt-5" >
                <a style={{textDecoration:'none'}} href="">Kullanıcı Hikayelerini Oku</a>
            </div>
        </div> 
        <div className="col-5" style={{ backgroundColor:'rgb(242, 244, 247)', borderRadius:'15px'}}>
            <img className='m-3' style={{borderRadius:'20px'}} src={avatar} alt="" />
        </div>
    </div>
    
  )
}

export default CommentCard