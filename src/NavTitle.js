import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const Nav = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="container">
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          {/* <div className="col-4 pt-1">
              <a className="link-secondary" href="#">
                Subscribe
              </a>
            </div> */}
          <div className="col-4 text-center">
            <Link to="/" className="blog-header-logo logo-text">
              오늘의 민족
            </Link>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="link-secondary" href="#" aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="mx-3"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5" />
                <path d="M21 21l-5.2-5.2" />
              </svg>
            </a>
            <a className="btn btn-sm btn-outline-success btn-text " href="#">
              Sign up
            </a>
          </div>
        </div>
      </header>

      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-around">
          <Link to="/" className="p-2 link-secondary nav-title">
            추천
          </Link>
          <Link to="/bun" className="p-2 link-secondary nav-title">
            분류
          </Link>
          <a className="p-2 link-secondary nav-title" href="#">
            맛집
          </a>
          <a className="p-2 link-secondary nav-title" href="#">
            회원 정보
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
