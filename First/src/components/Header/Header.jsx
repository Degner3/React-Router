import style from "./Header.module.scss"
import { Nav } from "../Nav/Nav";



export const Header = () => {
 
    return (
      <header className={style.header}>
        <div>
          <h1>Velkommen til forsiden</h1>
          <Nav />
        </div>
      </header>
    );
  };
  