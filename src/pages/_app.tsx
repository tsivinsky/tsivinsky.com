import { AppProps } from "next/app";
import "../scss/style.scss";

export default function App({ Component, pageProps, router }: AppProps) {
  return <Component router={router} {...pageProps} />;
}
