import PartnersSlider from "../../components/PartnersSlider";
import { Header } from "../../components/Header";
import Mission from "./Mission";
import { FooterCust } from "../../components/FooterCust";

const Company = () => {
  return (
    <>
      <div className="container mt-3">
        <Header type="plain" />
      </div>

      <section className="container mt-5">
        {/* hero section */}
        <div
          className="conpany-section rounded-3 p-4 d-flex flex-column justify-content-center align-items-center"
          style={{ minHeight: "375px" }}
        >
          <div className="h-100 d-flex flex-column justify-content-center align-items-center">
            <div
              className="badge rounded-pill"
              style={{
                backgroundColor: "#22246A",
                fontSize: "11px",
                fontWeight: "400",
              }}
            >
              Company - DubaiOTC
            </div>
            <div className="hero-text mt-3">Company</div>
          </div>
        </div>
      </section>

      {/* timeline section */}
      <div
        className="bg-wave"
        style={{ marginTop: "80px", paddingBottom: "400px" }}
      >
        <div className="d-flex flex-column gap-14 text-center">
          <div className="heading02">NO MIDDLEMAN</div>
          <div className="Paragraph text-paragraph">
            The Goal of Developing an Appropriate Operating Framework for
            Cryptocurrency Trade
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-3 d-lg-none justify-content-center align-items-center d-flex">
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ height: "853px" }}
              >
                <div>
                  <div className="timepoint Paragraph">1</div>
                </div>
                <div>
                  <div className="timeline_xs"></div>
                </div>
                <div>
                  <div className="timepoint Paragraph">2</div>
                </div>
                <div>
                  <div className="timeline_xs"></div>
                </div>
                <div>
                  <div className="timepoint Paragraph">3</div>
                </div>
                <div>
                  <div className="timeline_xs"></div>
                </div>
                <div>
                  <div className="timepoint Paragraph">4</div>
                </div>
                <div>
                  <div className="timeline_xs"></div>
                </div>
                <div>
                  <div className="timepoint Paragraph">5</div>
                </div>
              </div>
            </div>
            <div className="col-9 col-lg-12">
              <div className="row">
                <div className="col-lg-5 text-start text-lg-end">
                  <div className="d-flex flex-column align-items-start align-items-lg-end">
                    <div style={{ marginBottom: "93px" }}>
                      <img alt="DubaiOTC" src="/images/1.png" />
                    </div>
                    <div
                      style={{ marginBottom: "70px" }}
                      className="d-flex gap-19 flex-column"
                    >
                      <div className="Paragraph">
                        Easily convert your Cryptocurrency into AED
                      </div>
                      <div className="Paragraph">
                        Risk Free & Fast Cryptocurrency Transactions
                      </div>
                    </div>
                    <div style={{ marginBottom: "73px" }}>
                      <img alt="DubaiOTC" src="/images/3.png" />
                    </div>
                    <div
                      className="d-flex gap-19 flex-column"
                      style={{ marginBottom: "33px" }}
                    >
                      <div className="Paragraph">
                        Secure and Safe Trader Data (Book keeping, Accounting,
                        Regular Auditing)
                      </div>
                      <div className="Paragraph">
                        Dedicated Customer Service 24/7 Via WhatsApp, Telegrams,
                        Emails, Phone Calls
                      </div>
                    </div>
                    <div>
                      <img alt="DubaiOTC" src="/images/5.png" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 d-none justify-content-center align-items-center d-lg-flex">
                  <div
                    className="d-flex flex-column justify-content-center align-items-center"
                    style={{ height: "853px" }}
                  >
                    <div>
                      <div className="timepoint Paragraph">1</div>
                    </div>
                    <div>
                      <div className="timeline"></div>
                    </div>
                    <div>
                      <div className="timepoint Paragraph">2</div>
                    </div>
                    <div>
                      <div className="timeline"></div>
                    </div>
                    <div>
                      <div className="timepoint Paragraph">3</div>
                    </div>
                    <div>
                      <div className="timeline"></div>
                    </div>
                    <div>
                      <div className="timepoint Paragraph">4</div>
                    </div>
                    <div>
                      <div className="timeline"></div>
                    </div>
                    <div>
                      <div className="timepoint Paragraph">5</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 text-start">
                  <div className="d-flex flex-column align-items-start">
                    <div
                      style={{ marginBottom: "50px" }}
                      className="d-flex gap-19 flex-column"
                    >
                      <div className="Paragraph">0% Transaction Fees</div>
                      <div className="Paragraph">
                        Sell/Buy your Cryptocurrency via Bank Transfers
                      </div>
                    </div>
                    <div style={{ marginBottom: "92px" }}>
                      <img alt="DubaiOTC" src="/images/2.png" />
                    </div>
                    <div
                      style={{ marginBottom: "84px" }}
                      className="d-flex gap-19 flex-column"
                    >
                      <div className="Paragraph">
                        Suitable for Both Beginners and Experienced Investors
                      </div>
                      <div className="Paragraph">
                        Secured and Convenient Way to Operate Your Crypto
                        Holdings
                      </div>
                    </div>
                    <div style={{ marginBottom: "49px" }}>
                      <img alt="DubaiOTC" src="/images/4.png" />
                    </div>
                    <div className="d-flex gap-19 flex-column">
                      <div className="Paragraph">
                        Receive Invoice via WhatsApp & e-mail
                      </div>
                      <div className="Paragraph">
                        Comply with Crypto Effective AML Standard Policy / CTF
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Safe context section */}
      <div
        style={{
          backgroundColor: "#F5F5F5",
          paddingTop: "43px",
        }}
      >
        <div className="container">
          <div className="row g-3 flex-wrap-reverse">
            <div className="col-md-6">
              <div className="d-flex flex-column gap-26">
                <div className="Heading01 text-base-primary">
                  SAFE TRADING BEGINS WITH Dubai OTC
                </div>
                <div className="Heading04">
                  Launching an over-the-counter (OTC) trading platform powering
                  crypto-to-fiat pairs exchanges based in UAE
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                alt="DubaiOTC"
                src="images/2nd_section_company.png"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="mt-4">
            <p className="Paragraph my-0" style={{ color: "#797979" }}>
              We’re DubaiOTC, one of the fastest-growing digital currency
              trading desks, headquartered in Dubai. A Company for Proprietary
              Trading in Crypto Assets by International Free Zone Authority
              (IFZA) Co-Branded with the Dubai Silicon Oasis Authority. We offer
              safe and secure over-the-counter (OTC) trading to verified users
              with the support of peer-to-peer (P2P) topmost exchanges like
              Binance, Kucoin, Huobi, and Kraken.DubaiOTC is a crypto broker
              with the ideal platform for traders looking for quick and easy
              buying or selling options for specific crypto assets. Our policies
              are framed by industry best methods, a risk-based practice and
              effective AML (Anti Money Laundering) policy / CTF (computing
              terrorism financing). Whether you are a skilled trader or a
              beginner, we strive to provide you with the right balance of
              comprehensive support and training. We offer more personalized and
              great liquidity service to high-net-worth individuals ought to
              fill large orders that might be too disruptive or unmanageable if
              placed on open markets at the deals. Our associates of the desk
              have extensive trading industry experience offering secured and
              discreet transactions and settlement.Through our customizable and
              scalable trading platform, we provide clients with custom quotes
              securely and instantly. From our 24/7 live customer support desks
              to our wide range of services, we have successfully formed an
              exceptional trading environment for every level of trader.
            </p>
          </div>
        </div>
      </div>

      {/* vision mission section */}
      <div className="bg-bottom-wave" style={{ paddingTop: "300px" }}>
        <div className="text-center">
          <div className="Heading01 text-dark ">Our Vision & Mission</div>
          <p className="Paragraph text-paragraph mt-2">
            Experience the Power of AI Image Generator
          </p>
        </div>
        <div className="mt-4 container">
          <Mission />
        </div>
      </div>

      {/* partners section */}
      <section
        className="container-fluid overflow-hidden"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <div className="text-center">
          <div className="Heading01" data-aos="fade-up">
            Our <span style={{ color: "#2982CC" }}>Partners</span>
          </div>
          <div style={{ marginTop: "70px" }}>
            <PartnersSlider />
          </div>
        </div>
      </section>

      <FooterCust home={false} />
    </>
  );
};

export default Company;
