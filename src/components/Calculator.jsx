"use client";
import { useEffect, useState } from "react";

function Calculator() {
  const [currencyrate, setCurrencyRate] = useState({
    AED: 3.67,
    INR: 83.31,
    USDT: 1,
    BTC: 67762.37,
    ETH: 3727.79,
  });

  const [payCurrency, setpayCurrency] = useState("AED");
  const [getCurrency, setGetCurrency] = useState("USDT");
  const [pay, setPay] = useState(1000);
  const [get, setGet] = useState(0);

  async function getRate() {
    const response = await fetch(
      `https://api1.binance.com/api/v3/ticker/price?symbols=["BTCUSDT","ETHUSDT"]`
    );
    const data = await response.json();
    const currencyrate = {
      AED: 3.67,
      INR: 83.31,
      USDT: 1,
      BTC: data[0].price,
      ETH: data[1].price,
    };

    setCurrencyRate(currencyrate);
  }

  useEffect(() => {
    setGet(
      (pay / currencyrate[payCurrency] / currencyrate[getCurrency]).toFixed(6)
    );

    getRate();
  }, []);

  return (
    <div className="h-100 w-100 d-flex justify-content-center  align-items-center position-relative">
      <img
        alt="Sell USDT for cash in Dubai"
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
                    onKeyUp={(e) => {
                      setGet(
                        (
                          e.target.value /
                          currencyrate[payCurrency] /
                          currencyrate[getCurrency]
                        ).toFixed(6)
                      );
                    }}
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
                    {payCurrency === "AED" ? (
                      <img
                        alt="Sell USDT for cash in Dubai"
                        src="/images/aed.png"
                        width={"34"}
                      />
                    ) : (
                      <img
                        alt="Sell USDT for cash in Dubai"
                        src="/images/inr.png"
                        width={"34"}
                      />
                    )}
                    <select
                      value={payCurrency}
                      onChange={(e) => {
                        setpayCurrency(e.target.value);
                        setGet(
                          (
                            pay /
                            currencyrate[e.target.value] /
                            currencyrate[getCurrency]
                          ).toFixed(6)
                        );
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
                    onKeyUp={(e) => {
                      setPay(
                        (
                          e.target.value *
                          currencyrate[getCurrency] *
                          currencyrate[payCurrency]
                        ).toFixed(2)
                      );
                    }}
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
                    {getCurrency === "USDT" ? (
                      <img
                        alt="Sell USDT for cash in Dubai"
                        src="/images/usdt.png"
                        width={"34"}
                      />
                    ) : getCurrency === "BTC" ? (
                      <img
                        alt="Sell USDT for bank transfer in Dubai"
                        src="/images/btc.png"
                        width={"34"}
                      />
                    ) : (
                      <img
                        alt="Sell USDT for bank transfer in Dubai"
                        src="/images/eth.png"
                        width={"34"}
                      />
                    )}
                    <select
                      value={getCurrency}
                      onChange={(e) => {
                        setGetCurrency(e.target.value);
                        setPay(
                          (
                            get *
                            currencyrate[payCurrency] *
                            currencyrate[e.target.value]
                          ).toFixed(2)
                        );
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
            <img alt="Sell USDT for bank transfer in Dubai" src="/images/eth.png" width={"24"} />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Calculator;
