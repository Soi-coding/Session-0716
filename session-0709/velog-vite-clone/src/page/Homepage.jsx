import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

function Homepage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("API BASE URL:", import.meta.env.VITE_API_BASE_URL);
        const response = await axios.get(
          import.meta.env.VITE_API_BASE_URL + "/boards"
        );
        console.log("게시글 목록 API 응답:", response.data); //응답 데이터 확인 로그
        setPosts(response.data);
      } catch (err) {
        console.error("게시글 목록 불러오기 실패:", err);
        setError("게시글을 불러오는데 실패했어요."); //에러 메세지 설정
      } finally {
        setLoading(false); //로딩 완료 표시
      }
    };
    fetchPosts();
  }, []);

  if (loading)
    return <p style={{ textAlign: "center" }}>게시글을 불러오는 중...</p>;
  if (error)
    return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        alignItems: "stretch",
      }}
    >
      {posts.map((post) => (
        <PostCard
          key={post.id}
          postID={post.id}
          title={post.title}
          content={
            post.content.length > 100
              ? post.content.slice(0, 100) + "..."
              : post.content
          } //내용이 너무 길면 "..." 처리, slice(시작, 끝)
          thumbnail={post.thumbnailUrl}
          createdAt={post.createdAt}
          authorName={post.writerName}
          authorProfile={post.profileUrl}
          likeCount={post.likes}
        />
      ))}
    </div>
  );
}

export default Homepage;
