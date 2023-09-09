import { styled } from "styled-components";
import OptionItem from "./OptionItem";
import { RiLogoutCircleRLine } from "react-icons/ri";
import useAuth from "context/useAuth";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "client";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.CLIENT.LOGIN);
  };

  return (
    <Container onClick={handleLogout}>
      <OptionItem Icon={RiLogoutCircleRLine} title="Log out" />
    </Container>
  );
};

const Container = styled.div`
  margin-top: auto;
  margin-bottom: 15px;
`;

export default LogoutButton;
