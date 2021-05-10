import React, { useState } from 'react';
import {
  Row,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  CardBody,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions';

import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';
import { adminRoot } from '../../constants/defaultValues';
import AppBarOuter from './AppBar';

const Login = ({ history }) => {
  const [email] = useState('demo@gogo.com');
  const [password] = useState('gogo123');
  const [name] = useState('Sarah Kortney');

  const onUserRegister = () => {
    return  history.push('app/dashboards/default')
    if (email !== '' && password !== '') {
      history.push(adminRoot);
    }
    // call registerUserAction()
  };

  return (
    <div>
      <div className="p-4 bg-info" >
      </div>
      {/* <AppBarOuter/> */}
      <Row className="h-100">
        <Colxx xxs="12" md="6" className="mt-5 mx-auto my-auto">
          <Card className="auth-card mt-5 ">
            <CardBody>
              <div  >
                <div className="text-center">
                <NavLink to="/" className="white">
                  <span className="logo-single" /> 
                </NavLink>
                <CardTitle className="mb-4">
                  <IntlMessages id="Login in to your Account" />
                </CardTitle>
                </div>
                <Form>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.fullname" />
                    </Label>
                    <Input type="name" defaultValue={name} />
                  </FormGroup>

                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.email" />
                    </Label>
                    <Input type="email" defaultValue={email} />
                  </FormGroup>

                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.password" defaultValue={password} />
                    </Label>
                    <Input type="password" />
                  </FormGroup>
                  <div className="d-flex justify-content-end align-items-center">
                    <a href="/app/asset-manager">
                    <Button
                      color="primary"
                      className="btn-shadow d-block"
                      size="lg"
                      onClick={() => onUserRegister()}
                    >
                      <IntlMessages id="Login" />
                    </Button>
                    </a>
                  </div>
                  <a href="/user/login">Sign up</a>
                </Form>
              </div>            
              </CardBody>
            </Card>
        </Colxx>
      </Row>
    </div>
  );
};
const mapStateToProps = () => {};

export default connect(mapStateToProps, {
  registerUserAction: registerUser,
})(Login);
