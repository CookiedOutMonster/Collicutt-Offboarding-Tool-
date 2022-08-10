import {
  Modal,
  ModalContent,
  ModalHeaderFooter,
  ModalTitle,
  ModalBody,
} from "./AddTaskModal.styles";

const AddTaskModal = ({
  show,
  onClose,
  handleChange_modal,
  handleSubmit_modal,
}) => {
  if (!show) {
    return null;
  }

  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeaderFooter>
          <ModalTitle> Add tasks</ModalTitle>
        </ModalHeaderFooter>
        <ModalBody>
          <form onSubmit={handleSubmit_modal}>
            <label> Choose Role </label>
            <select
              type=""
              onChange={(e) => handleChange_modal(e)}
              id="chooseRole"
              required
            >
              <option> Please Select </option> <option> IT </option>{" "}
              <option> HR </option>
            </select>
            <label> Task Description </label>
            <input
              type="text"
              onChange={(e) => handleChange_modal(e)}
              id="taskDescription"
              required
            />
            <button> submit </button>
          </form>
        </ModalBody>
        <ModalHeaderFooter>
          <button onClick={onClose} type="button">
            exit
          </button>
        </ModalHeaderFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddTaskModal;
