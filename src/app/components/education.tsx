function Education() {
    return (
        <main className="bg-gray-100 py-10 flex justify-center items-center min-h-screen">
            <div className="max-w-4xl text-center">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-4">Education</h1>
                    <p className="text-gray-700">
                        A focus on usability and performance. With a keen eye for detail, Ilyas strives to enhance the overall user experience on every project.
                        Proficient in HTML, CSS, and JavaScript, he brings designs to life with a focus on usability and performance. With a keen eye for detail,
                        Ilyas strives to enhance the overall user experience on every project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Box 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">University of Karachi</h2>
                        <span className="text-gray-600">Student</span>
                    </div>

                    {/* Box 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">Bachelor in Computer Science</h2>
                        <p className="text-gray-600">
                            A Bachelor&apos;s in Computer Science provides foundational knowledge in programming, algorithms, and computer systems, preparing students
                            for careers in software development, data science, and IT. It combines theory with practical skills in problem-solving, coding,
                            and technology management.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Education;
