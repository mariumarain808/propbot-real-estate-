import heroImg from "../assets/homebuy.avif";

export default function Hero() {
  return (
    <section className="hero position-relative text-center">
      <div className="hero-img-container position-relative">
        <img
          src={heroImg}
          alt="Dream House"
          className="img-fluid w-100"
          style={{ maxHeight: "450px", maxWidth:"90%",margin:"5px auto 10px auto", objectFit: "cover" }}
        />
</div>
    
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
        
        ></div>


        <div className="hero-overlay position-absolute top-50 start-50 translate-middle text-white px-3">
          <h1 className="fw-bold display-6 display-md-4">
            Find Your Dream House in One Click
          </h1>
          <p className="lead">
            Discover, buy or rent verified properties with ease
          </p>
          </div>
          <div
        className="filters bg-white shadow p-3 rounded position-absolute start-50 translate-middle-x"
        style={{ bottom: "-40px", width: "90%", maxWidth: "1100px" }}
      >
        <div className="row g-2">
        
          <div className="col-12 col-md-3">
            <select className="form-select">
              <option>Rent</option>
              <option>For Sale</option>
              <option>For Lease</option>
            </select>
          </div>

  
          <div className="col-12 col-md-3">
            <select className="form-select">
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
              <option>Villa</option>
              <option>Townhouse</option>
              <option>Studio</option>
            </select>
          </div>

      
          <div className="col-12 col-md-3">
            <select className="form-select">
              <option>Indonesia</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>Germany</option>
            </select>
          </div>

    
          <div className="col-12 col-md-3 d-grid">
            <button className="btn btn-success">Find Property</button>
          </div>
        </div>
      </div>

          </section>

 );
}
