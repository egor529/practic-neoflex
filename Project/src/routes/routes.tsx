import { Routes, Route } from 'react-router-dom';


import Home from '/pages/Home.tsx';
import Project1 from '/pages/Project1.tsx';


const AppRoutes = () => (
<Routes>
    {"/"}
<Route path="/" element={<Home />} />

    {"/Project1"}
<Route path="/Project1" element={<Project1 />} />
</Routes>
);

export default AppRoutes;