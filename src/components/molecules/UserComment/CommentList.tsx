import React, { useEffect } from "react";
import "./CommentList.css";
import { useDispatch } from "react-redux";
import { hrDispatch, hrUseSelector } from "../../../stores";
import { ICommentResponse } from "../../../models/Response/ICommentResponse";
import { fetchGetAllUserComments } from "../../../stores/features/commentSlice";
import { Key } from "@mui/icons-material";
import CommentListCard from "../../atoms/CommentListCard/CommentListCard";

function CommentList() {
  const commentUserCardList: ICommentResponse[] = hrUseSelector(
    (state) => state.comment.commentUserCardList
  );

  const dispatch = useDispatch<hrDispatch>();

  useEffect(() => {
    dispatch(fetchGetAllUserComments());
  }, [dispatch]);

  return (
    <div className="container comment-card">
      <div className="row text-center mb-4">
        <div className="col-12 " style={{marginTop:'100px'}}>
          <h1>KULLANICI HİKAYELERİ</h1>
        </div>
      </div>
      <div className="row row-cols-md-3 g-4 " >
        {commentUserCardList.map((comment, index) => (
          <div className="col" key={index}>
            <CommentListCard
              avatar={comment.avatar}
              companyName={comment.companyName}
              firstName={comment.firstName}
              lastName={comment.lastName}
              position={comment.position}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentList;