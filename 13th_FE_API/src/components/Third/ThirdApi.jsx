import { useState } from "react";
import axios from "axios";
import { BtnWrapper, BtnContainer } from "../First/Styled";

const ThirdApi = () => {
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    try {
      const apiKey = import.meta.env.VITE_NEWS_API_KEY; 
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=86bc46dc46a34a059c3ecf5aa7f7ecb7`;

      const response = await axios.get(url);
      console.log("API에서 받아온 뉴스 데이터:", response.data);

      setNews(response.data.articles); 
    } catch (error) {
      console.error("뉴스를 불러오는 중 오류가 발생했어요:", error);
    }
  };

  return (
    <>
      <BtnWrapper>
        <BtnContainer onClick={fetchData}>
          데이터 GET해보기! <br />
        </BtnContainer>
      </BtnWrapper>
    </>
  );
};

export default ThirdApi;