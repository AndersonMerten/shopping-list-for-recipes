import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="NotFound">
            <h1>A página que você está procurando não existe</h1>
            <Link to={"/"}>Experimente voltar para a página inicial</Link>
        </div>
     );
}
 
export default NotFound;