import { styled } from "styled-components";

const OptionItem = ({ title, Icon, active }) => {
  return (
    <Container active={active}>
      <Icon />
      <OptionName>{title}</OptionName>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 20px;
  transition-duration: 320ms;
  cursor: pointer;

  svg {
    font-size: 18px;
  }

  & > * {
    color: ${({ active }) => (active ? "dodgerblue" : "#777")};
    fill: ${({ active }) => (active ? "dodgerblue" : "#777")};
  }

  &:hover > * {
    color: dodgerblue;
    fill: dodgerblue;
  }

  &:active {
    transform: scale(0.97);
  }
`;

const OptionName = styled.p`
  font-size: 17px;
  font-weight: 600;
  text-transform: uppercase;
`;

export default OptionItem;
