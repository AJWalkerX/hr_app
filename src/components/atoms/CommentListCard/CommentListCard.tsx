import React from 'react'
import { ICommentListCard } from '../../../models/Response/ICommentListCard';

function CommentListCard(props: ICommentListCard) {
    const {content, firstName,lastName,position,avatar} = props;
  return (
    <div className="row" style={{backgroundColor:'rgb(242, 244, 247)', borderRadius:'15px'}}>
        <div className="col-6">
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
        <div className="col-6" style={{ backgroundColor:'rgb(242, 244, 247)', borderRadius:'15px'}}>
            <img className='m-3 justify-content-center' style={{borderRadius:'20px', height:'500px', width:'500px'}} src={avatar} alt="" />
        </div>
    </div>
    
  )
}

export default CommentListCard
