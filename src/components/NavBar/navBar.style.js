import { makeStyles } from "@material-ui/core/styles";

export const navBarStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "#8C1CF1",
    fontWeight: "bold"
  },
  appBar: {
    height: "65px",
    display: "flex",
    justifyContent: "center",
    paddingLeft: "15%",
    paddingRight: "15%",
    position: "fixed"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuItemsText: {
    textTransform: "none",
  },
  getInTouch: {
    border: "1px solid #E0E0E0",
    borderRadius: "5%",
    padding: "1%",
    marginLeft: "2%",
    textTransform: "none",
  },
}));
