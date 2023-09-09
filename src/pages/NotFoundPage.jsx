import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ROUTES } from "client";
import useAuth from "context/useAuth";

const NotFoundPage = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Heading>The requested URL was not found on this server.</Heading>
      <Link to={user ? ROUTES.CLIENT.HOME : ROUTES.CLIENT.LOGIN}>
        Back to the home page
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 500px;
  font-size: 14px;
  color: #303030;

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    font-size: 2vw !important;
    font-weight: 500;
    color: #1e90ff;
    text-decoration: underline !important;

    :hover,
    :active {
      color: #303030;
    }

    @media screen and (max-width: 768px) {
      font-size: 4.5vw !important;
    }
  }
`;

const Heading = styled.h1`
  font-size: 3.33vw;
  padding: 0 4vw;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 6vw !important;
  }
`;

export default NotFoundPage;
