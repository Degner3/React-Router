import { useEffect } from "react";
import { Content } from "../components/Content/Content";



export const HomePage = () => {
    useEffect(() => {
      console.log("Home Page Component has Mounted");
      return () => {
        console.log("Home Page Component has Un-Mounted");
      };
    }, []);
  
    return (
      <Content title="Home page. Welcome">
        <h4>Here we could have a welcome to the page section</h4>
        <p>Welcom welcome</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iure
          eaque quos commodi praesentium rerum et repudiandae animi. Debitis
          maxime eum, perferendis explicabo temporibus accusantium enim ipsam
          possimus veniam est.
        </p>
      </Content>
    );
  };
  