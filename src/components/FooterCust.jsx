import Link from "next/link";

export const FooterCust = ({ home }) => {
  return (
    <>
      {/* newsletter */}
      <section
        style={{
          paddingBlock: "110px",
          paddingInline: "20px",
          background: "#8890f1",
          zoom: home ? "0.8" : "0.8",
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
            <h2
              className="Heading01"
              style={{
                maxWidth: "898px",
              }}
            >
              Connect with Us on Telegram for Official Customer Support
            </h2>
            <div
              className="text-light Paragraphlarge"
              style={{
                maxWidth: "700px",
              }}
            >
              Join our active Telegram channel for up-to-the-minute price
              updates and use our chatbots for instant support. Stay in the loop
              about latest updates.
            </div>
          </div>
          <div>
            <a
              className="anot"
              href="https://t.me/DubaiOTCofficial"
              target="_blank"
            >
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
                <img
                  alt="Buy USDT in Dubai for bank Transfer"
                  src="images/telegram-icon.png"
                  width={42}
                  height={42}
                />
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
            </a>
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
          zoom: home ? "0.8" : "0.8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="d-flex gap-16 flex-column text-white h-100 align-items-center">
          <div style={{ maxWidth: "1600px" }}>
            <div className="row g-5">
              <div className="col-lg-4 col-md-12">
                <div className="d-flex flex-column gap-33">
                  <div>
                    <img
                      alt="Buy USDT in Dubai for bank Transfer"
                      src="images/logo-white.png"
                      width={200}
                    />
                  </div>
                  <p className="fs-5">
                    DubaiOTC is a user-friendly and fast-rising cryptocurrency
                    exchange platform based in Dubai, that facilitates the
                    buying and selling of cryptocurrencies in the UAE.
                    <br />
                    We offer top-class cryptocurrency trading services to
                    individuals, companies and investors of all magnitudes and
                    experiences in the crypto space. At DubaiOTC, we make
                    cryptocurrency trading easier and faster for all.
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="d-flex flex-column gap-32">
                  <div className="Heading03">Pages</div>
                  <div className="d-flex text-light flex-column gap-20">
                    <Link className="anot" href="/">
                      <div className="Paragraphmd">Home</div>
                    </Link>
                    <Link className="anot" href="/service">
                      <div className="Paragraphmd">Services</div>
                    </Link>
                    <Link className="anot" href="/company">
                      <div className="Paragraphmd">Company</div>
                    </Link>
                    <Link className="anot" href="/support">
                      <div className="Paragraphmd">Support</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="d-flex flex-column gap-32">
                  <div className="Heading03">Explore More</div>
                  <div className="d-flex flex-wrap gap-40">
                    <div className="d-flex text-light flex-column gap-20">
                      <Link className="anot" href="/buy-USDT">
                        <div className="Paragraphmd">Buy USDT</div>
                      </Link>
                      <Link className="anot" href="/buy-ETH">
                        <div className="Paragraphmd">Buy ETH</div>
                      </Link>
                      <Link className="anot" href="/buy-Bitcoin">
                        <div className="Paragraphmd">Buy Bitcoin</div>
                      </Link>
                      <Link className="anot" href="/buy-USDC">
                        <div className="Paragraphmd">Buy USDC</div>
                      </Link>
                      <Link className="anot" href="/buy-TUSD">
                        <div className="Paragraphmd">Buy TUSD</div>
                      </Link>
                    </div>
                    <div className="d-flex text-light flex-column gap-20">
                      <Link className="anot" href="/sell-USDT">
                        <div className="Paragraphmd">Sell USDT</div>
                      </Link>
                      <Link className="anot" href="/sell-ETH">
                        <div className="Paragraphmd">Sell ETH</div>
                      </Link>
                      <Link className="anot" href="/sell-Bitcoin">
                        <div className="Paragraphmd">Sell Bitcoin</div>
                      </Link>
                      <Link className="anot" href="/sell-USDC">
                        <div className="Paragraphmd">Sell USDC</div>
                      </Link>
                      <Link className="anot" href="/sell-TUSD">
                        <div className="Paragraphmd">Sell TUSD</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="d-flex mb-4 flex-column gap-50">
                  <div className="Heading01">Get in touch with us now</div>
                </div>
                <div className="d-flex flex-wrap justify-content-center gap-17">
                  <a href="https://www.instagram.com/dubaiotc/" target="_blank">
                    <div className="footer-social">
                      <img
                        alt="Buy USDT in Dubai for bank Transfer"
                        src="images/instagram-icon.png"
                        className="rounded-2"
                        height={54}
                      />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dubai-otc-6a15b6251/"
                    target="_blank"
                  >
                    <div className="footer-social">
                      <img
                        alt="Buy USDT in Dubai for bank Transfer"
                        src="images/linkedin-icon.png"
                        className="rounded-2"
                        height={54}
                      />
                    </div>
                  </a>
                  <a href="https://twitter.com/DubaiOtc" target="_blank">
                    <div className="footer-social">
                      <img
                        alt="Buy USDT in Dubai for bank Transfer"
                        src="images/twitter-icon.png"
                        className="rounded-2"
                        height={54}
                      />
                    </div>
                  </a>
                  <a href="https://medium.com/@dubaiotc" target="_blank">
                    <div className="footer-social">
                      <img
                        alt="Sell USDT for cash in Dubai"
                        src="images/medium-icon.png"
                        className="rounded-2"
                        height={54}
                      />
                    </div>
                  </a>
                  <a
                    href="https://www.reddit.com/user/Dubai_OTC"
                    target="_blank"
                  >
                    <div className="footer-social">
                      <img
                        alt="Sell USDT for cash in Dubai"
                        src="images/reddit-icon.png"
                        className="rounded-2"
                        height={54}
                      />
                    </div>
                  </a>
                  <a href="https://www.pinterest.com/DubaiOTC/" target="_blank">
                    <div className="footer-social">
                      <img
                        alt="Sell USDT for cash in Dubai"
                        src="images/pinterest-icon.png"
                        className="rounded-2"
                        height={54}
                      />
                    </div>
                  </a>
                  <a href="https://www.facebook.com/dubaiotc/" target="_blank">
                    <div className="footer-social">
                      <img
                        alt="Sell USDT for cash in Dubai"
                        src="images/facebook-icon.png"
                        className="rounded-2"
                        height={54}
                      />
                    </div>
                  </a>
                  <a
                    href="https://www.quora.com/profile/DubaiOTC"
                    target="_blank"
                  >
                    <div className="footer-social">
                      <img
                        alt="Sell USDT for cash in Dubai"
                        src="images/quora-icon.png"
                        className="rounded-2"
                        height={54}
                      />
                    </div>
                  </a>
                  <a href="" target="_blank">
                    <div className="footer-social">
                      <img
                        alt="Sell USDT for cash in Dubai"
                        src="images/discord-icon.png"
                        className="rounded-2"
                        height={54}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex w-100 justify-content-between flex-wrap gap-3 mt-3 fs-4">
            <div className="Paragraphmd">
              Copyright © 2024 All rights reserved | DubaiOTC
            </div>
            <div className="d-flex gap-32">
              <Link className="anot" href="/terms">
                <div className="Paragraphmd">Terms of Use</div>
              </Link>
              <Link className="anot" href="/privacy">
                <div className="Paragraphmd">Privacy Policy</div>
              </Link>
              <Link className="anot" href="/cookie">
                <div className="Paragraphmd">Cookie Policy</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
