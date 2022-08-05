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
					<link
						href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.css"
						rel="stylesheet"
					/>

					<meta
						name="description"
						content="Casa en alquiler ubicada en Sierra de los Padres , Mar del Plata,. Contamos con una casa con cuatro habitaciones , amplio parque , parrila y pileta."
					/>
					<meta name="robots" content="index, follow"></meta>
					<meta name="author" content="Aguidev web Developer" />
					<meta property="og:site_name" content="Villa La Candelaria" />
					<meta property="og:title" content="Villa la Candelaria" />
					<meta
						property="og:description"
						content="Alquiler de casa en Sierra de Los Padres - Mar del Plata - Pileta - Parrilla"
					/>
					<meta property="og:image" itemProp="image" content="/logo.png" />
					<meta property="og:type" content="website" />
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
