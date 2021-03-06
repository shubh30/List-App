import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { rightDivisionStyles } from "./rightDivision.style";
import { globalState } from "../../context";

const countChecked = (data) => {
  const result = data.filter((item) => item.checked === true);
  return result.length > 0 ? true : false;
};

const totalChecked = (data) => {
  const result = data.filter((item) => countChecked(item.subHeadings));
  return result.length > 0 ? true : false;
};

const RightDivision = () => {
  const classes = rightDivisionStyles();
  const {
    state: { data },
    dispatch,
  } = useContext(globalState);

  return (
    <Paper className={classes.paper} elevation={3}>
      {totalChecked(data) ? (
        data.map(({ heading, subHeadings }, id) => {
          if (countChecked(subHeadings)) {
            return (
              <React.Fragment key={id}>
                <Typography variant="h6" className={classes.title}>
                  {heading}
                </Typography>
                {subHeadings.map((item, index) => (
                  <List
                    dense
                    role="list"
                    key={index}
                    className={
                      item.checked === true ? "" : `${classes.listItemEmpty}`
                    }
                  >
                    {item.checked === true ? (
                      <ListItem
                        role="listitem"
                        button
                        className={classes.ListItem}
                      >
                        <Chip
                          className={classes.listItemText}
                          size="medium"
                          label={item.text}
                          onDelete={() =>
                            dispatch({
                              type: "TOGGLE_CHECKBOX",
                              payload: { id: item.id },
                            })
                          }
                        />
                      </ListItem>
                    ) : null}
                  </List>
                ))}
              </React.Fragment>
            );
          }
        })
      ) : (
        <div className={classes.text}>
          <Typography variant="h5">{"No Value selected"}</Typography>
        </div>
      )}
    </Paper>
  );
};

export default RightDivision;
