import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { MdMonitor, MdWeb } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import { GiDigitalTrace } from "react-icons/gi";

function Services() {
    return (
        <main className="py-10 bg-gray-100">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">My Services</h2>
                <p className="text-gray-600 mt-2">
                    Ilyas is a skilled front-end developer with a passion for creating engaging and responsive web applications.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {/* Service Boxes */}
                <div className="w-1/4 bg-teal-600 text-white p-6 text-center rounded-md shadow-md h-full">
                    <FaLaptopCode size={40} className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Web Development</h3>
                    <p>Blog, E-Commerce</p>
                </div>
                <div className="w-1/4 bg-teal-600 text-white p-6 text-center rounded-md shadow-md h-full">
                    <MdMonitor size={40} className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">UI/UX Design</h3>
                    <p>Mobile App, Web Design</p>
                </div>
                <div className="w-1/4 bg-teal-600 text-white p-6 text-center rounded-md shadow-md h-full">
                    <MdWeb size={40} className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Website Optimization</h3>
                    <p>Performance Optimization</p>
                </div>
                <div className="w-1/4 bg-teal-600 text-white p-6 text-center rounded-md shadow-md h-full">
                    <FaMobileAlt size={40} className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Responsive Web Design</h3>
                    <p>Fluid Grid Layouts</p>
                </div>
                <div className="w-1/4 bg-teal-600 text-white p-6 text-center rounded-md shadow-md h-full">
                    <TbSeo size={40} className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">SEO Optimization</h3>
                    <p>Key Components of SEO</p>
                </div>
                <div className="w-1/4 bg-teal-600 text-white p-6 text-center rounded-md shadow-md h-full">
                    <GiDigitalTrace size={40} className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Digital Marketing</h3>
                    <p>Search Engine Optimization</p>
                </div>
            </div>
        </main>
    );
}

export default Services;
