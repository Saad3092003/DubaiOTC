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
          <div className="Heading01 mb-5 text-center">Knowledge Base</div>
          <div className="accordion " id="accordionExample1">
            <div className="accordion-item">
              <h5 className="accordion-header" id="headingOne">
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
              </h5>
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
              <h5 className="accordion-header" id="headingTwo">
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
              </h5>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample1"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique, eos.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h5 className="accordion-header" id="headingThree">
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
              </h5>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample1"
              >
                <div className="accordion-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Temporibus, amet.
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
              <h5 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne2"
                  aria-expanded="true"
                  aria-controls="collapseOne2"
                >
                  How is it Different from Traditional Crypto Exchanges?
                </button>
              </h5>
              <div
                id="collapseOne2"
                className="accordion-collapse collapse text-white"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample2"
              >
                <div className="accordion-body">
                  OTC trading involves direct, off-exchange transactions
                  negotiated between buyers and sellers, often used for larger
                  trades, while traditional crypto exchanges match orders on a
                  centralized platform for a broad range of users.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h5 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo2"
                  aria-expanded="false"
                  aria-controls="collapseTwo2"
                >
                  What is Manager&apos;s Cheque?
                </button>
              </h5>
              <div
                id="collapseTwo2"
                className="accordion-collapse collapse text-white"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample2"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique, eos.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h5 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree2"
                  aria-expanded="false"
                  aria-controls="collapseThree2"
                >
                  How do I start trading with you?
                </button>
              </h5>
              <div
                id="collapseThree2"
                className="accordion-collapse collapse text-white"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample2"
              >
                <div className="accordion-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Temporibus, amet.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h5 className="accordion-header" id="headingFour2">
                <button
                  className="accordion-button text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour2"
                  aria-expanded="false"
                  aria-controls="collapseFour2"
                >
                  What is your Onboarding Process?
                </button>
              </h5>
              <div
                id="collapseFour2"
                className="accordion-collapse collapse text-white"
                aria-labelledby="headingFour2"
                data-bs-parent="#accordionExample2"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  vel.
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
              <h5 className="accordion-header" id="headingOne">
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
              </h5>
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
              <h5 className="accordion-header" id="headingTwo">
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
              </h5>
              <div
                id="collapseTwo3"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample3"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique, eos.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h5 className="accordion-header" id="headingThree">
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
              </h5>
              <div
                id="collapseThree3"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample3"
              >
                <div className="accordion-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Temporibus, amet.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h5 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour3"
                  aria-expanded="false"
                  aria-controls="collapseFour3"
                >
                  Which Currencies do you support?
                </button>
              </h5>
              <div
                id="collapseFour3"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample3"
              >
                <div className="accordion-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Temporibus, amet.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h5 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive3"
                  aria-expanded="false"
                  aria-controls="collapseFive3"
                >
                  What Payment Methods you support for AED Currency?
                </button>
              </h5>
              <div
                id="collapseFive3"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample3"
              >
                <div className="accordion-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Temporibus, amet.
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
              <h5 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne4"
                  aria-expanded="true"
                  aria-controls="collapseOne4"
                >
                  Which Payment Methods you support for INR (Indian Rupees)
                </button>
              </h5>
              <div
                id="collapseOne4"
                className="accordion-collapse collapse text-white"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample4"
              >
                <div className="accordion-body">
                  We Support Cash in all Major Cities,Bank Transfer
                  (RTGS/NEFT/IMPS) & UPI Payment Methods for INR Currency.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h5 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo4"
                  aria-expanded="false"
                  aria-controls="collapseTwo4"
                >
                  How long does it to receive Cryptocurrency Usually?
                </button>
              </h5>
              <div
                id="collapseTwo4"
                className="accordion-collapse collapse text-white"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample4"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique, eos.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h5 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree4"
                  aria-expanded="false"
                  aria-controls="collapseThree4"
                >
                  What payment Methods you support for USD Currency?
                </button>
              </h5>
              <div
                id="collapseThree4"
                className="accordion-collapse collapse text-white"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample4"
              >
                <div className="accordion-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Temporibus, amet.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h5 className="accordion-header" id="headingFour4">
                <button
                  className="accordion-button text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour4"
                  aria-expanded="false"
                  aria-controls="collapseFour4"
                >
                  What payment Methods you support for Euro Currency?
                </button>
              </h5>
              <div
                id="collapseFour4"
                className="accordion-collapse collapse text-white"
                aria-labelledby="headingFour4"
                data-bs-parent="#accordionExample4"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  vel.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h5 className="accordion-header" id="headingFive4">
                <button
                  className="accordion-button text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive4"
                  aria-expanded="false"
                  aria-controls="collapseFive4"
                >
                  Which Cryptocurrency do you support?
                </button>
              </h5>
              <div
                id="collapseFive4"
                className="accordion-collapse collapse text-white"
                aria-labelledby="headingFive4"
                data-bs-parent="#accordionExample4"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  vel.
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h5 className="accordion-header" id="headingSix4">
                <button
                  className="accordion-button text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix4"
                  aria-expanded="false"
                  aria-controls="collapseSix4"
                >
                  Which Blockchains you Support?
                </button>
              </h5>
              <div
                id="collapseSix4"
                className="accordion-collapse collapse text-white"
                aria-labelledby="headingSix4"
                data-bs-parent="#accordionExample4"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  vel.
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
          <div className="Heading01 mb-5 text-center">Support</div>
          <div className="accordion " id="accordionExample5">
            <div className="accordion-item">
              <h5 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne5"
                  aria-expanded="true"
                  aria-controls="collapseOne5"
                >
                  Do you offer 24/7 support?
                </button>
              </h5>
              <div
                id="collapseOne5"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample5"
              >
                <div className="accordion-body">
                  Our Customer Support is available between 10:00 to 22:00
                  Hours, Dubai Time(UTC+4:00)
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-item">
              <h5 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo5"
                  aria-expanded="false"
                  aria-controls="collapseTwo5"
                >
                  How to contact us?
                </button>
              </h5>
              <div
                id="collapseTwo5"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample5"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique, eos.
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

export default Support;
