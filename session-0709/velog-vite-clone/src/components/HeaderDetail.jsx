import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import velog2Logo from "../assets/images/velog2.png";
import bellIcon from "../assets/images/bell.png";
import searchIcon from "../assets/images/search.png";

function HeaderDetail() {
  const { postid } = useParams(); 
  const [writerName, setWriterName] = useState("작성자");  // 기본값

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/boards/${postid}`)
      .then((response) => {
        
        setWriterName(response.data.writerName);
      })
      .catch(() => {
        setWriterName("작성자");
      });
  }, [postid]);

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img src={velog2Logo} alt="velog2 logo" style={{ height: "24px" }} />
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            {writerName}.log
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <img
            src={bellIcon}
            alt="bell"
            style={{ width: "24px", height: "24px" }}
          />
          <img
            src={searchIcon}
            alt="search"
            style={{ width: "24px", height: "24px" }}
          />
          <button
            style={{
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              padding: "8px 16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            로그인
          </button>
        </div>
      </header>
    </div>
  );
}

export default HeaderDetail;
