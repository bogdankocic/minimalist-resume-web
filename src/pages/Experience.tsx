
import Layout from "../components/Layout";

const Experience = () => {
  // List of technologies used across projects
  const technologies = [
    "Laravel", "Node.js", "TypeScript", "GraphQL", "WebSocket", 
    "Salesforce Marketing Cloud", "Docker", "CI/CD", "PostgreSQL", 
    "MySQL", "MongoDB", "Redis", "AWS", "Sentry", "GitHub/GitLab"
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 animate-fade-in section-title">
          Work Experience
        </h1>
        
        <p className="text-slate-600 mb-12 max-w-3xl animate-fade-in-delay-1">
          Throughout my career, I've specialized in backend development and system architecture, 
          with a particular focus on AI-powered workflow automation. Below is a timeline of my 
          professional experience and key projects.
        </p>

        {/* Experience Timeline */}
        <div className="space-y-16">
          {/* SmartFuel */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <div className="sticky top-24 bg-slate-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-slate-400 to-slate-500 relative">
                  <img 
                    src="/minimalist-resume-web/uploads/smartfuel.webp" 
                    alt="Vehicle dashboard with fuel gauge" 
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <div className="font-semibold text-xs mb-2 bg-teal-500 text-white px-2 py-1 rounded inline-block">
                        2024 - 2025
                      </div>
                      <h3 className="text-xl font-bold mb-1">SmartFuel</h3>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "TypeScript", "MongoDB", "AWS", "Docker", "CI/CD", "LLM"].map((tech) => (
                      <span key={tech} className="bg-slate-200 px-2 py-1 text-xs text-slate-700 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 animate-fade-in-right">
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                Vehicle Tracking System with AI-powered Analysis
              </h3>
              <p className="text-slate-600 mb-4">
                SmartFuel is a comprehensive vehicle tracking system that generates detailed reports on 
                fuel consumption and refueling activities. The platform leverages advanced analytics to 
                provide cost analysis and consumption optimization recommendations.
              </p>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-2">Key Achievements</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li>Designed and implemented the backend architecture using Node.js and TypeScript</li>
                    <li>Developed an AI-powered analysis engine that identifies optimization opportunities</li>
                    <li>Built a real-time monitoring system with customizable alerts</li>
                    <li>Created a secure API for integrating with various vehicle GPS systems</li>
                    <li>Implemented comprehensive data visualization dashboards</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                  <h4 className="font-semibold text-slate-900 mb-2">AI Automation Highlight</h4>
                  <p className="text-slate-700">
                    Developed an intelligent consumption pattern recognition system that automatically 
                    identifies abnormal fuel usage, potential maintenance issues, and driver behavior 
                    patterns that impact efficiency, saving clients an average of 15% on fuel costs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ReverseAuction */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <div className="sticky top-24 bg-slate-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-slate-400 to-slate-500 relative">
                  <img 
                    src="/minimalist-resume-web/uploads/stocks.avif" 
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <div className="font-semibold text-xs mb-2 bg-teal-500 text-white px-2 py-1 rounded inline-block">
                        2024 - 2024
                      </div>
                      <h3 className="text-xl font-bold mb-1">ReverseAuction</h3>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {["Laravel", "GraphQL", "WebSocket", "MySQL", "Docker", "Make.com", "LLM"].map((tech) => (
                      <span key={tech} className="bg-slate-200 px-2 py-1 text-xs text-slate-700 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 animate-fade-in-right">
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                Real-time Energy Resource Auction Platform
              </h3>
              <p className="text-slate-600 mb-4">
                ReverseAuction is an innovative platform designed for companies competing to provide 
                the best offers for energy resource procurement. The system enables real-time bidding 
                and communication among participants, optimizing the procurement process.
              </p>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-2">Key Achievements</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li>Architected and built a scalable real-time auction system using GraphQL and WebSocket</li>
                    <li>Implemented secure, encrypted bidding mechanisms</li>
                    <li>Developed an advanced matching algorithm for optimal offer selection</li>
                    <li>Created comprehensive analytics dashboards for auction insights</li>
                    <li>Built a notification system for bidding events and auction status updates</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                  <h4 className="font-semibold text-slate-900 mb-2">AI Automation Highlight</h4>
                  <p className="text-slate-700">
                    Implemented an AI-powered dynamic pricing suggestion system that analyzes market conditions, 
                    historical pricing data, and competitor behavior to provide actionable bid recommendations, 
                    significantly improving win rates for participants.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Meridian Notifications */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <div className="sticky top-24 bg-slate-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-slate-400 to-slate-500 relative">
                  <img 
                    src="/minimalist-resume-web/uploads/meridianbet-rs-kladionica.jpg" 
                    alt="Smartphone with notifications" 
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <div className="font-semibold text-xs mb-2 bg-teal-500 text-white px-2 py-1 rounded inline-block">
                        2023 - 2024
                      </div>
                      <h3 className="text-xl font-bold mb-1">Meridian Notifications</h3>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {["Laravel", "Salesforce", "PostgreSQL", "Docker", "CI/CD"].map((tech) => (
                      <span key={tech} className="bg-slate-200 px-2 py-1 text-xs text-slate-700 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 animate-fade-in-right">
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                Intelligent Multi-channel Notification Management
              </h3>
              <p className="text-slate-600 mb-4">
                Meridian Notifications is a sophisticated notification management system that enables sending and 
                tracking the status of SMS, email, and push notifications. The platform integrates seamlessly with 
                Salesforce Marketing Cloud to provide advanced marketing and personalization capabilities.
              </p>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-2">Key Achievements</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li>Designed and built a flexible notification management system using Laravel</li>
                    <li>Implemented deep integration with Salesforce Marketing Cloud</li>
                    <li>Created a robust tracking and analytics system for message delivery and engagement</li>
                    <li>Developed a template management system for message personalization</li>
                    <li>Built administrative tools for campaign management and scheduling</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                  <h4 className="font-semibold text-slate-900 mb-2">AI Automation Highlight</h4>
                  <p className="text-slate-700">
                    Engineered an intelligent delivery optimization engine that uses machine learning to determine 
                    the optimal channel, timing, and messaging approach for each recipient based on historical 
                    engagement data, increasing overall open rates by 37% and conversion rates by 24%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-8 section-title">Technologies & Tools</h2>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <div 
                key={tech} 
                className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 text-slate-700 hover:shadow-md hover:border-teal-300 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* AI Automation Focus */}
        <div className="mt-20 bg-teal-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-slate-900">AI Workflow Automation Expertise</h2>
          <p className="text-slate-700 mb-6">
            Throughout my career, I've focused on leveraging artificial intelligence to automate complex business 
            workflows and processes. My approach combines deep technical knowledge with business understanding to 
            create solutions that deliver real value.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-3">Data-Driven Optimization</h3>
              <p className="text-slate-600">
                Building systems that automatically analyze operational data to identify optimization 
                opportunities and implement improvements without manual intervention.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-3">Intelligent Process Automation</h3>
              <p className="text-slate-600">
                Creating solutions that go beyond simple rule-based automation to incorporate machine learning 
                for adaptive, context-aware business process execution.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-3">Predictive Analytics Integration</h3>
              <p className="text-slate-600">
                Embedding predictive models into operational systems to anticipate needs, prevent issues, 
                and enable proactive business decisions.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-3">Personalization Engines</h3>
              <p className="text-slate-600">
                Developing sophisticated customer experience systems that adapt and personalize content, 
                communications, and interactions based on user behavior and preferences.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Interested in working together?</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            If you're looking for a backend developer with expertise in AI workflow automation, 
            I'd love to discuss how I can contribute to your project.
          </p>
          <a 
            href="/contact" 
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium inline-block"
          >
            Contact Me
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
