import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICommentResponse } from "../../models/Response/ICommentResponse";
import { IAddCommentRequest } from "../../models/Request/IAddCommentRequest";
import { IBaseResponse } from "../../models/Response/IBaseResponse";
import { ICommentCard } from "../../models/ICommentCard";
import apis from "../../config/RestApis";

// State tipi
interface ICommentState {
  commentCardList: ICommentCard[];
  isCommentCardListLoading: boolean;
  addComment: IAddCommentRequest | null;
  isAddCommentLoading: boolean;
}

// Başlangıç durumu
const initialCommentState: ICommentState = {
  commentCardList: [],
  isCommentCardListLoading: false,
  addComment: null,
  isAddCommentLoading: false,
};

// Yorumları almak için asenkron aksiyon (GET) - Metod adı değiştirildi
export const getAllUserComments = createAsyncThunk(
  "comment/getAllUserComments",
  async () => {
    const response = await fetch(apis.commentCardService + "/get-all-comment");
    return response.json(); // JSON formatında döndürüyoruz
  }
);


// Slice oluşturma
const commentSlice = createSlice({
  name: "comment",
  initialState: initialCommentState,
  reducers: {}, // Burada başka bir reducer yoksa boş bırakıyoruz

  // Extra reducers ile asenkron işlemleri yönetiyoruz
  extraReducers: (builder) => {
    // Yorumları almak için (getAllUserComments)
    builder.addCase(getAllUserComments.pending, (state) => {
      state.isCommentCardListLoading = true; // Yorumlar yükleniyor
    });
    builder.addCase(
      getAllUserComments.fulfilled,
      (state, action: PayloadAction<IBaseResponse>) => {
        state.isCommentCardListLoading = false; // Yüklenme tamamlandı
        if (action.payload.code === 200) {
          state.commentCardList = action.payload.data; // Veriyi state'e kaydet
        }
      }
    );
    builder.addCase(getAllUserComments.rejected, (state) => {
      state.isCommentCardListLoading = false; // Yüklenme hatası durumunda
    });

   
  },
});

export default commentSlice.reducer;
