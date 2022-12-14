import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/pages/HomePage';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';
import {renderRoutes} from 'react-router-config';
import serialize from 'serialize-javascript';

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );
    const html = `
    <html>
    <head></head>
    <body>
    
    <div id="root">${content}</div>
    <script>
    window.INITIAL_STATE=${serialize(store.getState())}
    </script>
    <script type="module" src="bundle.js"></script>
    </body>
    </html>`
    return html;
}