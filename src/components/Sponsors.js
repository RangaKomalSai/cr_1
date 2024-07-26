import React from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import "./Sponsors.css";
import boat from "../assets/boat.png";
import coin from "../assets/coin.png";
import SectionTitle from "./SectionTitle";
import noticebard from '../assets/noticebard.jpg';
import zex from '../assets/ZEX.png';
import know from '../assets/know.jpg';
import algasem from '../assets/algasem.svg';
import badda from '../assets/badda.png';
import tgh from '../assets/tgh.png';
import youth from '../assets/youth.png';
import her from '../assets/her-1.png';

const Sponsors = () => {
  return (
    <section className="bg-[#230c3c] pt-16" id="sponsors">
      <div className="flex flex-col justify-center items-center max-w-[85%] mx-auto pt-16 pb-14">
        <div className="flex justify-center items-center gap-4 pb-4">
          <span>
            <img src={coin} alt="Coin" className="coin" draggable="false" loading="lazy"/>
          </span>
          
          <SectionTitle title="Sponsors"/>
          <span>
            <img src={coin} alt="Coin" className="coin" draggable="false" loading="lazy"/>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="profile-card">
            <div className="img-container">
              <img
                loading="lazy"
                draggable="false"
                src={zex}
                alt=""
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
          </div>
          <div className="profile-card">
            <div className="img-container">
              <img
                loading="lazy"
                draggable="false"
                src={her}
                alt=""
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
          </div>
          <div className="profile-card">
            <div className="img-container">
              <img
                loading="lazy"
                draggable="false"
                src={algasem}
                alt=""
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
          </div>
          <div className="profile-card">
            <div className="img-container">
              <img
                loading="lazy"
                draggable="false"
                src={badda}
                alt=""
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
          </div>
          <div className="profile-card">
            <div className="img-container">
              <img
                loading="lazy"
                draggable="false"
                src={tgh}
                alt=""
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
          </div>
          <div className="profile-card">
            <div className="img-container">
              <img
                loading="lazy"
                draggable="false"
                src={youth}
                alt=""
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
          </div>
          <div className="profile-card">
            <div className="img-container">
              <img
                loading="lazy"
                draggable="false"
                src={know}
                alt=""
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
          </div>
          <div className="profile-card">
            <div className="img-container">
              <img
                loading="lazy"
                draggable="false"
                src={noticebard}
                alt=""
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
