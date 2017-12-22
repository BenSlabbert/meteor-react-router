import React from 'react';
import { Route, Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';

const routes = [
    {
        path: '/',
        exact: true,
        component: () => <div>home!</div>
    },
    {
        path: '/bubblegum',
        component: () => <div>bubblegum!</div>
    },
    {
        path: '/bubblegum/shoelaces',
        component: () => <div>/bubblegum/shoelaces!</div>
    },
    {
        path: '/shoelaces',
        exact: true,
        component: () => <div>shoelaces!</div>
    },
    {
        path: '/shoelaces/shoelaces',
        exact: true,
        component: () => <div>/shoelaces/shoelaces!</div>
    },
    {
        path: '/settings',
        component: () => <div>settings!</div>
    }
];

export const Sidebar = () => {
    return (
        <div>
            <div className="sidenav">
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><Link to="/bubblegum">Bubblegum</Link>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><Link to="/bubblegum/shoelaces">bubblegum/shoelaces</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/shoelaces">Shoelaces</Link>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><Link to="/shoelaces/shoelaces">shoelaces/shoelaces</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Collapsible trigger="Start here">
                            <Link to="/shoelaces/shoelaces">shoelaces/shoelaces</Link>
                        </Collapsible>
                    </li>
                </ul>
            </div>

            <div className="main">
                {routes.map( ( route, index ) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    /> )
                )}
            </div>
        </div>
    );
};

export default Sidebar;
