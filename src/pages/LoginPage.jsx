import { styled } from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import useAuth from "context/useAuth";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "client";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        login(result.user);
        navigate(ROUTES.CLIENT.HOME);
      })
      .catch((error) => console.log("ERR", error));
  };

  return (
    <Container>
      <LoginButton onClick={handleLogin}>
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
