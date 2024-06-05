import PartnersSlider from "../../components/PartnersSlider";
import { Header } from "../../components/Header";
import { FooterCust } from "../../components/FooterCust";

const Privacy = () => {
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
            <div className="hero-text mt-3">Privacy Policy</div>
          </div>
        </div>
      </section>

      <section className="bg-light mt-5 pb-5">
        <div className=" py-5">
          <div className="container bg-light rounded-5 shadow p-3 bg-white p-md-5">
            <div>
              <p className="fs-5">
                DubaiOTC (DubaiOTC, we, our, us or the Company) is committed to
                providing the highest level of security concerning the
                processing of our client&apos;s personal information based on
                the relevant data protection laws and regulations. This Privacy
                Policy (Notice) represents how we may gather, store, use, reveal
                or otherwise process confidential data.
                <br />
                <br />
                Please read this Privacy Notice carefully. This Policy Notice
                involves your personal data, as well as your right over the
                privacy and processing of your personal information. You are
                solely responsible for complying with all applicable laws in all
                of your activities associated with the use of DubaiOTC&apos;s
                services, however of the purpose of the use. Additionally, you
                must adhere to the terms of this Acceptable Use of Policy.
              </p>
              <h3>PROHIBITED ACTIVITIES</h3>
              <p className="fs-5 fw-semibold">
                You may not use the DubaiOTC service for the following
                activities:
              </p>
              <ol className="fs-5">
                <li>Violate any law, rule, or regulation.</li>
                <li>
                  Associated with transactions concerning.
                  <ol type="a">
                    <li>
                      narcotics, drugs, certain collected substances or
                      distinctive products that offer a risk to client security,
                    </li>

                    <li>drug paraphernalia, or cigarettes,</li>

                    <li>stolen goods including virtual and digital goods,</li>

                    <li>
                      things that promote, facilitate, encourage or instruct
                      others to engage in prohibited activity,
                    </li>

                    <li>
                      the promotion of violence, hate, ethnical intolerance or
                      the economic exploitation of a crime,
                    </li>

                    <li>things that are considered offensive,</li>

                    <li>
                      things that violate or break any copyright, trademark,
                      right of privacy or promotion or any other proprietary
                      right underneath the laws of any jurisdiction,
                    </li>

                    <li>certain sexually oriented services,</li>

                    <li>
                      certain knives or weapons regulated beneath relevant law
                    </li>
                  </ol>
                </li>
                <li>
                  Transactions relate
                  <ul>
                    <li>
                      showing the confidential details of third parties in
                      violation of relevant law,
                    </li>
                    <li>
                      support matrix programs, Ponzi schemes, and other
                      &quot;get rich quick&quot;
                    </li>
                    <li>schemes or certain multi-level dealing programs,</li>
                    <li>
                      are associated with lottery contracts, purchases of
                      annuities or off-shore banking or lay-away systems,
                      dealings to finance or refinance debts funded by credit
                      cards,
                    </li>
                    <li>
                      are by collecting payments on behalf of merchants, or sale
                      of certain items before the seller has control or
                      possession of the item
                    </li>
                  </ul>
                </li>
                We may gather personal data directly from customers through
                Company’s application forms, or communications and we may accept
                these in writing or electronically.
              </ol>
              <p className="fs-5">
                <b>Identity information:</b> such as name, age/date of birth,
                gender, marital status, name of partner and children(s), place
                of birth, nationality, passport number, individual and country
                of tax residency and verification of identities such as a copy
                of your passport or identity document when we verify individuals
                identify to meet tax, Know Your Customer (KYC) and Anti-Money
                Laundering (AML) and regulatory obligations.
              </p>
              <p className="fs-5">
                <b>Personal details:</b> such as details on your profession,
                education, employment, details on the source of income, funds,
                tax details, bank statements and/or bank details, financial
                understanding and knowledge, risk ability and investment
                experience, and understanding goals and objectives in looking
                for our services, where applicable.
              </p>
              <p className="fs-5">
                <b>Contact details:</b> contains information such as billing or
                delivery address, telephone number(s) and email address.
              </p>
              <p className="fs-5">
                For limited purposes, in the case of undertaking KYC and AML
                checks, it may be essential for us to process certain sorts of
                personal data. This may contain data about illegal convictions
                and details about your political exposure, where we are
                authorised to utilise this data under the appropriate data
                protection laws and regulations. In these cases, we will process
                such personal data only when there is a legal cause we can rely
                on upon under the relevant data protection laws.
                <br />
                We regularly review our compliance with this Policy Notice. If
                we receive a formal written objection from you, we will directly
                reach you to your address any of your concerns. Any conflict,
                dispute or claim emerging out of or relating to this Notice or
                the violation, termination or validity thereof shall be
                eventually settled according to the terms of the User Agreement
                you have confirmed into.
                <br />
                <strong>
                  If you have any queries about our Policy Notice, you may
                  contact us.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterCust home={false} />
    </>
  );
};

export default Privacy;
