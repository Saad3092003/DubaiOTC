import { Header } from "../components/header";
import HeroSection from "../components/HeroSection";
import { CryptoCardSection } from "@dubai/components/CryptoCardSection";
import PartnersSlider from "@dubai/components/PartnersSlider";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="hero-section">
          <Header />
          <HeroSection />
        </div>
        <section className="bg-telegram">
          <div className="container">
            <div
              className="d-flex flex-column  align-items-center"
              style={{ paddingTop: "145px", paddingBottom: "358px" }}
            >
              <div>
                <img src="images/telegram.png" width={"125"} />
              </div>
              <div className="Heading01">
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
                className="heading02 text-center mx-auto"
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
                    <div className="Heading03 text-center">Crypto OTC Desk</div>
                    <p className="mb-0 text-center Paragraph">
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
                    <div className="Heading03 text-center">
                      Local Bank <br /> Transfer
                    </div>
                    <p className="mb-0 text-center Paragraph">
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
                    <div className="Heading03 text-center">
                      Payment Solution <br /> for Business
                    </div>
                    <p className="mb-0 text-center Paragraph">
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
              <div style={{ color: "#333" }} className="Heading04">
                Our Clients
              </div>
              <div className="heading02 mx-auto" style={{ maxWidth: "752px" }}>
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
                  <div className="Heading01">
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
                      className="Paragraphlarge"
                      style={{ color: "#1a1a1a" }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Consequat auctor
                      consectetur nunc vitae dolor blandit. Elit enim massa
                      etiam neque laoreet lorem sed.
                    </div>
                    <div className="d-flex flex-column mt-3">
                      <div className="heading05">Anthony Bahringer</div>
                      {/* <div className="fs-6 fw-light text-secondary">
                        Senior Research Manager
                      </div> */}
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

        <section>
          <img src="images/bgtoppartner.png" className="img-fluid w-100" />
          <div className="text-center">
            <div className="Heading01" style={{ marginTop: "-80px" }}>
              Our <span style={{ color: "#2982CC" }}>Partners</span>
            </div>
            <div style={{ marginTop: "70px" }}>
              <PartnersSlider />
            </div>
          </div>
          <img src="images/bgbottompartner.png" className="img-fluid w-100" />
        </section>

        <section
          style={{
            paddingBottom: "50px",
            background: "#f9fafd",
            paddingTop: "0px",
          }}
        >
          <div className="container">
            <div className="row g-5">
              <div className="col-md-6">
                <img src="images/benefits.png" className="img-fluid" alt="" />
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column gap-32">
                  <div className="Heading01">
                    {" "}
                    Why Choose{" "}
                    <span style={{ color: "#2982CC" }}>Dubai OTC</span>
                  </div>
                  <div className="d-flex flex-column gap-33">
                    <div className="d-flex gap-18 align-items-center">
                      <img src="images/check-mark.png" width={48} />
                      <div
                        style={{
                          color: "#797979",
                        }}
                        className="Paragraphlarge"
                      >
                        Personalized Approach.
                      </div>
                    </div>
                    <div className="d-flex gap-18 align-items-center">
                      <img src="images/check-mark.png" width={48} />
                      <div
                        style={{
                          color: "#797979",
                        }}
                        className="Paragraphlarge"
                      >
                        247 Support
                      </div>
                    </div>
                    <div className="d-flex gap-18 align-items-center">
                      <img src="images/check-mark.png" width={48} />
                      <div
                        style={{
                          color: "#797979",
                        }}
                        className="Paragraphlarge"
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
                        }}
                        className="Paragraphlarge"
                      >
                        We&apos;ve helped more than 10,000 Individuals & too
                        soot Businessy to Fulfil their Payeed Q. & many C&ypto
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
                    textAlign: "center",
                  }}
                  className="Heading04"
                >
                  How to start Trading with us
                </div>
                <div
                  style={{
                    color: "#4C4448",
                    textAlign: "center",
                  }}
                  className="heading02"
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
                        }}
                        className="Heading03"
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
                        }}
                        className="Heading03"
                      >
                        Use our interactive calculator
                      </div>
                      <div
                        style={{
                          color: "#888587",
                          fontSize: " 26.687px",
                          fontWeight: " 400",
                        }}
                      >
                        Powered By AI
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
                        }}
                        className="Heading03"
                      >
                        Get in touch with us
                      </div>
                      <div
                        style={{
                          color: "#888587",
                          fontSize: " 26.687px",
                          fontWeight: " 400",
                        }}
                      >
                        Contact us via Live Support / Telegram
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
                    <p className="Paragraph">
                      Lorem ipsum dolor sit amet consectetur. Tristique
                      vulputate odio condimentum at tortor aenean iaculis
                      mattis. Consectetur tellus tristique aliquam dolor
                      at.Condimentum at tortor aenean iaculis mattis.
                      Consectetur tellus tristique aliquam dolor at.
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
                      <div className="Paragraphmd">
                        UAE Local bank transfer{" "}
                      </div>
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
      </div>
    </>
  );
}
