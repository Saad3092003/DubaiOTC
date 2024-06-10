import { FooterCust } from "../../components/FooterCust";
import { Header } from "../../components/Header";
import PartnersSlider from "../../components/PartnersSlider";

function WorkCard({ count, title, desc }) {
  return (
    <div className="d-flex align-items-center  gap-27">
      <div
        style={{
          color: "#3671E9",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        {count}
      </div>
      <div className="d-flex flex-column gap-6">
        <h4 className="Heading04">{title}</h4>
        <div className="Paragraph">{desc}</div>
      </div>
    </div>
  );
}

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
            <h1 className="hero-text mt-3">Sell ETH</h1>
          </div>
        </div>
      </section>

      <div className="pt-5 container ">
        <div className="row px-2 pt-5 g-5 justify-content-between">
          <div className="col-md-5">
            <img
              alt="USDT OTC in Dubai"
              src="/images/work.png"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <div className="d-flex gap-41 flex-column">
              <div>
                <h6 className="text-center">
                  Buy and sell USDT in the UAE effortlessly with DubaiOTC.
                </h6>
                <h2 className="Heading01 text-center">How Does it Works?</h2>
              </div>
              <WorkCard
                count={1}
                title={"Create a new SwapinBuy payment"}
                desc={
                  "Choose the cryptocurrency you want to buy and enter the amount of fiat you want to pay with."
                }
              />
              <WorkCard
                count={2}
                title={"Transfer fiat"}
                desc={
                  "Swapin will provide a Dedicated IBAN, issued in your name. Send fiat from your bank account to the provided IBAN"
                }
              />
              <WorkCard
                count={3}
                title={"Get crypto"}
                desc={
                  "Once Swapin gets your fiat payment, crypto will arrive to the provided wallet within minutes."
                }
              />
              <div>
                <a href="https://t.me/DubaiOTCofficial" target="_blank">
                  <button
                    className="btn btn-primary rounded-pill"
                    style={{ padding: "12px 33px" }}
                  >
                    Get Started{" "}
                    <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content xplanation Section */}
      <div className="pb-5">
        <div style={{ backgroundColor: "#FFFFFF", paddingBlock: "100px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="gap-17 d-flex flex-column p-3 p-md-5 ps-0">
                  <div>
                    <h6 className="text-center">USDT Rate in Dubai</h6>
                    <h2 className="Heading03" style={{ color: "#22246A" }}>
                      Cryptocurrency OTC Services in Dubai
                    </h2>
                  </div>
                  <div className="Paragraph">
                    Discover our professional Crypto OTC exchange services in
                    Dubai, UAE, designed to fulfill large requirements for our
                    clients at competitive market rates while adhering to strict
                    privacy policies and terms of use. Connect with us through
                    Telegram today to learn more about our OTC services in
                    Dubai.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  alt="Buy USDT in Dubai for cash"
                  src="/images/f1.png"
                  className="img-fluid w-100 rounded-4"
                />
              </div>
            </div>
          </div>{" "}
        </div>
        <div style={{ backgroundColor: "#F7F7F7", paddingBlock: "100px" }}>
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-md-6">
                <div className="gap-17 d-flex flex-column p-3 p-md-5 ps-0">
                  <div>
                    <h6 className="text-center">Buy USDT in Dubai for cash</h6>
                    <h3 className="Heading03" style={{ color: "#22246A" }}>
                      Cryptocurrency OTC Services in India
                    </h3>
                  </div>
                  <div className="Paragraph">
                    Experience our professional Crypto OTC exchange services in
                    major cities in India, where we fulfill large requirements
                    for our clients at competitive market rates, ensuring
                    compliance with privacy policies and terms of use. Check our
                    Telegram channel for current rates and get in touch with us
                    to explore our OTC services in India.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  alt="Buy USDT in Dubai for cash"
                  src="/images/f2.png"
                  className="img-fluid w-100 rounded-4"
                />
              </div>
            </div>
          </div>{" "}
        </div>
        <div style={{ backgroundColor: "#DCDFFB", paddingBlock: "100px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="gap-17 d-flex flex-column p-3 p-md-5 ps-0">
                  <div>
                    <h6 className="text-center">
                      Buy USDT in Dubai for bank Transfer
                    </h6>
                    <h2 className="Heading03" style={{ color: "#22246A" }}>
                      India Bank Transfer
                    </h2>
                  </div>
                  <div className="Paragraph">
                    For clients in India, we support IMPS/RTGS/NEFT payment
                    methods for bank transfers. Our platform also offers escrow
                    transactions using major exchanges for secure P2P trading,
                    providing swift, reliable, and clean funds. Strict KYC & AML
                    guidelines are applicable to ensure user security.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  alt="Buy USDT in Dubai for cash"
                  src="/images/f3.png"
                  className="img-fluid w-100 rounded-4"
                />
              </div>
            </div>
          </div>{" "}
        </div>
        <div style={{ backgroundColor: "#FFFFFF", paddingBlock: "100px" }}>
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-md-6">
                <div className="gap-17 d-flex flex-column p-3 p-md-5 ps-0">
                  <div>
                    <h6 className="text-center">Sell USDT in Dubai</h6>
                    <h3 className="Heading03" style={{ color: "#22246A" }}>
                      Manager’s Cheque
                    </h3>
                  </div>
                  <div className="Paragraph">
                    Manager&apos;s cheques are a trusted and widely accepted
                    form of payment in the UAE, commonly used for real estate
                    transactions, property purchases, and large-scale business
                    deals. At DubaiOTC, we promptly and securely provide
                    manager&apos;s cheques, ensuring a reliable solution for
                    high-value transactions in both personal and business
                    contexts.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  alt="Buy USDT in Dubai for cash"
                  src="/images/f4.png"
                  className="img-fluid w-100 rounded-4"
                />
              </div>
            </div>
          </div>{" "}
        </div>
        <div style={{ backgroundColor: "#F7F7F7", paddingBlock: "100px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="gap-17 d-flex flex-column p-3 p-md-5 ps-0">
                  <div>
                    <h6 className="text-center">Sell USDT for cash in Dubai</h6>
                    <h3 className="Heading03" style={{ color: "#22246A" }}>
                      Cryptocurrency OTC Services in India
                    </h3>
                  </div>
                  <div className="Paragraph">
                    Experience our professional Crypto OTC exchange services in
                    major cities in India, where we fulfill large requirements
                    for our clients at competitive market rates, ensuring
                    compliance with privacy policies and terms of use. Check our
                    Telegram channel for current rates and get in touch with us
                    to explore our OTC services in India.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  alt="Buy USDT in Dubai for cash"
                  src="/images/f5.png"
                  className="img-fluid w-100 rounded-4"
                />
              </div>
            </div>
          </div>{" "}
        </div>
        <div style={{ backgroundColor: "#DCDFFB", paddingBlock: "100px" }}>
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-md-6">
                <div className="gap-17 d-flex flex-column p-3 p-md-5 ps-0">
                  <div>
                    <h6 className="text-center">
                      Sell USDT for bank transfer in Dubai
                    </h6>
                    <h3 className="Heading03" style={{ color: "#22246A" }}>
                      SEPA Payments
                    </h3>
                  </div>
                  <div className="Paragraph">
                    Our platform provides SEPA transfers for seamless B2B & B2C
                    transactions, accessible from P2P platforms and directly
                    through our official Telegram. Enjoy hassle-free AED
                    transactions with our SEPA payment services.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  alt="Buy USDT in Dubai for cash"
                  src="/images/f6.png"
                  className="img-fluid w-100 rounded-4"
                />
              </div>
            </div>
          </div>{" "}
        </div>
        <div style={{ backgroundColor: "#F7F7F7", paddingBlock: "100px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="gap-17 d-flex flex-column p-3 p-md-5 ps-0">
                  <h3 className="Heading03" style={{ color: "#22246A" }}>
                    How To Trade
                  </h3>
                  <div className="Paragraph">
                    Unlock exclusive trading benefits with our registered
                    partnerships:
                    <br />
                    <br />
                    <div className="fw-bold">
                      1. Binance Professional Merchant Partner - Check our
                      Profile
                      <br />
                      <br />
                      2. Kucoin Merchant - Check our Profile
                      <br />
                      <br />
                      3. HTX Super Advertiser - Check our Profile
                      <br />
                      <br />
                      4. OKX Diamond Merchant - Check our Profile
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  alt="Buy USDT in Dubai for bank Transfer"
                  src="/images/f7.png"
                  className="img-fluid w-100 rounded-4"
                />
              </div>
            </div>
          </div>{" "}
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
