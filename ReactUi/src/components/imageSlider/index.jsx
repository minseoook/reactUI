import { useEffect, useState } from "react";
import "./index.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, seterror] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchImage(url) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      seterror(e.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (url !== "") {
      fetchImage(url);
    }
  }, [url]);

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  if (loading) {
    <div>로딩중입니다</div>;
  }
  if (error) {
    <div>에러가 발생함</div>;
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className="arrow arrow-left"
      />
      {images.map((image, index) => (
        <img
          key={image.id}
          src={image.download_url}
          className={
            currentSlide === index
              ? "current-image"
              : "current-image hide-current-image"
          }
        />
      ))}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images.map((_, index) => (
          <button
            onClick={() => setCurrentSlide(index)}
            key={index}
            className={
              currentSlide === index
                ? "current-indicator"
                : "current-indicator inactive-indicator"
            }
          ></button>
        ))}
      </span>
    </div>
  );
};

export default ImageSlider;
