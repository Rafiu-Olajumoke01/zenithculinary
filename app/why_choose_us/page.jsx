import { 
  FaUserTie, 
  FaHandsHelping, 
  FaClock, 
  FaAward, 
  FaUsers, 
  FaChartBar 
} from 'react-icons/fa';

export default function WhyChooseUs() {
  const features = [
    {
      icon: FaUserTie,
      title: "Expert Instructors",
      description: "Our culinary school brings you a team of world-class instructors with decades of professional cooking experience. Each instructor is not only passionate about the culinary arts but also dedicated to imparting knowledge with patience and clarity. They combine traditional techniques with modern innovations, guiding you step-by-step to master essential skills. Whether you're a beginner or aspiring professional, our expert instructors tailor lessons to your pace and interests, ensuring a personalized learning experience that empowers you to excel in any kitchen environment.",
      color: "bg-green-600",
      hoverColor: "hover:bg-green-700"
    },
    {
      icon: FaHandsHelping,
      title: "Hands-on Training",
      description: "Learning by doing is our philosophy. Our courses focus heavily on practical, hands-on training in fully equipped professional kitchens. You'll gain invaluable experience prepping fresh ingredients, mastering knife skills, cooking various dishes, and presenting meals like a true chef. Our interactive classes encourage experimentation and creativity, allowing you to develop your own culinary style while building confidence. This practical approach ensures you leave with real-world skills that are immediately applicable, whether cooking for loved ones or pursuing a career in hospitality.",
      color: "bg-green-600",
      hoverColor: "hover:bg-green-700"
    },
    {
      icon: FaClock,
      title: "Flexible Scheduling",
      description: "We understand the demands of modern life, which is why we offer flexible scheduling options to fit your busy lifestyle. Choose from evening classes, weekend workshops, or intensive programs that allow you to learn at your own pace without sacrificing other commitments. Our goal is to make culinary education accessible and convenient, providing multiple learning paths that empower you to achieve your goals while balancing work, family, and other priorities.",
      color: "bg-red-600",
      hoverColor: "hover:bg-red-700"
    },
    {
      icon: FaAward,
      title: "Certified Excellence",
      description: "Graduate with industry-recognized certifications that open doors to exciting career opportunities. Our comprehensive curriculum meets international culinary standards and is designed in partnership with top restaurants and hotels. Upon completion, you'll receive certifications that validate your skills and knowledge, making you a competitive candidate in the culinary job market.",
      color: "bg-red-600",
      hoverColor: "hover:bg-red-700"
    },
    {
      icon: FaUsers,
      title: "Community Support",
      description: "Join a vibrant community of fellow culinary enthusiasts and build lasting connections. Our collaborative learning environment encourages peer support, recipe sharing, and lifelong friendships. You'll become part of an alumni network that continues to support your culinary journey long after graduation, with access to exclusive events and job opportunities.",
      color: "bg-green-600",
      hoverColor: "hover:bg-green-700"
    },
    {
      icon: FaChartBar,
      title: "Career Success",
      description: "Our graduates achieve remarkable success in the culinary industry, with 95% securing employment within 6 months of graduation. We provide comprehensive career support including resume building, interview preparation, and job placement assistance. Our industry connections help you land positions in top restaurants, hotels, and culinary establishments worldwide.",
      color: "bg-red-600",
      hoverColor: "hover:bg-red-700"
    }
  ];

  return (
    <main className="h-[70%] bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <header className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl font-extrabold mb-6 text-gray-900 uppercase tracking-wide">
              Why Choose{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r mt-4 from-green-600 to-red-600">
                Us
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-red-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto leading-relaxed">
            Discover what sets our culinary school apart and why thousands of students
            choose us to transform their passion for cooking into professional excellence.
          </p>
        </header>

        {/* Stats Section */}
        <section className="mb-4">  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Graduates" },
              { number: "95%", label: "Job Placement" },
              { number: "15+", label: "Years Experience" },
              { number: "50+", label: "Expert Chefs" }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
