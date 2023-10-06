import React, { Component } from "react";
import Slider from "react-slick";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import styles from "./styles.css";

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 12,
    slidesToScroll: 12,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const style = {
    width: "5rem",
    margin: "0px 15px 15px"
  };
  const StyledSlider = styled(Slider)`
    .slick-prev:before {
      content: "◀";
      color: black;
    }
    .slick-next:before {
      content: "▶";
      color: black;
    }
  `;

  return (
    <div>
      <div>
        <h2 className="recipe_header">
          레시피
          <span style={{ color: "green" }}> 분류</span>
        </h2>
      </div>
      <StyledSlider {...settings}>
        <div>
          <img
            className="testimonial-image happy"
            src="./all.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">전체</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy "
            src="./fried-egg.jpg"
            alt="dog-profile"
          />
          <h6 className="lara recipe_title">밑반찬</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./steak.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">메인반찬</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./boiling.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">국/탕</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./stew.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">찌개</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./alarm-clock.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">초스피드</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./food-service.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">손님접대</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./rice.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">밥/죽/떡</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./sausage.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">술안주</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./pasta.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">면/만두</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./healthy-eating.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">일상</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./bread.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">빵</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy "
            src="./diet.jpg"
            alt="dog-profile"
          />
          <h6 className="lara recipe_title">다이어트</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./cupcake.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">디저트</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./salad.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">샐러드</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./steak2.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">양식</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./kimchi.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">김치/젓갈/장류</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./lunch-box.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">도시락</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./snacks.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">간식</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./pig.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">돼지고기</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./chicken-leg.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">영양식</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./cookie.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">과자</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./jam.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">양념/소스/잼</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="./tea.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">차/음료/술</h6>
        </div>
      </StyledSlider>
    </div>
  );
};

export default Sliders;
