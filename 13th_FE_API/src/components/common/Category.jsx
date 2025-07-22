import React from "react";
import styled from "styled-components";

const CategoryBox = styled.div`
  background-color: black;
  border: 1px solid white;
  color: white;
  padding: 10px 20px;
  margin: 20px auto;
  width: 1000px;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`;

const CategoryItem = styled.span`
  cursor: pointer;
  font-size: 16px;
`;

const Category = () => {
  return (
    <CategoryBox>
      <CategoryItem>전체</CategoryItem>
      <CategoryItem>스포츠</CategoryItem>
      <CategoryItem>연애</CategoryItem>
      <CategoryItem>경제</CategoryItem>
    </CategoryBox>
  );
};

export default Category;
