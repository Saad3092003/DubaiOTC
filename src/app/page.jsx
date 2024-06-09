import { CryptoCardSection } from "../components/CryptoCardSection";
import { Header } from "../components/Header";
import HeroSection from "../components/HeroSection";
import PartnersSlider from "../components/PartnersSlider";
import { FooterCust } from "../components/FooterCust";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <div>
      <div className="overflow-hidden">
        <div className="hero-section pt-3">
          <Header />
          <HeroSection />
        </div>
        <section className="bg-telegram">
          <div className="container">
            <div
              className="d-flex flex-column  align-items-center"
              style={{ paddingTop: "145px", paddingBottom: "458px" }}
            >
              <div data-aos="fade-up">
                <a
                  style={{ textDecoration: "none", color: "black !important" }}
                  target="_blank"
                  href="https://t.me/DubaiOTCofficial"
                >
                  <img alt="DubaiOTC" src="images/telegram.png" width={"125"} />
                </a>
              </div>
              <a
                style={{ textDecoration: "none", color: "black !important" }}
                target="_blank"
                href="https://t.me/DubaiOTCofficial"
              >
                <h2
                  className="Heading01 mt-3 text-dark text-center"
                  data-aos="fade-up"
                >
                  Stay ahead of the market with daily rate updates. Subscribe to
                  our Telegram channel for the latest rates and news
                </h2>
              </a>
            </div>
          </div>
        </section>

        <CryptoCardSection />

        <section style={{ paddingBlock: "87px" }}>
          <div className="container">
            <div className="d-flex flex-column" style={{ gap: "64px" }}>
              <h3
                className="heading02 text-center mx-auto"
                style={{ maxWidth: "907px" }}
                data-aos="fade-up"
              >
                Multiple Trading Options To Choose From
              </h3>
              <div className="d-flex justify-content-center align-items-center gap-45 flex-wrap">
                <div className="service-card" data-aos="fade-up">
                  <div className="icon mx-auto">
                    <img
                      alt="USDT OTC in Dubai"
                      src="images/service2.png"
                      width={50}
                    />
                  </div>
                  <div className="d-flex flex-column gap-13">
                    <h4 className="Heading03 text-center">Crypto OTC Desk</h4>
                    <p className="mb-0 text-center Paragraph">
                      Buy or sell your cryptocurrency at our OTC desk at
                      competitive rates. We facilitate small to large-volume
                      transactions while offering a secure and discrete trading
                      experience for our clients.
                    </p>
                  </div>
                </div>
                <div className="service-card" data-aos="fade-up">
                  <div className="icon mx-auto">
                    <img
                      alt="USDT OTC in Dubai"
                      src="images/service1.png"
                      width={50}
                    />
                  </div>
                  <div className="d-flex flex-column gap-13">
                    <h4 className="Heading03 text-center">
                      Local Bank <br /> Transfer
                    </h4>
                    <p className="mb-0 text-center Paragraph">
                      We also offer local bank transfer services for stress-free
                      cryptocurrency transactions. Our team ensures all
                      transfers are swift.
                    </p>
                  </div>
                </div>
                <div className="service-card" data-aos="fade-up">
                  <div className="icon mx-auto">
                    <img
                      alt="USDT OTC in Dubai"
                      src="images/service3.png"
                      width={50}
                    />
                  </div>
                  <div className="d-flex flex-column gap-13">
                    <h4 className="Heading03 text-center">
                      Payment Solution <br /> for Business
                    </h4>
                    <p className="mb-0 text-center Paragraph">
                      We provide tailored payment solutions for businesses
                      looking to make payment to their business partners or
                      individuals through cryptocurrency.
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
                style={{ color: "#333" }}
                data-aos="fade-up"
                className="Heading04"
              >
                Our Clients
              </div>
              <h3
                data-aos="fade-up"
                className="heading02 mx-auto"
                style={{ maxWidth: "1152px" }}
              >
                Don’t Just Take Our Words For It. This is What Our Clients Say
                About Us. / Beyond Our Promises: Read What Our Clients Have to
                Say.
              </h3>
            </div>

            <div className="row g-4 justify-content-center align-items-center">
              <div className="col-md-6" data-aos="fade-right">
                <img
                  alt="USDT OTC in Dubai"
                  src="images/map.gif"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 d-none d-sm-block">
                <div className="row justify-content-center">
                  <div className="col-sm-6 ">
                    <h4
                      className="clients-card ms-auto px-2 "
                      data-aos="fade-left"
                      data-aos-duration="1300"
                    >
                      Crypto Traders
                    </h4>
                  </div>
                  <div className="col-sm-6 ">
                    <h4
                      className="clients-card me-auto px-2 "
                      data-aos="fade-left"
                      data-aos-duration="1200"
                    >
                      SME Business
                    </h4>
                  </div>
                </div>
                <div className="row mt-4 justify-content-center">
                  <div className="col-sm-6 ">
                    <h4
                      className="clients-card ms-auto px-2 "
                      data-aos="fade-left"
                      data-aos-duration="1400"
                    >
                      High net worth individual
                    </h4>
                  </div>
                  <div className="col-sm-6 ">
                    <h4
                      className="clients-card me-auto px-2 "
                      data-aos="fade-left"
                      data-aos-duration="1500"
                    >
                      Property Buyers
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-block d-sm-none">
                <div className="row justify-content-center g-4">
                  <div className="col-sm-6 ">
                    <div
                      className="clients-card mx-auto px-2 "
                      data-aos="fade-left"
                      data-aos-duration="1300"
                    >
                      Crypto Traders
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <div
                      className="clients-card mx-auto px-2 "
                      data-aos="fade-left"
                      data-aos-duration="1200"
                    >
                      SME Business
                    </div>
                  </div>
                </div>
                <div className="row mt-4 justify-content-center g-4">
                  <div className="col-sm-6 ">
                    <div
                      className="clients-card mx-auto px-2 "
                      data-aos="fade-left"
                      data-aos-duration="1400"
                    >
                      High net worth individual
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <div
                      className="clients-card mx-auto px-2 "
                      data-aos="fade-left"
                      data-aos-duration="1500"
                    >
                      Property Buyers
                    </div>
                  </div>
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
                  <h3 className="Heading01" data-aos="fade-right">
                    Start Your Journey Today with DubaiOTC. Read What Clients
                    Say About us.
                  </h3>
                  <div className="d-flex gap-50">
                    <div>
                      <img
                        alt="USDT OTC in Dubai"
                        src="images/google.png"
                        width={"145"}
                      />
                      <div className="fw-bold">
                        <span style={{ color: "#3172F3" }}>120 Reviews</span>{" "}
                        <span style={{ color: "#FDB002" }}>5.0/5.0</span>
                      </div>
                    </div>
                    <div>
                      <img
                        alt="USDT OTC in Dubai"
                        src="images/trustpilot.png"
                        width={"145"}
                      />
                      <div className="fw-bold" style={{ color: "#00B77B" }}>
                        68 Reviews 5.0/5.0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <Testimonial />
              </div>
            </div>
          </div>
        </section>

        <section>
          <img
            alt="USDT OTC in Dubai"
            src="images/bgtoppartner.png"
            className="img-fluid w-100"
          />
          <div className="text-center">
            <div
              className="Heading01"
              data-aos="fade-up"
              style={{ marginTop: "-80px" }}
            >
              Our <span style={{ color: "#2982CC" }}>Partners</span>
            </div>
            <div style={{ marginTop: "70px" }}>
              <PartnersSlider />
            </div>
          </div>
          <img
            alt="USDT OTC in Dubai"
            src="images/bgbottompartner.png"
            className="img-fluid w-100"
          />
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
              <div className="col-md-6" data-aos="fade-right">
                <img
                  alt="USDT OTC in Dubai"
                  src="images/benefits.png"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column gap-32">
                  <h2 className="Heading01" data-aos="fade-up">
                    {" "}
                    Why Choose{" "}
                    <span style={{ color: "#2982CC" }}>Dubai OTC</span>
                  </h2>
                  <div className="d-flex flex-column gap-33">
                    <div
                      className="d-flex gap-18 align-items-center"
                      data-aos="fade-left"
                    >
                      <img
                        alt="USDT OTC in Dubai"
                        src="images/check-mark.png"
                        width={48}
                      />
                      <div
                        style={{
                          color: "#797979",
                        }}
                        className="Paragraphlarge"
                      >
                        Quick, Secure and Efficient
                      </div>
                    </div>
                    <div
                      className="d-flex gap-18 align-items-center"
                      data-aos="fade-left"
                    >
                      <img
                        alt="Buy USDT in Dubai"
                        src="images/check-mark.png"
                        width={48}
                      />
                      <div
                        style={{
                          color: "#797979",
                        }}
                        className="Paragraphlarge"
                      >
                        Competitive Rates in the Market / Unbeatable rates
                      </div>
                    </div>
                    <div
                      className="d-flex gap-18 align-items-center"
                      data-aos="fade-left"
                    >
                      <img
                        alt="Buy USDT in Dubai"
                        src="images/check-mark.png"
                        width={48}
                      />
                      <div
                        style={{
                          color: "#797979",
                        }}
                        className="Paragraphlarge"
                      >
                        Multiple Payment Options (OTC/Bank Transfer)
                      </div>
                    </div>
                    <div
                      className="d-flex gap-18 align-items-center"
                      data-aos="fade-left"
                    >
                      <img
                        alt="Buy USDT in Dubai"
                        src="images/check-mark.png"
                        width={48}
                      />
                      <div
                        style={{
                          color: "#797979",
                        }}
                        className="Paragraphlarge"
                      >
                        24/7 Support Telegram Chat Assistance
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
                <h4
                  style={{
                    color: "#2982CC",
                    textAlign: "center",
                  }}
                  className="Heading04"
                >
                  How to start Trading with us
                </h4>
                <h4
                  style={{
                    color: "#4C4448",
                    textAlign: "center",
                  }}
                  className="heading02"
                >
                  Simple Steps to Buy & Sell Cryptocurrencies for AED with
                  DubaiOTC
                </h4>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div
                    style={{ maxWidth: "430px" }}
                    className="d-flex flex-column gap-31"
                  >
                    <img
                      alt="Buy USDT in Dubai"
                      src="images/step1.png"
                      className="img-fluid"
                    />
                    <div className="d-flex flex-column gap-12">
                      <h4
                        style={{
                          color: "#1A1A1A",
                        }}
                        className="Heading03"
                      >
                        Onboarding
                      </h4>
                      <div
                        style={{
                          color: "#888587",
                          fontSize: " 26.687px",
                          fontWeight: " 400",
                        }}
                      >
                        To get started, create an account with us and verify
                        your account to initiate your trade.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    style={{ maxWidth: "430px" }}
                    className="d-flex flex-column gap-31"
                  >
                    <img
                      alt="USDT Rate in Dubai"
                      src="images/step2.png"
                      className="img-fluid"
                    />
                    <div className="d-flex flex-column gap-12">
                      <h4
                        style={{
                          color: "#1A1A1A",
                        }}
                        className="Heading03"
                      >
                        Check Prevailing Rates
                      </h4>
                      <div
                        style={{
                          color: "#888587",
                          fontSize: " 26.687px",
                          fontWeight: " 400",
                        }}
                      >
                        Next,check our Telegram channel for the current rate of
                        your selected cryptocurrency.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    style={{ maxWidth: "430px" }}
                    className="d-flex flex-column gap-31"
                  >
                    <img
                      alt="USDT Rate in Dubai"
                      src="images/step3.png"
                      className="img-fluid"
                    />
                    <div className="d-flex flex-column gap-12">
                      <h4
                        style={{
                          color: "#1A1A1A",
                        }}
                        className="Heading03"
                      >
                        Contact Us On Telegram
                      </h4>
                      <div
                        style={{
                          color: "#888587",
                          fontSize: " 26.687px",
                          fontWeight: " 400",
                        }}
                      >
                        Contact us on Telegram to book an appointment for your
                        trade. Our live support team is available 24/7 to assist
                        you.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FooterCust home={true} />
      </div>
    </div>
  );
}
