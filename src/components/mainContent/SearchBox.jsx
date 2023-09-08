import { styled } from "styled-components";
import { LiaSearchSolid } from "react-icons/lia";

const SearchBox = () => {
  return (
    <Container>
      <LiaSearchSolid size={24} color="gray" />
      <Input placeholder="Search" />
      <Filter>
        <FilterItem>Messages</FilterItem>
      </Filter>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 17px 0;
  padding-left: 25px;
  border-radius: 8px;
  background-color: #fff;
`;

const Input = styled.input`
  flex: 0.8;
  outline: none;
  border: none;
  padding: 0 15px;
  color: #303030;
  font-size: 15px;
  font-weight: 600;

  ::placeholder {
    color: gray;
    font-size: 15px;
    font-weight: 600;
  }
`;

const Filter = styled.div`
  flex: 0.2;
  height: 100%;
  display: flex;
  align-items: center;
  border-left: 1px solid lightgray;
  padding-left: 10px;
`;

const FilterItem = styled.p`
  color: gray;
  font-size: 15px;
  font-weight: 600;
`;

export default SearchBox;
