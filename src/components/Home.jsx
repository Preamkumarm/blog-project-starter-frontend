import React from 'react'
import Navbar from './common/Navbar'
import BlogProfileImage from "../assets/Blog Website Design.jpg"
import CSS from "../assets/css-3.png"
import HTML from "../assets/html.png"
import DB from "../assets/data-server.png"
import JS from "../assets/js.png"
import REACTICON from "../assets/physics.png"
import NODE from "../assets/node-js.png"
import { portfolio,herobg } from '../data'
import BlogImage from "../assets/blogImage.png"
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer'
import { useState,useEffect } from 'react'
function Home() {
    const navigate = useNavigate()
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % herobg.length 
      );
      setStartIndex((prevIndex)=>(prevIndex+1) % herobg.length);
    }, 2000); 

    return () => clearInterval(interval); 
  }, []);

    return (
        <div>

            <div className='flex items-center justify-center'>
                <div className="w-full sm:w-1/2 flex-col justify-center -ml-96">
                    <h2 className='text-3xl md:text-6xl font-bold pb-2'>Hi! It's</h2>
                    <h2 className='text-4xl md:text-7xl font-bold text-orange-400 py-2'>Pream</h2>
                    <h3 class="text-animation">I'm a <span></span></h3>
                    <p className='py-2'> Passionate fresher in web development proficient in HTML, CSS,
          JavaScript, ReactJS, Tailwind CSS, Node.js, ExpressJS,MongoDB, and
          Firebase. Dedicated to crafting engaging user interfaces and
          experiences, eager to contribute to innovative projects, and grow in
          the dynamic field of web development.</p>
                    <button className='button-style mt-2'>Hire Me</button>
                </div>
                <div className='justify-center hidden sm:block'>
                <div>
        {herobg.map((item, index) => (
        <div key={index}>
          <div className="">
            <div className="">
              {index === currentImageIndex && (
                <img
                  src={item.imageSrc}
                  alt={`List ${index + 1}`}
                  className="w-72 h-auto absolute top-0 transition-all duration-1000 ease-in-out transform  translate-x-10 translate-y-40"
                />
              )}
            </div>
          </div>
          {/* <h1 className="transform translate-y-5 text-lg">{item.title}</h1> */}
        </div>
      ))}
      </div>

                </div>

            </div>


            <div className='flex justify-evenly py-6'>
                
                <img src={HTML} style={{ width: "50px" }} />
                <img src={CSS} style={{ width: "50px" }} />
                <img src={JS} style={{ width: "50px" }} />
                <img src={REACTICON} style={{ width: "50px" }} />
                <img src={DB} style={{ width: "50px" }} />
                <img src={NODE} style={{ width: "50px" }} />
            </div>

            <div className='flex flex-col mt-10 items-center justify-around sm:flex-row'>
                <div className='flex-col'>
                    <div className='mt-4 border-[6px] rounded-lg border-purple-500 p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-purple-200 to-purple-600'>6</div>
                        <p className='text-center font-medium'>Projects Completed</p>
                    </div>
                    <div className='mt-4 border-[6px] rounded-lg border-green-500 p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-green-200 to-green-600'>6</div>

                        <p className='text-center font-medium'>Months of Experience</p>
                    </div>
                </div>

                <div className='ml-4 mt-4 sm:mt-0'>
                    <h2 className='text-3xl sm:text-7xl font-bold'>My Awesome</h2>
                    <h2 className='text-3xl sm:text-7xl font-bold text-orange-400'>Services</h2>
                    <p className='my-2'>I have attahed my Resume here for your Reference</p>
                    <button className='button-style mt-2'>Download CV</button>

                </div>




            </div>

            <div>
                <h2 className='text-center text-5xl my-14 font-bold'>Checkout My Live <span className='text-orange-400'>Projects</span> Here</h2>
                <div className=' justify-around my-5 grid grid-cols-3 gap-3 sm:flex-row'>

                   {
                    portfolio.map(function(item,index){
                        return <div>
                            <img src={item.image} className='w-64 h-64 border rounded-md cursor-pointer' />
                            <h2 className='text-xl font-semibold ml-14'>{item.title}</h2>
                        </div>
                    })
                   }

                </div>
            </div>


            <div className='flex items-center justify-center my-14'>
                <div className='justify-center hidden sm:block'>
                    <img src={BlogImage} className='w-60 md:w-96 ' alt="Blog Profile Image" />

                </div>
                <div className="w-full sm:w-1/2 flex-col justify-center ml-6">
                    <h2 className='text-3xl md:text-6xl font-bold pb-2'>I like to Write</h2>
                    <h2 className='text-4xl md:text-7xl font-bold text-orange-400 py-2'>Blogs about tech</h2>

                    <p className='py-2'>You can know better about me by reading my blogs here. I share my expertise here.</p>
                    <button className='button-style mt-2' onClick={() => navigate("/blogs")}>Read My Blogs</button>
                </div>


            </div>


            <Footer/>


        </div>
    )
}

export default Home