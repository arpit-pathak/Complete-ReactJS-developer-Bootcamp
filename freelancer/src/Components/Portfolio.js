import React from "react";
import Cardimg1 from "../assets/img/portfolio/cabin.png";
import Cardimg2 from "../assets/img/portfolio/cake.png";
import Cardimg3 from "../assets/img/portfolio/circus.png";
import Cardimg4 from "../assets/img/portfolio/game.png";
import Cardimg5 from "../assets/img/portfolio/safe.png";
import Cardimg6 from "../assets/img/portfolio/submarine.png";
import PortfolioItem from "./PortfolioItem";
const portfolio = () => {
  return (
    <div>
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          {/* <!-- Portfolio Section Heading--> */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>
          {/* <!-- Icon Divider--> */}
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          {/* <!-- Portfolio Grid Items--> */}
          <div className="row justify-content-center">
            {/* Portfolio Item -1 */}
            <PortfolioItem Cardimg={Cardimg1} alt={"cabin image"} />
            {/* Portfolio Item -2 */}
            <PortfolioItem Cardimg={Cardimg2} alt={"cake image"} />
            {/* Portfolio Item -3 */}
            <PortfolioItem Cardimg={Cardimg3} alt={"circus image"} />
            {/* Portfolio Item -4 */}
            <PortfolioItem Cardimg={Cardimg4} alt={"game image"} />
            {/* Portfolio Item -5 */}
            <PortfolioItem Cardimg={Cardimg5} alt={"safe image"} />
            {/* Portfolio Item -6 */}
            <PortfolioItem Cardimg={Cardimg6} alt={"submarine image"} />
          </div>
        </div>
      </section>

      {/* <!-- Portfolio Modal 1--> */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal1"
        tabIndex="-1"
        aria-labelledby="portfolioModal1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Log Cabin
                    </h2>
                    {/* <!-- Icon Divider--> */}
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img
                      className="img-fluid rounded mb-5"
                      src="assets/img/portfolio/cabin.png"
                      alt="..."
                    />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button className="btn btn-primary" data-bs-dismiss="modal">
                      <i className="fas fa-xmark fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
