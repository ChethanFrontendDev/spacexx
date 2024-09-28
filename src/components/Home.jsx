import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";

import img1 from "../images/Vandy_desktop1_686164ccc7_1.jpg";
import img2 from "../images/Starlink_G9_8_San_Ynez_0755_Desktop_fa8c41cb9e_img2.jpg";
import img3 from "../images/Crew_9_vertical_092424_DSC_2957_desktop_22b53fd70c_3.jpg";
import video from "../images/Polaris_Splashdown_Wave2_1080_P_03fdcbc6ae_4.mp4";
import img5 from "../images/make_life_multiplanetary_desktop_3fa7cff73c_5.jpg";

function Home() {
  const imageUrl = [img1, img2, img3, video, img5];

  const navData = [
    { name: "falcon 9", path: "/falcon-9" },
    { name: "falcon heavy", path: "/falcon-heavy" },
    { name: "dragon", path: "/dragon" },
    { name: "starship", path: "/starship" },
    { name: "human spaceflight", path: "/human-spaceflight" },
    { name: "rideshare", path: "/rideshare" },
    { name: "starshield", path: "/starshield" },
    { name: "starlink", path: "/starlink" },
  ];

  const cardData = [
    {
      name: "Upcoming Launch",
      description: "Crew-9 mission",
      content: "watch",
    },
    {
      name: "Upcoming Launch",
      description: "oneweb launch 20 mission",
      content: "watch",
    },
    {
      name: "recent mission",
      description: "startlink mission",
      content: "rewatch",
    },
    {
      name: "recent mission",
      description: "polaris dawn",
      content: "rewatch",
    },
    {
      name: "",
      description: "advancing human spaceflight",
      content: "learn more",
    },
    {
      name: "",
      description: "to make life multiplanetary",
      content: "learn more",
    },
  ];
  return (
    <div>
      <Navbar navData={navData} />

      <div className="relative">
        {imageUrl.map((elem, index) => (
          <div key={index} className="relative">
            {elem.endsWith(".mp4") ? (
              <div className="video-wrapper">
                <video
                  className="lg:w-full lg:h-full md:h-screen h-screen sm:h-screen object-cover"
                  muted
                  autoPlay
                  loop
                  playsInline
                >
                  <source src={elem} type="video/mp4" />
                </video>
              </div>
            ) : (
              <div
                className="background w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${elem})` }}
              ></div>
            )}

            {cardData[index] && (
              <div className="lg:w-[45%] w-[70%] absolute inset-0 flex items-center justify-center">
                <Card
                  name={cardData[index].name}
                  description={cardData[index].description}
                  content={cardData[index].content}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
