import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmbezzlementListByCompany, fetchAddEmbezzlement } from "../../../stores/features/embezzlementSlice";
import EmbezzlementCard from "../../atoms/EmbezzlementCard/EmbezzlementCard";
import { hrDispatch, hrState } from "../../../stores";
import { IAddEmbezzlementRequestDto } from "../../../models/Request/IAddEmbezzlementRequestDto";

function ManagerEmbezzlement() {
  const dispatch = useDispatch<hrDispatch>();
  const [showModal, setShowModal] = useState(false);
  const [newMaterial, setNewMaterial] = useState<IAddEmbezzlementRequestDto>({
    description: "",
    embezzlementType: "",
  });

  const embezzlementTypes = [
    "ELECTRONICDEVICES",
    "OFFICEEQUIPMENT",
    "VEHICLESANDTRANSPORTATION",
    "PROTECTIVEGEAR",
    "TECHNICALEQUIPMENT",
    "STATIONERYANDOFFICESUPPLIES",
    "COMPANYCARDS",
    "CLOTHINGANDUNIFORMS",
  ];

  const { embezzlementList, isEmbezlementListLoading } = useSelector(
    (state: hrState) => state.embezzlement
  );

  useEffect(() => {
    dispatch(fetchEmbezzlementListByCompany());
  }, [dispatch]);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleSubmitMaterial = () => {
    dispatch(fetchAddEmbezzlement(newMaterial));
    handleModalToggle();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewMaterial({
      ...newMaterial,
      [name]: value,
    });
  };

  return (
    <>
      <div className="row mt-4 ms-5">
  <div className="col-12 col-md-3">
    <p style={{ fontSize: "25px", fontWeight: "bold" }}>Zimmet Takibi</p>
  </div>
  <div className="col-12 col-md-6"></div>
  <div className="col-12 col-md-3 d-flex justify-content-md-end">
    <button
      className="btn btn-outline-success my-2 my-sm-0 shadow-lg"
      style={{ fontWeight: "bold", padding: "10px 20px" }}
      type="button"
      onClick={handleModalToggle}
    >
      + Materyal Ekle
    </button>
  </div>
</div>

{/* Modal */}
{showModal && (
  <div
    className="modal fade show"
    id="newEmployeeModal"
    style={{ display: "block" }}
    tabIndex={-1}
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Yeni Materyal Ekle</h5>
          <button
            type="button"
            className="btn-close"
            onClick={handleModalToggle}
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Açıklama
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={newMaterial.description}
              onChange={handleChange}
              placeholder="Materyalin açıklamasını giriniz"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="embezzlementType" className="form-label">
              Zimmet Türü
            </label>
            <select
              className="form-control"
              id="embezzlementType"
              name="embezzlementType"
              value={newMaterial.embezzlementType}
              onChange={handleChange}
            >
              <option value="">Zimmet Türü Seçiniz</option>
              {embezzlementTypes.map((type) => (
                <option key={type} value={type}>
                  {type.replace(/([A-Z])/g, " $1").toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleModalToggle}
          >
            Kapat
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmitMaterial}
          >
            Ekle
          </button>
        </div>
      </div>
    </div>
  </div>
)}

{/* Tablo */}
<div className="table-responsive mt-5 me-5 ms-5">
  <table className="table table-striped align-middle">
    <thead className="table-dark">
      <tr>
        <th>Ürün</th>
        <th>Ürün Türü</th>
        <th>Ürün Durumu</th>
        <th>Detay</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {isEmbezlementListLoading ? (
        <tr>
          <td colSpan={5} className="text-center">
            Yükleniyor...
          </td>
        </tr>
      ) : (
        embezzlementList.map((embezzlement, index) => (
          <EmbezzlementCard key={index} {...embezzlement} />
        ))
      )}
    </tbody>
  </table>
</div>

    </>
  );
}

export default ManagerEmbezzlement;
