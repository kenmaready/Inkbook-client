import { makeStyles } from "@material-ui/core/styles";

const splatoon2 = "Gloria Hallelujah";

export default makeStyles((theme) => ({
    paper: {
        borderRadius: 15,
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
        backgroundColor: "#ffc400",
        color: "#0e10e6",
    },
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#0e10e6",
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        textAlign: "center",
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    googleButton: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        fontFamily: splatoon2,
        fontWeight: "bold",
        backgroundColor: "#ffc400",
        color: "#0e10e6",
        "&:hover": {
            color: "darkgray",
        },
    },
    getFont: {
        fontFamily: splatoon2,
    },
    inputField: {
        marginTop: 6,
        fontFamily: splatoon2,
    },
    button: {
        marginTop: theme.spacing(2),
        fontFamily: splatoon2,
        backgroundColor: "#0e10e6",
        color: "#ffc400",
        marginTop: 6,
    },
}));
