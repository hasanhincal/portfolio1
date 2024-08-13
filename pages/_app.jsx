import { fuchsia } from "tailwindcss/colors";
import NextProgress from "nextjs-progressbar";
import "@/app/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <NextProgress color={fuchsia[500]} height={4} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
