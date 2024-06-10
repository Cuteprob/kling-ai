import React from "react";

type Props = {};

export default function PlayGround({}: Props) {
  return (
    <div className="h-screen container">
      <h2 className="text-2xl font-bold font-sans text-center">
        Try Video Generation Of AI VIdeo Generation
      </h2>
      {/* <iframe
        // src="https://multimodalart-stable-video-diffusion.hf.space"
        src="https://huggingface.co/spaces/multimodalart/stable-video-diffusion"
        width="850"
        className="h-screen"
      ></iframe> */}
      <iframe
        src="https://multimodalart-stable-video-diffusion.hf.space"
        width="850"
        height="450"
      ></iframe>
    </div>
  );
}
