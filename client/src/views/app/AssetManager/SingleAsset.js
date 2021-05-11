import React from 'react';
import { CardBody, Card, CardImg } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';

const SingleAsset = () => {
  return (
    <div>
      <div className="col-md-10 offset-md-1">
        <Card>
          <CardBody className="pt-2 pb-5">
            <div className="row pt-3">
              <div className="col-md-6">
                <h3>Covid 19 Poster</h3>
                <p>ID : 4u2348u2309du238420139421</p>
                <hr />
                <CardImg
                  top
                  style={{ borderRadius: '10px' }}
                  src="/assets/img/cards/card.png"
                  alt="Card image cap"
                />{' '}
              </div>
              <div className="col-md-6">
                <h3>Name : Mr. Emamul Hoque </h3>
                <p>Covid 19 Poster</p>
                <hr />
                <div className="description">
                  <div>
                    <p>
                      <b>
                        {' '}
                        <strong>Description</strong>{' '}
                      </b>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </div>
                  <hr />
                  <div className="tag">
                    <h5>Tag</h5>
                    <div className=" mb-4">
                      <buton
                        color="primary"
                        className="btn btn-outline-primary btn-xs mb-3 mr-3"
                      >
                        <IntlMessages id="tag 1" />
                      </buton>
                      <buton
                        color="primary"
                        className="btn btn-outline-primary btn-xs mb-3 mr-3"
                      >
                        <IntlMessages id="tag 2" />
                      </buton>
                      <buton
                        color="primary"
                        className="btn btn-outline-primary btn-xs mb-3 mr-3"
                      >
                        <IntlMessages id="tag 3" />
                      </buton>
                      <buton
                        color="primary"
                        className="btn btn-outline-primary btn-xs mb-3 mr-3"
                      >
                        <IntlMessages id="tag 4" />
                      </buton>
                    </div>
                  </div>
                  <hr/>
                  <div className="ugase-right">
                    <h5>Ugase Right</h5>
                    <p>Available</p>
                  </div>
                  <hr/>
                  <div className="compaign">
                    <h5>Compaign</h5>
                    <p>Spring</p>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default SingleAsset;
