import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useWallet } from "use-wallet";
import { ethers } from "ethers";
import imgMetamask from "../components/assets/metamask.svg";
import Logo from "./assets/img/logo.png";
import "./assets/css/mobile.css";
import "./assets/css/custom.css";
import "./assets/css/fontStyle.css";

import {
	useScrollSection
} from 'react-scroll-section';

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	background: "transparent",
	boxShadow: "none",
}));

export default function Header() {
	const [mobileView, setMobileView] = useState(false);
	const [drowdownFlag, setDrowdownFlag] = useState(false);

	const homeSection = useScrollSection('aboutus');
	const aboutSection = useScrollSection('features');

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900
				? setMobileView(true)
				: setMobileView(false);
		};

		setResponsiveness();
		window.addEventListener("resize", () => setResponsiveness());
	});

	function mobileMenuButton() {
		drowdownFlag ? setDrowdownFlag(false) : setDrowdownFlag(true);
	}

	/* ------------ connect wallet --------------*/

	const wallet = useWallet();
	var styledAddress = wallet.account
		? wallet.account.slice(0, 4) + "..." + wallet.account.slice(-4)
		: "";

	//check connection
	const handleChainChanged = (chainId) => {
		let { ethereum } = window;
		if (ethereum.isConnected() && Number(chainId) === 4002) {
			onConnect();
		}
	};

	React.useEffect(() => {
		checkConnection();
	}, []);

	const checkConnection = async () => {
		let { ethereum } = window;
		if (ethereum !== undefined) {
			const chainId = await ethereum.request({ method: "eth_chainId" });
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const accounts = await provider.listAccounts();
			if (accounts.length !== 0 && Number(chainId) === 4002) {
				onConnect();
			}
			ethereum.on("chainChanged", handleChainChanged);
		}
	};

	const onConnect = () => {
		if (wallet.status !== "connected") {
			wallet.connect().catch((err) => {
				alert("please check metamask!");
			});
		}
	};

	const disconnect = () => {
		if (wallet.status === "connected") {
			wallet.reset();
		}
	};

	return (
		<Container>
			<br />
			{!mobileView ? (
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="center"
					spacing={5}>
					<Grid item xl={3} lg={3} md={3} sm={12} className="logo">
						<Item>
							<img
								src={Logo}
								className="logo-img noselect"
								alt="NoImg"
							/>
							<label className="logoName">Horse's</label>
						</Item>
					</Grid>
					<Grid item xl={1} lg={1} md={1} sm={12} xs={12}>
						<Link to="" style={{ textDecoration: "none" }}>
							<h6 className="menu">Home</h6></Link></Grid>
					<Grid item xl={1} lg={1} md={1} sm={12} xs={12}>
						<Link to="" onClick={homeSection.onClick} style={{ textDecoration: "none" }}>
							<h6 className="menu">About</h6></Link></Grid>
					<Grid item xl={1} lg={1} md={1} sm={12} xs={12}>
						<Link to="" onClick={aboutSection.onClick} style={{ textDecoration: "none" }}>
							<h6 className="menu">Features</h6></Link></Grid>
					<Grid item xl={1} lg={1} md={1} sm={12} xs={12}>
						<Link to="/defi" style={{ textDecoration: "none" }}>
							<h6 className="menu">Defi</h6></Link></Grid>
					<Grid item xl={2} lg={2} md={1} sm={12} xs={12}>
						<Link to="" style={{ textDecoration: "none" }}>
							<h6 className="menu">NFT marketplace</h6></Link></Grid>
					<Grid item md={3} sm={6} xs={12}>
						<Item>
							{wallet.status === "connected" ? (
								<button
									className="connectbutton noselect x_font_w_3"
									style={{ textTransform: "none" }}
									onClick={disconnect}>
									<img
										src={imgMetamask}
										alt="wallet"
										style={{
											width: "1.5em",
											height: "1.5em",
											marginRight: 10,
										}}
									/>
									Disconnect
								</button>
							) : (
								<button
									onClick={() => onConnect()}
									className="connectbutton noselect x_font_w_3"
									style={{ textTransform: "none" }}>
									{wallet.status === "connecting" ? (
										<div>
											<span
												className="spinner-border"
												role="status"
												style={{
													width: "1.5em",
													height: "1.5em",
													marginRight: 10,
												}}></span>
											<span className="sr-only">
												Loading...
											</span>
										</div>
									) : (
										<div>
											<img
												src={imgMetamask}
												alt="wallet"
												style={{
													width: "1.5em",
													height: "1.5em",
													marginRight: 10,
												}}
											/>
											Connect
										</div>
									)}
								</button>
							)}
						</Item>
					</Grid>
				</Grid>
			) : (
				<Grid
					contanier
					direction="row"
					justifyContent="center"
					alignItems="center">
					<Grid item sm={12} xs={12}>
						<Grid
							container
							justifyContent="center"
							alignItems="center">
							<Grid item sm={2} xs={2}>
								<img
									src={Logo}
									className="mobile-logo-img noselect"
									alt="NoImg"
								/>
							</Grid>
							<Grid item sm={6} xs={6}></Grid>
							<Grid
								item
								sm={2}
								xs={2}
								onClick={mobileMenuButton}
								style={{ zIndex: "2000" }}>
								<div className="mobile-container">
									<div className="mobile-bar1"></div>
									<div className="mobile-bar2"></div>
									<div className="mobile-bar3"></div>
								</div>
							</Grid>
						</Grid>
						{drowdownFlag ? (
							<Grid
								container
								justifyContent="center"
								alignItems="center">
								<div className="">
									<Grid item xl={1} lg={1} md={1} sm={12} xs={12}>
										<Link to="" style={{ textDecoration: "none" }}>
											<h6 className="menu">Home</h6></Link></Grid>
									<Grid item xl={1} lg={1} md={1} sm={12} xs={12}>
										<Link to="" style={{ textDecoration: "none" }}>
											<h6 className="menu">About</h6></Link></Grid>
									<Grid item xl={1} lg={1} md={1} sm={12} xs={12}>
										<Link to="" style={{ textDecoration: "none" }}>
											<h6 className="menu">Features</h6></Link></Grid>
									<Grid item xl={1} lg={1} md={1} sm={12} xs={12}>
										<Link to="" style={{ textDecoration: "none" }}>
											<h6 className="menu">Defi</h6></Link></Grid>
									<Grid item xl={2} lg={2} md={1} sm={12} xs={12}>
										<Link to="" style={{ textDecoration: "none" }}>
											<h6 className="menu">NFT marketplace</h6></Link></Grid>
									<Grid item xs={12} sm={6}></Grid>
									<Grid
										item
										xs={12}
										sm={12}
										style={{ zIndex: "1" }}>
										<Item>
											{wallet.status === "connected" ? (
												<button
													className="mobile-connectbutton noselect"
													style={{
														textTransform: "none",
													}}
													onClick={disconnect}>
													<img
														src={imgMetamask}
														alt="wallet"
														style={{
															width: "1.5em",
															height: "1.5em",
															marginRight: 10,
														}}
													/>
													Disconnect
												</button>
											) : (
												<button
													onClick={() => onConnect()}
													className="mobile-z noselect"
													style={{
														textTransform: "none",
													}}>
													{wallet.status ===
														"connecting" ? (
														<div>
															<span
																className="spinner-border"
																role="status"
																style={{
																	width: "1.5em",
																	height: "1.5em",
																	marginRight: 10,
																}}></span>
															<span className="sr-only ">
																Loading...
															</span>
														</div>
													) : (
														<div>
															<img
																src={imgMetamask}
																alt="wallet"
																style={{
																	width: "1.5em",
																	height: "1.5em",
																	marginRight: 10,
																}}
															/>
															Connect
														</div>
													)}
												</button>
											)}
										</Item>
									</Grid>
								</div>
							</Grid>

						) : (
							""
						)}
					</Grid>
				</Grid>
			)}
		</Container>
	);
}
