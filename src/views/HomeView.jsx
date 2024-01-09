import React from "react";
const cars = [
  {
    name: "",
    imgUrl:
      "https://wallpapers.com/images/hd/390-adventure-ktm-bike-k4o29faqcb27l9po.jpg",
    desc: "",
  },
  {
    name: "",
    imgUrl: "https://wallpaper-house.com/data/out/4/wallpaper2you_30373.jpg",
    desc: "",
  },
  {
    name: "",
    imgUrl:
      "https://wallpapers.com/images/hd/390-adventure-ktm-bike-k4o29faqcb27l9po.jpg",
    desc: "",
  },
  {
    name: "",
    imgUrl:
      "https://wallpapers.com/images/hd/390-adventure-ktm-bike-k4o29faqcb27l9po.jpg",
    desc: "",
  },
  {
    name: "",
    imgUrl:
      "https://wallpapers.com/images/hd/390-adventure-ktm-bike-k4o29faqcb27l9po.jpg",
    desc: "",
  },
  {
    name: "",
    imgUrl:
      "https://wallpapers.com/images/hd/390-adventure-ktm-bike-k4o29faqcb27l9po.jpg",
    desc: "",
  },
  {
    name: "",
    imgUrl:
      "https://wallpapers.com/images/hd/390-adventure-ktm-bike-k4o29faqcb27l9po.jpg",
    desc: "",
  },
  {
    name: "",
    imgUrl:
      "https://wallpapers.com/images/hd/390-adventure-ktm-bike-k4o29faqcb27l9po.jpg",
    desc: "",
  },
  {
    name: "",
    imgUrl:
      "https://wallpapers.com/images/hd/390-adventure-ktm-bike-k4o29faqcb27l9po.jpg",
    desc: "",
  },
  {
    name: "",
    imgUrl:
      "https://wallpapers.com/images/hd/390-adventure-ktm-bike-k4o29faqcb27l9po.jpg",
    desc: "",
  },
];

function CarCard({ imgUrl }) {
  return (
    <div
      style={{
        boxShadow: "3px 5px 7px grey",
        width: "320px",
        margin: "16px",
        textAlign: "start",
        padding: "16px",
      }}
    >
      <div>
        {" "}
        <img src={imgUrl} alt="" width="320px" height="320px" />
        <h6
          style={{
            margin: "0px",
            
          }}
        >
          KTM 390
        </h6>
        <p
          style={{
            margin: "0px",
          }}
        >
          The KTM 390 Adventure Bike is all about pure, fearless exploration.
          From its sleek design to its exceptional performance capabilities
        </p>
      </div>
    </div>
  );
}

export default function HomeView() {
  return (
    <div>
      <div
        style={{
          background: "blue",
          padding:"16px",
        }}
      >
        This is an appbar
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        }}
      >
        {cars.map((ele, index) => {
          return <CarCard imgUrl={ele.imgUrl} />;
        })}
        {/* <CarCard /> <CarCard /> <CarCard /> <CarCard /> <CarCard /> <CarCard />{" "}
        <CarCard /> <CarCard /> <CarCard /> <CarCard /> <CarCard /> <CarCard />{" "}
        <CarCard /> <CarCard /> <CarCard /> <CarCard /> <CarCard /> <CarCard />{" "}
        <CarCard /> <CarCard /> <CarCard /> <CarCard /> <CarCard /> <CarCard />{" "}
        <CarCard /> <CarCard /> <CarCard /> */}
      </div>
    </div>
  );
}
