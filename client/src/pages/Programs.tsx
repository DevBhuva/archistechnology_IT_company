import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Check, Calendar, Clock, Award, GraduationCap, Users, Briefcase, Target, Zap, Book, Users2, Cpu, BarChart3, Bookmark, MessageCircle, FileText, Globe, Shield, TrendingUp, Lightbulb } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "AI/ML Internship Program",
      route: "/programs/ai-ml-internship",
      type: "Internship",
      duration: "3-6 Months",
      level: "Intermediate",
      desc: "Work on live industry projects involving Natural Language Processing and Computer Vision.",
      features: ["Real project experience", "Senior Mentor assigned", "Certificate of Completion", "Stipend based on performance"],
      gradient: "from-blue-500 to-purple-600",
      icon: Briefcase
    },
    {
      title: "Data Science Bootcamp",
      route: "/programs/data-science",
      type: "Training",
      duration: "8 Weeks",
      level: "Beginner",
      desc: "A comprehensive deep dive into Python, Pandas, NumPy, and Data Visualization techniques.",
      features: ["Hands-on coding labs", "Portfolio building", "Job interview prep", "Lifetime access to materials"],
      gradient: "from-purple-500 to-pink-600",
      icon: GraduationCap
    },
    {
      title: "Deep Learning Specialization",
      route: "/programs/deep-learning",
      type: "Advanced Course",
      duration: "12 Weeks",
      level: "Advanced",
      desc: "Master Neural Networks, TensorFlow, and PyTorch. Build your own generative AI models.",
      features: ["Research paper implementation", "Cloud computing credits", "Guest lectures from industry leaders", "Publication support"],
      gradient: "from-pink-500 to-purple-600",
      icon: Target
    }
  ];

  const eligibility = [
    { icon: GraduationCap, label: "Engineering Students", desc: "Current students in CS, IT, or related fields" },
    { icon: Users, label: "Fresh Graduates", desc: "Recent graduates looking to start their tech career" },
    { icon: Briefcase, label: "Early Professionals", desc: "Professionals with 0-2 years experience" },
    { icon: Target, label: "Career Switchers", desc: "Professionals transitioning to tech from other fields" }
  ];

  const modules = [
    { title: "Python & Data Fundamentals", duration: "Module 1" },
    { title: "Machine Learning Basics", duration: "Module 2" },
    { title: "Deep Learning Essentials", duration: "Module 3" },
    { title: "Natural Language Processing", duration: "Module 4" },
    { title: "Computer Vision", duration: "Module 5" },
    { title: "Real-World Projects", duration: "Module 6" }
  ];

  const benefits = [
    { icon: Book, title: "Comprehensive Curriculum", desc: "Industry-designed syllabus covering all AI/ML concepts" },
    { icon: Users2, title: "Expert Mentorship", desc: "Learn from experienced AI/ML professionals and researchers" },
    { icon: Cpu, title: "Hands-On Projects", desc: "Build real-world AI applications and models" },
    { icon: Award, title: "Industry Certification", desc: "Recognized certificate upon successful completion" },
    { icon: BarChart3, title: "Live Data Science Work", desc: "Work with actual datasets and business problems" },
    { icon: Bookmark, title: "Lifetime Learning Resources", desc: "Access to all course materials forever" },
    { icon: MessageCircle, title: "Unlimited Doubt Solving", desc: "Get answers to all your questions from mentors" },
    { icon: FileText, title: "Portfolio Building", desc: "Create impressive projects for your resume" },
    { icon: Globe, title: "Industry Connections", desc: "Network with professionals and companies" },
    { icon: Shield, title: "Job Placement Support", desc: "Career guidance and job interview preparation" },
    { icon: TrendingUp, title: "100% Practical Training", desc: "Real-world applications, not just theory" },
    { icon: Lightbulb, title: "Innovation Lab Access", desc: "Work on cutting-edge AI research projects" },
    { icon: Users, title: "Peer Collaboration", desc: "Learn alongside ambitious professionals" },
    { icon: Zap, title: "Fast-Track Options", desc: "Accelerated learning paths available" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200')"}}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-primary/70"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-heading"
          >
            Our <span className="text-white">Programs</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Launch your career with hands-on experience. Master the tools used by industry leaders through our comprehensive programs.
          </motion.p>
        </div>
      </div>

      {/* Programs Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Choose Your Path
          </motion.h2>
          <div className="grid lg:grid-cols-3 gap-8 auto-rows-fr">
            {programs.map((program, index) => (
              <div className={`relative p-1 rounded-xl bg-gradient-to-r ${program.gradient}`}>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-500 border-0 bg-white overflow-hidden group">
                  <div className={`h-2 bg-gradient-to-r ${program.gradient}`} />
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${program.gradient} rounded-xl flex items-center justify-center text-white`}>
                        <program.icon size={28} />
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="mb-2 block">{program.type}</Badge>
                        <Badge variant="outline">{program.level}</Badge>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{program.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{program.desc}</p>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={16} />
                        <span>Certified</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8 flex-1">
                      {program.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm">
                          <Check size={16} className="text-primary mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={program.route}>
                      <Button className="w-full bg-primary hover:bg-primary/90 rounded-full h-12">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Modules Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            AI/ML Program Curriculum
          </motion.h2>

          <div className="max-w-2xl mx-auto space-y-4">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative p-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600"
              >
                <div className="bg-white rounded-lg p-6 flex items-center justify-between hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold">{module.title}</h3>
                  </div>
                  <Badge className="bg-primary text-white">{module.duration}</Badge>
                </div>
              </motion.div>
            ))}
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

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative p-1 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 group"
                >
                  <Card className="h-full border-0 bg-white hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center flex flex-col h-full">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Icon size={28} className="text-primary group-hover:text-white" />
                      </div>
                      <h3 className="font-bold text-sm mb-2 leading-tight">{benefit.title}</h3>
                      <p className="text-xs text-muted-foreground flex-1">{benefit.desc}</p>
                      <Check size={16} className="text-primary mt-3 mx-auto" />
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Can Apply Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Who Can Apply?</h2>
            <p className="text-lg text-mutaed-foreground mb-12 text-center max-w-3xl mx-auto leading-relaxed">
              Our programs are open to engineering students, fresh graduates, and early-career professionals passionate about Artificial Intelligence and Data Science. No prior professional experience is required, just a willingness to learn!
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibility.map((item, index) => (
                <div key={index} className="relative p-1 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-0 bg-white group">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <item.icon size={28} className="text-primary group-hover:text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{item.label}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-r from-purple-500 to-blue-600 text-center mt-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-12"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of students and professionals who have transformed their careers through our programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 h-14 rounded-full">
                      Apply Now
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline" size="lg" className="px-8 h-14 rounded-full border-2">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
