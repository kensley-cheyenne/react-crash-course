import "./Modal.css";

function Modal({ title, onCancel, onConfirm }) {
  return (
    <div>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button
            className="btn btn__cancel"
            onClick={onCancel}
          >Cancel</button>
          <button
            className="btn"
            onClick={onConfirm}
          >Confirm</button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}
export default Modal;
