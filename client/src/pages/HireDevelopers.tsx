import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { CheckCircle2, Users, Code, Zap, Briefcase, Star } from "lucide-react";

const FORM_LINK = "https://forms.gle/okxpoqkP3jr6Rmy47";

export default function HireDevelopers() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const talentCategories = [
    { role: "AI Engineers", skills: "Neural Networks, LLMs, Computer Vision" },
    { role: "ML Engineers", skills: "Scikit-Learn, TensorFlow, MLOps" },
    { role: "Data Scientists", skills: "Statistical Modeling, R, Data Mining" },
    { role: "Data Analysts", skills: "Power BI, Tableau, SQL Analytics" },
    { role: "Full-Stack Devs", skills: "React, Node.js, AI Integration" },
    { role: "Data Engineers", skills: "Apache Spark, Kafka, ETL Pipelines" },

  ];

  const hiringModels = [
    { title: "Internship Hiring", usage: "Short-term projects & fresh perspectives", flex: "3-6 Months" },
    { title: "Contract Hiring", usage: "Specific project delivery & scaling teams", flex: "Project-based" },
    { title: "Full-Time Hiring", usage: "Long-term growth & core team building", flex: "Permanent" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-bold font-heading mb-6"
            >
              Hire Industry-Ready <span className="text-primary">AI & Tech Developers</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 max-w-2xl"
            >
              Get skilled, project-tested developers trained on real-world AI, ML, and Data Science projects—ready to contribute from day one.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              <a href={FORM_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-14 text-lg">
                  Hire Developers
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire From Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Companies Trust Archis Technology</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We filter the noise so you only meet the best. Our talent is trained on actual industry datasets, not just theory.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto auto-rows-fr">
          {[
            { icon: Zap, title: "Industry-Trained", desc: "Developers trained via real industry workflows." },
            { icon: Users, title: "Mentor-Reviewed", desc: "Every candidate is evaluated by senior experts." },
            { icon: Star, title: "Project Experience", desc: "Hands-on experience with live datasets." },
            { icon: Briefcase, title: "Flexible Models", desc: "Intern, contract, or full-time options." },
          ].map((item, i) => (
            <div key={i} className="relative p-1 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 h-full">
              <motion.div {...fadeIn} className="p-10 md:p-12 rounded-2xl bg-white hover:shadow-xl transition-all h-full flex flex-col">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-base flex-grow">{item.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Talent Categories */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12">Available Talent Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {talentCategories.map((talent, i) => (
              <div key={i} className="relative p-1 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-600 h-full">
                <motion.div {...fadeIn} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                  <h3 className="text-xl font-bold mb-2">{talent.role}</h3>
                  <p className="text-sm text-slate-500 mb-4">{talent.skills}</p>
                  <a href={FORM_LINK} target="_blank" rel="noopener noreferrer">
                    <Button variant="link" className="p-0 h-auto text-primary font-semibold group">
                      Hire Now <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </Button>
                  </a>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Models */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Flexible Hiring Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
            {hiringModels.map((model, i) => (
              <div key={i} className="relative p-1 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600">
                <motion.div {...fadeIn} className="border-0 rounded-3xl p-8 hover:shadow-lg transition-all text-center bg-white h-full">
                  <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                  <p className="text-slate-600 mb-6">{model.usage}</p>
                  <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-8">
                    Duration: {model.flex}
                  </div>
                  <a href={FORM_LINK} target="_blank" rel="noopener noreferrer" className="w-full block">
                    <Button className="w-full rounded-full">Explore Model</Button>
                  </a>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Simplified Hiring Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Requirements", desc: "Share your talent needs." },
              { step: "02", title: "Shortlisting", desc: "We find the best fit." },
              { step: "03", title: "Interviews", desc: "Review candidate profiles." },
              { step: "04", title: "Onboarding", desc: "Seamless integration." },
              { step: "05", title: "Success", desc: "Start building today." },
            ].map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="text-4xl font-bold text-primary/30 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border shadow-inner text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find the Right Talent?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Fill out the form below and our team will help you find the perfect developers for your project.</p>
            <a href={FORM_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg rounded-full px-8 h-14">
                Start Hiring Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
