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
} from "react-scroll-section";

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
                    <Grid container>
                        <Grid item sm={12} md={6} lg={6}>
                            <div item className="mainTitle">
                                <span className="x_font_y_1">
                                    TRAIN YOUR HORSE <br />
                                </span>
                                <span className="x_font_w_1">
                                    &amp; SELL IT
                                </span>
                                <div className="tokenButton noselect">
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
                                <img
                                    src={coinLogo}
                                    alt="NoImg"
                                    className="center_container"
                                />
                            </Item>
                        </Grid>
                        <Grid item sm={12} lg={6} md={6}>
                            <Item className="center_container center">
                                <span className="x_font_g_4">ABOUT US</span>
                                <br />
                                <span className="x_font_y_2">A New way</span>
                                <br />
                                <span className="x_font_y_3">
                                    Stable Solution
                                </span>
                                <br />
                                <span className="x_font_w_3">
                                    Non-fungible tokenization for horses is one
                                    great solution for horse enthusiasts to
                                    invest and earn money on horses. It provides
                                    a transparent, reliable and high-yielding
                                    way to invest in horses using one of the
                                    great features of blockchain.
                                </span>
                                <div className="tokenButton noselect align_center">
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
                        <span className="x_font_g_4">ROAD MAP</span>
                        <br />
                        <span className="x_font_y_3">
                            <b>Roadmap</b> of Full Management of Token
                        </span>
                        <div className="space-double"></div>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            spacing={5}
                        >
                            <Grid item md={3} sm={6}>
                                <span className="x_font_p_4">Q4 2021</span>
                                <InfoCard
                                    title="ICO"
                                    subtitle="QE TOKEN LAUNCH"
                                    content={
                                        <span>
                                            Presale start. <br /> Add list to
                                            DEX. <br /> launch white paper
                                        </span>
                                    }
                                />
                            </Grid>
                            <Grid item md={3} sm={6}>
                                <span className="x_font_p_4">Q1 2022</span>
                                <InfoCard
                                    title="LAUNCH"
                                    subtitle="Horse manage site launch"
                                    content={
                                        <span>
                                            Horse manage site launch. <br />{" "}
                                            Start train horses. <br />
                                            Non-fungible tokenization of horses.
                                        </span>
                                    }
                                />
                            </Grid>
                            <Grid item md={3} sm={6}>
                                <span className="x_font_p_4">Q2 2022</span>
                                <InfoCard
                                    title="COMPLETION"
                                    subtitle="NFT Marketplace"
                                    content={
                                        <span>
                                            Launch NFT marketplace.
                                            <br /> Building Horse Auction
                                            Platform.
                                        </span>
                                    }
                                />
                            </Grid>
                            <Grid item md={3} sm={6}>
                                <span className="x_font_p_4">Q3 2022</span>
                                <InfoCard
                                    title="EXPANSION"
                                    subtitle="Building Ecosystem"
                                    content={
                                        <span>
                                            Launch DAO Platform. <br /> Video
                                            streaming Platform
                                            <br />
                                        </span>
                                    }
                                />
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
                        <span className="x_font_g_4">BENEFITS</span>
                        <br />
                        <span className="x_font_y_3">
                            <b>Features</b>
                        </span>
                    </Item>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item lg={3} md={3} sm={12}>
                            <div className="img-container">
                                <img src={icon1} alt="NoImg" />
                            </div>
                            <InfoText
                                ICON=""
                                title="Stable Invest"
                                content="An easy and transparent way to invest in horse."
                            />
                            <div className="space-double"></div>
                            <div className="img-container">
                                <img src={icon2} alt="NoImg" />
                            </div>
                            <InfoText
                                ICON=""
                                title="High return investment"
                                content="Not only do you get a share profit from selling your horses, but you also get NFTs, giving you a higher return."
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12}>
                            <Item>
                                <img
                                    src={coinLogo}
                                    alt="NoImg"
                                    className="coinlogo"
                                />
                            </Item>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12}>
                            <div className="img-container">
                                <img src={icon3} alt="NoImg" />
                            </div>
                            <InfoText
                                ICON=""
                                title="Real Ownership"
                                content="A transparent and secure approach to ownership management solutions - NFTs make great features.."
                            />
                            <div className="space-double"></div>
                            <div className="img-container">
                                <img src={icon4} alt="NoImg" />
                            </div>
                            <InfoText
                                ICON=""
                                title="Art for horse lovers"
                                content="You will own art of horse by own horse NFT."
                            />
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
                        <span className="x_font_y_3">
                            <b>
                                {" "}
                                CONTACT <br />
                                THE HORSE'S TEAM
                            </b>
                        </span>
                        <div className="space-single"></div>
                        <div className="space-single"></div>
                        <Grid container>
                            <Grid item lg={6} md={6} sm={12}>
                                <span className="x_font_f_5">
                                    STAY TUNED FOR HORSE'S
                                </span>
                                <br />
                                <span className="x_font_f_5">DEVELOPMENT</span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12}>
                                <Item>
                                    <div className="contactSet">
                                        <input
                                            type="text"
                                            className="contactAddress"
                                            placeholder="user@xyz.com"
                                        />
                                        <button className="notifyButton x_font_w_4">
                                            GET NOTIFIED
                                        </button>
                                    </div>
                                </Item>
                            </Grid>
                        </Grid>
                        <div className="space-single"></div>
                        <div className="space_top">
                            <img
                                src={logo}
                                alt="NoImg"
                                className="f_logo_img"
                            />
                            <label className="x_font_w_2">Horse's</label>
                        </div>
                    </Container>
                </div>
                <div className="space-double"></div>
                <Item>
                    <label style={{ color: "white" }}>
                        Copyright &copy; 2021 QE Company S.L. All rights
                        reserved.
                    </label>
                </Item>
                <div className="space-single"></div>
                <div className="space-single"></div>
                <div className="space-single"></div>
                <div className="space-single"></div>
            </div>
        </ScrollingProvider>
    );
}
