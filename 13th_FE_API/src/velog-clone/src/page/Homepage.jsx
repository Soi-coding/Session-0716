import React from "react";
import { dummyData } from "../data/dummy_data";
import PostCard from "../components/PostCard";

function Homepage() {
  return (
      <div
            style={{
                    maxWidth: "1200px",
                            margin: "0 auto",
                                    padding: "20px",
                                            display: "flex",
                                                    flexDirection: "row",
                                                    flexWrap: "wrap",
                                                            gap: "20px",
                                                                    justifyContent: "space-between",
                                                                          }}
                                                                              >
                                                                                    {dummyData.map((post) => (
                                                                                            <PostCard
                                                                                                      key={post.postID}
                                                                                                                title={post.title}
                                                                                                                          content={post.content}
                                                                                                                                    thumbnail={post.thumbnail}
                                                                                                                                              createdAt={post.createdAt}
                                                                                                                                                      />
                                                                                                                                                            ))}
                                                                                                                                                                </div>
                                                                                                                                                                  );
                                                                                                                                                                  }
                                                                                                                                                                  
                                                                                                                                                                  export default Homepage;
