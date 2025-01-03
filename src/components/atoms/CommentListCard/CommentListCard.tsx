import React from 'react';
import { ICommentResponse } from '../../../models/Response/ICommentResponse';
import { useNavigate } from 'react-router-dom';

function CommentListCard({commentId, avatar, companyName, firstName, lastName, position }: ICommentResponse) {
const navigate = useNavigate();
  const goToComment = ()=>{        
    navigate('/commentDetails/'+commentId)
}
console.log(commentId);
  return (
    <div className="col" onClick={goToComment}>
      <div className="card" style={{ width: '350px', height:'510px'}}>
      
        <img src={avatar} alt={`${firstName} ${lastName}`} style={{width:'350px', height:'400px', borderRadius:'10px'}} />

        <div className="card-body">
          
          <h5 className="card-title" style={{color:'rgb(10, 57, 129)'}}>{companyName}</h5>
          
          <p className="card-text" style={{color:'rgb(10, 57, 129)'}}>
            {firstName} {lastName} - {position}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommentListCard;
