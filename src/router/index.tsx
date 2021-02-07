import * as React from "react";
import { Redirect } from 'react-router-dom'
const MineMainComp = React.lazy(() => import('@/pages/mine/main'));
const MineComp = React.lazy(() => import('@/pages/mine/index'));
const SearchComp = React.lazy(() => import('@/pages/search/main'));
const RankingComp = React.lazy(() => import('@/pages/mine/ranking'));
const RecommendComp = React.lazy(() => import('@/pages/mine/recommend'));

const routes = [
  { path: '/', exact: true, render: () => <Redirect to="/mine" /> },
  {
    path: '/mine',
    component: MineMainComp,
    // exact: true,
    // render: () => <Redirect to="/mine/index" />,
    routes: [
      { path: '/mine/index', component: MineComp },
      { path: '/mine/recommend', component: RecommendComp },
      { path: '/mine/ranking', component: RankingComp },
    ],
  },
  {
    path: '/search',
    component: SearchComp,

  },
];
export default routes