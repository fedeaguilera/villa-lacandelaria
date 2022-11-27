import { NextApiRequest, NextApiResponse } from "next";
import { google, Auth } from "googleapis";
import * as env from "env-var";
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const scopes = "https://www.googleapis.com/auth/analytics.readonly";
	const GOOGLE_PRIVATE_KEY = env
		.get("GOOGLE_PRIVATE_KEY")
		.required()
		.asString();
	const GOOGLE_CLIENT_EMAIL = env
		.get("GOOGLE_CLIENT_EMAIL")
		.required()
		.asString();
	const jwt = new google.auth.JWT(
		GOOGLE_CLIENT_EMAIL,
		undefined,
		GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
		scopes
	);
	const view_id = "280755841";

	try {
		await jwt.authorize();

		const response: any = await google.analytics("v3").data.ga.get({
			auth: jwt,
			ids: "ga:" + view_id,
			"start-date": "2022-04-01",
			"end-date": "today",
			metrics: "ga:pageviews",
		});

		res.status(200).json({ visitas_totales: response.data.rows[0][0] });
	} catch (err: any) {
		return res.status(500).json({ err: err.message });
	}
}
