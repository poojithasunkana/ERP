import "./index.css";

function Hero() {
  const scrollToFeatures = () => {
    const section = document.getElementById("features");
    section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFAQs = () => {
    const section = document.getElementById("faqs");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-hero">
      <div className="heroContainer home-hero1">
        <div className="home-container01">
          <h1 className="home-hero-heading heading1">
            Welcome to Your Dashboard
          </h1>
          <span className="home-hero-sub-heading bodyLarge">
            <span>
              <span>
                <span>Manage Your Products and Orders with Ease</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <div className="home-btn-group">
            <button onClick={scrollToFeatures} className="buttonFilled">
              Get Started
            </button>
            <button onClick={scrollToFAQs} className="buttonFilled">
              {" "}
              FAQs ?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
