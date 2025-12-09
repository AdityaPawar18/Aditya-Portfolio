import React from "react";
import Loadable from "react-loadable";
import Loader from "../components/Loader/Loader";


const loader = () => <Loader/>;

const ProjectsLazy = Loadable({
    loader: () => import("../containers/Projects/Projects"), 
    loading: loader,
    timeout:10000,
    delay:0.3,
    error:"Something went wrong!"
  });
  
  const Index = () => {
    return (
      <>
        <ProjectsLazy />
      </>
    );
  };
  export default Index;
