import React from "react";
import { useParams } from "react-router-dom";

function PostDetailPage() {
  const { postId } = useParams();

  return (
    <div>
      <h2>{postId}번째 게시글 상세페이지</h2>
    </div>
  );
}

export default PostDetailPage;
