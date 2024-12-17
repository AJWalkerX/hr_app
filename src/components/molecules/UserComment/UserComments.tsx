import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./UserComment.css";
import { useDispatch, useSelector } from "react-redux";
import { hrDispatch, hrUseSelector} from "../../../stores";
import { fetchGetAllComments } from "../../../stores/features/commentSlice";
import CommentCard from "../../atoms/CommentCard/CommentCard";
import { ICommentCard } from "../../../models/ICommentCard";
import { ICommentResponse } from "../../../models/ICommentResponse";


const UserComments = () => {
  const commentCardList : ICommentCard[]=hrUseSelector(state => state.comment.commentCardList);
  const dispatch = useDispatch<hrDispatch>();
  useEffect(()=>{
    dispatch(fetchGetAllComments());
  },[]);

 

  



  return (
    <>
      <div className="col-1"></div>
      <div className="col-11 ">
        <div className="row">
          <div className="col-md-3 d-flex flex-column justify-content-center">
            <h2 className="mb-4">Kullanıcı Hikayeleri</h2>
            <p>
              Binlerce insan kaynakları profesyoneli ile hep beraber İK’yı
              kolaylaştırıyoruz. İK profesyonellerinin Kolay İK ile tanışma
              hikayelerine göz atın.
            </p>
            <button className="btn btn-primary mt-3">TÜMÜNÜ İNCELEYİN</button>
          </div>
          <div className="col-md-8 position-relative ms-5">
            {/* Özel Navigasyon Butonları */}
            <button
              className="btn swiper-button-next"
              style={{ top: "45%", right: "-10px" }}
            >
              {/* Buton içerik */}
            </button>
            <div className="swiper-container">
              <Swiper
                modules={[Navigation, Autoplay, Pagination]} // Navigation modülünü burada kullanıyoruz
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".swiper-button-next", // Doğru buton sınıfını tanımla
                  prevEl: ".swiper-button-prev", // Önceki buton için
                }}
               className="custom-swiper"
              >
{commentCardList.map((comment, index) => {
  return (
    <SwiperSlide key={index}>
      <div className="col d-flex align-items-center ms-5">
        <div className="me-4">
          <CommentCard
            companyLogo={comment.companyLogo} // 'companyLogo' field'ını kullan
            content={comment.content} // 'content' field'ını kullan
            firstName={comment.firstName} // 'firstName' field'ını kullan
            lastName={comment.lastName} // 'lastName' field'ını kullan
            position={comment.position} // 'position' field'ını kullan
            avatar={comment.avatar} // 'avatar' field'ını kullan
          />
        </div>
      </div>
    </SwiperSlide>
  );
})}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default UserComments;