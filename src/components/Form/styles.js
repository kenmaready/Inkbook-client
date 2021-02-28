import { orange } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
        backgroundColor: "#ffc400",
        fontFamily: "Gloria Hallelujah",
        borderRadius: 15,
    },
    form: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        fontFamily: "Gloria Hallelujah",
    },
    formInput: {
        fontFamily: "Gloria Hallelujah",
        color: "white",
    },
    headline: {
        fontFamily: "Gloria Hallelujah",
        fontWeight: "bold",
        color: "#0e10e6",
    },
    fileInput: {
        width: "97%",
        margin: "10px 0",
        color: "#0e10e6",
        fontWeight: "bold",
        marginBottom: 24,
    },
    buttonSubmit: {
        marginBottom: 10,
        fontFamily: "Gloria Hallelujah",
        backgroundColor: "#0e10e6",
        color: "white",
    },
    buttonCancel: {
        fontFamily: "Gloria Hallelujah",
        fontWeight: "light",
        backgroundColor: "lightgray",
        color: "#0e10e6",
    },
}));
