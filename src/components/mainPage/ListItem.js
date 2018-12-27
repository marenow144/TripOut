import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Paper from "@material-ui/core/Paper/Paper";
import ShareButton from '@material-ui/icons/Share';
import IconButton from "@material-ui/core/IconButton/IconButton";
import AddCircle from '@material-ui/icons/AddCircle';

const styles = () => ({
        root: {
            width: '80%',
        },
        background: {
            display: 'flex',
            marginBottom: '1px',
            '&:hover': {
                boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
            }
        },

        scores: {
            paddingTop: "1.5%",
            maxWidth: '350px',
            textAlign: 'center',
            height: '15vh',
            marginRight: '5vh',
        },
        buttons: {},
        creation: {
            marginLeft: 'auto',
            marginRight: '10px'
        }

    }
);
const ListItem = (props) => {
    const {classes} = props;
    console.log("item", props);
    return (
        <div className={`container`}>
            <Paper className={`${classes.background}`} elevation={2} square={true}>
                <div className={`${classes.scores}`}>
                    <div className={`row`}>
                        <Typography className={`col-md-4`}>{props.plan.no_of_users}</Typography>

                        <Typography className={`col-md-4`}>{props.plan.no_of_coments}</Typography>

                        <Typography className={`col-md-4`}>{props.plan.votes}</Typography>
                    </div>
                    <div className={`row`}>
                        <Typography className={`col-md-4`}>Users</Typography>
                        <Typography className={`col-md-4`}>Comments</Typography>
                        <Typography className={`col-md-4`}>Score</Typography>
                    </div>
                </div>
                <div>
                    <Typography variant={"h6"}>{props.plan.title}</Typography>
                    <div className={`${classes.buttons} row`}>
                        <IconButton variant="contained" color="primary">
                            share
                            <ShareButton className={classes.leftIcon}/>
                        </IconButton>
                        <IconButton variant="contained" color="primary">
                            add to my plans
                            <AddCircle className={classes.leftIcon}/>
                        </IconButton>
                    </div>
                </div>
                <div className={`${classes.creation}`}>
                    <Typography variant={"h7"}>Created {props.plan.creation_date}</Typography>
                    <Typography variant={"h7"}>by: <a href={""}>{props.plan.author}</a></Typography>

                </div>
            </Paper>
        </div>)

};
ListItem.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ListItem);