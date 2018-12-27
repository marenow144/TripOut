import React from 'react';
import favicon from '../../assets/katowice.jpg';
import 'bootstrap/dist/css/bootstrap.css';

import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography/Typography";
import ListItem from "./ListItem";

const styles = () => ({
        root: {
            width: '100%',
        },
        header: {
            paddingTop: '30px',
            paddingLeft: '88px',
            paddingBottom: '10px',
            borderBottom: '1px solid',

        },
        image: {
            borderRadius: '27px'
        }
    }
);

function renderList(data) {
    return data.plans.map(e => {
        return(<div key={e.id}><ListItem  plan={e}/></div>)
    })

}

const ListView = (props) => {
    const {classes} = props;
    console.log(props);
    return (
        <div>
            <div className={`${classes.header} row`}>
                <div className={`col-md-3 col-xs-12`}>
                    <img className={`${classes.image} img-fluid`} alt={`${props.data.city_name}`} src={favicon}/>
                </div>
                <div className={`col-md-3`}>
                    <Typography component={"h3"} variant={"h3"}>{props.data.city_name}</Typography>
                    <Typography component={"h6"}
                                variant={"h6"}>{props.data.number_of_subscribers} subscribers</Typography>
                    <Typography component={"h6"} variant={"h6"}>{props.data.number_of_plan} plans</Typography>
                </div>
            </div>
                {renderList(props.data)}
        </div>
    );


};


ListView.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ListView);