import { Card } from "../components/Card";
import styles from "./page.module.css";
import { Header } from "../components/header";
import HeroSection from "../components/HeroSection";
import { CryptoCardSection } from "@dubai/components/CryptoCardSection";

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <Header />
        <HeroSection />
      </div>
      <section className="bg-telegram">
        <div className="container">
          <div
            className="d-flex flex-column gap-21 align-items-center"
            style={{ paddingTop: "145px", paddingBottom: "358px" }}
          >
            <div>
              <img src="images/telegram.png" width={"125"} />
            </div>
            <div className="tele-text">
              Stay ahead of the curve with real-time rate updates!
            </div>
          </div>
        </div>
      </section>

      <CryptoCardSection />

      <section style={{ paddingBlock: "87px" }}>
        <div className="container">
          <div className="d-flex flex-column" style={{ gap: "64px" }}>
            <div
              className="h2 text-center mx-auto"
              style={{ maxWidth: "907px" }}
            >
              &quot;Experience Seamless Crypto Transactions with Dubai
              OTC&apos;s Premier Services&quot;
            </div>
            <div className="d-flex justify-content-center align-items-center gap-45">
              <div className="service-card">
                <div className="icon mx-auto">
                  <img src="images/service2.png" width={50} />
                </div>
                <div className="d-flex flex-column gap-13">
                  <div className="h3 text-center">Crypto OTC Desk</div>
                  <p className="mb-0 text-center ps">
                    Lorem ipsum dolor sit amet consectetur. Hendrerit fusce in
                    tempus nulla ultrices
                  </p>
                </div>
              </div>
              <div className="service-card">
                <div className="icon mx-auto">
                  <img src="images/service1.png" width={50} />
                </div>
                <div className="d-flex flex-column gap-13">
                  <div className="h3 text-center">
                    Local Bank <br /> Transfer
                  </div>
                  <p className="mb-0 text-center ps">
                    Lorem ipsum dolor sit amet consectetur. Hendrerit fusce in
                    tempus nulla ultrices
                  </p>
                </div>
              </div>
              <div className="service-card">
                <div className="icon mx-auto">
                  <img src="images/service3.png" width={50} />
                </div>
                <div className="d-flex flex-column gap-13">
                  <div className="h3 text-center">
                    Payment Solution <br /> for Business
                  </div>
                  <p className="mb-0 text-center ps">
                    Lorem ipsum dolor sit amet consectetur. Hendrerit fusce in
                    tempus nulla ultrices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingBlock: "66px", background: "#fcfcfc" }}>
        <div className="px-md-4 px-3 d-flex flex-column gap-50">
          <div className="d-flex flex-column text-center gap-27">
            <div
              style={{ color: "#333", fontSize: "24px" }}
              className="fw-bold"
            >
              Our Clients
            </div>
            <div className="h2 mx-auto" style={{ maxWidth: "752px" }}>
              At Dubai OTC, our clients are at the forefront of everything we
              do.
            </div>
          </div>

          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-md-6">
              <img src="images/map.png" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <div className="clients-card ">Individual Investor</div>
                <div className="clients-card ">SME Business</div>
                <div className="clients-card ">Crypto Traders</div>
                <div className="clients-card ">High net worth individual</div>
                <div className="clients-card ">Property Buyers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#f9fafd", paddingTop: "150px" }}>
        <div className="px-md-5 px-3 mx-auto" style={{ maxWidth: "1551px" }}>
          <div className="row g-5 align-items-center justify-content-center">
            <div className="col-md-5">
              <div className="d-flex gap-28 flex-column">
                <div className="h1">
                  Thrilled with Dubai OTC&apos;s Exceptional Service: Clients
                  Testimonial
                </div>
                <div className="d-flex gap-50">
                  <div>
                    <img src="images/google.png" width={"145"} />
                    <div className="fw-bold">
                      <span style={{ color: "#3172F3" }}>120 Reviews</span>{" "}
                      <span style={{ color: "#FDB002" }}>5.0/5.0</span>
                    </div>
                  </div>
                  <div>
                    <img src="images/trustpilot.png" width={"145"} />
                    <div className="fw-bold" style={{ color: "#00B77B" }}>
                      68 Reviews 5.0/5.0
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="d-flex flex-column flex-md-row">
                <div
                  className="bg-white d-flex w-100 ps-5 pe-3 justify-content-center flex-column gap-9 "
                  style={{ maxWidth: "427px" }}
                >
                  <div className="d-flex py-3">
                    <i className="fa fa-star fs-4"></i>
                    <i className="fa fa-star fs-4"></i>
                    <i className="fa fa-star fs-4"></i>
                    <i className="fa fa-star fs-4"></i>
                    <i className="fa fa-star fs-4"></i>
                  </div>
                  <div
                    className="fw-semibold"
                    style={{ fontSize: "20px", color: "#1a1a1a" }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Consequat auctor
                    consectetur nunc vitae dolor blandit. Elit enim massa etiam
                    neque laoreet lorem sed.
                  </div>
                  <div className="d-flex flex-column">
                    <div className="fw-bold fs-5">Anthony Bahringer</div>
                    <div className="fs-6 fw-light text-secondary">
                      Senior Research Manager
                    </div>
                  </div>
                </div>
                <div>
                  <img src="images/testimonial.png" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#f9fafd", paddingBlock: "150px" }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6">
              <img src="images/benefits.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column gap-32">
                <div
                  style={{
                    fontSize: "48px",
                    color: "#1a1a1a",
                    fontWeight: 600,
                  }}
                >
                  Why Choose <span className="#2982CC">Dubai OTC</span>
                </div>
                <div className="d-flex flex-column gap-33">
                  <div className="d-flex gap-18 align-items-center">
                    <img src="images/check-mark.png" width={48} />
                    <div
                      style={{
                        color: "#797979",
                        fontSize: "24px",
                        fontWeight: 400,
                      }}
                    >
                      Personalized Approach.
                    </div>
                  </div>
                  <div className="d-flex gap-18 align-items-center">
                    <img src="images/check-mark.png" width={48} />
                    <div
                      style={{
                        color: "#797979",
                        fontSize: "24px",
                        fontWeight: 400,
                      }}
                    >
                      247 Support
                    </div>
                  </div>
                  <div className="d-flex gap-18 align-items-center">
                    <img src="images/check-mark.png" width={48} />
                    <div
                      style={{
                        color: "#797979",
                        fontSize: "24px",
                        fontWeight: 400,
                      }}
                    >
                      Dubai OTC offers wide range of Payment Solutions to
                      Individuals, HNIS & Businesses to move money without
                      Countes Pasty Risks.
                    </div>
                  </div>
                  <div className="d-flex gap-18 align-items-center">
                    <img src="images/check-mark.png" width={48} />
                    <div
                      style={{
                        color: "#797979",
                        fontSize: "24px",
                        fontWeight: 400,
                      }}
                    >
                      We&apos;ve helped more than 10,000 Individuals & too soot
                      Businessy to Fulfil their Payeed Q. & many C&ypto
                      Enterprises would wide with Moving Money Efficiently.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingBlock: "150px" }}>
        <div className="container">
          <div className="d-flex justify-content-center flex-column gap-50">
            <div className="d-flex flex-column gap-27 ">
              <div
                style={{
                  color: "#2982CC",
                  fontSize: "24px",
                  textAlign: "center",
                  fontWeight: "500",
                }}
              >
                How to start Trading with us
              </div>
              <div
                style={{
                  color: "#4C4448",
                  textAlign: "center",
                  fontSize: "84px",
                  lineHeight: "120%",
                  fontWeight: "600",
                }}
              >
                Quick Steps for Buying & Selling Cryptocurrency Directly from
                us.
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div
                  style={{ maxWidth: "430px" }}
                  className="d-flex flex-column gap-31"
                >
                  <img src="images/step1.png" className="img-fluid" />
                  <div className="d-flex flex-column gap-12">
                    <div
                      style={{
                        color: "#1A1A1A",
                        fontSize: "31.707px",
                        fontWeight: "700",
                        lineHeight: "31.134px",
                      }}
                    >
                      Get Verified
                    </div>
                    <div
                      style={{
                        color: "#888587",
                        fontSize: " 26.687px",
                        fontWeight: " 400",
                      }}
                    >
                      Registration or Create an Account
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  style={{ maxWidth: "430px" }}
                  className="d-flex flex-column gap-31"
                >
                  <img src="images/step2.png" className="img-fluid" />
                  <div className="d-flex flex-column gap-12">
                    <div
                      style={{
                        color: "#1A1A1A",
                        fontSize: "31.707px",
                        fontWeight: "700",
                        lineHeight: "31.134px",
                      }}
                    >
                      Get Verified
                    </div>
                    <div
                      style={{
                        color: "#888587",
                        fontSize: " 26.687px",
                        fontWeight: " 400",
                      }}
                    >
                      Registration or Create an Account
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  style={{ maxWidth: "430px" }}
                  className="d-flex flex-column gap-31"
                >
                  <img src="images/step3.png" className="img-fluid" />
                  <div className="d-flex flex-column gap-12">
                    <div
                      style={{
                        color: "#1A1A1A",
                        fontSize: "31.707px",
                        fontWeight: "700",
                        lineHeight: "31.134px",
                      }}
                    >
                      Get Verified
                    </div>
                    <div
                      style={{
                        color: "#888587",
                        fontSize: " 26.687px",
                        fontWeight: " 400",
                      }}
                    >
                      Registration or Create an Account
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          paddingBlock: "110px",
          paddingInline: "20px",
          background: "#8890f1",
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
              style={{
                fontSize: "42.667px",
                fontWeight: "700",
                lineHeight: "150%",
                maxWidth: "898px",
              }}
            >
              Connect with Us on Telegram for Official Customer Support
            </div>
            <div
              className="text-light"
              style={{
                fontSize: "21.333px",
                fontWeight: "400",
                lineHeight: "37.333px",
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

      <section
        style={{
          background: "#5761D7",
          paddingBlock: "80px",
          minHeight: "736px",
          paddingInline: "50px",
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
                  <p>
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
                  <h4>Exchange Type</h4>
                  <div className="d-flex text-light flex-column gap-20">
                    <div className="fs-5">P2P</div>
                    <div className="fs-5">BINANCE</div>
                    <div className="fs-5">OKX</div>
                    <div className="fs-5">BYBIT</div>
                    <div className="fs-5">HTX</div>
                    <div className="fs-5">KUCOIN</div>
                    <div className="fs-5">BITGET</div>
                    <div className="fs-5">Managers Cheque (UAE) </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-flex flex-column gap-32">
                  <h4>Payments</h4>
                  <div className="d-flex text-light flex-column gap-20">
                    <div className="fs-5">
                      Indian Bank Transfer NEFT,RTGS,IMPS
                    </div>
                    <div className="fs-5">UAE Local bank transfer </div>
                    <div className="fs-5">International SWIFT</div>
                    <div className="fs-5">EUR SEPA</div>
                    <div className="fs-5">AED CASH</div>
                    <div className="fs-5">INR CASH</div>
                    <div className="fs-5">USD CASH</div>
                    <div className="fs-5">EUR CASH</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-flex flex-column gap-50">
                  <h1>Get in touch with us now</h1>
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
            <div>© All rights reserved</div>
            <div className="d-flex gap-32">
              <div>Terms & Condition</div>
              <div>Privacy Policy</div>
              <div>AML Policy</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
