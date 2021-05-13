import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';
import { ProtectedRoute,   } from '../../helpers/authHelper';
import Register from '../user/register';

 
const AssetManager = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './AssetManager/AssetManager')
);
 
const BrandKit = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './BrandKit/BrandKit')
);
 
const MyProject = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './MyProject/MyProject')
);
 
const Setting = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './Setting/Setting')
);

// hidden page
const SingleAsset = React.lazy(() =>
  import(
    /* webpackChunkName: "viwes-blank-page" */ './AssetManager/SingleAsset'
  )
);
const UploadPage = React.lazy(() =>
  import(
    /* webpackChunkName: "viwes-blank-page" */ './AssetManager/UploadPage/UploadPage'
  )
);


// public route
 

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            {/* <ProtectedRoute
              path={`${match.url}/asset-manager`}
              component={AssetManager}
              roles={['Admin','Seller','Client']}
            /> */}
            <Route
              path={`${match.url}/asset-manager`}
              render={(props) => <AssetManager {...props} />}
              exact
            />
            <Route
              path={`${match.url}/asset-manager/single-asset`}
              render={(props) => <SingleAsset {...props} />}
              exact
            />
            <Route
              path={`${match.url}/asset-manager/upload-file`}
              render={(props) => <UploadPage {...props} />}
              exact
            />
            <Route
              path={`${match.url}/brand-kit`}
              render={(props) => <BrandKit {...props} />}
              exact
            />
            <Route
              path={`${match.url}/my-project`}
              render={(props) => <MyProject {...props} />}
              exact
            />
            <Route
              path={`${match.url}/setting`}
              render={(props) => <Setting {...props} />}
              exact
            />
            {/* <Redirect to="/error" /> */}
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
