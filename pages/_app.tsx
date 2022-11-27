import "../styles/globals.css";

import "normalize.css/normalize.css";

import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				strategy="afterInteractive"
				src="https://www.googletagmanager.com/gtag/js?id=G-6ZS9X7XH10"
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-6ZS9X7XH10', {
page_path: window.location.pathname,
});
`,
				}}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
