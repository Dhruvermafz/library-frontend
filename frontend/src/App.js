import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Books from "./components/Book/Books";
import AddBook from "./components/Book/AddBook";
import BookDetail from "./components/Book/BookDetail";
import Chatogaries from "./components/Chatogary/Chatogaries";
import AddChatogary from "./components/Chatogary/AddChatogary";
import ChatogaryDetail from "./components/Chatogary/ChatogaryDetail";
import AddAuthor from "./components/Author/AddAuthor";
import Authors from "./components/Author/Authors";
import AuthorDetail from "./components/Author/AuthorDetail";
import Complains from "./components/Complain/Complains";
import AddComplain from "./components/Complain/AddComplain";
import ComplainDetail from "./components/Complain/ComplainDetail";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext.js";
import Footer from "./components/Footer/Footer.js";
import SignIn from "./components/SignIn/SignIn.js";
import AdminDashboard from "./components/Dashboard/AdminDashboard/AdminDashboard.js";
import MemberDashboard from "./components/Dashboard/MemberDashboard/MemberDashboard.js";

function App() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/dashboard@member"
            element={
              user && user.isAdmin === false ? (
                <MemberDashboard />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/dashboard@admin"
            element={
              user && user.isAdmin === true ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/chatogary" element={<Chatogaries />} />
          <Route path="/addchatogary" element={<AddChatogary />} />
          <Route path="/chatogary/:id" element={<ChatogaryDetail />} />
          <Route path="/author" element={<Authors />} />
          <Route path="/addauthor" element={<AddAuthor />} />
          <Route path="/author/:id" element={<AuthorDetail />} />
          <Route path="/complain" element={<Complains />} />
          <Route path="/addcomplain" element={<AddComplain />} />
          <Route path="/complain/:id" element={<ComplainDetail />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
