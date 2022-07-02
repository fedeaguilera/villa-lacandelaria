interface AroundProps {}

const Around: React.FunctionComponent<AroundProps> = () => {
	return (
		<section className="pb-20 min-h-screen bg-primary">
			<div className="pt-20">
				<h3 className="text-center text-6xl text-gallery ">
					Nuestros alredores
				</h3>
			</div>
			<div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
				<div className="flex flex-wrap -m-1 md:-m-2">
					<div className="flex flex-wrap w-1/2">
						<div className="w-1/2 p-1 md:p-2">
							<img
								alt="gallery"
								className="block object-cover object-center w-full h-full rounded-lg"
								src="/sierra_1.jpg"
							/>
						</div>
						<div className="w-1/2 p-1 md:p-2">
							<img
								alt="gallery"
								className="block object-cover object-center w-full h-full rounded-lg"
								src="/sierra_2.jpg"
							/>
						</div>
						<div className="w-full p-1 md:p-2">
							<img
								alt="gallery"
								className="block object-cover object-center w-full h-full rounded-lg"
								src="/laguna.jpg"
							/>
						</div>
					</div>
					<div className="flex flex-wrap w-1/2">
						<div className="w-full p-1 md:p-2">
							<img
								alt="gallery"
								className="block object-cover object-center w-full h-full rounded-lg"
								src="/laguna_2.jpg"
							/>
						</div>
						<div className="w-1/2 p-1 md:p-2">
							<img
								alt="gallery"
								className="block object-cover object-center w-full h-full rounded-lg"
								src="/sierra_3.jpg"
							/>
						</div>
						<div className="w-1/2 p-1 md:p-2">
							<img
								alt="gallery"
								className="block object-cover object-center w-full h-full rounded-lg"
								src="sierra_4.jpg"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="w-9/12 my-20 mx-auto p-9">
				<p className="text-justify text-xl text-test font-semibold">
					A tan solo unos minutos se encuentra la Reserva Natural Municipal
					Lagunda de los Padres.Dentro de la misma se encuentra el Museo
					Tradicionalista José Hernández, donde vivió el autor del Martín Fierro
					y la escuela de Educación Secundaria Agraria Nro. 1. Sobre las costas
					de la laguna hay distintos centros recreativos, como el Club de Pesca,
					el de los empleados municipales, y amplias áreas boscosas libres.
					Desde 1995, en ocasión de los Juegos Panamericanos, se construyó la
					cancha de remo, de 2000 m de largo, dragando y señalizando parte de la
					laguna. Ademas podra disfrutar de{" "}
					<span>la Gruta de los Pañuelos</span> situado en lo alto de la{" "}
					<span>Sierra de los Padres</span>
				</p>
			</div>
		</section>
	);
};

export default Around;
