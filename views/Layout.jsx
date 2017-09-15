import React from 'react';
import PropTypes from 'prop-types';
import { Header, Jumbotron } from 'watson-react-components';

const demoName = 'Watson For Good';
const DESCRIPTION = 'Watson For Good provides sentiment analysis on any issue important to you';
export default function Layout(props) {
  return (
    <html lang="en">
      <head>
        <title>{demoName} Demo</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content={demoName} />
        <meta name="og:description" content={DESCRIPTION} />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <style date-aphrodite>{props.css.content}</style>
        <script type="text/javascript" src="scripts/bundle.js" defer async />
      </head>
      <body>
        <Header
          mainBreadcrumbs={demoName}
          mainBreadcrumbsUrl="https://github.com/comp523-w4g"
          subBreadcrumbs="Read more here"
          subBreadcrumbsUrl="https://comp523-w4g.github.io/watson-4-good"
        />
        <div id="root">
          {props.children}
        </div>
        <script type="text/javascript" src="scripts/bundle.js" />
        { props.bluemixAnalytics ?
          <script type="text/javascript" src="scripts/analytics.js" /> : null }

      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  css: PropTypes.object.isRequired, // attaching css generated by aphrodite
  bluemixAnalytics: PropTypes.bool.isRequired,
};
