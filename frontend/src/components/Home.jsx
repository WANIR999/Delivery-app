import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="auth">
     <div class="container row  tblw bg-info  ms-5">
     <div className="col">

     <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <Link to=""  className="btn btn-secondary text-white hover" >test</Link>
    </div>

     </div>
     </div>
    </div>
  );
};

export default Home;