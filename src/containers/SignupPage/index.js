import React, { Component } from 'react';
import {
    withStyles,
    Typography,
    Card,
    CardContent,
    TextField,
    Button,
    FormControlLabel,
    Checkbox,
} from '@material-ui/core';
import styles from './styles';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
class SignupPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.background}>
                <div className={classes.signup}>
                    <Card>
                        <CardContent>
                            <form>
                                <div className="text-xs-center pb-xs">
                                    <Typography variant="caption">
                                        Đăng Ký Tài Khoản
                                    </Typography>
                                </div>
                                <TextField
                                    id="email"
                                    label="Email"
                                    className={classes.textField}
                                    fullWidth
                                    margin="normal"
                                />

                                <TextField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    className={classes.textField}
                                    fullWidth
                                    margin="normal"
                                />

                                <TextField
                                    //xác thực password
                                    id="cpassword"
                                    label="Confirm Password"
                                    type="password"
                                    className={classes.textField}
                                    fullWidth
                                    margin="normal"
                                />

                                <FormControlLabel
                                    control={<Checkbox value="agree" />}
                                    label="Tôi Đã Đọc Và Đồng Ý  Điều Khoản."
                                    className = {classes.fullWidth}
                                />

                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    type="submit"
                                >
                                    Signup
                                </Button>

                                <div className="pt-1 text-md-center">
                                    <Link to="/login">
                                        <Button>Đã Có Tài Khoản?</Button>
                                    </Link>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}
SignupPage.propTypes = {
    classes: propTypes.object,
};

export default withStyles(styles)(SignupPage);
