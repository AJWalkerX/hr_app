import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICommentResponse } from "../../models/ICommentResponse";
import apis from "../../config/RestApis";
import reducer from "./authSlice";
import { IBaseResponse } from "../../models/IBaseResponse";


interface ICommentState{
    commentList: ICommentResponse[],
    isCommentListLoading: boolean,

}
const initialCommentState = {
    commentList: [],
    isCommentListLoading:false
    
  };

  export const fetchGetAllComment = createAsyncThunk(
    "comment/fetchGetAllComment",
    async()=>{
        return await fetch(apis.commentService+ '/get-all-comment').then(data=>data.json())
    }


  )

  const commentSlice = createSlice({
    name:'comment',
    initialState: initialCommentState,
    reducers:{},

    extraReducers: (build)=>{
        
        build.addCase(fetchGetAllComment.pending,(state)=>{state.isCommentListLoading=true})
        build.addCase(fetchGetAllComment.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isCommentListLoading = false;
            if(action.payload.code === 200){
                state.commentList = action.payload.data;
            }
        })
    }

    })

    export default commentSlice.reducer;