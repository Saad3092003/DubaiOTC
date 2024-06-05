import Type from "./Type";
import PartnersSlider from "../../components/PartnersSlider";
import { Header } from "../../components/Header";
import { FooterCust } from "../../components/FooterCust";
import Calculator from "./Calculator";

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
        <div className="Heading04">{title}</div>
        <div className="Paragraph">{desc}</div>
      </div>
    </div>
  );
}

const Features = () => {
  return (
    <>
      <div className="hero-section pt-3">
        <div className="container">
          <Header />
        </div>
        <div className="py-5 text-white container ">
          <div className="row px-2 g-5 flex-wrap-reverse">
            <div className="col-md-6">
              <div className="gap-41 d-flex flex-column">
                <div className="Heading01 text-h1">
                  Buy <Type />
                  with EUR within minutes
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <img
                      alt="DubaiOTC"
                      src="images/Check.png"
                      width={"32"}
                      height={"32"}
                    />
                  </div>
                  <div className="Paragraph" style={{ color: "#f7f7f7" }}>
                    Buy as much as you need – we support volumes from 5 EUR to
                    up to 10M EUR.
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <img
                      alt="DubaiOTC"
                      src="images/Check.png"
                      width={"32"}
                      height={"32"}
                    />
                  </div>
                  <div className="Paragraph" style={{ color: "#f7f7f7" }}>
                    Receive crypto directly in any Metamask, Trust, or other
                    crypto wallet. As a non-custodial solution Swapin never
                    holds your funds.
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <img
                      alt="DubaiOTC"
                      src="images/Check.png"
                      width={"32"}
                      height={"32"}
                    />
                  </div>
                  <div className="Paragraph" style={{ color: "#f7f7f7" }}>
                    Enjoy the convenience of a Dedicated IBAN issued in your
                    name for seamless transactions.
                  </div>
                </div>
                <div>
                  <button
                    className="btn btn-primary rounded-pill"
                    style={{ padding: "12px 33px" }}
                  >
                    Buy Crypto Now
                  </button>
                </div>
                <div className="d-flex flex-column gap-6">
                  <div className="Paragraph">Excellent 247 Reviews on</div>
                  <img
                    alt="DubaiOTC"
                    src="/images/trust.png"
                    className="img-fluid rounded-3"
                    width={"150"}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <Calculator />
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 container ">
        <div className="row px-2 py-5 g-5 justify-content-between">
          <div className="col-md-5">
            <img alt="DubaiOTC" src="/images/work.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="d-flex gap-41 flex-column">
              <div className="Heading01 text-center text-md-start">
                How Does it Works?
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
                <button
                  className="btn btn-primary rounded-pill"
                  style={{ padding: "12px 33px" }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content xplanation Section */}
      <div className="py-5">
        <div style={{ backgroundColor: "#FFFFFF", paddingBlock: "100px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="gap-17 d-flex flex-column p-3 p-md-5 ps-0">
                  <div className="Heading03" style={{ color: "#22246A" }}>
                    Cryptocurrency OTC Services in Dubai
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
                  alt="DubaiOTC"
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
                  <div className="Heading03" style={{ color: "#22246A" }}>
                    Cryptocurrency OTC Services in India
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
                  alt="DubaiOTC"
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
                  <div className="Heading03" style={{ color: "#22246A" }}>
                    India Bank Transfer
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
                  alt="DubaiOTC"
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
                  <div className="Heading03" style={{ color: "#22246A" }}>
                    Manager’s Cheque
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
                  alt="DubaiOTC"
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
                  <div className="Heading03" style={{ color: "#22246A" }}>
                    Cryptocurrency OTC Services in India
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
                  alt="DubaiOTC"
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
                  <div className="Heading03" style={{ color: "#22246A" }}>
                    SEPA Payments
                  </div>
                  <div className="Paragraph">
                    Our platform provides SEPA transfers for seamless B2B & B2C
                    transactions, accessible from P2P platforms and directly
                    through our official Telegram. Enjoy hassle-free European
                    transactions with our SEPA payment services.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  alt="DubaiOTC"
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
                  <div className="Heading03" style={{ color: "#22246A" }}>
                    How To Trade
                  </div>
                  <div className="Paragraph">
                    Unlock exclusive trading benefits with our registered
                    partnerships:
                    <br />
                    1.Binance Professional Merchant Partner - Check our Profile
                    <br />
                    2.Kucoin Merchant - Check our Profile
                    <br />
                    3.HTX Super Advertiser - Check our Profile
                    <br />
                    4.OKX Diamond Merchant - Check our Profile
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  alt="DubaiOTC"
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

export default Features;
