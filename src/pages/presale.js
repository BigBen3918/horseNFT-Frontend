import React, { useState, useEffect } from "react";
import { Grid, Paper, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import coinLogo from "../components/assets/img/coinLogo.png";
import logo from "../components/assets/img/logo.png";
import "../components/assets/css/mobile.css";
import { NotificationManager } from "react-notifications";

import Header from "../components/header";
import sdfa from "../context";

import { useBlockchainContext } from "../context";

import {
	ScrollingProvider,
	useScrollSection,
	Section,
} from 'react-scroll-section';

export const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	background: "transparent",
	boxShadow: "none",
}));

export default function Presale(props) {

	const [state, { buy }] = useBlockchainContext();
	const [ETHamount, setETHamount] = useState(0);
	const [QEamount, setQEamount] = useState(0);

	const buyHandle = async () => {
		if (ETHamount !== 0)
			await buy(ETHamount);
		else
			NotificationManager.error("Input ETH amount");
	}

	const onChangeETH = (e) => {
		if (e.target.value === "") {
			setETHamount(0);
			setQEamount(0);
		} else {
			setQEamount(e.target.value * state.price);
			setETHamount(e.target.value);
		}
	}

	const onChangeQE = (e) => {
		if (e.target.value === "") {
			setETHamount(0);
			setQEamount(0);
		} else {
			setETHamount(e.target.value / state.price);
			setQEamount(e.target.value);
		}
	}

	return (
		<ScrollingProvider>
			{/* -- header part */}
			<Header />
			<div className="space-third"></div>
			{/* -- bottom part */}
			<div className="footer_Container">
				<Container>
					{/* <Item>
						<span className="x_font_y_3">
							<b>Presale</b>
						</span>
						<br />
						<span className="x_font_w_3">
							Presale period
						</span>
					</Item> */}
					<div className="space-third"></div>
					<div className="space-third"></div>
					<Grid container justifyContent="center" alignItems="center">
						<Grid item lg={6} md={6} sm={12}>
							<div className="saleBlock">
								<span className="x_font_y_3">
									<b>Presale</b>
								</span>
								<div className="space-double"></div>
								<Grid container>
									<Grid item lg={3} md={3} xs={12}>
										<div className="space-single"></div>
										<span className="x_font_f_5">ETH</span>
									</Grid>
									<Grid item lg={9} md={9} xs={12}>
										<Item>
											<div className="contactSet">
												<input type="number" onChange={onChangeETH} value={Number(ETHamount).toFixed(6 )} className="contactAddress" placeholder="Enter ETH" />
											</div>
										</Item>
									</Grid>
								</Grid>
								<div className="space-double"></div>
								<Grid container>
									<Grid item lg={3} md={3} xs={12}>
										<div className="space-single"></div>
										<span className="x_font_f_5">QE</span>
									</Grid>
									<Grid item lg={9} md={9} xs={12}>
										<Item>
											<div className="contactSet">
												<input type="number" onChange={onChangeQE} value={QEamount} className="contactAddress" placeholder="Enter QE" />
											</div>
										</Item>
									</Grid>
								</Grid>
								<div className="space-double"></div>

								<Item>
									<div className="buyButton noselect align_center" onClick={buyHandle}>
										Buy Token
									</div>
								</Item>
							</div>
						</Grid>
						<Grid item lg={6} md={6} sm={12}>
							<Item>
								<img src={coinLogo} alt="NoImg" className="coinlogo" />
							</Item>
						</Grid>
					</Grid>
				</Container>

				<div className="space-third"></div>

				<div className="footer space_top center">
					<Container>
						<div className="space-third"></div>
						<span className="x_font_y_3"><b> CONTACT <br />THE HORSE'S TEAM</b></span>
						<div className="space-single"></div>
						<div className="space-single"></div>
						<Grid container>
							<Grid item lg={6} md={6} sm={12}>
								<span className="x_font_f_5">STAY TUNED FOR HORSE'S</span>
								<br />
								<span className="x_font_f_5">DEVELOPMENT</span>
							</Grid>
							<Grid item lg={6} md={6} sm={12}>
								<Item>
									<div className="contactSet">
										<input type="text" className="contactAddress" placeholder="user@xyz.com" />
										<button className="notifyButton x_font_w_4">GET NOTIFIED</button>
									</div>
								</Item>
							</Grid>
						</Grid>
						<div className="space-single"></div>
						<div className="space_top">
							<img src={logo} alt="NoImg" className="f_logo_img" /><label className="x_font_w_2">Horse's</label>
						</div>
					</Container>
				</div>
				<div className="space-double"></div>
				<Item><label style={{ color: "white" }}>Copyright &copy; 2021 QE Company S.L. All rights reserved.</label></Item>
				<div className="space-single"></div>
				<div className="space-single"></div>
				<div className="space-single"></div>
				<div className="space-single"></div>

			</div>

		</ScrollingProvider>
	);
}