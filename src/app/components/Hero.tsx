import Image from "next/image";

function Hero() {
    return (
        <main className="flex justify-center items-center py-10 bg-white">
            <div className="flex items-center space-x-10">
                {/* Intro Text */}
                <div>
                    <h1 className="text-4xl font-bold">I'm Sheikh Ilyas, Front-end Developer</h1>
                    <p className="mt-4 text-lg text-gray-700">
                        I'm Sheikh Ilyas, a front-end developer passionate about building beautiful, responsive websites.
                        With expertise in Next.js, HTML, CSS, JavaScript, and frameworks like React, I focus on delivering seamless user experiences.
                        Let’s work together to turn your ideas into interactive web solutions.
                    </p>
                    <button className="mt-4 px-4 py-2 bg-teal-700 text-white rounded hover:bg-teal-800 ">
                        HIRE ME
                    </button>
                </div>
                {/* Profile Image */}
                <div>
                    <Image
                        src="/images/ilyas.jpg"
                        alt="Profile"
                        width={500}  
                        height={500} 
                        className="rounded-lg" />  
                </div>
            </div>
        </main>
    );
}

export default Hero;
