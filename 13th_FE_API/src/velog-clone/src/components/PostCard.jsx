import React from "react";
import styled from "styled-components";
import heartIcon from "../assets/images/heart.png";

const Card = styled.div`
  width: 100%;
    max-width: 350px;
      min-width: 250px;
          border-radius: 8px;
            overflow: hidden;
              margin: 10px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                  display: flex;
                    flex-direction: column;
                    `;

                    const Thumbnail = styled.img`
                      width: 100%;
                        height: 180px;
                          object-fit: cover;
                          `;

                          const Content = styled.div`
                            padding: 10px;
                              flex: 1;
                              `;

                              const Title = styled.h2`
                                font-size: 18px;
                                  margin: 0;
                                  `;

                                  const Body = styled.p`
                                    font-size: 14px;
                                      color: #555;
                                      `;

                                      const Date = styled.p`
                                        font-size: 12px;
                                          color: #999;
                                          `;

                                          /* 회색 선 */
                                          const Divider = styled.div`
                                            border-top: 1px solid #ddd;
                                              margin: 0 10px;
                                              `;

                                              /* 하단 영역 */
                                              const Footer = styled.div`
                                                display: flex;
                                                  justify-content: space-between;
                                                    align-items: center;
                                                      padding: 8px 10px;
                                                      `;

                                                      /* 왼쪽 프로필 + 텍스트 */
                                                      const Author = styled.div`
                                                        display: flex;
                                                          align-items: center;
                                                            gap: 6px;
                                                            `;

                                                            /* 회색 동그라미 */
                                                            const Circle = styled.div`
                                                              width: 24px;
                                                                height: 24px;
                                                                  border-radius: 50%;
                                                                    background-color: #ccc;
                                                                    `;

                                                                    /* "by 사용자" */
                                                                    const ByText = styled.span`
                                                                      font-size: 13px;
                                                                        color: #888;
                                                                          & > span {
                                                                              color: #000;
                                                                                  font-weight: bold;
                                                                                    }
                                                                                    `;

                                                                                    /* 하트 + 숫자 */
                                                                                    const Likes = styled.div`
                                                                                      display: flex;
                                                                                        align-items: center;
                                                                                          gap: 4px;
                                                                                          `;

                                                                                          const HeartIcon = styled.img`
                                                                                            width: 16px;
                                                                                              height: 16px;
                                                                                              `;

                                                                                              const LikeCount = styled.span`
                                                                                                font-size: 13px;
                                                                                                  color: #555;
                                                                                                  `;

                                                                                                  function PostCard({ title, content, thumbnail, createdAt }) {
                                                                                                    return (
                                                                                                        <Card>
                                                                                                              <Thumbnail src={thumbnail} alt="thumbnail" />
                                                                                                                    <Content>
                                                                                                                            <Title>{title}</Title>
                                                                                                                                    <Body>{content}</Body>
                                                                                                                                            <Date>{createdAt}</Date>
                                                                                                                                                  </Content>
                                                                                                                                                        <Divider />
                                                                                                                                                              <Footer>
                                                                                                                                                                      <Author>
                                                                                                                                                                                <Circle />
                                                                                                                                                                                          <ByText>
                                                                                                                                                                                                      by <span>사용자</span>
                                                                                                                                                                                                                </ByText>
                                                                                                                                                                                                                        </Author>
                                                                                                                                                                                                                                <Likes>
                                                                                                                                                                                                                                          <HeartIcon src={heartIcon} alt="heart" />
                                                                                                                                                                                                                                                    <LikeCount>1</LikeCount>
                                                                                                                                                                                                                                                            </Likes>
                                                                                                                                                                                                                                                                  </Footer>
                                                                                                                                                                                                                                                                      </Card>
                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                        export default PostCard;
                                                                                                                                                                                                                                                                        
