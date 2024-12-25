
function PermitRequestAtom() {
  return (
    <div className="row align-items-center">
      <div className="col-auto">
        <img
          src="https://picsum.photos/100/100"
          style={{ width: '50px', height: '50px', borderRadius: '50%' }}
          alt="Avatar"
        />
      </div>
      <div className="col">
        {/* İhtiyaç duyulan içerik buraya eklenebilir */}
      </div>
      <div className="col-auto">
        <button
          style={{ color: 'white' }}
          type="button"
          className="btn btn-success"
        >
          Accept
        </button>
      </div>
    </div>
  );
}

export default PermitRequestAtom;