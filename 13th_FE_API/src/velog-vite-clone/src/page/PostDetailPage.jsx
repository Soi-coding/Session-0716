import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import heartImg from "../assets/images/heart.png";
import shareImg from "../assets/images/share.png";

function formatDate(dateString) {
  const date = new Date(dateString);
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
}

function PostDetailPage() {
  const { postid } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/boards/${postid}`)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch(() => {
        setError("게시글을 불러오는데 실패했습니다.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [postid]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;
  if (!post) {
    return <div>해당 게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto" }}>
      <h1
        style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "12px" }}
      >
        {post.title}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "#888",
            fontSize: "15px",
            marginTop: "8px",
            marginBottom: "20px",
          }}
        >
          <span style={{ fontWeight: "bold", color: "black" }}>
            {post.writerName}
          </span>{" "}
          ・ {formatDate(post.createdAt)}
        </p>
        <button
          style={{
            border: "1px solid #00c4c4",
            borderRadius: "16px",
            padding: "3px 18px",
            color: "#00c4c4",
            background: "white",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          팔로우
        </button>
      </div>

      {/* 태그가 있을 때만 렌더 */}
      {post.tags && post.tags.length > 0 && (
        <div
          style={{
            margin: "12px 0",
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {post.tags.map((tag, index) => (
            <span
              key={index}
              style={{
                background: "#f0fdf4",
                color: "#00c4c4",
                padding: "4px 10px",
                fontSize: "13px",
                borderRadius: "16px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <img src={post.thumbnailUrl} alt="thumbnail" style={{ width: "100%" }} />
      <div
        style={{
          position: "fixed",
          top: "300px",
          left: "calc((100vw - 800px) / 2 - 120px)",
          backgroundColor: "#f0f0f0",
          borderRadius: "20px",
          padding: "8px",
          display: window.innerWidth < 900 ? "none" : "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #ccc",
          }}
        >
          <img
            src={heartImg}
            alt="heart"
            style={{
              width: "18px",
              filter: "grayscale(100%) brightness(0) opacity(0.5)",
            }}
          />
        </div>
        <div style={{ fontWeight: "bold", color: "black", fontSize: "12px" }}>
          {post.likeCount ?? 0}
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #ccc",
          }}
        >
          <img
            src={shareImg}
            alt="share"
            style={{
              width: "18px",
              filter: "grayscale(100%) brightness(0) opacity(0.5)",
            }}
          />
        </div>
      </div>
      <p style={{ marginTop: "20px", lineHeight: "1.6" }}>{post.content}</p>
    </div>
  );
}

export default PostDetailPage;
