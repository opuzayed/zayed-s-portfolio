import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
function Main() {
  return (
    <div className="w-full pt-28 text-center p-2">
      <div className="max-w-[1240px] w-full h-full mx-auto  flex justify-center items-center">
        <div>
          <h1>
            Hi I am <span className="text-rose-500"> Zayed Hossain </span>
          </h1>
          <h1 className="py-2 text-gray-700">A front-End web developer</h1>
          <p className=" text-green-900-500">
          I am Zayed Hossain, a MERN-Stack Developer. I am passionate about building excellent software that improves the lives of those around me. I have Solid working knowledge of JavaScript, React.js, Node.js, MongoDB and Express.js . Now I am trying to learn TypeScript, Next.js, ReactNative.js and more technologies and tools. So far I have finished some projects using React-js, Node-js, MongoDB, Firebase and many more.
          </p>
          <div className="py-3 ">
            <div className="flex items-center justify-between text-3xl max-w-[330px] m-auto w-full sm:w-[80%]">
              <div className="rounded-full  shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <a
                  href="https://www.linkedin.com/in/zayed-hossain/"
                  target="blank"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="rounded-full  shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <a href="https://gitlab.com/opuzayed" target="blank">
                  <FaGithub />
                </a>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <a
                  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=zayedopu4933@gmail.com"
                  target="blank"
                >
                  <MdAttachEmail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
