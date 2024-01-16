import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-box">
      <h2 className="about-title">About the Library</h2>
      <div className="about-data">
        <div className="about-img">
          <img
            src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80"
            alt=""
          />
        </div>
        <div>
          <p className="about-text">
            Welcome to "Library Management System," your one-stop solution for
            efficient and modern library management. We are passionate about
            promoting a love for reading and simplifying the process of managing
            and accessing books.
            <br />
            <br />
            Our MERN stack-based Library Management System is designed to
            provide a seamless experience for librarians and library users
            alike. Leveraging the power of MongoDB, Express.js, React, and
            Node.js, we offer a robust platform that ensures organized
            bookkeeping, easy-to-use interfaces, and effective communication.
            <br />
            <br />
            Whether you are a student, a teacher, or a book enthusiast, our
            platform caters to your needs. Manage your book inventory, track
            borrowing history, explore new arrivals, and enjoy a user-friendly
            environment that fosters a culture of learning.
            <br />
            <br />
            At "Library Management System," we believe in the transformative
            power of books, and we strive to create a digital library experience
            that reflects this belief. Join us in our mission to make knowledge
            accessible to everyone, everywhere.
            <br />
            <br />
            Your suggestions for improvement are always welcome!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
