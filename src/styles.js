import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: "30px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffc400",
    },
    heading: {
        color: "#0e10e6",
        fontFamily: "Gloria Hallelujah",
        fontSize: "4em",
        fontWeight: "bold",
    },
    image: {
        marginLeft: "15px",
    },
    [theme.breakpoints.down("xs")]: {
        mainContainer: {
            flexDirection: "column-reverse",
        },
        heading: {
            fontSize: "2em",
        },
    },
}));
