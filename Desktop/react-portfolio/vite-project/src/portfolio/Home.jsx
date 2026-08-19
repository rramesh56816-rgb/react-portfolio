
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import './portfolio.css';

function Home() {
    const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <h1>Welcome TO My Portfolio...</h1>
      </div>
    );
  }
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm("service_vf2t7jm","template_z48ve87",e.target,"g_o-BtWPN2jg2lGVX")
};
return(
    <section>

        <div className='ramboimg'>
     <div className='intro'>
        <h2>Hello,it's Ramesh </h2>
        <h1 className='hed'> Frontend <span>Developer</span></h1>
        <p className='i-p'>Crafting modern websites with creativity and code.<br />
            Turning complex ideas into simple user experiences.<br />
            Building the future, one project at a time.</p>
            <div className='logo'  data-aos="fade-up">
               <a className='l' href="https://www.linkedin.com/in/ramesh-ramesh-a807042a8?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank">
               <FaLinkedin />
               </a>
               <a className='l' href="https://github.com/rramesh56816-rgb" target="_blank">
               <FaGithub />
               </a>
               <a className='l' href="https://wa.me/917695813972?text=Hello%20Ramesh" target="_blank">
               <FaWhatsapp />
               </a>
            </div>

            <div className='btn-grp' data-aos="fade-down">
            <button  className='A-btn'  onClick={() => { const link = document.createElement("a");  link.href = `${import.meta.env.BASE_URL}my resume.pdf`; link.download = "Resume.pdf";  link.click();}}>download resume</button>
            <button  className='B-btn' onClick={() => { document.getElementById('contact').scrollIntoView({ behavior:"smooth" });}}>Contact Me</button>
            </div> 
          
     </div>
     <img className='rambo2' src='./ramesh.png' />  
       
          </div>

       <div className='about-me'> 
     <h1 className='a-m'>About Me</h1>
     <div className='about2'>
     <div className='about'>
          <h2 className='a-h'><span>Frontend Developer</span> & UI Enthusiast</h2>
        <p className='a-p'> I am a  Frontend Developer skilled in building responsive and 
            user-friendly websites using React, JavaScript, and CSS. I love creating 
            clean UI designs and turning ideas into real projects. I enjoy developing 
            modern web applications with smooth user experiences and well-structured code.
            My goal is to create websites that are visually appealing, fast, and easy 
            for users to interact with. I am always interested in learning new 
            technologies, improving my skills, and building creative solutions through code.
        </p>
     </div>
     </div>
         </div>

         <section className='j-ebox'>
        <div className='journey-box' data-aos="fade-right" >
        <h2 className='journey'>My Journey</h2>
        <p>I started with a passion for creating<br />
           beautiful and interactive websites.<br /> I learning new technologies<br />
           and improving my skills through .</p>
        </div>
        <div className='expertise-box'  data-aos="fade-left">
            <h2 className='expertise'>My Expertise</h2>
            <p> Frontend Development <br />
              → Building responsive websites using React & JavaScript<br />
                Problem Solving <br />
              → Turning ideas into practical solutions</p>
        </div>

        <div className='journey-box' data-aos="fade-down">
            <h2 className='journey'>What I Build</h2>
            <p> Responsive Websites<br />
                Interactive User Interfaces<br />
                Modern Web Applications<br />
                Creative Portfolio Designs</p>
        </div>
        <div className='expertise-box'  data-aos="fade-up">
            <h2 className='expertise'>My Goals</h2>
            <p> To become a skilled Frontend Developer, <br />
                build impactful web applications,<br />
                and continuously learn new technologies.</p>
        </div>
        </section>
        
        <h1 className='myskill'>My  Skill</h1>

        <div className='skill'>
           <h2 className='title'>Frontend <span>Skills</span></h2>

           <div className='skill-container'>

           <div className='skill-box'>
            <img  className='html' src='./html.png'  alt='Html' />
            <h4 className='box-name'>HTML</h4>
           </div>
           <div className='skill-box'>
            <img  className='html' src='./css-3.png'  alt='Html' />
             <h4 className='box-name'>CSS</h4>
           </div>
           <div className='skill-box'>
            <img  className='html' src='./js.png'  alt='Html' />
             <h4 className='box-name'>JS</h4>
           </div>
           <div className='skill-box'>
            <img  className='html' src='./react.png'  alt='Html' />
             <h4 className='box-name'>REACT</h4>
           </div>
          
           </div>
           
            <h2 className='title2'>Tools <span>&</span> Platforms</h2>
        <div className='skill-container'>
           <div className='skill-box'>
            <img  className='html' src='./vscode.png'  alt='Html' />
             <h4 className='box-name'>VS Code</h4>
           </div>
           <div className='skill-box'>
            <img  className='html' src='./github.png'  alt='Html' />
             <h4 className='box-name'>GITHUB</h4>
           </div>
           <div className='skill-box'>
            <img  className='html' src='./git.png'  alt='Html' />
             <h4 className='box-name'>GIT</h4>
            </div>
        </div>

      

        <div className='project'>
           <h1 className='myproject'>My <span>Project</span>span</h1>
          <div className='project-box'>
           <section className='portalimg'  data-aos="fade-right">
             <img className='projectimg' src='./portal-h.png' />
             <img className='projectimg' src='./portal2.png'  />
             <img className='projectimg' src='./portal3.png'  />
           </section>

           <section className='p-des'>
           <h2 className='portalh1'>Title:</h2>
           <h1 className='portaltitle'>Employee Management Portal</h1>
            <h2 className='portalh1'>Description:</h2>
            <p className='project-p'>A React-based employee management system <br />that allows users to view employee records,<br /> fetch employee data from an API,<br /> track employee counts, and preview <br />employee information in real time.</p>
            <h2 className='portalh1'>Key Features:</h2>
            <div className='feature'>
              <h3 className='key'> ✓ Employee Data Fetching (API Integration)</h3>
              <h3 className='key'> ✓ Dynamic Employee Count</h3>
              <h3 className='key'>✓ Employee Information Display</h3>
              <h3 className='key'>✓ Add Employee Form</h3>
              <h3 className='key'>✓ Live Preview Functionality</h3>
            </div>
            <h2 className='portalh1'>Tec Stack:</h2>
            <div className='feature'>
              <h3 className='key'> .HTML</h3>
              <h3 className='key'> .CSS</h3>
              <h3 className='key'> .JAVASCRIPT</h3>
              <h3 className='key'>.REACT</h3>
              <h3 className='key'>.REST API</h3>
            </div>
            <button className="c-btn"onClick={() =>window.open(  "https://rramesh56816-rgb.github.io/Employee--management-portal/","_blank")}> Click Here</button>
           </section>
          </div>
           
          <div className='project-box'>
           <section className='portalimg' data-aos="fade-right">
             <img className='smartimg' src='./smarttask.png' />
             <img className='smartimg' src='./smarttask2.png' />
           </section>

           <section className='p-des'>
           <h2 className='portalh1'>Title:</h2>
           <h1 className='portaltitle'>Smart Task Dashboard</h1>
            <h2 className='portalh1'>Description:</h2>
            <p className='project-p'>A smart task management dashboard <br /> designed to create, organize, and<br /> track tasks with a simple and user-friendly interface...</p>

              <h2 className='portalh1'>Key Features:</h2>
            <div className='feature'>
              <h3 className='key'>✓ Create and manage tasks</h3>
              <h3 className='key'>✓ Track task status</h3>
              <h3 className='key'>✓ Responsive design</h3>
              <h3 className='key'>✓ Organized task workflow</h3>
              <h3 className='key'>✓ Organized task workflow</h3>
            </div>

            <h2 className='portalh1'>Tec Stack:</h2>
            <div className='feature'>
              <h3 className='key'> .HTML</h3>
              <h3 className='key'> .CSS</h3>
              <h3 className='key'> .JAVASCRIPT</h3>
            </div>

           </section>
          </div>

        </div>

        

        <div className='Education'>
          <h1 className='heading-education'>Edu<span>c</span>ation</h1>
        <section className='education-container'>
        <div class="education-box"data-aos="fade-right">
         <h2>SSLC</h2>
         <p>Tilak Vidyalaya Higher Secondary School</p>
         <p>Year: 2022 - 2023</p>
        </div>
        <div className='education-box'data-aos="fade-left">
         <h2>Diploma in Computer Science Engineering</h2>
         <p>Merit Polyitecnic Colloge</p>
         <p>Year: 2023 - 2026</p>
        </div>
        </section>
        </div>

         
         <div id='contact'>
         <h1 className='heading-education'>Contact <span>Me</span></h1>

         <div className='contact-box'>

       <div className='contact'>
        <p>I'm interested in web development opportunities. Feel free to connect with me.</p>
        <p>Email: rramesh56816@gmail.com</p>
        <p>Phone: +91 7695813972</p>
       </div>
       
       <section className='user-box'>
        <form onSubmit={sendEmail}>
        <input className='usermesg' name="user_name"placeholder="Your Name"/>
        <input className='usermesg' name="user_email"placeholder="Your Email"/>
        <textarea className='usermesg' name="message"placeholder="Message"/>
        <button className='A-btn' type="submit">Send</button>
        </form>
       </section>

       </div>
       
       <footer className='footer'>
            <p>© 2026 Rambo. Frontend Developer.</p>
            <p>Built by Rambo | React • CSS • JavaScript</p>
       </footer>

      </div>
        </div>
    </section>
)

}

export default Home;