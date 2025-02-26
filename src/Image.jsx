import React from "react";

const images = [
  "https://ntvb.tmsimg.com/assets/p10781465_b_h8_ay.jpg?w=960&h=540",
  "https://images.thedirect.com/media/article_full/spid-blu-ray.jpg?imgeng=/cmpr_60/w_auto",
  "https://1.vikiplatform.com/c/40913c/35f724a5fe.jpg?x=b",
];

function ExampleCarouselImage({ text }) {
  // Map text values to image indices
  const imageMap = {
    "First slide": images[0],
    "Second slide": images[1],
    "Third slide": images[2],
  };

  return <img src={imageMap[text] || images[0]} className="d-block w-100" alt={text} />;
}

export default ExampleCarouselImage;
