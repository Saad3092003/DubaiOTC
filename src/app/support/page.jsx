import PartnersSlider from "../../components/PartnersSlider";
import { Header } from "../../components/Header";

const Support = () => {
  return (
    <>
      <div className="container mt-3">
        <Header type="plain" />
      </div>

      <div className="container mt-5">
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
              Helpdesk - DubaiOTC
            </div>
            <div className="hero-text mt-3">Help desk</div>
          </div>
        </div>
      </div>

      {/* News artical */}
      <div className="container" style={{ marginTop: "120px" }}>
        <h1 className="Heading01 text-center">News & articles</h1>
        <div className="mt-4">
          <div className="row g-4 justify-content-center">
            <div className="col-md-5">
              <div className="news-card">
                <img
                  src="/images/artical1.png"
                  className="object-fit-cover rounded-4 w-100"
                  height={"256"}
                  alt=""
                />
                <div className="content d-flex flex-column gap-14 align-items-start">
                  <div className="Heading03" style={{ color: "#22246A" }}>
                    Cryptocurrency OTC Services in India
                  </div>
                  <div className="Paragraph">
                    Experience our professional Crypto OTC exchange services in
                    major cities in India,
                  </div>
                  <button
                    className="btn btnPrimary Paragraph rounded-pill"
                    style={{ padding: "12px 30px" }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="news-card">
                <img
                  src="/images/artical2.png"
                  className="object-fit-cover rounded-4 w-100"
                  height={"256"}
                  alt=""
                />
                <div className="content d-flex flex-column gap-14 align-items-start">
                  <div className="Heading03" style={{ color: "#22246A" }}>
                    India Bank Transfer
                  </div>
                  <div className="Paragraph">
                    For clients in India, we support IMPS/RTGS/NEFT payment
                    methods for bank transfers. Our platform also offers escrow
                    transactions
                  </div>
                  <button
                    className="btn btnPrimary Paragraph rounded-pill"
                    style={{ padding: "12px 30px" }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="news-card">
                <img
                  src="/images/artical1.png"
                  className="object-fit-cover rounded-4 w-100"
                  height={"256"}
                  alt=""
                />
                <div className="content d-flex flex-column gap-14 align-items-start">
                  <div className="Heading03" style={{ color: "#22246A" }}>
                    Cryptocurrency OTC Services in India
                  </div>
                  <div className="Paragraph">
                    Experience our professional Crypto OTC exchange services in
                    major cities in India,
                  </div>
                  <button
                    className="btn btnPrimary Paragraph rounded-pill"
                    style={{ padding: "12px 30px" }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="news-card">
                <img
                  src="/images/artical2.png"
                  className="object-fit-cover rounded-4 w-100"
                  height={"256"}
                  alt=""
                />
                <div className="content d-flex flex-column gap-14 align-items-start">
                  <div className="Heading03" style={{ color: "#22246A" }}>
                    India Bank Transfer
                  </div>
                  <div className="Paragraph">
                    For clients in India, we support IMPS/RTGS/NEFT payment
                    methods for bank transfers. Our platform also offers escrow
                    transactions
                  </div>
                  <button
                    className="btn btnPrimary Paragraph rounded-pill"
                    style={{ padding: "12px 30px" }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Entries Section */}
      <div style={{ marginTop: "120px" }} className="container">
        <div className="d-flex flex-column gap-12">
          <div className="entrieCard">
            <div className="d-flex flex-wrap gap-20 align-items-center">
              <div>
                <img
                  src="/images/E1.png"
                  style={{ width: "48px", height: "48px" }}
                  alt=""
                />
              </div>
              <div className="d-flex flex-column gap-1">
                <div
                  style={{
                    color: "#1A1A1A",
                    fontSize: "20.488px",
                    fontStyle: "normal",
                    fontWeight: "500",
                  }}
                >
                  Knowledge Base
                </div>
                <div
                  style={{
                    color: "#757B8C",
                    fontSize: "17.561px",
                    fontWeight: "400",
                  }}
                >
                  Issues related to logging in, out, or about multiple devices.
                </div>
              </div>
            </div>
            <div className="btnEntrie heading05 text-light">21 Entries</div>
          </div>
          <div className="entrieCard">
            <div className="d-flex flex-wrap gap-20 align-items-center">
              <div>
                <img
                  src="/images/E2.svg"
                  style={{ width: "48px", height: "48px" }}
                  alt=""
                />
              </div>
              <div className="d-flex flex-column gap-1">
                <div
                  style={{
                    color: "#1A1A1A",
                    fontSize: "20.488px",
                    fontStyle: "normal",
                    fontWeight: "500",
                  }}
                >
                  Registration & Login
                </div>
                <div
                  style={{
                    color: "#757B8C",
                    fontSize: "17.561px",
                    fontWeight: "400",
                  }}
                >
                  Connecting with 3rd party apps to exchange data.
                </div>
              </div>
            </div>
            <div className="btnEntrie heading05 text-light">09 Entries</div>
          </div>
          <div className="entrieCard">
            <div className="d-flex flex-wrap gap-20 align-items-center">
              <div>
                <img
                  src="/images/E3.svg"
                  style={{ width: "48px", height: "48px" }}
                  alt=""
                />
              </div>
              <div className="d-flex flex-column gap-1">
                <div
                  style={{
                    color: "#1A1A1A",
                    fontSize: "20.488px",
                    fontStyle: "normal",
                    fontWeight: "500",
                  }}
                >
                  Payment Options
                </div>
                <div
                  style={{
                    color: "#757B8C",
                    fontSize: "17.561px",
                    fontWeight: "400",
                  }}
                >
                  Issues with payments or invoicing.
                </div>
              </div>
            </div>
            <div className="btnEntrie heading05 text-light">14 Entries</div>
          </div>
          <div className="entrieCard">
            <div className="d-flex flex-wrap gap-20 align-items-center">
              <div>
                <img
                  src="/images/E4.svg"
                  style={{ width: "48px", height: "48px" }}
                  alt=""
                />
              </div>
              <div className="d-flex flex-column gap-1">
                <div
                  style={{
                    color: "#1A1A1A",
                    fontSize: "20.488px",
                    fontStyle: "normal",
                    fontWeight: "500",
                  }}
                >
                  Technical
                </div>
                <div
                  style={{
                    color: "#757B8C",
                    fontSize: "17.561px",
                    fontWeight: "400",
                  }}
                >
                  Setting up and managing collections of users.
                </div>
              </div>
            </div>
            <div className="btnEntrie heading05 text-light">17 Entries</div>
          </div>
          <div className="entrieCard">
            <div className="d-flex flex-wrap gap-20 align-items-center">
              <div>
                <img
                  src="/images/E4.svg"
                  style={{ width: "48px", height: "48px" }}
                  alt=""
                />
              </div>
              <div className="d-flex flex-column gap-1">
                <div
                  style={{
                    color: "#1A1A1A",
                    fontSize: "20.488px",
                    fontStyle: "normal",
                    fontWeight: "500",
                  }}
                >
                  Support
                </div>
                <div
                  style={{
                    color: "#757B8C",
                    fontSize: "17.561px",
                    fontWeight: "400",
                  }}
                >
                  Improving your system&apos;s speed and reliability.
                </div>
              </div>
            </div>
            <div className="btnEntrie heading05 text-light">17 Entries</div>
          </div>
        </div>
      </div>

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

export default Support;
