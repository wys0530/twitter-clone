import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const DetailBackHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 60px;
  width: 600px;
  border: 1.25px solid #2f3336;
  border-bottom: none;
  box-sizing: border-box;
  background-color: transparent;
  color: white;
  font-weight: bold;
  padding-left: 1rem;
  gap: 1.5rem;
  font-size: 20px;
`;

const DetailBackHeader = ({ children }) => {
  return (
    <DetailBackHeaderContainer>
      <NavLink to="/" style={{ color: "white" }}>
        <IoArrowBack />
      </NavLink>

      {children}
    </DetailBackHeaderContainer>
  );
};

export default DetailBackHeader;
