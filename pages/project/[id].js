import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import mores from "../../liv/data/projectData.json";

const Project = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log("id--gggg-", id);
  const projectDetail = mores.filter((more) => more.id == id);
  return (
    <>
      <Navbar />
      <div className="max-w-[1240px] mx-auto w-full h-full">
        <h1 className="items-center text-center justify-center  py-40">
          Project <span className="text-cyan-500"> Details </span>
        </h1>

        <div className="grid sm:grid-flow-col-dense md:grid-cols-1 ">
          {projectDetail.map((projectData) => (
            <div key={projectData.id}>
              <div className="  items-center justify-center h-auto w-full shadow-xl rounded-xl group">
                <div className=" flex items-center justify-center ">
                  <img className="rounded-md " src={projectData.img1} alt="/" />
                </div>
                <div className="text-center my-4">
                  <h6 className="text-1xl   text-cyan-900 tracking-wider">
                    Project Name:{" "}
                  </h6>
                  <p>{projectData.name}</p>
                </div>

                <div className="mx-9 text-center border-cyan-700 ">
                  <h6 className=" text-1xl   text-cyan-900 tracking-wider ">
                    Tools:
                  </h6>
                  <small className="">{projectData.tools}</small>
                </div>
                <div className="mx-9  border-cyan-700 ">
                  <h6 className=" text-1xl text-center  text-cyan-900 tracking-wider ">
                    Features:
                  </h6>
                  {projectData.features.map((feature) => (
                    <small key={feature.ft}> {feature.ft}</small>
                  ))}
                </div>

                <div className="flex justify-between">
                
                  <div className="mx-9 my-3 p-1 text-black font-bold shadow-sm shadow-gray-200  hover:scale-105 ease-in duration-200 rounded-lg cursor-pointer">
                    
                    <Link href={projectData?.liveLink}>
                      <a target="_blank" rel="noopener noreferrer">
                      Live Link
                      </a>
                    </Link>
                  </div>

                  <div className="mx-9 my-3 p-1 text-black font-bold shadow-sm shadow-gray-200  hover:scale-105 ease-in duration-200 rounded-lg cursor-pointer">
                   
                    <Link href={projectData?.clientSiteLink}>
                      <a target="_blank" rel="noopener noreferrer">
                      Client Site Link
                      </a>
                    </Link>
                  </div>

               {projectData.serverSiteLink ?
               
               <div className="mx-9 my-3 p-1 text-black font-bold shadow-sm shadow-gray-200  hover:scale-105 ease-in duration-200 rounded-lg cursor-pointer">
             
               <Link href={projectData?.serverSiteLink}>
                 <a target="_blank" rel="noopener noreferrer">
                   Server Link
                 </a>
               </Link>
             </div>

             : null
               }

               
                
                </div>
                <div className="mx-9 text-center  my-3 p-1 shadow-sm shadow-gray-200  hover:scale-105 ease-in duration-200 rounded-lg bg-cyan-500 text-white font-normal cursor-pointer">
                  <Link href="/">
                    <a className=" "> Back to Home </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Project;
