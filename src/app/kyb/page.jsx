"use client";
import { Header } from "../../components/Header";
import { FooterCust } from "../../components/FooterCust";
import { useEffect, useState } from "react";

const KYB = () => {
  const [verId, setVerId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const searchParams = params.get("v");

    const search = searchParams;
    const v = search;
    setLoading(true);
    if (!v) {
      const apiUrl =
        "https://kyc-api.amlbot.com/forms/a5b485081c4fd248bf28c3e1ebf371ef7055/urls";
      const usrId = new Date().getTime();
      const postData = { external_applicant_id: usrId };

      fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: "Token 495f4b2c1e80f249df19ee031776cdfeeb3a",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .then((data) => {
          const formToken = data.form_token;
          window.location.href = `kyb?v=${formToken}`;
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          setError(err.message);
        });
    } else {
      setVerId(v);
      setLoading(false);
    }
  }, []);
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
            <div className="hero-text mt-3">KYB</div>
          </div>
        </div>
      </section>

      <section className="bg-light mt-5 pb-5">
        {loading == true ? (
          <h1 className="text-center heading02">Loading PLease Wait...</h1>
        ) : (
          <iframe
            className="w-100 "
            allow="microphone *;camera *;midi *;encrypted-media *;clipboard-read;clipboard-write;"
            style={{ height: "1000px" }}
            src={`https://kyc-forms.amlbot.com/${verId}`}
          ></iframe>
        )}
      </section>

      <FooterCust home={false} />
    </>
  );
};

export default KYB;
