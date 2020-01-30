import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';

// Note: Add all components here.
// const Component = lazy(() => import('componentPath'));

const Routes = () => {
  return(
    <Suspense
      fallback={
        <div className="loaderContainer">
          <div className="loaderWrapper">
            <div className="loader">Loading...</div>
          </div>
        </div>
      }
    >
      <Switch>
          <Route path='/' component={}/>
      </Switch>
    </Suspense>
  );
}

export default Routes;