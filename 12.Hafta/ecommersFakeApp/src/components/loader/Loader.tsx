import Lottie from "lottie-react";
import LoaderAnimation from "../../assets/animations/loader.json"
import * as React from 'react';

const Loader = () => {
  return (
    <div>
      <Lottie animationData={LoaderAnimation} loop={true} />
    </div>
  );
};

export default Loader;
