import { makeStyles } from "@material-ui/core/styles";

const splatoon2 = "Gloria Hallelujah";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: "30px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 24px",
        backgroundColor: "#ffc400",
    },
    heading: {
        color: "#0e10e6",
        fontFamily: splatoon2,
        fontSize: "3em",
        fontWeight: "bold",
        textDecoration: "none",
        padding: 0,
        margin: 0,
        "&:hover": {
            textDecoration: "none",
            color: "darkgray",
        },
    },
    image: {
        paddingRight: "24px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        width: "200px",
    },
    profile: {
        display: "flex",
        justifyContent: "space-between",
        width: "200px",
        alignItems: "center",
        textAlign: "center",
        fontFamily: splatoon2,
    },
    userName: {
        display: "flex",
        alignItems: "center",
        fontFamily: splatoon2,
        fontWeight: "bold",
        color: "#0e10e6",
        margin: "0 3px",
    },
    brandContainer: {
        display: "flex",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#0e10e6",
        fontFamily: splatoon2,
        textTransform: "lowercase",
        color: "#ffc400",
    },
    getFont: {
        fontFamily: splatoon2,
        fontWeight: "bold",
        color: "#0e10e6",
    },
}));
