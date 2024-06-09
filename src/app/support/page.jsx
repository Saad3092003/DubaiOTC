import PartnersSlider from "../../components/PartnersSlider";
import { Header } from "../../components/Header";
import { FooterCust } from "../../components/FooterCust";

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
            <h1 className="hero-text mt-3">Help desk</h1>
          </div>
        </div>
      </div>

      {/* News artical */}
      <div className="container" style={{ marginTop: "120px" }}>
        <h2 className="Heading01 text-center">News & articles</h2>
        <div className="mt-4">
          <div className="row g-4 justify-content-center">
            <div className="col-md-5">
              <div className="news-card">
                <img
                  alt="Sell USDT for cash in Dubai"
                  src="/images/artical1.png"
                  className="object-fit-cover rounded-4 w-100"
                  height={"256"}
                />
                <div className="content d-flex flex-column gap-14 align-items-start">
                  <h3 className="Heading03" style={{ color: "#22246A" }}>
                    Cryptocurrency OTC Services in India
                  </h3>
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
                  alt="Sell USDT for cash in Dubai"
                  src="/images/artical2.png"
                  className="object-fit-cover rounded-4 w-100"
                  height={"256"}
                />
                <div className="content d-flex flex-column gap-14 align-items-start">
                  <h3 className="Heading03" style={{ color: "#22246A" }}>
                    India Bank Transfer
                  </h3>
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
                  alt="Sell USDT for cash in Dubai"
                  src="/images/artical1.png"
                  className="object-fit-cover rounded-4 w-100"
                  height={"256"}
                />
                <div className="content d-flex flex-column gap-14 align-items-start">
                  <h3 className="Heading03" style={{ color: "#22246A" }}>
                    Cryptocurrency OTC Services in India
                  </h3>
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
                  alt="Sell USDT for cash in Dubai"
                  src="/images/artical2.png"
                  className="object-fit-cover rounded-4 w-100"
                  height={"256"}
                />
                <div className="content d-flex flex-column gap-14 align-items-start">
                  <h3 className="Heading03" style={{ color: "#22246A" }}>
                    India Bank Transfer
                  </h3>
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
                  alt="Buy USDT in Dubai for cash"
                  src="/images/E1.png"
                  style={{ width: "48px", height: "48px" }}
                />
              </div>
              <div className="d-flex flex-column gap-1">
                <h4
                  style={{
                    color: "#1A1A1A",
                    fontSize: "20.488px",
                    fontStyle: "normal",
                    fontWeight: "500",
                  }}
                >
                  Knowledge Base
                </h4>
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
                  alt="Buy USDT in Dubai for cash"
                  src="/images/E2.svg"
                  style={{ width: "48px", height: "48px" }}
                />
              </div>
              <div className="d-flex flex-column gap-1">
                <h4
                  style={{
                    color: "#1A1A1A",
                    fontSize: "20.488px",
                    fontStyle: "normal",
                    fontWeight: "500",
                  }}
                >
                  Registration & Login
                </h4>
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
                  alt="Buy USDT in Dubai for cash"
                  src="/images/E3.svg"
                  style={{ width: "48px", height: "48px" }}
                />
              </div>
              <div className="d-flex flex-column gap-1">
                <h4
                  style={{
                    color: "#1A1A1A",
                    fontSize: "20.488px",
                    fontStyle: "normal",
                    fontWeight: "500",
                  }}
                >
                  Payment Options
                </h4>
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
                  alt="Buy USDT in Dubai for cash"
                  src="/images/E4.svg"
                  style={{ width: "48px", height: "48px" }}
                />
              </div>
              <div className="d-flex flex-column gap-1">
                <h4
                  style={{
                    color: "#1A1A1A",
                    fontSize: "20.488px",
                    fontStyle: "normal",
                    fontWeight: "500",
                  }}
                >
                  Technical
                </h4>
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
                  alt="USDT Rate in Dubai"
                  src="/images/E4.svg"
                  style={{ width: "48px", height: "48px" }}
                />
              </div>
              <div className="d-flex flex-column gap-1">
                <h4
                  style={{
                    color: "#1A1A1A",
                    fontSize: "20.488px",
                    fontStyle: "normal",
                    fontWeight: "500",
                  }}
                >
                  Support
                </h4>
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

      {/* Faqs */}
      <div
        style={{
          paddingBlock: "100px",
          marginTop: "100px",
          backgroundImage: "url(/images/knowledgeBG.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h3 className="Heading01 mb-5 text-center">Knowledge Base</h3>
          <div className="accordion " id="accordionExample1">
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is OTC trading?
                </button>
              </h4>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample1"
              >
                <div className="accordion-body">
                  OTC trading refers to the buying and selling of
                  cryptocurrencies directly between two parties, outside of
                  traditional exchanges. It allows for larger transactions and
                  more personalized services.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What is DubaiOTC?
                </button>
              </h4>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample1"
              >
                <div className="accordion-body">
                  DubaiOTC is an OTC (Over-the-Counter) Desk where you can buy,
                  sell cryptocurrencies, including Tether (USDT), Bitcoin (BTC),
                  Ethereum (ETH) & Other cryptocurrency.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How does OTC Exchange work?
                </button>
              </h4>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample1"
              >
                <div className="accordion-body">
                  OTC trading involves direct communication between buyers and
                  sellers to negotiate and execute large cryptocurrency trades.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          paddingBlock: "100px",
          backgroundImage: "url(/images/registerBG.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="Heading01 mb-5 text-center text-white">
            Registration & Login
          </div>
          <div className="accordion " id="accordionExample2">
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne2"
                  aria-expanded="true"
                  aria-controls="collapseOne2"
                >
                  What cryptocurrencies do you support?{" "}
                </button>
              </h4>
              <div
                id="collapseOne2"
                className="accordion-collapse collapse text-white"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample2"
              >
                <div className="accordion-body">
                  We support Tether(USDT), Bitcoin(BTC), Ethereum(ETH), USD
                  coin(USDC) & BUSD currently. We are working on Supporting More
                  crypto.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo2"
                  aria-expanded="false"
                  aria-controls="collapseTwo2"
                >
                  What is the minimum and maximum trade size?
                </button>
              </h4>
              <div
                id="collapseTwo2"
                className="accordion-collapse collapse text-white"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample2"
              >
                <div className="accordion-body">
                  Our Minimum Trade amount starts with 3000 USDT.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree2"
                  aria-expanded="false"
                  aria-controls="collapseThree2"
                >
                  What are the fees associated with OTC trading?
                </button>
              </h4>
              <div
                id="collapseThree2"
                className="accordion-collapse collapse text-white"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample2"
              >
                <div className="accordion-body">
                  There is No Additional Fees.We do not charge any additional
                  Fees above Already Stated in the website, You get what you See
                  in the our calculator......Our rate Page Link
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingFour2">
                <button
                  className="accordion-button text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour2"
                  aria-expanded="false"
                  aria-controls="collapseFour2"
                >
                  Can I trade fiat currencies for cryptocurrencies OTC?
                </button>
              </h4>
              <div
                id="collapseFour2"
                className="accordion-collapse collapse text-white"
                aria-labelledby="headingFour2"
                data-bs-parent="#accordionExample2"
              >
                <div className="accordion-body">
                  Yes, We do accept AED,USD & INR Currenctly, We are working to
                  Accomodate More payment Options.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          paddingBlock: "100px",
          backgroundImage: "url(/images/knowledgeBG.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="Heading01 mb-5 text-center">Payment Options</div>
          <div className="accordion " id="accordionExample3">
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne3"
                  aria-expanded="true"
                  aria-controls="collapseOne3"
                >
                  What documentation is required to start trading?
                </button>
              </h4>
              <div
                id="collapseOne3"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample3"
              >
                <div className="accordion-body">
                  We Need to Conduct Mandatory KYC (In case of Individuals) or
                  KYB (In case of Business) as per the Regulatory Requirements.
                  We may ask for Further documentations as required by Law.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo3"
                  aria-expanded="false"
                  aria-controls="collapseTwo3"
                >
                  How is pricing determined for OTC trades?
                </button>
              </h4>
              <div
                id="collapseTwo3"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample3"
              >
                <div className="accordion-body">
                  Pricing Changes As per the Market.See our Detailed Pricing
                  Here
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree3"
                  aria-expanded="false"
                  aria-controls="collapseThree3"
                >
                  What security measures are in place to protect my assets?
                </button>
              </h4>
              <div
                id="collapseThree3"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample3"
              >
                <div className="accordion-body">
                  We use Bitgo as our Custody Partner, assets are Protected by
                  Insurance of 1 Mn USD.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour3"
                  aria-expanded="false"
                  aria-controls="collapseFour3"
                >
                  Can I get market insights or assistance with market analysis?
                </button>
              </h4>
              <div
                id="collapseFour3"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample3"
              >
                <div className="accordion-body">
                  No, We do not provide any Market Insights or assistance.
                  Cryptocurrency Market is Highly Fluctuating & Only trade at
                  your own discretion.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive3"
                  aria-expanded="false"
                  aria-controls="collapseFive3"
                >
                  Do you offer 24/7 support?
                </button>
              </h4>
              <div
                id="collapseFive3"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample3"
              >
                <div className="accordion-body">
                  Our Customer Support is available between 10:00 to 22:00
                  Hours, Dubai Time(UTC+4:00)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          paddingBlock: "100px",
          backgroundImage: "url(/images/registerBG.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="Heading01 mb-5 text-center text-white">Technical</div>
          <div className="accordion " id="accordionExample4">
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne4"
                  aria-expanded="true"
                  aria-controls="collapseOne4"
                >
                  Can I execute trades via phone or other communication
                  channels?
                </button>
              </h4>
              <div
                id="collapseOne4"
                className="accordion-collapse collapse text-white"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample4"
              >
                <div className="accordion-body">
                  You may reach us through our Official Telegram @Dubai_OTC or
                  Via Email Support CS@dubaiotc.com for all Queries.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo4"
                  aria-expanded="false"
                  aria-controls="collapseTwo4"
                >
                  Are there any restrictions on who can use the OTC desk?
                </button>
              </h4>
              <div
                id="collapseTwo4"
                className="accordion-collapse collapse text-white"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample4"
              >
                <div className="accordion-body">
                  Check for any geographical or regulatory restrictions that may
                  apply to users of the OTC desk.
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

      <FooterCust home={false} />
    </>
  );
};

export default Support;
