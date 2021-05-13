import { Input } from '@material-ui/core';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  CardText,
  CardSubtitle,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Badge,
} from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import UploadPage from './UploadPage/UploadPage';

const AssetManager = ({ match }) => {
  const [showUploadComponent, setShowUploadComponent] = useState(false);

  return (
    <>
      <div className="row mb-5">
        <div className="col-md-3">
          <h3>My Asset</h3>
        </div>
        <div className="col-md-6">
          <input
            className="form-control"
            name="searchKeyword"
            id="searchKeyword"
            placeholder="Search Assets"
          />
        </div>
        <div className="col-md-3">
          <div className="">
            {showUploadComponent ? (
              <UploadPage />
            ) : (
              <a
                className="btn btn-outline-primary btn-sm ml-2"
                target="_top"
                href="/app/asset-manager/upload-file"
              >
                <span className="simple-icon-cloud-upload glyph-icon"></span>
                <IntlMessages id="  Upload Asset " />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        {[3, 1234, 15, 13, , 3, 1].map((el) => (
          <div className=" col-xs-12 col-sm-6  col-md-4 col-lg-3  mb-3">
            <a href="/app/asset-manager/single-asset">
              <Card className="mb-4">
                <div className="position-relative">
                  <CardImg
                    top
                    src="/assets/img/cards/card.png"
                    alt="Card image cap"
                  />
                </div>
                <CardBody>
                  <h3>This is test title</h3>
                  <div
                    style={{ borderTop: '1px solid gray', padding: '10px' }}
                  ></div>
                  <Badge
                    style={{ right: '10px' }}
                    color="primary"
                    pill
                    className="position-absolute badge-bottom-left"
                  >
                    PSD
                  </Badge>
                  <CardText className="text-muted text-small mb-0 font-weight-light">
                    Used Right{' '}
                  </CardText>
                  <CardText className="text-muted text-small mb-0 font-weight-light">
                    Available
                  </CardText>
                </CardBody>
              </Card>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default AssetManager;
