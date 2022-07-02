import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { SchemaOf, object, string } from "yup";
import "yup-phone";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage, FormikState } from "formik";
import clienteAxios from "../../../../services/axios";

interface IContactForm {
	fullname: string;
	phone: string;
	email: string;
	message: string;
}

const validationSchema: SchemaOf<IContactForm> = object({
	fullname: string().required("Su nombre es requerido"),
	phone: string().required("El telefono es necesario"),
	email: string()
		.required("El email es requerido")
		.email("Debe ingresar un email valido"),
	message: string().required("Ingrese un mensaje"),
});

interface ContactFormProps {
	loading: boolean;
	setLoading: Dispatch<SetStateAction<boolean>>;
}

const ContactForm: FunctionComponent<ContactFormProps> = ({
	setLoading,
	loading,
}) => {
	const initialValues: IContactForm = {
		fullname: "",
		phone: "",
		email: "",
		message: "",
	};
	const handleSubmit = async (
		values: IContactForm,
		resetForm: (
			nextState?: Partial<FormikState<IContactForm>> | undefined
		) => void
	) => {
		try {
			const answer = await clienteAxios.post("/api/mail-service", values);
			toast.success("Mensaje enviado", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			resetForm();
		} catch (error) {
			toast.error("Algo salio mal, intente nuevamente!", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};
	return (
		<section className="bg-gray-100 min-h-screen flex justify-center items-center flex-col pb-32">
			<h4 className="text-4xl p-3 mt-32 text-secondary">CONTACTENOS</h4>
			<div className="w-10/12">
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={async (values, { resetForm }) => {
						setLoading(true);
						await handleSubmit(values, resetForm);

						setLoading(false);
					}}
				>
					<Form className="flex flex-col justify-center items-center mx-auto p-3  w-full md:w-3/5">
						<div className=" text-xl  w-full">
							<label
								htmlFor="fullname"
								className="block text-secondary text-lg font-bold pt-2 pb-1"
							>
								Nombre Completo
							</label>
							<Field
								id="fullname"
								name="fullname"
								placeholder="Ingrese su nombre completo"
								className=" focus:outline-none w-full p-2 rounded-xl focus:border-2 focus:border-secondary   "
							/>
							<div className="w-full text-center text-red-500 text-sm p-1">
								<ErrorMessage name="fullname" />
							</div>
						</div>
						<div className=" text-xl  w-full">
							<label
								className="block text-secondary text-lg font-bold pt-2 pb-1"
								htmlFor="phone"
							>
								Telefono
							</label>
							<Field
								id="phone"
								name="phone"
								placeholder="Ingrese su telefono"
								className=" focus:outline-none w-full p-2 rounded-xl focus:border-2 focus:border-secondary "
							/>
							<div className="w-full text-center text-red-500 text-sm p-1">
								<ErrorMessage name="phone" />
							</div>
						</div>
						<div className=" text-xl  w-full">
							<label
								className="block text-secondary text-lg font-bold pt-2 pb-1"
								htmlFor="email"
							>
								Email
							</label>
							<Field
								className=" focus:outline-none w-full p-2 rounded-xl focus:border-2 focus:border-secondary "
								id="email"
								name="email"
								placeholder="Ingrese su email"
							/>
							<div className="w-full text-center text-red-500 text-sm p-1">
								<ErrorMessage name="email" />
							</div>
						</div>
						<div className=" text-xl  w-full">
							<label
								className="block text-secondary text-lg font-bold pt-2 pb-1"
								htmlFor="message"
							>
								Escribanos
							</label>
							<Field
								id="message"
								name="message"
								placeholder="Deje su mensaje"
								as="textarea"
								className=" focus:outline-none w-full p-2 rounded-xl focus:border-2 focus:border-secondary resize-none min-h-area"
							/>
							<div className="w-full text-center text-red-500 text-sm p-1">
								<ErrorMessage name="message" />
							</div>
						</div>
						{loading ? (
							<button
								disabled
								type="button"
								className="bg-gray-700 text-white font-bold py-2 px-4 mt-3 w-full rounded hover:bg-gray-600 focus:ring-blue-300  text-sm  text-center  inline-flex justify-center items-center"
							>
								<svg
									role="status"
									className="inline w-4 h-4 mr-3 text-white animate-spin"
									viewBox="0 0 100 101"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
										fill="#E5E7EB"
									/>
									<path
										d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
										fill="currentColor"
									/>
								</svg>
								Loading...
							</button>
						) : (
							<button
								className="bg-gray-700 text-white font-bold py-2 px-4 mt-3 w-full rounded hover:bg-gray-600"
								type="submit"
							>
								Enviar
							</button>
						)}
					</Form>
				</Formik>
			</div>
		</section>
	);
};

export default ContactForm;
