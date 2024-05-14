import React, { useState } from "react";

const YourComponent = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
        position: "relative",
        marginRight: "100px",
      }}
    >
      {slides.map((data, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slide active" : "slide"}
          style={{
            width: "100%",
            borderRadius: "10px",
            position: "absolute",
            top: index === activeIndex ? "0" : "10px",
          }}
        >
          <FeedbackCarousel {...data} />
        </div>
      ))}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          position: "relative",
          top: "20px",
        }}
      >
        <button
          onClick={handlePrev}
          style={{
            position: "relative",
            zIndex: "10",
            cursor: "pointer",
            color: "#6B7280",
            "&:hover": { color: "#ED8936" },
          }}
        >
          <TopChevron style={{ height: "16px", width: "16px" }} />
        </button>
        <button
          onClick={handleNext}
          style={{
            position: "relative",
            zIndex: "10",
            cursor: "pointer",
            color: "#6B7280",
            "&:hover": { color: "#ED8936" },
          }}
        >
          <BottomChevron style={{ height: "16px", width: "16px" }} />
        </button>
      </div>
    </div>
  );
};

export default YourComponent;
