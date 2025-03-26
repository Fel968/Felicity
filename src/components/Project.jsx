import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/FelJoy.png";
import project2 from "../assets/images/aenics.png";
import project3 from "../assets/images/library.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "FelJoy, a mental health App",
      github_link: "https://documenter.getpostman.com/view/38771172/2sAY4ydLUf",
      live_link: "https://feljoy.netlify.app/",
    },
    {
      img: project2,
      name: "AAENICS Store",
      live_link: "https://store.aaenics.com/",
    },
    {
      img: project3,
      name: "Library MAnagement App",
      live_link: "https://thelibraryapp.netlify.app/",

    },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">Projects</h3>
      </div>
      <br />
      <div className="flex flex-col max-w-6xl gap-6 px-5 mx-auto items-center">
        <div className="w-full">
          <Swiper
            slidesPerView={1} // One slide at a time on mobile screens
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 1, // One slide at a time on smaller tablets/phones
              },
              768: {
                slidesPerView: 3, // Three slides at a time on larger screens (laptops/tablets)
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000, // 3 seconds delay between slides
              disableOnInteraction: false, // Keeps autoplay active even after user interaction
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg w-full object-cover" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {project_info.github_link && (
                      <a
                        href={project_info.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        API Documentation
                      </a>
                    )}
                    {project_info.live_link && (
                      <a
                        href={project_info.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
