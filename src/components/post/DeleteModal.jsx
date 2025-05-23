import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(91, 112, 131, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: black;
  border-radius: 16px;
  width: 260px;
  padding: 28px;
  color: white;
  text-align: left;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.div`
  font-size: 15px;
  color: gray;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DeleteButton = styled.button`
  background-color: #eb2121;
  border: none;
  padding: 10px;
  border-radius: 999px;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #dc2626;
  }
`;

const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid gray;
  padding: 10px;
  border-radius: 999px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #2f3336;
  }
`;

const DeleteModal = ({ onClose, onConfirm }) => {
  return (
    <Backdrop onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <Title>Delete post?</Title>
        <Description>
          This can’t be undone and it will be removed from your profile, the
          timeline of any accounts that follow you and from search results.
        </Description>
        <ButtonGroup>
          <DeleteButton onClick={onConfirm}>Delete</DeleteButton>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
        </ButtonGroup>
      </ModalBox>
    </Backdrop>
  );
};

export default DeleteModal;
