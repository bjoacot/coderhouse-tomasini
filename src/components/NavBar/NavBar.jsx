import { CartWidget } from "../CartWidget/CartWidget";
import { Title } from "../Title/Title";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <ul>
      <li className="title">
        <Title text="Ecommerce" />
      </li>
      <li>
        <a href="#" className="nohover">
          <CartWidget/>
          <span class="badge">3</span>  
        </a>
      </li>
      <li>
        <a href="#">Mujer</a>
      </li>
      <li>
        <a href="#">Hombre</a>
      </li>
      <li>
        <a href="#">Niños</a>
      </li>
      <li>
        <a href="#">Marcas</a>
      </li>
      <li>
        <a href="#">Ofertas</a>
      </li>
    </ul>
  );
};
