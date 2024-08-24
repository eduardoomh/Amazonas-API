import type { CheckoutDataI } from "../../interfaces/Checkout.interfaces";
import { formatToCurrency } from "../formatCurrency";
import { formatDateToSpanish } from "../formatDate";

export const adminTemplate = (values: CheckoutDataI) => {
    const { name, phone, email, price, reference, reservations } = values;

    return `<!DOCTYPE html>

<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
	<title></title>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900"
		rel="stylesheet" type="text/css" /><!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		sup,
		sub {
			line-height: 0;
			font-size: 75%;
		}

		@media (max-width:620px) {

			.desktop_hide table.icons-inner,
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}

			.row-3 .column-1 .block-2.paragraph_block td.pad>div {
				text-align: center !important;
				font-size: 18px !important;
			}

			.row-2 .column-1 .block-2.image_block .alignment div {
				margin: 0 auto !important;
			}

			.row-4 .column-1 .block-1.paragraph_block td.pad>div,
			.row-4 .column-1 .block-4.paragraph_block td.pad>div {
				text-align: left !important;
				font-size: 20px !important;
			}

			.row-4 .column-1 .block-2.paragraph_block td.pad>div,
			.row-4 .column-1 .block-5.paragraph_block td.pad>div {
				text-align: center !important;
				font-size: 17px !important;
			}

			.row-5 .column-2 .block-2.paragraph_block td.pad>div,
			.row-5 .column-2 .block-4.paragraph_block td.pad>div,
			.row-6 .column-1 .block-4.paragraph_block td.pad>div {
				text-align: center !important;
			}

			.row-6 .column-1 .block-3.paragraph_block td.pad>div {
				text-align: left !important;
			}
		}
	</style>
	<!--[if mso ]><style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style> <![endif]-->
</head>

<body class="body"
	style="background-color: #283C4B; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #283C4B;" width="100%">
		<tbody>
			<tr>
				<td>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
						role="presentation"
						style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #bcdeb5;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;"
										width="600">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div class="spacer_block block-1"
														style="height:20px;line-height:20px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
						role="presentation"
						style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #bcdeb5;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; color: #333; width: 600px; margin: 0 auto;"
										width="600">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="image_block block-1 mobile_hide" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="width:100%;padding-right:0px;padding-left:0px;">
																<div align="left" class="alignment"
																	style="line-height:10px">
																	<div style="max-width: 146.25px;"><img alt="Image"
																			height="auto"
																			src="https://www.selvatour.co/wp-content/uploads/2024/06/Untitled-design-9-modified.png"
																			style="display: block; height: auto; border: 0; width: 100%; border-radius: 1px;"
																			title="Image" width="146.25" /></div>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														class="image_block block-2 desktop_hide" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-hide: all; display: none; max-height: 0; overflow: hidden;"
														width="100%">
														<tr>
															<td class="pad"
																style="width:100%;padding-right:0px;padding-left:0px;">
																<div align="left" class="alignment"
																	style="line-height:10px">
																	<div style="max-width: 146.25px;"><img alt="Image"
																			height="auto"
																			src="https://www.selvatour.co/wp-content/uploads/2024/06/Untitled-design-9-modified.png"
																			style="display: block; height: auto; border: 0; width: 100%; border-radius: 1px;"
																			title="Image" width="146.25" /></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
						role="presentation"
						style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #bcdeb5;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #8ECD81; color: #333; width: 600px; margin: 0 auto;"
										width="600">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-1 mobile_hide" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:30px;">
																<div
																	style="color:#FFFFFF;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:18px;line-height:120%;text-align:left;mso-line-height-alt:21.599999999999998px;">
																	<p style="margin: 0;"><strong>Hola
																			Jaider,<br /><br /></strong></p>
																	<p style="margin: 0;">¡Un cliente ha hecho una
																		reservación! 🎉</p>
																	<p style="margin: 0;"> </p>
																	<p style="margin: 0;">A continuación, te comparto
																		los detalles de la reserva</p>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-2 desktop_hide" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-hide: all; display: none; max-height: 0; overflow: hidden; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:30px;">
																<div
																	style="color:#FFFFFF;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:20px;line-height:120%;text-align:left;mso-line-height-alt:24px;">
																	<p style="margin: 0;"><strong>Hola
																			Jaider,<br /><br /></strong></p>
																	<p style="margin: 0;">¡Un cliente ha hecho una
																		reservación! 🎉</p>
																	<p style="margin: 0;"> </p>
																	<p style="margin: 0;">A continuación, te comparto
																		los detalles de la reserva</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
						role="presentation"
						style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #bcdeb5;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; color: #333; width: 600px; margin: 0 auto;"
										width="600">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-1 mobile_hide" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:25px;">
																<div
																	style="color:#283C4B;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:16px;line-height:150%;text-align:left;mso-line-height-alt:24px;">
																	<p style="margin: 0;"><span
																			style="word-break: break-word; color: #63ab45;"><strong>Datos
																				del Cliente</strong></span><span
																			style="word-break: break-word; color: #63ab45;"></span>
																	</p>
																	<p style="margin: 0;"> </p>
                                                                        <p style="margin: 0;"><strong>Nombre:</strong> ${name}</p>
                                                                        <p style="margin: 0;"> </p>
                                                                        <p style="margin: 0;"><strong>Correo:</strong> ${email}</p>
                                                                        <p style="margin: 0;"> </p>
                                                                        <p style="margin: 0;"><strong>Teléfono:</strong> ${phone}</p>
                                                                        <p style="margin: 0;"> </p>
                                                                        <p style="margin: 0;"><strong>Total:</strong> ${formatToCurrency(price as number)} COP</p>
                                                                        <p style="margin: 0;"> </p>
                                                                        <p style="margin: 0;"><strong>Referencia:</strong> #${reference}</p>
                                                                        <p style="margin: 0;"> </p>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-2 desktop_hide" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-hide: all; display: none; max-height: 0; overflow: hidden; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:25px;">
																<div
																	style="color:#283C4B;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:19px;line-height:150%;text-align:left;mso-line-height-alt:28.5px;">
																	<p style="margin: 0;"><span
																			style="word-break: break-word; color: #63ab45;"><strong>Datos
																				del Cliente</strong></span></p>
																	<p style="margin: 0;"> </p>
                                                                        <p style="margin: 0;"><strong>Nombre:</strong> ${name}</p>
                                                                        <p style="margin: 0;"> </p>
                                                                        <p style="margin: 0;"><strong>Correo:</strong> ${email}</p>
                                                                        <p style="margin: 0;"> </p>
                                                                        <p style="margin: 0;"><strong>Teléfono:</strong> ${phone}</p>
                                                                        <p style="margin: 0;"> </p>
                                                                        <p style="margin: 0;"><strong>Total:</strong> ${ formatToCurrency(price as number)} COP</p>
                                                                        <p style="margin: 0;"> </p>
                                                                        <p style="margin: 0;"><strong>Referencia:</strong> #${reference}</p>
                                                                        <p style="margin: 0;"> </p>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="10" cellspacing="0"
														class="divider_block block-3" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad">
																<div align="center" class="alignment">
																	<table border="0" cellpadding="0" cellspacing="0"
																		role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																		width="100%">
																		<tr>
																			<td class="divider_inner"
																				style="font-size: 1px; line-height: 1px; border-top: 1px solid #8ecd81;">
																				<span
																					style="word-break: break-word;"> </span>
																			</td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-4 mobile_hide" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:25px;">
																<div
																	style="color:#283C4B;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:16px;line-height:150%;text-align:left;mso-line-height-alt:24px;">
																	<p style="margin: 0;"><span
																			style="word-break: break-word; color: #63ab45;"><strong>Servicios
																				Reservados</strong></span></p>
                                                                                ${
                                                                                    reservations?.map((reservation, index) => {
                                                                                        return `<p style="margin: 0;"> </p>
                                                                                        <p style="margin: 0;"><strong>Tour ${index + 1}:</strong> ${reservation?.label} - ${formatDateToSpanish(reservation?.date as string)} - ${reservation?.schedule_label} (personas: ${reservation?.people}) </p>
                                                                                        `
                                                                                    })
                                                                                }
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-5 desktop_hide" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-hide: all; display: none; max-height: 0; overflow: hidden; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:25px;">
																<div
																	style="color:#283C4B;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:19px;line-height:150%;text-align:left;mso-line-height-alt:28.5px;">
																	<p style="margin: 0;"><span
																			style="word-break: break-word; color: #63ab45;"><strong>Servicios
																				Reservados</strong></span></p>
                                                                                ${
                                                                                    reservations?.map((reservation, index) => {
                                                                                        return `<p style="margin: 0;"> </p>
                                                                                        <p style="margin: 0;"><strong>Tour ${index + 1}:</strong> ${reservation?.label} - ${formatDateToSpanish(reservation?.date as string)} - ${reservation?.schedule_label} (personas: ${reservation?.people}) </p>
                                                                                        `
                                                                                    })
                                                                                }
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="10" cellspacing="0"
														class="divider_block block-6" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad">
																<div align="center" class="alignment">
																	<table border="0" cellpadding="0" cellspacing="0"
																		role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																		width="100%">
																		<tr>
																			<td class="divider_inner"
																				style="font-size: 1px; line-height: 1px; border-top: 1px solid #8ecd81;">
																				<span
																					style="word-break: break-word;"> </span>
																			</td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
						role="presentation"
						style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #bcdeb5;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #F6F6F6; color: #333; width: 600px; margin: 0 auto;"
										width="600">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="33.333333333333336%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="image_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:NaNpx;padding-left:NaNpx;padding-right:NaNpx;padding-top:35px;width:100%;">
																<div align="center" class="alignment"
																	style="line-height:10px">
																	<div style="max-width: 200px;"><img alt="Image"
																			height="auto"
																			src="https://www.selvatour.co/wp-content/uploads/2024/08/tribu-nahua-1024x767-1.jpg"
																			style="display: block; height: auto; border: 0; width: 100%;"
																			title="Image" width="200" /></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="66.66666666666667%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-1 mobile_hide" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:10px;padding-left:30px;padding-right:10px;padding-top:10px;">
																<div
																	style="color:#85D874;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:17px;line-height:120%;text-align:left;mso-line-height-alt:20.4px;">
																	<p style="margin: 0; word-break: break-word;"><span
																			style="word-break: break-word; color: #63ab45;">¡Bien
																			Hecho!</span></p>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-2 desktop_hide" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-hide: all; display: none; max-height: 0; overflow: hidden; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:10px;padding-left:30px;padding-right:10px;padding-top:10px;">
																<div
																	style="color:#85D874;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:17px;line-height:120%;text-align:left;mso-line-height-alt:20.4px;">
																	<p style="margin: 0; word-break: break-word;">¡Bien
																		Hecho!</p>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-3 mobile_hide" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:5px;">
																<div
																	style="color:#283C4B;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:14px;line-height:150%;text-align:left;mso-line-height-alt:21px;">
																	<p style="margin: 0;">Recuerda comunicarte con tu
																		cliente para asegurarte de que toda la
																		información que proporcionó sea correcta y
																		confirmar cualquier detalle adicional.</p>
																	<p style="margin: 0;"> </p>
																	<p style="margin: 0;">¡Felicitaciones por tu
																		reserva!</p>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-4 desktop_hide" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-hide: all; display: none; max-height: 0; overflow: hidden; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:5px;">
																<div
																	style="color:#283C4B;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:14px;line-height:150%;text-align:left;mso-line-height-alt:21px;">
																	<p style="margin: 0;">Recuerda comunicarte con tu
																		cliente para asegurarte de que toda la
																		información que proporcionó sea correcta y
																		confirmar cualquier detalle adicional.</p>
																	<p style="margin: 0;"> </p>
																	<p style="margin: 0;">¡Felicitaciones por tu
																		reserva!</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
						role="presentation"
						style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #bcdeb5;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; color: #000000; width: 600px; margin: 0 auto;"
										width="600">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="10" cellspacing="0"
														class="social_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad">
																<div align="center" class="alignment">
																	<table border="0" cellpadding="0" cellspacing="0"
																		class="social-table" role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;"
																		width="144px">
																		<tr>
																			<td style="padding:0 2px 0 2px;"><a
																					href="https://wa.link/7trepq"
																					target="_blank"><img alt="WhatsApp"
																						height="auto"
																						src="https://www.selvatour.co/wp-content/uploads/2024/08/whatsapp2x.png"
																						style="display: block; height: auto; border: 0;"
																						title="WhatsApp"
																						width="32" /></a></td>
																			<td style="padding:0 2px 0 2px;"><a
																					href="https://www.instagram.com/selvatour.co/"
																					target="_blank"><img alt="Instagram"
																						height="auto"
																						src="https://www.selvatour.co/wp-content/uploads/2024/08/instagram2x.png"
																						style="display: block; height: auto; border: 0;"
																						title="instagram"
																						width="32" /></a></td>
																			<td style="padding:0 2px 0 2px;"><a
																					href="https://www.tiktok.com"
																					target="_blank"><img alt="TikTok"
																						height="auto"
																						src="https://www.selvatour.co/wp-content/uploads/2024/08/tiktok2x.png"
																						style="display: block; height: auto; border: 0;"
																						title="TikTok" width="32" /></a>
																			</td>
																			<td style="padding:0 2px 0 2px;"><a
																					href="https://www.facebook.com/"
																					target="_blank"><img alt="Facebook"
																						height="auto"
																						src="https://www.selvatour.co/wp-content/uploads/2024/08/facebook2x.png"
																						style="display: block; height: auto; border: 0;"
																						title="facebook"
																						width="32" /></a></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="10" cellspacing="0"
														class="divider_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad">
																<div align="center" class="alignment">
																	<table border="0" cellpadding="0" cellspacing="0"
																		role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																		width="100%">
																		<tr>
																			<td class="divider_inner"
																				style="font-size: 1px; line-height: 1px; border-top: 1px solid #8ecd81;">
																				<span
																					style="word-break: break-word;"> </span>
																			</td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="25" cellspacing="0"
														class="paragraph_block mobile_hide block-3" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad">
																<div
																	style="color:#555555;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:14px;line-height:120%;text-align:center;mso-line-height-alt:16.8px;">
																	<p style="margin: 0;">Copyright@2024 <a
																			href="https://www.selvatour.co/"
																			style="text-decoration: underline; color: #8ECD81;">SelvaTour</a>,
																		todos los derechos reservados</p>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="25" cellspacing="0"
														class="paragraph_block desktop_hide block-4" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-hide: all; display: none; max-height: 0; overflow: hidden; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad">
																<div
																	style="color:#555555;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:14px;line-height:120%;text-align:left;mso-line-height-alt:16.8px;">
																	<p style="margin: 0;">Copyright@2024 <a
																			href="https://www.selvatour.co/"
																			style="text-decoration: underline; color: #8ECD81;">SelvaTour</a>,
																		todos los derechos reservados</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7"
						role="presentation"
						style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #bcdeb5;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;"
										width="600">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div class="spacer_block block-1"
														style="height:30px;line-height:30px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8"
						role="presentation"
						style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 600px; margin: 0 auto;"
										width="600">
										<tbody>
											<tr>

											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>
`;
};