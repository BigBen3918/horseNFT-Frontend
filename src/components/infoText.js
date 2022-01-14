import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    background: "transparent",
    boxShadow: "none",
    color: "white",
    fontSize: "110%",
    fontFamily: "System",
}));

const InfoCard = (props) => {
    const { ICON, title, content } = props;

    return (
        <div className="infoText space_top">
            <Item>
                <div className="x_font_y_4 space_top">{title}</div>
                <div className="x_font_w_4 space">{content}</div>
            </Item>
        </div>
    );
};

export default InfoCard;
