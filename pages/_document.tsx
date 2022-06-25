import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";
import Footer from "../components/index/footer/Footer";
import WhatsAppIcon from "../components/index/main/SocialNetwork/WhatsAppIcon";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin={"crossOrigin"}
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Belleza&family=Fleur+De+Leah&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						charSet="UTF-8"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
					/>
					<title>Villa La Candelaria - Sierra de Los Padres</title>
					<meta
						name="description"
						content="Casa en alquiler ubicada en Sierra de los Padres , Mar del Plata,. Contamos con una casa con cuatro habitaciones , amplio parque , parrila y pileta."
					/>
					<meta name="robots" content="index, follow"></meta>
					<meta name="author" content="Aguidev web Developer" />
				</Head>
				<body className="font-body">
					<WhatsAppIcon />
					<Main />
					<NextScript />
					<Footer />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
