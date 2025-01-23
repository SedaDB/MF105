import React, { memo } from "react";
import "@splidejs/react-splide/css";

interface SliderItemProps {
  title: string;
  description: string;
}

const SliderItem: React.FC<SliderItemProps> = memo(({ title, description }) => {
  return (
    <div className="flex items-center px-6 ">
      <div className="w-full flex  flex-col items-center justify-center ">
        <div className="text-5xl font-bold">{title}</div>
        <div className="border rounded-full cursor-pointer text-2xl w-[180px] h-14 flex items-center justify-center bg-gray-200 mt-10">
          {description}
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <img src="https://picsum.photos/200/300" className="w-[400px]" alt="" />
      </div>
    </div>
  );
});

export default SliderItem;