import React from "react";
import riseIcon from "../assets/images/rise.png";
import clockIcon from "../assets/images/clock.png";
import wifiIcon from "../assets/images/wifi-signal.png";
import menuIcon from "../assets/images/menu.png";
import downArrowIcon from "../assets/images/down-arrow.png";

function Navigation() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 0", // padding 좌우는 바깥 div에 있음
          flexWrap: "nowrap",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", gap: "24px", whiteSpace: "nowrap" }}>
          {/* 트렌딩 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              borderBottom: "2px solid #000",
              paddingBottom: "4px",
            }}
          >
            <img
              src={riseIcon}
              alt="Trending"
              style={{ width: "18px", height: "18px" }}
            />
            <span style={{ fontWeight: "bold", color: "#000" }}>트렌딩</span>
          </div>

          {/* 최신 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <img
              src={clockIcon}
              alt="Latest"
              style={{
                width: "18px",
                height: "18px",
                filter: "grayscale(100%) brightness(0) opacity(0.5)",
              }}
            />
            <span style={{ color: "#888" }}>최신</span>
          </div>

          {/* 피드 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <img
              src={wifiIcon}
              alt="Feed"
              style={{
                width: "18px",
                height: "18px",
                filter: "grayscale(100%) brightness(0) opacity(0.5)",
              }}
            />
            <span style={{ color: "#888" }}>피드</span>
          </div>
        </div>

        {/* 오른쪽 버튼 + 메뉴 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            whiteSpace: "nowrap",
          }}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "6px 12px",
              border: "none",
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "4px",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              whiteSpace: "nowrap",
              minWidth: "80px",
            }}
          >
            이번 주
            <img
              src={downArrowIcon}
              alt="Down arrow"
              style={{ width: "12px", height: "12px" }}
            />
          </button>
          <img
            src={menuIcon}
            alt="Menu"
            style={{ width: "24px", height: "24px" }}
          />
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
