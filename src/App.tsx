import React, { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import { Header } from 'components/Header';

export const PAGES_ROUTES = [
  {
    path: "/",
    component: lazy(() => import('./pages/card-list')),
    name: "Card List",
  },
  {
    path: "/deck",
    component: lazy(() => import('./pages/deck-list')),
    name: "Deck List",
  }
]

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense>
        <Routes>
          {
            PAGES_ROUTES.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                element={<route.component />}
              />
            ))
          }
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
