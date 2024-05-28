"use client";
export const Footer = () => {
  return (
    <div>
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
    </div>
  );
};
