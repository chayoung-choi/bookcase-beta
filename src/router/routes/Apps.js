import React, {lazy} from 'react'

const AppRoutes = [
    {
        path: ['/', '/bookcase'],
        exact: true,
        component: lazy(() => import('../../views/Home'))
    },
    {
        path: '/v1',
        component: lazy(() => import('../../views/V1'))
    },
    {
        path: ["/v2", "/v2/:id"],
        component: lazy(() => import('../../views/V2'))
    },
    {
        path: '/v3',
        component: lazy(() => import('../../views/V3'))
    },
]
export default AppRoutes;
