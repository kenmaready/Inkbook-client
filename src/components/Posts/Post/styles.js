import { makeStyles } from "@material-ui/core/styles";

const splatoon2 = "Gloria Hallelujah";

export default makeStyles({
    media: {
        height: 0,
        paddingTop: "56.25%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
    },
    border: {
        border: "solid",
    },
    fullHeightCard: {
        height: "100%",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        height: "100%",
        position: "relative",
        color: "#0e10e6",
        backgroundColor: "#ffc400",
    },
    overlay: {
        position: "absolute",
        top: "20px",
        left: "20px",
        maxWidth: "68%",
        color: "white",
    },
    overlay2: {
        position: "absolute",
        top: "20px",
        right: "20px",
        color: "white",
    },
    grid: {
        display: "flex",
    },
    details: {
        display: "flex",
        justifyContent: "space-between",
    },
    title: {
        fontFamily: splatoon2,
        fontWeight: "bold",
        fontSize: "1.4em",
    },
    cardActions: {
        padding: "0 16px 8px 16px",
        display: "flex",
        justifyContent: "space-between",
        color: "lightgray",
    },
    icons: {
        color: "blue",
    },
});
