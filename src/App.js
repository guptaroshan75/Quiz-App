import React from 'react';
import QuizPages from './pages/QuizPages';
import Navbar from "./component/Navbar";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Footer from "./component/Footer";
import Register from './pages/Register';

const App = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth='lg' >
        <Routes>
          <Route path='/' element={<QuizPages />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App;
