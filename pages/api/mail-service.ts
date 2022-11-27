import sgMail, { MailDataRequired } from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import * as env from "env-var";

type Data = {
	msg: string;
	error?: string;
};
const SENGRID: string = env.get("SENGRID").required().asString();

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { fullname, phone, email, message } = req.body;
	sgMail.setApiKey(SENGRID);

	const mail: MailDataRequired = {
		to: "info@villalacandelaria.com.ar",
		from: "info@villalacandelaria.com.ar",
		text: message,
		subject: `Formulario Web ${fullname} Telefono: ${phone} Correo : ${email}`,
	};
	if (mail)
		sgMail
			.send(mail)
			.then(() => {
				res.status(200).json({ msg: "Mensaje enviado" });
			})
			.catch((error) => {
				res.status(400).json({
					msg: "Error al enviar el mensaje, intente mas tarde",
					error,
				});
			});
}
