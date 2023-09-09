import { styled } from "styled-components";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <Container>
      <LoginButton>
        <FcGoogle /> Login with Google
      </LoginButton>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  background-color: lightgray;
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  background-color: dodgerblue;
  color: #fff;
  padding: 7px 10px;
  border-radius: 6px;

  svg {
    font-size: 22px;
  }
`;

export default LoginPage;
