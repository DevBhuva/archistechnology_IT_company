import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Check, Clock, Award, GraduationCap, Users, Briefcase, Target, Code, Database, Zap } from "lucide-react";

export default function FullStack() {
  const modules = [
    {
      title: "Frontend Fundamentals",
      duration: "4 Weeks",
      description: "Learn HTML, CSS, JavaScript fundamentals and modern web design principles.",
      features: ["HTML5 & CSS3", "JavaScript Basics", "Responsive Design", "Web Accessibility"],
      gradient: "from-blue-500 to-cyan-600",
      borderColor: "border-l-4 border-blue-500"
    },
    {
      title: "React & TypeScript",
      duration: "4 Weeks",
      description: "Master React components, hooks, state management, and TypeScript for scalable applications.",
      features: ["React Components & Hooks", "TypeScript Mastery", "State Management", "API Integration"],
      gradient: "from-blue-500 to-purple-600",
      borderColor: "border-l-4 border-blue-500"
    },
    {
      title: "Backend Development",
      duration: "4 Weeks",
      description: "Build robust server-side applications with Node.js, Express, and database management.",
      features: ["Node.js & Express.js", "RESTful APIs", "Database Design (SQL/NoSQL)", "Authentication"],
      gradient: "from-purple-500 to-pink-600",
      borderColor: "border-l-4 border-purple-500"
    },
    {
      title: "Deployment & DevOps",
      duration: "2 Weeks",
      description: "Learn deployment strategies, cloud services, Docker, and continuous integration.",
      features: ["Docker & Containerization", "Cloud Deployment (AWS/Azure)", "CI/CD Pipelines", "Performance Optimization"],
      gradient: "from-orange-500 to-red-600",
      borderColor: "border-l-4 border-orange-500"
    }
  ];

  const benefits = [
    { icon: Code, title: "Hands-On Coding", description: "Learn by building real-world projects" },
    { icon: Database, title: "Database Expertise", description: "Master SQL and NoSQL databases" },
    { icon: Zap, title: "Modern Tools", description: "Use industry-standard development tools" },
    { icon: Award, title: "Industry Certification", description: "Recognized full-stack developer certificate" },
    { icon: Users, title: "Expert Mentors", description: "Learn from experienced developers" },
    { icon: Briefcase, title: "Job Ready", description: "Build projects that land jobs" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200')"}}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-primary/70"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-heading"
          >
            Full Stack <span className="text-white">Development</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            From frontend to backend. Master the complete web development stack and build industry-standard applications.
          </motion.p>
        </div>
      </div>

      {/* Course Overview Cards */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Our Full Stack Programs
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto auto-rows-fr">
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative p-1 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600`}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-500 border-0 bg-white overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-600" />
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white">
                      <Code size={28} />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2 block">Course</Badge>
                      <Badge variant="outline">10 Weeks</Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Frontend Mastery</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">Learn React, TypeScript, Tailwind CSS, and Framer Motion to build beautiful, responsive user interfaces.</p>
                  
                  <div className="space-y-3 mb-8 flex-1">
                    {["React & Hooks", "TypeScript", "Tailwind CSS", "State Management"].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <Check size={16} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90 rounded-full h-12">
                      Enroll Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`relative p-1 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600`}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-500 border-0 bg-white overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-600" />
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white">
                      <Database size={28} />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2 block">Course</Badge>
                      <Badge variant="outline">12 Weeks</Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Backend Bootcamp</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">Master Node.js, Express, databases, and APIs. Build scalable backend systems used by top companies.</p>
                  
                  <div className="space-y-3 mb-8 flex-1">
                    {["Node.js & Express", "SQL/NoSQL", "REST APIs", "Authentication"].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <Check size={16} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90 rounded-full h-12">
                      Enroll Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Full Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`relative p-1 rounded-xl bg-gradient-to-r from-orange-500 to-red-600`}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-500 border-0 bg-white overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-orange-500 to-red-600" />
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white">
                      <Zap size={28} />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2 block">Bootcamp</Badge>
                      <Badge variant="outline">20 Weeks</Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Complete Full Stack</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">Complete end-to-end development training. From database design to deployment, become a full-stack engineer.</p>
                  
                  <div className="space-y-3 mb-8 flex-1">
                    {["Frontend Stack", "Backend Systems", "DevOps & Deployment", "Live Projects"].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <Check size={16} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90 rounded-full h-12">
                      Enroll Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Modules */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Full Stack Development Curriculum
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-1 rounded-lg bg-gradient-to-r ${module.gradient} ${module.borderColor}`}
                >
                  <div className="bg-white rounded-lg p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
                        <p className="text-muted-foreground mb-4">{module.description}</p>
                      </div>
                      <Badge className="whitespace-nowrap ml-4 bg-primary">{module.duration}</Badge>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {module.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Check size={18} className="text-primary shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* You Will Get Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            You Will Get
          </motion.h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-1 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"
                >
                  <div className="bg-white rounded-lg p-8 h-full flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mb-4">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-1 rounded-xl bg-gradient-to-r from-primary to-purple-600 max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Become a Full Stack Developer Today</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Master the complete web development stack and join thousands of successful developers building amazing applications.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12">
                  Start Learning Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
