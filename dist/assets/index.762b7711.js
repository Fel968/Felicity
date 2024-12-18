import{j as n,a as e,S as d,P as m,A as p,b as h,r as c,R as x,B as g}from"./vendor.f6dcbd70.js";const u=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(l){if(l.ep)return;l.ep=!0;const a=r(l);fetch(l.href,a)}};u();var f="/assets/laptop.930736e6.png";const y=()=>n("section",{id:"home",className:"min-h-screen flex py-10 md:flex-row flex-col items-center",children:[e("div",{className:"flex-1 flex items-center justify-center h-full",children:e("img",{src:f,alt:"Laptop",className:"pl-10"})}),e("div",{className:"flex-1",children:n("div",{className:"md:text-left text-center",children:[n("h1",{className:"md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold",children:[e("span",{className:"text-cyan-600 md:text-6xl text-5xl",children:"Hi,"})," I'm"," ",e("span",{children:"Felicity Semetey"})]}),e("h4",{className:"md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600",children:"A Backend Developer"}),e("button",{className:"btn-primary mt-8",onClick:()=>{document.getElementById("contact").scrollIntoView({behavior:"smooth"})},children:"Contact Me"}),e("div",{className:"mt-8 text-3xl flex items-center md:justify-start justify-center gap-5",children:[{icon:"logo-instagram",link:"https://www.instagram.com/your-profile"},{icon:"logo-facebook",link:"https://www.facebook.com/your-profile"},{icon:"logo-linkedin",link:"https://www.linkedin.com/in/your-profile"},{icon:"logo-twitter",link:"https://twitter.com/your-profile"}].map(({icon:t,link:r})=>e("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 hover:text-white cursor-pointer",children:e("ion-icon",{name:t})},t))})]})})]});var b="/assets/me.f4021ee5.png";const v=()=>e("section",{id:"about",className:"py-10 text-white",children:n("div",{className:"text-center mt-8",children:[n("h3",{className:"text-4xl font-semibold",children:["About ",e("span",{className:"text-cyan-600",children:"Me"})]}),n("div",{className:"flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto",children:[e("div",{className:"p-2",children:n("div",{className:"text-gray-300 my-3",children:[e("p",{className:"text-justify leading-7 w-11/12 mx-auto",children:"I'm Felicity Semetey, a junior backend developer with a degree in Computer Science from the University of Mines and Technology(UMaT), Tarkwa. I am passionate about exploring new technologies and improving my proficiency in software engineering, especially on the backend (server-side). While still in the early stages of my career, I am committed to continuous learning and growth. I\u2019m excited about the opportunity to collaborate with others, contribute to impactful projects, and further refine my abilities as a backend developer."}),n("div",{className:"mt-10",children:[e("div",{className:"flex justify-start gap-7 ml-6",children:[{text:"Years experience",count:"01"},{text:"Completed Projects",count:"5"}].map(t=>n("div",{children:[n("h3",{className:"md:text-4xl text-2xl font-semibold text-white",children:[t.count,e("span",{className:"text-cyan-600",children:"+"})," "]}),e("span",{className:"md:text-base text-xs",children:t.text})]},t.text))}),e("br",{}),e("a",{href:"./src/assets/Felicity Semetey-RESUME.pdf",download:!0,children:e("button",{className:"btn-primary ml-30",children:"Download CV"})})]})]})}),e("div",{className:"flex-1 md:mt-0 mt-6 flex justify-center items-center",children:e("div",{className:"lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ",children:e("img",{src:b,alt:"",className:"w-full object-cover bg-gray-500 rounded-xl"})})})]})]})}),w=()=>{const i=[{logo:"logo-nodejs",level:"Mongo DB",count:86},{logo:"logo-nodejs",level:"CSS",count:90},{logo:"logo-nodejs",level:"Javascript",count:40},{logo:"logo-nodejs",level:"Node Js",count:80}];return e("section",{id:"skills",className:"py-10 bg-gray-800 relative",children:n("div",{className:"mt-8 text-gray-100 text-center",children:[n("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Skills"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My knowledge"}),e("div",{className:"flex items-center justify-center mt-12 gap-10 flex-wrap",children:i==null?void 0:i.map((t,r)=>n("div",{className:"border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl",children:[e("div",{style:{background:`conic-gradient(rgb(8,145,170) ${t.count}%,#ddd ${t.count}%)`},className:"w-32 h-32 flex items-center justify-center rounded-full",children:e("div",{className:"text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600",children:e("ion-icon",{name:t.logo})})}),e("p",{className:"text-xl mt-3",children:t.level})]},r))})]})})};var N="/assets/project-1.8f3963ea.png",j="/assets/project-2.6a32d774.jpg",k="/assets/project-3.cd7db3ec.jpg",S="/assets/project-4.b976e709.jpg",M="/assets/project-5.808bc575.png";const I=()=>n("section",{id:"projects",className:"py-10 text-white",children:[n("div",{className:"text-center",children:[e("h3",{className:"text-4xl font-semibold",children:"Projects"}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"Featured Projects"})]}),e("br",{}),e("div",{className:"flex flex-col max-w-6xl gap-6 px-5 mx-auto items-center",children:e("div",{className:"w-full",children:e(d,{slidesPerView:1.2,spaceBetween:20,breakpoints:{768:{slidesPerView:3}},loop:!0,autoplay:{delay:3e3},pagination:{clickable:!0},modules:[m,p],children:[{img:N,name:"Movie App"},{img:j,name:"Job search Web App"},{img:k,name:"Highking"},{img:S,name:"React Nav"},{img:M,name:"Vue Country"}].map((t,r)=>e(h,{children:n("div",{className:"h-fit w-full p-4 bg-slate-700 rounded-xl",children:[e("img",{src:t.img,alt:"",className:"rounded-lg"}),e("h3",{className:"text-xl my-4",children:t.name}),n("div",{className:"flex gap-3",children:[e("a",{href:t.github_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Github"}),e("a",{href:t.live_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Live Demo"})]})]})},r))})})})]}),A=[{role:"Web Developer (Training)",organization:"MEST",period:"September 2024 \u2013 November 2024",details:["Acquired hands-on experience with modern web development technologies, including HTML, CSS, JavaScript, React, and Node.js.","Designed and implemented projects demonstrating core concepts in frontend development, backend development, and RESTful APIs.","Collaborated with team members to build responsive and functional web applications.","Strengthened skills in creating responsive web designs and implementing user-focused features.","Completed a capstone project showcasing understanding of the full stack development process."]},{role:"Systems Administrator (Internship)",organization:"Molaprise Technology Consult",period:"November 2023 \u2013 August 2024",details:["Implemented industry-standard security policies to enhance compliance and risk management.","Streamlined device and user management using Microsoft Intune and Entra ID, improving efficiency.","Automated workflows with Microsoft Power Automate, reducing manual tasks and boosting productivity.","Monitored system performance and ensured compliance using Microsoft Purview and Defender, fostering a secure IT environment."]},{role:"Training",organization:"Kumasi Hive",period:"June 2022 \u2013 July 2022",details:["Gained hands-on training on sensor and cloud integration with Automated Systems which aided me in designing an IoT-based Irrigation System that uses Weather Data from an API for Irrigation Scheduling."]}],C=()=>n("section",{id:"experience",className:"py-10 px-5 bg-black text-gray-400",children:[e("h3",{className:"text-4xl font-semibold text-center text-white mb-8",children:"Experience"}),e("div",{className:"space-y-6 max-w-4xl mx-auto",children:A.map((i,t)=>n("div",{className:"bg-gray-800 border border-cyan-600 p-6 rounded-lg",children:[e("h4",{className:"text-cyan-600 text-xl font-bold",children:i.role}),e("p",{className:"text-gray-400 italic",children:i.organization}),e("p",{className:"text-gray-400 mb-4",children:i.period}),e("ul",{className:"list-disc list-inside space-y-2",children:i.details.map((r,s)=>e("li",{children:r},s))})]},t))})]}),E=()=>e("section",{id:"contact",className:"py-10 px-3 text-white",children:n("div",{className:"text-center mt-8",children:[n("h3",{className:"text-4xl font-semibold",children:["Contact ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"Get in touch"}),n("div",{className:"mt-16 flex md:flex-row flex-col\r gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto",children:[n("form",{className:"flex flex-col flex-1 gap-5",children:[e("input",{type:"text",placeholder:"Your Name"}),e("input",{type:"Email",placeholder:"Your Email Address"}),e("textarea",{placeholder:"Your Message",rows:10}),e("button",{className:"btn-primary w-fit",children:"Send Message"})]}),e("div",{className:"flex flex-col  gap-7 ",children:[{logo:"mail",text:"felicitysemetey628@gmail.com"},{logo:"logo-whatsapp",text:"+233 205 596 619"},{logo:"call",text:"+233 558 687 626"}].map((t,r)=>n("div",{className:"flex flex-row  \r text-left gap-4 flex-wrap items-center",children:[e("div",{className:"min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full",children:e("ion-icon",{name:t.logo})}),e("p",{className:"md:text-base text-sm  break-words",children:t.text})]},r))})]})]})}),P=()=>e("div",{className:"bg-gray-800 text-sm p-4 text-center text-white",children:"By Felicity Semetey @ 2024"}),T=()=>{const[i,t]=c.exports.useState(!1),[r,s]=c.exports.useState(!1),l=[{name:"Home",link:"#home"},{name:"About",link:"#about"},{name:"Skills",link:"#skills"},{name:"Projects",link:"#projects"},{name:"Contact",link:"#contact"}];return c.exports.useEffect(()=>{const a=()=>{t(window.scrollY>0)};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[]),e("nav",{className:`fixed w-full left-0 top-0 z-[999] transition-all ease ${i?"bg-white text-gray-900 shadow-md":"bg-transparent text-white"}`,children:n("div",{className:"flex items-center justify-around px-7 py-4",children:[e("div",{children:n("h4",{className:"text-4xl uppercase font-bold",children:["S",e("span",{className:"text-cyan-600",children:"MT"}),"Y"]})}),e("div",{className:"hidden md:block",children:e("ul",{className:"flex items-center gap-6 text-lg",children:l==null?void 0:l.map((a,o)=>e("li",{className:"px-4 py-2 rounded-[30px] transition-all ease hover:bg-blue-500 hover:text-white",children:e("a",{href:a==null?void 0:a.link,children:a==null?void 0:a.name})},o))})}),e("div",{onClick:()=>s(!r),className:`z-[999] text-3xl md:hidden cursor-pointer ${i?"text-gray-900":"text-white"}`,children:e("ion-icon",{name:"menu"})}),e("div",{className:`md:hidden absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 transition-all duration-300 ${r?"right-0":"right-[-100%]"}`,children:e("ul",{className:"flex flex-col justify-center h-full gap-10 py-2 text-lg",children:l==null?void 0:l.map((a,o)=>e("li",{className:"px-4 py-2 rounded-[30px] transition-all ease hover:bg-blue-500 hover:text-white",onClick:()=>s(!1),children:e("a",{href:a==null?void 0:a.link,children:a==null?void 0:a.name})},o))})})]})})},D=()=>n("div",{children:[e(T,{}),n("div",{style:{marginTop:"4rem"},children:[e(y,{}),e(v,{}),e(w,{}),e(C,{}),e(I,{}),e(E,{}),e(P,{})]})]});x.render(e(g,{children:e(D,{})}),document.getElementById("root"));