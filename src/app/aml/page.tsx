import PartnersSlider from "../../components/PartnersSlider";
import { Header } from "../../components/Header";
import { FooterCust } from "../../components/FooterCust";

const AML = () => {
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
            <div
              className="badge rounded-pill"
              style={{
                backgroundColor: "#22246A",
                fontSize: "11px",
                fontWeight: "400",
              }}
            >
              AML - DubaiOTC
            </div>
            <div className="hero-text mt-3">AML Policy</div>
          </div>
        </div>
      </section>

      <section className="bg-light mt-5 pb-5">
        <div className=" py-5">
          <div className="container bg-light rounded-5 shadow p-3 bg-white p-md-5">
            <div>
              <h3>
                Anti-Money Laundering (AML) Policy for DubaiOTC - Cryptocurrency
                OTC &amp; Payment Company
              </h3>
              <div className="text-secondary fs-5 mb-3">
                Last revised: 20 Aug 2022
              </div>
              <ol className="fs-5">
                <li className="fw-semibold">Introduction</li>
                <p>
                  DubaiOTC (&quot;Company&quot;) is dedicated to maintaining the
                  highest standards of integrity, transparency, and regulatory
                  compliance in its operations. This comprehensive Anti-Money
                  Laundering (AML) Policy outlines the measures and procedures
                  in place to detect, prevent, and report money laundering,
                  terrorist financing, and other illicit activities,
                  incorporating rigorous Know Your Customer (KYC), Know Your
                  Business (KYB), and Know Your Transaction (KYT) processes.
                  DubaiOTC is proud to partner with AMLBot to enhance the
                  effectiveness of these processes.
                </p>
                <li className="fw-semibold">
                  Know Your Customer (KYC) and Know Your Business (KYB)
                  Procedures
                </li>
                <ol type="a">
                  <li>
                    Individual User Identification (KYC): The KYC process
                    involves a multi-step verification procedure for individual
                    users, leveraging AMLBot&apos;s advanced identification and
                    verification services.
                  </li>
                  <li>
                    Business User Identification (KYB): In cases where users
                    represent businesses, the KYB process involves in-depth
                    verification of the business entity, utilizing AMLBot&apos;s
                    comprehensive business verification solutions.
                  </li>
                  <li>
                    Enhanced Due Diligence (EDD): Enhanced Due Diligence is
                    applied to users and businesses deemed to pose a higher
                    risk, with AMLBot providing additional layers of scrutiny
                    and verification.
                  </li>
                </ol>
                <li className="fw-semibold">Transaction Monitoring</li>
                <ol type="a">
                  <li>
                    Automated Monitoring Systems (KYT): DubaiOTC utilizes
                    AMLBot&apos;s cutting-edge technology for real-time
                    transaction monitoring (KYT). This includes analyzing
                    transaction patterns, volumes, and other relevant factors to
                    identify suspicious activities.
                  </li>
                  <li>
                    Thresholds and Alerts: Establishing transaction thresholds
                    triggers alerts for further scrutiny, with AMLBot&apos;s
                    capabilities enhancing the precision of identifying
                    suspicious transactions and patterns.
                  </li>
                </ol>
                <li className="fw-semibold">Reporting Suspicious Activities</li>
                <ol type="a">
                  <li>
                    Internal Reporting: All employees are trained to recognize
                    and report any unusual or suspicious activities promptly to
                    the designated AML officer. A dedicated internal team, with
                    support from AMLBot&apos;s analytics, investigates reported
                    incidents and takes appropriate actions.
                  </li>
                  <li>
                    External Reporting: DubaiOTC, in collaboration with AMLBot,
                    is committed to full cooperation with regulatory authorities
                    and law enforcement agencies. Suspicious transactions are
                    reported promptly as required by applicable laws, providing
                    comprehensive information for investigations.
                  </li>
                </ol>
                <li className="fw-semibold">Record Keeping</li>
                <p>
                  The Company maintains meticulous records of user and business
                  information, transactions, and AML compliance efforts, with
                  AMLBot&apos;s assistance in secure data storage and retrieval.
                </p>
                <li className="fw-semibold">Employee Training and Awareness</li>
                <p>
                  Continuous and comprehensive training programs, including
                  AMLBot&apos;s latest features and capabilities, are provided
                  to all employees regarding AML, KYC, KYB, and KYT policies and
                  procedures.
                </p>
                <li className="fw-semibold">Compliance Oversight</li>
                <p>
                  A designated AML officer oversees the implementation and
                  adherence to this AML Policy, ensuring alignment with
                  regulatory changes and leveraging AMLBot&apos;s advanced
                  analytics for continuous improvement.
                </p>
                <li className="fw-semibold">
                  Cooperation with Regulatory Authorities
                </li>
                <p>
                  DubaiOTC, with support from AMLBot, pledges full cooperation
                  with regulatory authorities and law enforcement agencies. The
                  Company is committed to providing timely and accurate
                  information, facilitating investigations into suspected money
                  laundering activities.
                </p>
                <li className="fw-semibold">Policy Review and Updates</li>
                <p>
                  This AML Policy is subject to periodic reviews and updates to
                  address changes in laws, regulations, or industry best
                  practices. Users will be informed of any significant changes,
                  and their continued use of the platform implies acceptance of
                  these updates.
                  <br />
                  <br />
                  By using the DubaiOTC platform, users acknowledge and agree to
                  adhere to this comprehensive Anti-Money Laundering Policy,
                  with AMLBot as a trusted partner. The Company reserves the
                  right to take appropriate actions, including the suspension or
                  termination of accounts, for non-compliance with AML, KYC,
                  KYB, and KYT procedures.
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

export default AML;
