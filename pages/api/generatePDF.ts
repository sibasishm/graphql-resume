export default function handler(req, res) {
	res.statusCode = 201;
	res.setHeader(
		'Content-disposition',
		'attachment; filename="SibasishMohanty_Resume.pdf"'
	);
	res.setHeader('Content-Type', 'application/pdf');

	res.end('Hello');
}
