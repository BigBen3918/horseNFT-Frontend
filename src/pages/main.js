import React, { useState, useEffect } from "react";
import { Grid, Paper, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import coinLogo from "../components/assets/img/coinLogo.png";
import logo from "../components/assets/img/logo.png";
import icon1 from "../components/assets/img/icon_1.png";
import icon2 from "../components/assets/img/icon_2.png";
import icon3 from "../components/assets/img/icon_3.png";
import icon4 from "../components/assets/img/icon_4.png";
import "../components/assets/css/mobile.css";


import Header from "../components/header";
import InfoCard from "../components/infoCard";
import InfoText from "../components/infoText";

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

export default function Main(props) {

	return (
		<ScrollingProvider>
			{/* -- header part */}
			<div className="header_container">
				<Header />

				<Container>
					{/* -- title part */}
					<Grid container >
						<Grid item sm={12} md={6} lg={6} >
							<div item className="mainTitle">
								<span className="x_font_y_1 everycursor">
									TRAIN YOUR HORSE <br />
								</span>
								<span className="x_font_w_1 everycursor">
									&amp; SELL IT
								</span>
								<div className="tokenButton noselect everycursor" >
									GET TOKEN
								</div>
							</div>
						</Grid>
					</Grid>

					{/* -- token part */}
					<Section id="aboutus"></Section>
					<Grid container>
						<Grid item sm={12} lg={6} md={6}>
							<Item>
								<div className="wrap">
									<img src={coinLogo} alt="NoImg" draggable="false" className="center_container imglotation" />
									<span className="animation-2"></span>
								</div>
							</Item>
						</Grid>
						<Grid item sm={12} lg={6} md={6}>
							<Item className="center_container center" >
								<span className="x_font_g_4 everycursor">ABOUT US</span>
								<br />
								<span className="x_font_y_2 everycursor">A New way</span>
								<br />
								<span className="x_font_y_3 everycursor">Stable Solution</span>
								<br />
								<span className="x_font_w_3 everycursor">
									Non-fungible tokenization for horses is one great solution for horse enthusiasts to invest and earn money on horses.
									It provides a transparent, reliable and high-yielding way to invest in horses using one of the great features of blockchain.
								</span>
								<div className="tokenButton noselect align_center everycursor">
									GET STARTED
								</div>
							</Item>
						</Grid>
					</Grid>
				</Container>
				<div className="space-third"></div>
			</div>
			<Container>
				<div className="space-third"></div>
				<div className="part3">
					<Item>
						<span className="x_font_g_4 everycursor">ROAD MAP</span>
						<br />
						<span className="x_font_y_3 everycursor"><b>Roadmap</b> of Full Management of Token</span>
						<div className="space-double"></div>
						<Grid container justifyContent="center" alignItems="center" spacing={5}>
							<Grid item md={3} sm={12}>
								<span className="x_font_p_4 everycursor everycursor">Q4 2021</span>
								<InfoCard
									title="ICO"
									subtitle="QE TOKEN LAUNCH"
									content={(<span className="everycursor">Presale start. <br />  Add list to DEX. <br /> launch white paper</span>)}
								/>
							</Grid>
							<Grid item md={3} sm={12}>
								<span className="x_font_p_4 everycursor">Q1 2022</span>
								<InfoCard
									title="LAUNCH"
									subtitle="Horse manage site launch"
									content={(<span>Horse manage site launch. <br /> Start train horses. <br />Non-fungible tokenization of horses.</span>)}
								/>
							</Grid>
							<Grid item md={3} sm={12}>
								<span className="x_font_p_4 everycursor">Q2 2022</span>
								<InfoCard
									title="COMPLETION"
									subtitle="NFT Marketplace"
									content={(<span>Launch NFT marketplace.<br /> Building Horse Auction Platform.</span>)}
								/>
							</Grid>
							<Grid item md={3} sm={12}>
								<span className="x_font_p_4 everycursor">Q3 2022</span>
								<InfoCard
									title="EXPANSION"
									subtitle="Building Ecosystem"
									content={(<span>Launch DAO Platform. <br /> Video streaming Platform<br /></span>)} />
							</Grid>
						</Grid>
					</Item>
				</div>
				<div className="space-third"></div>
			</Container>

			<div className="space-third"></div>
			<Section id="features"></Section>
			<div className="space-third"></div>
			{/* -- bottom part */}
			<div className="footer_Container">
				<Container>
					<Item>
						<span className="x_font_g_4 everycursor">
							BENEFITS
						</span>
						<br />
						<span className="x_font_y_3 everycursor">
							<b>Features</b>
						</span>
					</Item>
					<Grid container justifyContent="center" alignItems="center">
						<Grid item lg={3} md={3} sm={12}>
							<div className="img-container">
								<img src={icon1} alt="NoImg" draggable="false" />
							</div>
							<InfoText ICON="" title="Stable Invest" content="An easy and transparent way to invest in horse." />
							<div className="space-double"></div>
							<div className="img-container">
								<img src={icon2} alt="NoImg" draggable="false" />
							</div>
							<InfoText ICON="" title="High return investment" content="Not only do you get a share profit from selling your horses, but you also get NFTs, giving you a higher return." />
						</Grid>
						<Grid item lg={6} md={6} sm={12}>
							<Item>
								<div className="wrap">
									<img src={coinLogo} alt="NoImg" className="coinlogo" draggable="false" />
									<span className="animation-1"></span>
									<span className="pungright"></span>
								</div>
							</Item>
						</Grid>
						<Grid item lg={3} md={3} sm={12}>
							<div className="img-container">
								<img src={icon3} alt="NoImg" draggable="false" />
							</div>
							<InfoText ICON="" title="Real Ownership" content="A transparent and secure approach to ownership management solutions - NFTs make great features.." />
							<div className="space-double"></div>
							<div className="img-container">
								<img src={icon4} alt="NoImg" draggable="false" />
							</div>
							<InfoText ICON="" title="Art for horse lovers" content="You will own art of horse by own horse NFT." />
						</Grid>
					</Grid>
				</Container>

				<div className="space-third"></div>


				<div className="footer space_top center">
					<Container>
						<div className="space-third"></div>
						<div className="space-third"></div>
						<div className="space-third"></div>
						<div className="space-single"></div>
						<span className="x_font_y_3 everycursor"><b> CONTACT <br />THE HORSE'S TEAM</b></span>
						<div className="space-single"></div>
						<div className="space-single"></div>
						<Grid container>
							<Grid item lg={6} md={6} sm={12}>
								<span className="x_font_f_5 everycursor">STAY TUNED FOR HORSE'S</span>
								<br />
								<span className="x_font_f_5 everycursor">DEVELOPMENT</span>
							</Grid>
							<Grid item lg={6} md={6} sm={12}>
								<Item>
									<div className="contactSet">
										<input type="text" className="contactAddress" placeholder="user@xyz.com" />
										<button className="btn-2 x_font_w_4"><span everycursor>Get NOTIFI</span></button>

									</div>
								</Item>
							</Grid>
						</Grid>
						<div className="space-single"></div>
						<div className="space_top">
							<img src={logo} alt="NoImg" className="f_logo_img" draggable="false" /><label className="x_font_w_2">Horse's</label>
						</div>
					</Container>
				</div>
				<div className="space-double"></div>
				<Item><label style={{ color: "white" }} className="everycursor">Copyright &copy; 2021 QE Company S.L. All rights reserved.</label></Item>
				<div className="space-single"></div>
				<div className="space-single"></div>
				<div className="space-single"></div>
				<div className="space-single"></div>

			</div>

		</ScrollingProvider>
	);
}