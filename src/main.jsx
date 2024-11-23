import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import appStore from './components/utiles/appStore.js'
import Loading from './components/Loading.jsx'

// Lazy load components
const App = lazy(() => import('./App.jsx'));
const ProductDetails = lazy(() => import('./components/ProductDetails.jsx'));
const NotFound = lazy(() => import('./components/NotFound.jsx'));
const ProductList = lazy(() => import('./components/ProductList.jsx'));
const ProductItem = lazy(() => import('./components/ProductItem.jsx'));
const CheckOut = lazy(() => import('./components/CheckOut.jsx'));
const CartItemList = lazy(() => import('./components/CartItemList.jsx'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading/>}>
        <App />
      </Suspense>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading/>}>
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: "/products/:productId",
        element: (
          <Suspense fallback={<Loading/>}>
            <ProductItem />
          </Suspense>
        ),
      },
      {
        path: "/products/details/:productId",
        element: (
          <Suspense fallback={<Loading/>}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loading/>}>
            <CartItemList />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<Loading/>}>
            <CheckOut />
          </Suspense>
        ),
      },
      {
        errorElement: <NotFound />
      }
    ]
  }
]);

// Ensure to call createRoot() only once
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Render your app to the root
root.render(
  <Provider store={appStore}>
    <StrictMode>
      <RouterProvider router={appRouter} />
    </StrictMode>
  </Provider>
);
