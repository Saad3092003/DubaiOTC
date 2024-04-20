import { Card } from "../components/Card";
import styles from "./page.module.css";
import { Header } from "../components/header";
import HeroSection from "../components/HeroSection";

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

      <section style={{ backgroundColor: "#f5f5f5" }} className="py-5">
        <div className="container">
          <div className="d-flex gap-50 flex-column">
            <div className="row g-5 align-items-center">
              <div className="col-md-5">
                <Card image={"images/HuobiV.png"} text1={"lorem ipsum dolor"} />
              </div>
              <div className="col-md-7">
                <div className="d-flex flex-column gap-32">
                  <div className="third-section-title">
                    Now you can trade with us using your favourite P2P exchnage
                    securely
                  </div>
                  <p className="third-section-para mb-0">
                    We’re DubaiOTC, one of the fastest-growing digital currency
                    trading desks, headquartered in Dubai. We offer safe and
                    secure over-the-counter (OTC) trading to verified users with
                    the support of peer-to-peer (P2P) topmost exchanges like
                    Binance, Kucoin, Huobi, and OKX.
                  </p>
                  <div className="gap-10 d-flex">
                    <button className="btn btn-purple">
                      Personalized Experience
                    </button>
                    <button className="btn btn-purple">Trusted</button>
                    <button className="btn btn-purple">
                      Reliable & Verified crypto OTC in Dubai
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-content-between px-md-5 gap-4 w-100 d-flex align-items-center">
              <img src="images/huobi.png" />
              <img src="images/binance.png" />
              <img src="images/okk.png" />
              <img src="images/ku.png" />
            </div>
          </div>
        </div>
      </section>

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

      <section style={{ background: "#f9fafd", paddingBlock: "150px" }}>
        <div className="px-md-5 px-3 mx-auto" style={{ maxWidth: "1551px" }}>
          <div className="row g-5 align-items-center justify-content-center">
            <div className="col-md-5">
              <div className="d-flex gap-28 flex-column">
                <div className="h1">
                  Thrilled with Dubai OTC's Exceptional Service: Clients
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
    </>
  );
}
