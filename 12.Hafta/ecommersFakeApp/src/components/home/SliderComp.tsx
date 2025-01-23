import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SliderItem from "./SliderItem";

const SliderComp = () => {
  return (
    <div>
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <SliderItem
            title={" Comfort and style together."}
            description=" Check Out"
          />
        </SplideSlide>

        <SplideSlide>
          <SliderItem
            title={" Comfort and style together."}
            description=" Check Out"
          />
        </SplideSlide>

        <SplideSlide>
          <SliderItem
            title={" Comfort and style together."}
            description=" Check Out"
          />
        </SplideSlide>

        <SplideSlide>
          <div className="flex items-center px-6 ">
            <div className="w-full flex  flex-col items-center justify-center ">
              <div className="text-5xl font-bold">Add color to daily life.</div>
              <div className="border rounded-full cursor-pointer text-2xl w-[180px] h-14 flex items-center justify-center bg-gray-200 mt-10">
                Check Out
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <img src="/src/assets/img/s3.jpg" className="w-[400px]" alt="" />
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="flex items-center px-6 ">
            <div className="w-full flex  flex-col items-center justify-center ">
              <div className="text-5xl font-bold">
                An essential for your wardrobe.
              </div>
              <div className="border rounded-full cursor-pointer text-2xl w-[180px] h-14 flex items-center justify-center bg-gray-200 mt-10">
                Check Out
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <img src="/src/assets/img/s4.jpg" className="w-[400px]" alt="" />
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="flex items-center px-6 ">
            <div className="w-full flex  flex-col items-center justify-center ">
              <div className="text-5xl font-bold">Comfort and support.</div>
              <div className="border rounded-full cursor-pointer text-2xl w-[180px] h-14 flex items-center justify-center bg-gray-200 mt-10">
                Check Out
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <img src="/src/assets/img/s1.jpg" className="w-[400px]" alt="" />
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default SliderComp;
