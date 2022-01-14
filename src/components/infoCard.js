import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	background: "transparent",
	boxShadow: "none",
}));

const InfoCard = (props) => {
	const { title, subtitle, content } = props;

	return (
		<div className="roadmap_card space_top">
			<div className="x_font_w_2 space_top">{title}</div>
			<div className="x_font_y_4 space">{subtitle}</div>
			<div className="x_font_w_4 overflow_card">{content}</div>
		</div>
	);
};

export default InfoCard;
