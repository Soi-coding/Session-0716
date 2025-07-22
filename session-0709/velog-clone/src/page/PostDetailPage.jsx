// src/page/PostDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { dummyData } from "../data/dummy_data";

function PostDetailPage() {
  const { postID } = useParams();
  const post = dummyData.find((item) => String(item.postID) === postID);

  if (!post) {
    return <div>해당 게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto" }}>
      <h1>{post.title}</h1>
      <p style={{ color: "#888" }}>{post.createdAt}</p>
      <img
        src={post.thumbnail}
        alt="thumnail"
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <p style={{ marginTop: "20px", lineHeight: "1.6" }}>{post.content}</p>
    </div>
  );
}

export default PostDetailPage;
