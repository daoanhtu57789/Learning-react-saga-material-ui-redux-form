import React, { Component } from 'react';
import {
    withStyles,
    Typography,
    Card,
    CardContent,
    TextField,
    Button,
} from '@material-ui/core';
import styles from './styles';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
class LoginPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.background}>
                <div className={classes.login}>
                    <Card>
                        <CardContent>
                            <form>
                                <div className="text-xs-center pb-xs">
                                    <Typography variant="caption">
                                        Đăng nhập để tiếp tục
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
                                    type = "password"
                                    className={classes.textField}
                                    fullWidth
                                    margin="normal"
                                />

                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    type="submit"
                                >
                                    Login
                                </Button>

                                <div className="pt-1 text-md-center">
                                    <Link to="/signup">
                                        <Button>Đăng Kí Tài Khoản.</Button>
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
LoginPage.propTypes = {
    classes: propTypes.object,
};

export default withStyles(styles)(LoginPage);
