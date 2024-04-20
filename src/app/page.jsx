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
    </>
  );
}
