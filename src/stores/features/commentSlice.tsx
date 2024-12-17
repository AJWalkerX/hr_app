import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICommentResponse } from "../../models/ICommentResponse";
import apis from "../../config/RestApis";
import reducer from "./authSlice";
import { IBaseResponse } from "../../models/IBaseResponse";
import { ICommentCard } from "../../models/ICommentCard";


interface ICommentState{
    commentCardList: ICommentCard[],
    isCommentCardListLoading: boolean,

}
const initialCommentState: ICommentState = {
    commentCardList: [],
    isCommentCardListLoading:false
    
  };

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
    }

    })

    export default commentSlice.reducer;