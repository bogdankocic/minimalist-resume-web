
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import SeoMeta from "@/components/SeoMeta";

const Index: React.FC = () => {
  return (
    <>
      <SeoMeta
        title="Bogdan Kocić - Backend Developer & AI Automation Expert"
        description="Specialized in building robust backend systems and architectures, with expertise in AI-driven workflow automation and integration solutions."
        url="https://bogdankocic.com/"
        image="https://bogdankocic.com/uploads/openart-prva.png"
      />
      <Layout>
        {/* Hero Section */}
        <section className="pt-12 md:pt-20 pb-16 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 animate-fade-in">
                Bogdan Kocić
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-700 mb-6 opacity-0 animate-fade-in-delay-1">
                Backend Developer & AI Automation Expert
              </h2>
              <p className="text-slate-600 mb-8 max-w-lg opacity-0 animate-fade-in-delay-2">
                Specialized in building robust backend systems and architectures, with expertise in AI-driven workflow automation 
                and integration solutions that help businesses scale efficiently.
              </p>
              <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-delay-3">
                <Link
                  to="/contact"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                >
                  Get in Touch
                </Link>
                <Link
                  to="/experience"
                  className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                >
                  View Experience
                </Link>
                <div className="flex items-center gap-3 ml-1">
                  <a
                    href="https://www.linkedin.com/in/bogdan-kocić-4446b6221/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/bogdankocic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end mb-8 md:mb-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl animate-fade-in">
                <img
                  src="/uploads/openart-prva.png"
                  alt="Bogdan Kocić"
                  className="w-full object-cover object-center"
                />
              </div>
            </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <button
              onClick={() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex flex-col items-center text-slate-500 hover:text-teal-600 transition-colors duration-200"
            >
              <span className="mb-2 text-sm">Learn more</span>
              <ArrowDown size={20} className="animate-bounce" />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Backend Development Expertise</h3>
                <p className="text-slate-600 mb-4">
                  As a Backend Developer and System Architect, I specialize in designing and implementing robust, 
                  scalable backend solutions that power innovative digital products.
                </p>
                <p className="text-slate-600">
                  With experience across Laravel, Node.js, and various database technologies, 
                  I bring technical depth and versatility to every project.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">AI Workflow Automation</h3>
                <p className="text-slate-600 mb-4">
                  I'm passionate about leveraging AI technologies to automate complex business workflows, 
                  creating efficiency gains and unlocking new capabilities for organizations.
                </p>
                <p className="text-slate-600">
                  My work includes integrating AI systems with existing platforms, building 
                  custom automation solutions, and developing intelligent notification systems that 
                  help businesses operate more effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Automation Workflow Section */}
        <section id="ai-automation" className="py-16 bg-teal-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="section-title">Why Me</h2>
            <p className="text-slate-700 mb-6">
              What sets me apart in AI automation is my strong backend knowledge, which allows me to design and implement workflows that are not only efficient but also cost-effective.
            </p>
            <p className="text-slate-700 mb-6">
              By leveraging my expertise in backend systems, I can reduce the overall cost of automation projects and enable advanced workflows that others might find challenging to achieve.
            </p>
            <p className="text-slate-700">
              This unique combination of AI and backend skills empowers me to deliver automation solutions that drive real business value and scalability.
            </p>
          </div>
        </section>

        {/* Key Skills Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-lg mb-3 text-slate-900">Backend Development</h3>
                <p className="text-slate-600">PHP, Node.js, TypeScript, GraphQL, WebSocket</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-lg mb-3 text-slate-900">Storage Technologies</h3>
                <p className="text-slate-600">PostgreSQL, MySQL, MongoDB, Redis, Memcached, S3, CDN</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-lg mb-3 text-slate-900">Automation & Integration</h3>
                <p className="text-slate-600">AI Workflow Automation, Salesforce Marketing Cloud, API Integration</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-lg mb-3 text-slate-900">DevOps</h3>
                <p className="text-slate-600">Docker, CI/CD, AWS, Vercel, Laravel Vapor, Monitoring & Logging</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-lg mb-3 text-slate-900">Security</h3>
                <p className="text-slate-600">Sentry, Authentication, Authorization, Data Protection</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-lg mb-3 text-slate-900">Version Control</h3>
                <p className="text-slate-600">GitHub, GitLab</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-teal-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">Ready to work together?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how my backend expertise and AI automation skills can help your business 
              build robust, scalable technical solutions.
            </p>
            <Link
              to="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium inline-block"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
