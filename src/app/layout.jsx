import { Rubik } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "DubaiOTC - Buy and Sell USDT Cryptocurrencies in Dubai",
  description:
    "DubaiOTC is a licensed Over-The-Counter (OTC) desk for buying and selling top cryptocurrencies in UAE. We support different cryptocurrencies, including Tether USDT, Bitcoin, Ethereum (ETH), USDC, BUSD with 0% transaction fees. Visit our office today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        {/* <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        /> */}
      </head>
      <body className={rubik.className}>
        {" "}
        {children}
        <div
          className="position-fixed bottom-0 end-0 p-3"
          style={{ zIndex: 999 }}
        >
          <a href="https://t.me/DubaiOTCofficial" target="_blank">
            <img src="/images/telegram-icon.png" width={56} />
          </a>
        </div>
      </body>
    </html>
  );
}
