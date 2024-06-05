import PartnersSlider from "../../components/PartnersSlider";
import { Header } from "../../components/Header";
import { FooterCust } from "../../components/FooterCust";

const Terms = () => {
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
            <div className="hero-text mt-3">Terms of Use</div>
          </div>
        </div>
      </section>

      <section className="bg-light mt-5 pb-5">
        <div className=" py-5">
          <div className="container bg-light rounded-5 shadow p-3 bg-white p-md-5">
            <div>
              <h3>Terms of Use Agreement</h3>
              <div className="text-secondary fs-5 mb-3">
                Last revised: 20 Aug 2022
              </div>
              <p className="fs-5">
                <span className="fw-semibold">
                  You may not use the DubaiOTC service for the following
                  activities:
                </span>{" "}
                <br />
                This Terms of Use Agreement (the &quot;Agreement&quot;) is
                entered into by and between the user (&quot;User&quot; or
                &quot;you&quot;) and DubaiOTC (&quot;Company,&quot;
                &quot;we,&quot; or &quot;us&quot;). This Agreement governs your
                use of the DubaiOTC accessible at https://www.dubaiotc.com (the
                &quot;Platform&quot;). By accessing and using the Platform, you
                agree to be bound by the terms and conditions set forth in this
                Agreement.
              </p>
              <h3>DISCLAIMER</h3>
              <ol className="fs-5">
                <li className="fw-semibold">Acceptance of Terms</li>
                <p>
                  By accessing or using the Platform, you agree to comply with
                  and be bound by these Terms of Use. If you do not agree to
                  these Terms of Use, you must not use the Platform.
                </p>
                <li className="fw-semibold">
                  Registration and Account Security
                </li>
                <ol type="a">
                  <li>
                    To access certain features of the Platform, you must
                    register for an account. You agree to provide accurate,
                    current, and complete information during the registration
                    process and to update such information to keep it accurate,
                    current, and complete.
                  </li>
                  <li>
                    You are responsible for maintaining the confidentiality of
                    your account information, including your username and
                    password. You agree to accept responsibility for all
                    activities that occur under your account.
                  </li>
                </ol>
                <li className="fw-semibold">Use of the Platform</li>
                <ol type="a">
                  <li>
                    You agree to use the Platform solely for the purpose of
                    engaging in over-the-counter (OTC) cryptocurrency
                    transactions in compliance with applicable laws and
                    regulations.
                  </li>
                  <li>
                    DubaiOTC acts as an intermediary for OTC transactions and
                    does not provide investment advice. Users are encouraged to
                    conduct their own research and seek professional advice.
                  </li>
                </ol>
                <li className="fw-semibold">Risks and Disclaimer</li>
                <ol type="a">
                  <li>
                    Cryptocurrency trading involves substantial risk. DubaiOTC
                    provides information on potential risks, but you acknowledge
                    that you are solely responsible for understanding and
                    assuming these risks.
                  </li>
                  <li>
                    DubaiOTC does not provide financial, investment, or legal
                    advice. Users are strongly advised to independently assess
                    the risks associated with cryptocurrency trading.
                  </li>
                </ol>
                <li className="fw-semibold">Compliance with Laws</li>
                <p>
                  You agree to comply with all applicable laws and regulations
                  related to cryptocurrency trading, including but not limited
                  to anti-money laundering (AML) and know your customer (KYC)
                  regulations.
                </p>
                <li className="fw-semibold">Transaction Terms</li>
                <ol type="a">
                  <li>
                    Users agree to abide by the transaction terms agreed upon
                    with counterparties on the Platform.
                  </li>
                  <li>
                    DubaiOTC reserves the right to review and monitor
                    transactions for compliance with these Terms of Use.
                  </li>
                </ol>
                <li className="fw-semibold">Termination</li>
                <p>
                  DubaiOTC reserves the right, in its sole discretion, to
                  terminate or suspend your access to the Platform at any time
                  without notice for any reason, including but not limited to a
                  breach of these Terms of Use.
                </p>
                <li className="fw-semibold">Amendments</li>
                <p>
                  DubaiOTC may amend these Terms of Use at any time by posting
                  the amended terms on the Platform. Your continued use of the
                  Platform after such amendments will constitute acceptance of
                  the new terms.
                </p>
                <li className="fw-semibold">Governing Law</li>
                <p>
                  This Agreement is governed by and construed in accordance with
                  the laws of the United Arab Emirates. Any dispute arising out
                  of or in connection with this Agreement shall be subject to
                  the exclusive jurisdiction of the courts of Dubai.
                  <br />
                  <br />
                  By using the DubaiOTC Platform, you acknowledge that you have
                  read, understood, and agree to be bound by these detailed
                  Terms of Use. If you do not agree to these terms, please
                  refrain from using the Platform.
                </p>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <FooterCust home={false} />
    </>
  );
};

export default Terms;
