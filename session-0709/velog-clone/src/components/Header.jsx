import React from "react";
import velogLogo from "../assets/images/velog.png";
import bellIcon from "../assets/images/bell.png";
import searchIcon from "../assets/images/search.png";

function Header() {
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
                                                                                                    padding: "16px 0", // 좌우 padding은 바깥 div에
                                                                                                              
                                                                                                                      }}
                                                                                                                            >
                                                                                                                                    <img src={velogLogo} alt="velog logo" style={{ height: "24px" }} />
                                                                                                                                            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                                                                                                                                                      <img src={bellIcon} alt="bell" style={{ width: "24px", height: "24px" }} />
                                                                                                                                                                <img src={searchIcon} alt="search" style={{ width: "24px", height: "24px" }} />
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

                                                                                                                                                                                                                                                                                                                                                        export default Header;
                                                                                                                                                                                                                                                                                                                                                        