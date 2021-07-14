import React from 'react';
import '../../App.css';
import '../pages/About.css';
import Footer from '../Footer';

export default function About() {
    return (
        <>
        <div className="aboutme">
          <h1>Brandon J. Palomino</h1>
          <img src="images/my_picture.jpg" alt="mypic" className="profile_pic"/>
          <h2 class="">Aspiring Software Enginner/Data Scientist</h2>
          <p class="">San Jose State University</p>
          <p class="">B.S. Computer Science 2017-2021</p>
          <p class="">M.S. Data Science 2021-2023</p>
          <p className="paragraph">Hello there, thank you for visiting my portfolio website. My name is Brandon and I am a recent graduate majoring in Computer Science at San Jose State University.
              I'll be continuing my studies at SJSU with a focus in Data Science as my master's degree.
              I began learning how to program when I was in middle school as a means of bulding simple applications, but I'm now delving into web development, machine learning, and big data.
              I am constantly learning new technologies and tools to improve my self as a programmer.
              As an upcoming data scientist, my interests lie in creating algorithms that will allow A.I. to grow exponentially.
              In my free time, I enjoy hobbies such as listening to music, reading books, swimming, and game development.
          </p>
            <a className="iconLink" href="https://www.linkedin.com/in/brandonpalomino/" alt="Brandon's linkedin" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin icons"></i></a>
            <a className="iconLink" href="https://github.com/SlicerBX" alt="Brandon's github" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icons"></i></a>
            <a className="iconLink" href="https://drive.google.com/file/d/1EgqvwuLXGDXj_NhEkGaUVB1_u__2snQL/view?usp=sharing" alt="Brandon's resume" target="_blank" rel="noopener noreferrer"><i className="fa fa-file icons"></i></a>
        </div>
        <Footer />
        </>
    );
};