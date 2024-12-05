import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/FelJoy.png";
import project2 from "../assets/images/ad.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.png";
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
      name: "Advertisement app",
      // github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
      // live_link: "https://myjobsearch.netlify.app",
    },
    {
      img: project3,
      name: "eBook app",
      // github_link: "https://github.com/Sridhar-C-25/highking",
      // live_link: "https://highking01.netlify.app",
    }
    // {
    //   img: project4,
    //   name: "React Nav",
    //   // github_link:
    //   //   "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
    //   // live_link: "https://reacttailwindnavbar.netlify.app",
    // },
    // {
    //   img: project5,
    //   name: "Vue Country",
    //   // github_link: "https://github.com/Sridhar-C-25",
    //   // live_link: "https://vuecountry05.netlify.app",
    // },
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
              slidesPerView={1.2} // Corrected here
               spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      API Documentaion
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
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
