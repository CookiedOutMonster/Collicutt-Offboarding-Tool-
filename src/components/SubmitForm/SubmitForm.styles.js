import styled from "styled-components";

export const Container = styled.section`
  border: 2px solid black;
  width: 30%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 10px rgba(0, 0, 0, 0.4);
`;

export const HeaderFooter = styled.div`
  padding: 10px;
`;

export const Body = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  width: 90%;
  height: 70%;
`;

export const Form = styled.form`
  height: 100%;
  padding-bottom: 1em;
`;
