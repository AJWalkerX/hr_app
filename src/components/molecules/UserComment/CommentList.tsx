import React, { useEffect } from "react";
import "./CommentList.css";
import { useDispatch } from "react-redux";
import { hrDispatch, hrUseSelector } from "../../../stores";
import { ICommentResponse } from "../../../models/Response/ICommentResponse";
import { fetchGetAllUserComments } from "../../../stores/features/commentSlice";

function CommentList() {
  const commentUserCardList = hrUseSelector((state)=> (state.comment.isCommentUserCardList))
  
  const dispatch = useDispatch<hrDispatch>();
  useEffect (()=>{dispatch(fetchGetAllUserComments())
  },[dispatch]
)


//   return (
//      <div className="container container-comment-list px-5">
//     <div className="row justify-content-center g-4 mt-5">
//       {commentUserCardList.map((comment, index) => (
//         <div
//           key={index}
//           className="col-12 col-md-4 d-flex justify-content-center"
//           style={{
//             marginBottom: "20px",
//           }}
//         >
//           <div
//             className="comment-card"
//             style={{
//               backgroundImage: `url(${comment.avatar})`, 
//               padding: "15px",  
//               borderRadius: "15px",  
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="comment-text">
//               <h4>{comment.firstName} {comment.lastName}</h4>
//               <p>{comment.position}</p>
//               <p>{comment.companyName}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );
  
}

export default CommentList;