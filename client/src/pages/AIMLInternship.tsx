import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Check, Clock, Award, GraduationCap, Users, Briefcase, Target, Code, Database, Zap, Book, Users2, Cpu, BarChart3, Bookmark, MessageCircle, FileText, Globe, Shield, TrendingUp, Lightbulb } from "lucide-react";

export default function AIMLInternship() {
  const features = [
    { icon: Briefcase, label: "Real Project Experience", desc: "Work on live industry projects" },
    { icon: Users, label: "Senior Mentor Assigned", desc: "Get guidance from industry experts" },
    { icon: Award, label: "Certificate of Completion", desc: "Recognized certification" },
    { icon: Zap, label: "Stipend Based on Performance", desc: "Earn while you learn" }
  ];

  const eligibility = [
    { icon: GraduationCap, label: "Engineering Students", desc: "Current CS/IT students" },
    { icon: Users, label: "Fresh Graduates", desc: "Recent graduates in tech" },
    { icon: Briefcase, label: "Career Switchers", desc: "Transitioning to AI/ML" },
    { icon: Target, label: "Self-Learners", desc: "With basic programming knowledge" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://images.unsplash.com/photo-1677442d019cecf8285717b10a2e0caf3d218b59?auto=format&fit=crop&q=80&w=1200')"}}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-primary/70"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-heading"
          >
            AI/ML <span className="text-white">Internship Program</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Work on live industry projects involving Natural Language Processing and Computer Vision. Gain hands-on experience with cutting-edge AI technologies.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Jumpstart your AI/ML career with our intensive internship program. This 3-6 month program covers everything from data preprocessing to model deployment.
                </p>
                <p>
                  You'll work alongside senior engineers on real-world projects, gaining practical experience that directly translates to job opportunities.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg border-2 border-primary">
                  <div className="text-2xl font-bold text-primary">3-6</div>
                  <div className="text-sm text-muted-foreground">Months Duration</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-primary">
                  <div className="text-2xl font-bold text-primary">1:1</div>
                  <div className="text-sm text-muted-foreground">Mentoring</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-1 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"
            >
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <div className="space-y-4">
                  {features.map((feature, i) => {
                    const Icon = feature.icon;
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <Icon className="text-primary mt-1 shrink-0" size={20} />
                        <div>
                          <h4 className="font-semibold">{feature.label}</h4>
                          <p className="text-sm text-muted-foreground">{feature.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Complete Curriculum Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Complete Curriculum
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Modules */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {[
                  { title: "Python Fundamentals & Basics", module: "Module 1", topics: ["Python syntax", "Data types", "Functions", "OOP concepts"] },
                  { title: "Data Preprocessing & Analysis", module: "Module 2", topics: ["Data cleaning", "Feature engineering", "Exploratory analysis", "Visualization"] },
                  { title: "Machine Learning Algorithms", module: "Module 3", topics: ["Supervised learning", "Unsupervised learning", "Model evaluation", "Hyperparameter tuning"] },
                  { title: "Natural Language Processing", module: "Module 4", topics: ["Text preprocessing", "Tokenization", "NLP models", "Sentiment analysis"] },
                  { title: "Computer Vision Fundamentals", module: "Module 5", topics: ["Image processing", "CNN architectures", "Object detection", "Image classification"] },
                  { title: "Model Deployment & Optimization", module: "Module 6", topics: ["Model serialization", "API development", "Cloud deployment", "Performance optimization"] }
                ].map((module, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="relative p-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600"
                  >
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-primary mb-1">{module.module}</div>
                          <h3 className="font-bold text-lg mb-3">{module.title}</h3>
                          <div className="grid grid-cols-2 gap-2">
                            {module.topics.map((topic, j) => (
                              <div key={j} className="flex items-center gap-2 text-sm">
                                <Check size={14} className="text-primary shrink-0" />
                                <span className="text-muted-foreground">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* You Will Get Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-1 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 h-fit sticky top-20"
            >
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-2">AI/ML Internship</h3>
                <p className="text-sm text-muted-foreground mb-4">Gain hands-on experience with real projects</p>
                <Badge className="mb-6 w-full justify-center py-2">3-6 Months Program</Badge>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg mb-4">You Will Get:</h4>
                    <div className="space-y-4">
                      {[
                        "Real project experience with mentor guidance",
                        "Industry-recognized internship certificate",
                        "Performance-based monthly stipend",
                        "Direct job placement assistance",
                        "Portfolio of 3-5 live projects",
                        "LinkedIn recommendations from mentors",
                        "24/7 technical support & doubt clearing",
                        "Lifetime access to course materials"
                      ].map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check size={20} className="text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Key Learning Areas
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Python & Data Fundamentals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-1 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600"
            >
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Code className="text-primary" size={24} />
                  Python & Data Fundamentals
                </h3>
                <ul className="space-y-3">
                  {["Python Programming", "Data Manipulation with Pandas", "NumPy Arrays & Operations", "Data Visualization", "SQL Basics"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check size={18} className="text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* ML & Deep Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative p-1 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600"
            >
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="text-primary" size={24} />
                  Machine Learning & AI
                </h3>
                <ul className="space-y-3">
                  {["Linear & Logistic Regression", "Decision Trees & Random Forests", "Neural Networks", "NLP Fundamentals", "Computer Vision Basics", "Model Evaluation & Deployment"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check size={18} className="text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Can Apply Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who Should Apply?</h2>
            <p className="text-lg text-muted-foreground">
              This program is perfect for students and professionals looking to break into the AI/ML field with real-world experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
            {eligibility.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative p-1 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg p-8 text-center h-full flex flex-col"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Experience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Project-Based Learning
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-1 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"
            >
              <div className="bg-white rounded-lg p-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold shrink-0">1</div>
                    <div>
                      <h3 className="font-bold text-lg">Real Client Projects</h3>
                      <p className="text-muted-foreground">Work on actual industry problems from our partner companies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold shrink-0">2</div>
                    <div>
                      <h3 className="font-bold text-lg">End-to-End Development</h3>
                      <p className="text-muted-foreground">From data collection to model deployment in production</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold shrink-0">3</div>
                    <div>
                      <h3 className="font-bold text-lg">Portfolio Building</h3>
                      <p className="text-muted-foreground">Create impressive projects to showcase to future employers</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* You Will Get Section */}
      <section className="py-20 bg-white">
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
            {[
              { icon: Briefcase, title: "Real Project Experience", desc: "Work on live industry AI projects" },
              { icon: Users2, title: "Expert Mentorship", desc: "Learn from experienced AI professionals" },
              { icon: Award, title: "Industry Certificate", desc: "Recognized credential upon completion" },
              { icon: BarChart3, title: "Performance Stipend", desc: "Earn money based on your performance" },
              { icon: Book, title: "Comprehensive Training", desc: "In-depth NLP and Computer Vision knowledge" },
              { icon: Cpu, title: "Hands-On Labs", desc: "Build real AI models and applications" },
              { icon: FileText, title: "Portfolio Projects", desc: "Showcase impressive projects to employers" },
              { icon: MessageCircle, title: "Continuous Mentoring", desc: "One-on-one guidance throughout program" },
              { icon: Globe, title: "Industry Connections", desc: "Network with top AI companies" },
              { icon: Shield, title: "Job Placement Help", desc: "Career support and job interviews prep" },
              { icon: TrendingUp, title: "Career Growth", desc: "Clear path to full-time opportunities" },
              { icon: Lightbulb, title: "Innovation Lab Access", desc: "Work on cutting-edge research" }
            ].map((benefit, index) => {
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

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-1 rounded-xl bg-gradient-to-r from-primary to-purple-600 max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your AI/ML Career?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our next cohort and gain real-world experience working on cutting-edge AI projects.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12">
                  Apply Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
