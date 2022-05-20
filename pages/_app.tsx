import "styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@/Layout/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
