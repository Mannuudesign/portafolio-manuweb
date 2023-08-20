import { useState } from 'react';
import ContactForm from './components/contactform';
import Footer from './components/footer';
import { BsFillMoonStarsFill,BsSun } from "react-icons/bs";
import './App.css';
import {AiFillGithub, AiFillLinkedin, AiFillInstagram  } from 'react-icons/ai';



function App(){
      const [darkMode, setDarkMode] = useState(false);

      const toggleDarkMode = () => {
       setDarkMode((prevMode) => !prevMode);}

  return(
    <div className={`text-start  ${darkMode ? "bg-white text-gray-900" : "bg-gray-540 text-white"} flex-1 ${darkMode ? "dark" : ""}`}>
      <main className='px-4 md:px-10 lg:px-16 xl:px-20'>
        <section className=' min-h-screen'>
          <nav className='py-6 md:py-10 lg:py-12 flex justify-between items-center'>
            <img  className="h-12" src="icon3.png" alt="logo" />
            <ul className='flex items-center space-x-8'>
              <li>
                {darkMode ? (
                  <BsSun
                    onClick={toggleDarkMode}
                    className="cursor-pointer text-2xl"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={toggleDarkMode}
                    className="cursor-pointer text-2xl"
                  />
                )}
              </li>
              <li><a  className={`px-4 py-2 rounded-md ${
                darkMode ? "bg-blue-700 text-white" : "bg-gray-800 text-white"
               }`} href="#contact-section" > Hire</a>
              </li>
              
            </ul>
                
          </nav>
          <div className="text-center p-6 md:p-10" >
            <h2 className="text-3xl md:text-5xl py-2 text-blue-700 font-medium  md:text-6xl"> Manü Web </h2>
            <h3 className={`text-lg md:text-2xl py-2 ${darkMode ? "text-gray-700" : "text-gray-400"} `}>Developer and Community Manager</h3>
            <p className={`text-sm md:text-base md:w-3/4 lg:w-1/2 mx-auto px-2 py-3 md:px-4 md:py-5 ${darkMode ? "text-gray-800" : "text-white"}`}>
              I am a university student in technology and a programming apprentice since 2019.
              I am passionate about the world of technology, especially cybersecurity, blockchain, and data management.
              My proactive approach allows me to learn quickly and tackle challenges creatively. In my online portfolio, 
              you can explore my projects where I apply my knowledge to create innovative and secure solutions.
              Welcome to my technological and creative world! 
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600"  >
            <a href="https://www.linkedin.com/in/nicolas-santana-55907a1b4/" target="_blank" >
              <AiFillLinkedin className="text-blue-700"/>
            </a>
            <a href="https://www.instagram.com/manuuwebdesign/" target="_blank" >
              <AiFillInstagram className="text-blue-700"/>
            </a>
            <a  href="https://github.com/Mannuudesign" target="_blank">
              <AiFillGithub className="text-blue-700" />
            </a>
          </div>
          <div className="mx-auto bg-stars-pattern rounded-full w-70 h-70 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <img src="./aur.png" layout="fill" objectfit="cover" className="w-full h-full object-cover move-astronaut" />
          </div>
       </section>
       <section className={`py-10 ${darkMode ? "bg-white text-gray-900" : "bg-gray-540 text-white"}`}>
         <div className="mx-auto text-center max-w-4xl">
            <h3 className={`text-2xl md:text-4xl py-4 ${darkMode ? "text-blue-700" : "text-blue-400"}`}>Services I offer:</h3>
            <p className={`text-base md:text-md py-2 leading-6 md:w-3/4 lg:w-1/2 mx-auto ${darkMode ? "text-gray-800" : "text-white"}`}>
             I am excited to put my skills at the service of new challenges and projects. In my portfolio, you will find samples of my previous work, which reflect my dedication and passion for creating innovative and effective digital solutions. If you are looking for a versatile, committed, and proactive professional, do not
             hesitate to contact me to discuss how I can contribute to the success of your next project.
            
            </p>
            <p className="text-md py-2 leading-6 md:w-3/4 lg:w-1/2 mx-auto ">
              I offer from a wide range of services, including community manager,
              programming and web security.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-4xl mx-auto">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  ">
            
              <img className="h-100 w-100" src="./communitymanager.png" alt="desarrollador web" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Community Manager
              </h3>
              <p className="py-2 text-start ">
                 I can work with you to create a social media 
                 that is engaging and relevant to your target audience..
              </p>
              <h4 className="py-4 text-teal-600">How will I help you?</h4>
              <p className="py-1 text-start">Create and publish content that is engaging 
               and appealing to the company's target audience</p>
              <p className="py-1 text-start">Respond to customer questions and
               feedback in a timely and helpful manner</p>
              <p className="py-1 text-start">Organize and moderate social 
               media events and discussions</p>
              <p className="py-1 text-start ">Monitor social media activity 
               and identify opportunities to improve the company's online presence</p>
            </div>
            <div className={`text-center shadow-lg  text-start p-10 rounded-xl my-10 1 ${darkMode ? "bg-white":""  }`}>
              <img  className="h-100 w-100" src="desarrolloweb.png" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Web Developer
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Developer Tools I Use</h4>
              <p className="py-1"> Django Python</p>
              <p className="py-1">JavaScript</p>
              <p className="py-1">HTML and CSS</p>
              <p className="py-1">React</p>
              <p className="py-1">SQLite,postgreSQL,Mongodb</p>
              
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
              <img className="h-100 w-100" src="hacker.png" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Website Security
              </h3>
              <p className="py-2 text-start">
                Are you worried about the security of your website? 
                I can help to give greater security to your web application
              </p>
              <h4 className="py-4 text-teal-600">Segurity Tools I Use</h4>
              <p className="py-1">Intrusion detection systems (IDS)</p>
              <p className="py-1">Intrusion prevention systems (IPS)</p>
              <p className="py-1">Email filters</p>
              <p className="py-1">Identity and access management (IAM)</p>
              <p className="py-1">Security risk management</p>
            </div>
         </div> 
       </section>
       <section className={`py-10 ${darkMode ? "bg-white text-gray-900" : "bg-gray-540 text-white"}`}>
        <div className="mx-auto text-center max-w-4xl">
          <h3 className={`text-2xl md:text-4xl py-4 ${darkMode ? "text-blue-700" : "text-blue-400"}`}>Projects:</h3>
          <p className={`text-md md:text-lg py-2 md:py-4 leading-8 md:w-3/4 lg:w-1/2 mx-auto ${darkMode ? "text-gray-800" : "text-white"}`}>
           As a freelance community manager and aspiring developer, I focus on managing 
           online communities and leveraging social media to drive engagement and growth. Additionally, I collaborate on personal projects to create captivating digital experiences for businesses and consumers, continuously improving my skills 
           and delivering impactful solutions. Below, you'll find some of my projects.
          </p>

        </div>
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-4xl mx-auto">
         <div>
           <h3 className=" text-center text-lg font-semibold mb-2">Jeep web</h3>
           <img  src="jeep.png" alt="jeep web design" className="w-full h-auto mx-auto square-image"/>
           <div className="mt-2 flex flex-col items-center">
            <a href="http://github.com/Mannuudesign" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">GO</a>
           </div>
         </div>
         <div>
           <h3 className="text-center text-lg font-semibold mb-2">Real State web</h3>
           <img src="Home.png" alt="Real state web design" className="w-full h-auto mx-auto square-image"  />
           <div className="mt-2 flex flex-col items-center">
            <a href="http://github.com/Mannuudesign"
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
               GO
            </a>

          
           </div>
         </div>
         <div>
           <h3 className="text-center text-lg font-semibold mb-2">NIO car</h3>
           <img src="es8.png" alt="ES8 web design" className="w-full h-auto mx-auto square-image" />
           <div className="mt-2 flex flex-col items-center">
             <a href="http://github.com/Mannuudesign" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">GO</a>
           </div>
         </div>
         <div>
           <h3 className="text-center text-lg font-semibold mb-2">Cafe Web</h3>
           <img src="coffedesign.jpeg" alt="Cafe design" className="w-full h-auto mx-auto square-image"/>
          <div className="mt-2 flex flex-col items-center">
           <a href="https://github.com/Mannuudesign" className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">GO</a>
          </div>
         </div>
         <div>
            <h3 className="text-center text-lg font-semibold mb-2">Barberia KevinStyle</h3>
            <img src="kevinstyle.png" alt="Barbershop web design"  className="w-full h-auto mx-auto square-image"/>
          <div className="mt-2 flex flex-col items-center">
            <a href="https://kevinstyle-5631d.web.app/" target='_blank'className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">GO</a>
          </div>
         </div>
        </div>
    
       </section>
       <section id="contact-section" >
         <h2 className={`text-center text-2xl ${darkMode ? "text-gray-800" : "text-blue-500" } mb-4`}>Contact Me:</h2>
         <ContactForm darkMode={darkMode}/>
       </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div> 

  )
  
  
}

export default App
