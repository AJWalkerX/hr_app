import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICommentResponse } from "../../models/Response/ICommentResponse";
import apis from "../../config/RestApis";
import reducer from "./authSlice";
import { IBaseResponse } from "../../models/Response/IBaseResponse";
import { ICommentCard } from "../../models/ICommentCard";
import { IAddCommentRequest } from "../../models/Request/IAddCommentRequest";
import { ICommentDetailsResponse } from "../../models/Response/ICommentDetailsResponse";


interface ICommentState{
    commentCardList: ICommentCard[],
    isCommentCardListLoading: boolean,
    
    addComment:IAddCommentRequest | null,
    isAddCommentLoading:boolean,
    
    commentUserCardList: ICommentResponse[],
    isCommentUserCardList: boolean,

    commentDetails: ICommentDetailsResponse | null,
    isCommentDetailsLoading: boolean,

}

const initialCommentState: ICommentState = {
    commentCardList: [],
    isCommentCardListLoading:false,

    addComment: null,
    isAddCommentLoading: false,

    commentUserCardList: [],
    isCommentUserCardList: false,

    commentDetails: null,
    isCommentDetailsLoading: false,

  };
    
  export const fetchGetCommentDetails = createAsyncThunk(
    "comment/fetchGetCommentDetails",
    async(commentId: number)=>{
        return await fetch(apis.commentService + '/get-comment-details?commentId='+ commentId).then(data=>data.json())
    }
  )


  export const fetchGetAllUserComments = createAsyncThunk(
    "comment/fetchGetAllUserComments",
    async()=>{
        return await fetch(apis.commentService + '/comment-list').then(data=>data.json())
    }
  )


  export const fetchAddComment = createAsyncThunk(
    "comment/fetchAddComment",

    async(payload:IAddCommentRequest)=>{
        const token = localStorage.getItem("token");
    const requestBody = {
      ...payload,
      token: token,
    };
        const response = await fetch(apis.commentService+'/add-comment',{
            method: "POST",
            headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
        }).then((data) => data.json());
        return response;
    }
  )

  export const fetchGetAllComments= createAsyncThunk(
    "comment/fetchGetAllComments",
    async()=>{
        return await fetch(apis.commentCardService + '/get-all-comment').then(data=>data.json())
    }


  );


  const commentSlice = createSlice({
    name:'comment',
    initialState: initialCommentState,
    reducers:{},

    extraReducers: (build)=>{
        
        build.addCase(fetchGetAllComments.pending,(state)=>{state.isCommentCardListLoading = true});
        build.addCase(fetchGetAllComments.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isCommentCardListLoading = false;
            if(action.payload.code === 200){
                state.commentCardList = action.payload.data;
            }
        });

        build.addCase(fetchAddComment.pending,(state)=>{state.isAddCommentLoading =true});
        build.addCase(fetchAddComment.fulfilled,(state,action:PayloadAction<IBaseResponse>)=>{
            state.isAddCommentLoading = false;
            if(action.payload.code === 200){
                state.addComment = action.payload.data;
            }
        });

        build.addCase(fetchGetAllUserComments.pending,(state)=>{state.isCommentUserCardList=true});
        build.addCase(fetchGetAllUserComments.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
                state.isCommentUserCardList = false;
                if(action.payload.code === 200){
                    state.commentUserCardList=action.payload.data;
                }
        });
        build.addCase(fetchGetCommentDetails.pending,(state)=>{state.isCommentDetailsLoading=true});
        build.addCase(fetchGetCommentDetails.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isCommentDetailsLoading = false;
            if(action.payload.code ===200){
                state.commentDetails=action.payload.data;
            }
        })

    }

    })

    export default commentSlice.reducer;