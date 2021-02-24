import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container: {
        fontFamily: "Gloria Hallelujah",
        fontWeight: "bold",
        color: "#0e10e6",
    },
    mainContainer: {
        display: "flex",
        alignItems: "center",
    },
    titleCard: {
        backgroundColor: "#ffc400",
        textAlign: "center",
        borderRadius: 15,
        boxShadow: "1px 1px gray",
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: "center",
    },
}));
