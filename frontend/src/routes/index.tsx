import { DefaultLayout } from "@/layouts/DefaultLayout";
import { LeftSidebarLayout } from "@/layouts/LeftSidebarLayout";
import { ShopLayout } from "@/layouts/ShopLayout";
import { LoginPage, RegisterPage } from "@/pages/Auth";
import Category from "@/pages/Category";
import { Checkout } from "@/pages/Checkout";
import { OrderSuccess } from "@/pages/Checkout/OrderSuccess";
import HomePage from "@/pages/Home";
import { AccountDetail, OrderList } from "@/pages/MyAccount";
import { PageNotFound } from "@/pages/PageNotFound";
import { ProductDetail } from "@/pages/Product";
import { ShoppingCart } from "@/pages/ShoppingCart";
import Styleguides from "@/pages/Styleguides";
import { Wishlist } from "@/pages/Wishlist";
import { ReactElement } from "react";

export interface CustomRoutes {
  path?: string;
  element?: ReactElement;
  isAuth?: boolean;
  index?: boolean;
  children?: CustomRoutes[];
}

export const RouteList: CustomRoutes[] = [
  // -----------  Home -----------
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },

  // ----------- Auth  -----------
  {
    path: "login",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      }
    ],
  },

  {
    path: "logout",
    isAuth: true,
  },

  {
    path: "register",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <RegisterPage />,
      }
    ],
  },

  // ----------- My Account  -----------
  {
    path: "dashboard",
    element: <LeftSidebarLayout />,
    isAuth: true,
    children: [
      {
        index: true,
        element: <AccountDetail />,
      },
      {
        path: "search",
        element: <OrderList />,
      },
    ],
  },

//   // ----------- My library  -----------
//   {
//     path: "thu-vien",
//     element: <DefaultLayout />,
//     children: [
//       {
//         index: true,
//         isAuth: true,
//         element: <MyLibraryPage />,
//       },
//     ],
//   },
  {
    path: "styleguides",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Styleguides />,
      },
    ]
  },
  {
    path: "shop",
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <Category />,
      },
    ]
  },
  {
    path: "product",
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <ProductDetail />,
      },
    ]
  },
  {
    path: "wishlist",
    element: <Wishlist />,
    children: [
      {
        index: true,
        element: <Category />,
      },
    ]
  },
  {
    path: "cart",
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <ShoppingCart />,
      },
    ]
  },
  {
    path: "checkout",
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <Checkout />,
      },
    ]
  },
  {
    path: "order-success",
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <OrderSuccess />,
      },
    ]
  },
  
  {
    path: "*",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <PageNotFound />,
      },
    ]
  }
];
