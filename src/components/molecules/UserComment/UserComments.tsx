import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./UserComment.css";
const UserComments = () => {
  return (
    <>
      <div className="col-2"></div>
      <div className="col-8">
        <div className="row">
          <div className="col-md-4 d-flex flex-column justify-content-center">
            <h2 className="mb-4">Kullanıcı Hikayeleri</h2>
            <p>
              Binlerce insan kaynakları profesyoneli ile hep beraber İK’yı
              kolaylaştırıyoruz. İK profesyonellerinin Kolay İK ile tanışma
              hikayelerine göz atın.
            </p>
            <button className="btn btn-primary mt-3">TÜMÜNÜ İNCELEYİN</button>
          </div>
          <div className="col-md-8 position-relative">
            {/* Özel Navigasyon Butonları */}

            <button
              className="btn btn-outline-primary swiper-button-next"
              style={{ top: "40%", right: "-50px" }}
            >
              ›
            </button>
            <div className="swiper-container">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                }}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <div className="d-flex align-items-center">
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
                    <div>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Ali Kuşcuoğlu"
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
                <SwiperSlide>
                  <div className="d-flex align-items-center">
                    <div className="me-4">
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
                    <div>
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
      <div className="col-2"></div>
    </>
  );
};

export default UserComments;
