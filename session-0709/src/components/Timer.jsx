import React, { useState, useEffect } from "react";

function Timer() {
  const [timeElapsed, setTimeElapsed] = useState(0); // 경과 시간 (초)
    const [timeLeft, setTimeLeft] = useState(10); // 남은 시간 (초)
      const [isRunning, setIsRunning] = useState(false);

        useEffect(() => {
            let timer;
                if (isRunning && timeElapsed < 10) {
                      timer = setInterval(() => {
                              setTimeElapsed((prev) => prev + 1);
                                      setTimeLeft((prev) => prev - 1);
                                            }, 1000);
                                                } else if (timeElapsed === 10) {
                                                      setIsRunning(false);
                                                          }
                                                              return () => clearInterval(timer);
                                                                }, [isRunning, timeElapsed]);

                                                                  const startTimer = () => {
                                                                      if (!isRunning) {
                                                                            setTimeElapsed(0);
                                                                                  setTimeLeft(10);
                                                                                        setIsRunning(true);
                                                                                            }
                                                                                              };

                                                                                                return (
                                                                                                    <div style={{ textAlign: "center", fontWeight: "bold", marginTop: "20px" }}>
                                                                                                          {!isRunning && (
                                                                                                                  <button
                                                                                                                            onClick={startTimer}
                                                                                                                                      style={{
                                                                                                                                                  padding: "10px 20px",
                                                                                                                                                              fontWeight: "bold",
                                                                                                                                                                          cursor: "pointer",
                                                                                                                                                                                      fontSize: "16px",
                                                                                                                                                                                                }}
                                                                                                                                                                                                        >
                                                                                                                                                                                                                  타이머 시작
                                                                                                                                                                                                                          </button>
                                                                                                                                                                                                                                )}

                                                                                                                                                                                                                                      {isRunning && (
                                                                                                                                                                                                                                              <>
                                                                                                                                                                                                                                                        <div style={{ fontSize: "24px", marginBottom: "10px" }}>
                                                                                                                                                                                                                                                                    Time: {timeElapsed} seconds
                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                        <div style={{ fontSize: "18px" }}>남은 시간: {timeLeft}</div>
                                                                                                                                                                                                                                                                                                </>
                                                                                                                                                                                                                                                                                                      )}
                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                        export default Timer;
