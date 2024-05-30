"use client";
import { useEffect, useState } from "react";
const convertCryptoCurrencyPrice = require("crypto-price-converter-xid");

function Calculator() {
  const [payCurrency, setpayCurrency] = useState("AED");
  const [getCurrency, setGetCurrency] = useState("USDT");
  const [pay, setPay] = useState(1);
  const [get, setGet] = useState(0);

  async function currencytocrypto(payCurrency, getCurrency) {
    let crypto = await convertCryptoCurrencyPrice(payCurrency, getCurrency);
    setGet(crypto.toFixed(2));
  }

  async function cryptoToCurrency(payCurrency, getCurrency) {
    let crypto = await convertCryptoCurrencyPrice(getCurrency, payCurrency);
    setPay(crypto.toFixed(2));
  }
  useEffect(() => {
    currencytocrypto(payCurrency, getCurrency);
  }, []);

  return (
    <div className="h-100 w-100 d-flex justify-content-center  align-items-center position-relative">
      <img
        src="/images/grad.png"
        className="img-fluid"
        style={{
          zIndex: -1,
          position: "absolute",
          top: -50,
          right: 50,
          scale: 1.2,
        }}
      />
      <div
        style={{ maxWidth: "430px" }}
        className="p-md-5 p-4 w-100 rounded-5 bg-white shadow-lg d-flex flex-column gap-29"
      >
        <div className="d-flex flex-column gap-25">
          <div className="d-flex flex-column gap-32">
            <div className="d-flex flex-column gap-16">
              <div
                style={{
                  color: "#000",
                  fontSize: "18px",
                  fontWeight: "500",
                  lineHeight: "150%",
                }}
              >
                You Pay
              </div>
              <div
                className="d-flex justify-content-between overflow-hidden"
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                }}
              >
                <div className="p-3">
                  <input
                    value={pay}
                    onChange={(e) => setPay(e.target.value)}
                    type="number"
                    className="w-100 cal-input"
                    placeholder="3000"
                  />
                </div>
                <div
                  style={{
                    background: "#ECECEB",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    paddingLeft: "18px",
                    paddingRight: "15px",
                  }}
                >
                  <div className="d-flex gap-15">
                    <img src="/images/eth.png" width={"24"} />
                    <select
                      value={payCurrency}
                      onChange={(e) => {
                        setpayCurrency(e.target.value);
                        currencytocrypto(e.target.value, getCurrency);
                      }}
                      className="select-cal"
                      name=""
                      id=""
                    >
                      <option> AED</option>
                      <option> INR</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column gap-16">
              <div
                style={{
                  color: "#000",
                  fontSize: "18px",
                  fontWeight: "500",
                  lineHeight: "150%",
                }}
              >
                You Get
              </div>
              <div
                className="d-flex justify-content-between overflow-hidden"
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                }}
              >
                <div className="p-3">
                  <input
                    value={get}
                    onChange={(e) => setGet(e.target.value)}
                    type="number"
                    className="w-100 cal-input"
                    placeholder="3000"
                  />
                </div>
                <div
                  style={{
                    background: "#ECECEB",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    paddingLeft: "18px",
                    paddingRight: "15px",
                  }}
                >
                  <div className="d-flex gap-15">
                    <img src="/images/eth.png" width={"24"} />
                    <select
                      onChange={(e) => {
                        setGetCurrency(e.target.value);
                        cryptoToCurrency(payCurrency, e.target.value);
                      }}
                      className="select-cal"
                      name=""
                      id=""
                    >
                      <option> USDT</option>
                      <option> BTC</option>
                      <option> ETH</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="d-flex flex-column gap-16">
            <div className="d-flex justify-content-between">
              <div
                style={{
                  color: "rgba(0, 0, 0, 0.47)",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "150%",
                }}
              >
                DubaiOTC fee
              </div>
              <div
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "150%",
                }}
              >
                0 EUR
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div
                style={{
                  color: "rgba(0, 0, 0, 0.47)",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "150%",
                }}
              >
                Network fee
              </div>
              <div
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "150%",
                }}
              >
                2.7 EUR
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div
                style={{
                  color: "rgba(0, 0, 0, 0.47)",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "150%",
                }}
              >
                Exchange rate
              </div>
              <div
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "150%",
                }}
              >
                3404.71 EUR
              </div>
            </div>
          </div> */}
        </div>
        {/* <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "#000000",
          }}
        ></div>
        <div className="d-flex justify-content-between">
          <div
            style={{
              color: "rgba(0, 0, 0, 0.47)",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "150%",
            }}
          >
            Total
          </div>
          <div className="d-flex gap-9">
            <div
              style={{
                color: "#000",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "150%",
              }}
            >
              0.880339
            </div>
            <img src="/images/eth.png" width={"24"} />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Calculator;
