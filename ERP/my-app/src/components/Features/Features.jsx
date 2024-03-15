import FeatureCard from "../feature-card";

function Features() {
  return (
    <div className="home-features" id="features">
      <div className="featuresContainer">
        <div className="home-features1">
          <div className="home-container02">
            <span className="overline">
              <span>features</span>
              <br></br>
            </span>
            <h2 className="home-features-heading heading2">
              Explore Our Features
            </h2>
            <span className="home-features-sub-heading bodyLarge">
              <span>
                <span>
                  <span>
                    Discover the powerful tools available to streamline your
                    business operations
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
          </div>
          <div className="home-container03">
            <FeatureCard
              heading="Dashboard Summary"
              subHeading="View key metrics and features at a glance"
            ></FeatureCard>
            <FeatureCard
              heading="Products Management"
              subHeading="Effortlessly manage your products with add, edit, and delete functionalities"
            ></FeatureCard>
            <FeatureCard
              heading="Product Details"
              subHeading="Access detailed information such as name, category, price, and stock quantity"
            ></FeatureCard>
            <FeatureCard
              heading="Orders Management"
              subHeading="Track and manage orders with ease, including order ID, customer name, date, and status"
            ></FeatureCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
