import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      <div className="main-content">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
