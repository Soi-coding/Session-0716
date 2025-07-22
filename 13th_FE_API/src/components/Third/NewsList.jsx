import React, { useEffect, useState } from "react";
import Category from "../common/Category";
import styled from "styled-components";
import axios from "axios";
import Title from "../common/Title";

const NewsWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const NewsListUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NewsItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  color: white;
`;

const NewsImage = styled.img`
  width: 120px;
  height: 80px;
  object-fit: cover;
  margin-right: 20px;
`;

const NewsTitle = styled.p`
  flex: 1;
  font-size: 18px;
`;

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=86bc46dc46a34a059c3ecf5aa7f7ecb7"
        );
        console.log("NewsList에서 가져온 기사 데이터:", response.data.articles);
        setArticles(response.data.articles);
      } catch (error) {
        console.error("뉴스 데이터를 가져오는 데 실패했습니다:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Title title="멋사 NEWS" />
      <Category />
      <NewsWrapper>
        <NewsListUl>
          {articles.map((article, idx) => (
            <NewsItem key={idx}>
              <NewsImage src={article.urlToImage} alt="news" />
              <NewsTitle>{article.title}</NewsTitle>
            </NewsItem>
          ))}
        </NewsListUl>
      </NewsWrapper>
    </>
  );
};

export default NewsList;
