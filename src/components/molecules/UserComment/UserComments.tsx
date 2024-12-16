import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./UserComment.css";
import { useDispatch } from "react-redux";
import { hrDispatch } from "../../../stores";
import { fetchGetAllComment } from "../../../stores/features/commentSlice";
const UserComments = () => {
  const dispatch = useDispatch<hrDispatch>();
  useEffect(()=>{
    dispatch(fetchGetAllComment());
  },[])
  return (
    <>
      <div className="col-2"></div>
      <div className="col-10 ">
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
              style={{ top: "35%", right: "250px" }}
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
              >
                <SwiperSlide>
                  <div className=" col-7 d-flex align-items-center ms-5">
                    <div className="me-4">
                      <h5 className="fw-bold">DECATHLON</h5>
                      <p className="mb-3">
                        “Decathlon olarak, insan kaynakları süreçlerinde hayal
                        ettiğimiz dijital dönüşümü Kolay İK'yla
                        gerçekleştirdik.”
                      </p>
                      <p className="text-muted mb-2">
                        Ali Kuşcuoğlu, Bordro Ücret ve Yan Haklar Takım Lideri
                      </p>
                      <a href="#" className="text-primary">
                        Kullanıcı Hikayesini Oku →
                      </a>
                    </div>
                    <div className="col-3">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Ali Kuşcuoğlu"
                        className="rounded-circle ms-4"
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col-7 d-flex align-items-center  ">
                    <div className="">
                      <h5 className="fw-bold">FİRMA 2</h5>
                      <p className="mb-3">
                        “Başka bir firma ile olan deneyim açıklaması burada
                        olacak.”
                      </p>
                      <p className="text-muted mb-2">
                        İsim Soyisim, Görev Pozisyonu
                      </p>
                      <a href="#" className="text-primary">
                        Kullanıcı Hikayesini Oku →
                      </a>
                    </div>
                    <div className="col-5">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Başka bir kişi"
                        className="rounded-circle"
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default UserComments;