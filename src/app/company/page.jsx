import PartnersSlider from "../../components/PartnersSlider";
import { Header } from "../../components/Header";

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
              Company - DubauOTC
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
        <div className="container">
          <div className="d-flex">
            <div>
              <img src="" alt="" />
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
                src="images/2nd_section_company.png"
                className="img-fluid"
                alt=""
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
          <div className="row g-5">
            <div className="col-md-5">
              <div
                style={{
                  marginLeft: "auto",
                  maxWidth: "445px",
                  maxHeight: "423px",
                  width: "100%",
                  height: "auto",
                  borderRadius: "17px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div className="icon-button-heart position-absolute top-0 end-0 m-3">
                  <img
                    src="images/heart-rounded.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="position-absolute bottom-0 ms-4 mb-3 start-0">
                  <button className="btn btn-light px-5 rounded-pill">
                    Try Now
                  </button>
                </div>
                <img src="images/vision.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="d-flex gap-14 flex-column">
                <div className="d-flex flex-column gap-17 company-tab active">
                  <div className="d-flex gap-18 align-items-center">
                    <div className="icon-square-button">
                      <img src="images/zap.png" className="img-fluid" alt="" />
                    </div>
                    <div className="Heading03">Our Vision</div>
                  </div>
                  <p className="Paragraph my-0">
                    We believe in innovation by merging primary with elaborate
                    ideas.
                  </p>
                </div>
                <div className="d-flex flex-column gap-17 company-tab">
                  <div className="d-flex gap-18 align-items-center">
                    <div className="icon-square-button">
                      <img src="images/zap.png" className="img-fluid" alt="" />
                    </div>
                    <div className="Heading03">Our Vision</div>
                  </div>
                  <p className="Paragraph my-0">
                    We believe in innovation by merging primary with elaborate
                    ideas.
                  </p>
                </div>
                <div className="d-flex flex-column gap-17 company-tab">
                  <div className="d-flex gap-18 align-items-center">
                    <div className="icon-square-button">
                      <img
                        src="images/shield-zap.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="Heading03">Our Mission</div>
                  </div>
                  <p className="Paragraph my-0">
                    We are crafting a digital method that subsists life across
                    all mediums.
                  </p>
                </div>
              </div>
            </div>
          </div>
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

      {/* newsletter */}
      <section
        style={{
          paddingBlock: "110px",
          paddingInline: "20px",
          background: "#8890f1",
          zoom: "0.8",
        }}
      >
        <div
          className="rounded-4"
          style={{
            background: "#3671e9",
            backgroundImage: "url(images/contactBg.png)",
            backgroundSize: "cover",
            paddingBlock: "36px",
            paddingInline: "64px",
            maxWidth: "1440px",
            flexWrap: "wrap",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="text-white">
            <div
              className="Heading01"
              style={{
                maxWidth: "898px",
              }}
            >
              Connect with Us on Telegram for Official Customer Support
            </div>
            <div
              className="text-light Paragraphlarge"
              style={{
                maxWidth: "700px",
              }}
            >
              We Understand the Significance of Addressing Each
              Individual&apos;s Specific Needs with Care and Attention.
            </div>
          </div>
          <div>
            <button
              className="btn btn-light rounded-pill"
              style={{
                display: "inline-flex",
                padding: "18.667px 42.667px",
                justifyContent: "center",
                alignItems: "center",
                gap: "24px",
              }}
            >
              <img src="images/telegram-icon.png" width={42} height={42} />
              <span
                style={{
                  color: "#0D0D2B",
                  textAlign: "center",
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "150%",
                }}
              >
                Connect now
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* footer */}
      <section
        style={{
          background: "#5761D7",
          paddingBlock: "80px",
          minHeight: "736px",
          paddingInline: "50px",
          zoom: "0.8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="d-flex gap-16 flex-column text-white h-100 align-items-center">
          <div style={{ maxWidth: "1600px" }}>
            <div className="row g-5">
              <div className="col-md-3">
                <div className="d-flex flex-column gap-33">
                  <div>
                    <img src="images/logo-white.png" width={200} />
                  </div>
                  <p className="Paragraph">
                    Lorem ipsum dolor sit amet consectetur. Tristique vulputate
                    odio condimentum at tortor aenean iaculis mattis.
                    Consectetur tellus tristique aliquam dolor at.Condimentum at
                    tortor aenean iaculis mattis. Consectetur tellus tristique
                    aliquam dolor at.
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="d-flex flex-column gap-32">
                  <div className="Heading03">Exchange Type</div>
                  <div className="d-flex text-light flex-column gap-20">
                    <div className="Paragraphmd">P2P</div>
                    <div className="Paragraphmd">BINANCE</div>
                    <div className="Paragraphmd">OKX</div>
                    <div className="Paragraphmd">BYBIT</div>
                    <div className="Paragraphmd">HTX</div>
                    <div className="Paragraphmd">KUCOIN</div>
                    <div className="Paragraphmd">BITGET</div>
                    <div className="Paragraphmd">Managers Cheque (UAE) </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-flex flex-column gap-32">
                  <div className="Heading03">Payments</div>
                  <div className="d-flex text-light flex-column gap-20">
                    <div className="fs-5">
                      Indian Bank Transfer NEFT,RTGS,IMPS
                    </div>
                    <div className="Paragraphmd">UAE Local bank transfer </div>
                    <div className="Paragraphmd">International SWIFT</div>
                    <div className="Paragraphmd">EUR SEPA</div>
                    <div className="Paragraphmd">AED CASH</div>
                    <div className="Paragraphmd">INR CASH</div>
                    <div className="Paragraphmd">USD CASH</div>
                    <div className="Paragraphmd">EUR CASH</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-flex flex-column gap-50">
                  <div className="Heading01">Get in touch with us now</div>
                </div>
                <div className="d-flex flex-wrap justify-content-center gap-17">
                  <div className="footer-social">
                    <img src="images/instagram-icon.png" height={34} alt="" />
                  </div>
                  <div className="footer-social">
                    <img src="images/linkedin-icon.png" height={34} alt="" />
                  </div>
                  <div className="footer-social">
                    <img src="images/twitter-icon.png" height={34} alt="" />
                  </div>
                  <div className="footer-social">
                    <img src="images/medium-icon.png" height={34} alt="" />
                  </div>
                  <div className="footer-social">
                    <img src="images/reddit-icon.png" height={34} alt="" />
                  </div>
                  <div className="footer-social">
                    <img src="images/pinterest-icon.png" height={34} alt="" />
                  </div>
                  <div className="footer-social">
                    <img src="images/facebook-icon.png" height={34} alt="" />
                  </div>
                  <div className="footer-social">
                    <img src="images/quora-icon.png" height={34} alt="" />
                  </div>
                  <div className="footer-social">
                    <img src="images/discord-icon.png" height={34} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex w-100 justify-content-between flex-wrap gap-3 fs-4">
            <div className="Paragraphmd">© All rights reserved</div>
            <div className="d-flex gap-32">
              <div className="Paragraphmd">Terms & Condition</div>
              <div className="Paragraphmd">Privacy Policy</div>
              <div className="Paragraphmd">AML Policy</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Company;
