// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();


import React from 'react';  // مكتبه الرياكت
import ReactDOM from 'react-dom/client';  // الرياكت دوم المترجم الوسيط بين الااب والاندكس
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; // اضافات الرياكت روتر والرياكت روتر دوم  
// import App from './App';
import Homepage from './home page/Homepage';
import Images from './Images';

const router = createBrowserRouter([ // ميسود اوبجيكت جاهزه مبنيه في الرياكت روتر فيها باث والمنت في كل اوبجكت
  {
    path: '/', // المكان الي هضغط عليه عشان افتح بروزر
    element: <Homepage/>, // البروزر الي هيتفتح
  },
  {
    path: 'home', // هضغط علي لينك الهوم في الناف بار
    element: <div>hello world</div>, // هيفتح بروزر جديد فيه المنت
  },
  {
    path: 'heading',
    element: <Homepage/>,
  },
  {
    //    لو عاوز اضيف اكتر من سكشن واضيف عليهم تاج وهكذا
    
    path: 'Link',
    element:<div> 
      <Homepage/>  
      <Images/>
    <h1>mohamed</h1>
    </div>,
  },
]);
// متغير بااسم روت فيه اوبجكت رياكت دوم انا ضيفتو فوق وفيها ميسود بضيف فيها الاي دي بتاعي وبعمل ليه ريندر 
const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
