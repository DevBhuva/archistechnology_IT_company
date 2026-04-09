import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Check, Clock, Award, GraduationCap, Users, Briefcase, Target, Code, Database, Zap, Book, Users2, Cpu, BarChart3, Bookmark, MessageCircle, FileText, Globe, Shield, TrendingUp, Lightbulb } from "lucide-react";

export default function DataScienceBootcamp() {
  const eligibility = [
    { icon: GraduationCap, label: "Students", desc: "Current or recent graduates" },
    { icon: Users, label: "Career Starters", desc: "Looking to enter data science" },
    { icon: Briefcase, label: "Career Changers", desc: "Professionals switching careers" },
    { icon: Target, label: "Self-Learners", desc: "With basic programming skills" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://images.unsplash.com/photo-1518488353-64b8b4b714d9?auto=format&fit=crop&q=80&w=1200')"}}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-primary/70"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-heading"
          >
            Data Science <span className="text-white">Bootcamp</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive deep dive into Python, Pandas, NumPy, and Data Visualization techniques. Transform raw data into actionable insights.
          </motion.p>
        </div>
      </div>

      {/* Complete Curriculum Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            8-Week Curriculum
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Modules */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {[
                  { week: "1-2", topic: "Python Fundamentals & Libraries", details: "Python basics, Pandas, NumPy, Matplotlib" },
                  { week: "3-4", topic: "Data Exploration & Visualization", details: "EDA, Data cleaning, Statistical analysis" },
                  { week: "5-6", topic: "Machine Learning Basics", details: "Supervised learning, Classification, Regression" },
                  { week: "7-8", topic: "Advanced ML & Project", details: "Ensemble methods, Model optimization, Deployment" },
                ].map((module, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="relative p-1 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600"
                  >
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-start gap-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex flex-col items-center justify-center text-white shrink-0">
                          <span className="text-sm font-semibold">Week</span>
                          <span className="text-2xl font-bold">{module.week}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2">{module.topic}</h3>
                          <p className="text-muted-foreground text-sm">{module.details}</p>
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
              className="relative p-1 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 h-fit sticky top-20"
            >
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-2">Data Science</h3>
                <p className="text-sm text-muted-foreground mb-4">Master data skills in 8 weeks</p>
                <Badge className="mb-6 w-full justify-center py-2">8 Weeks Intensive</Badge>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg mb-4">You Will Get:</h4>
                    <div className="space-y-3">
                      {[
                        "Hands-on coding labs with real datasets",
                        "Industry-recognized bootcamp certificate",
                        "Portfolio of 5+ data science projects",
                        "Career guidance and job placement support",
                        "Interview preparation materials",
                        "Mentorship from data science professionals",
                        "Lifetime access to course materials & updates",
                        "Networking with industry experts"
                      ].map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check size={18} className="text-primary mt-0.5 shrink-0" />
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

      {/* Tools & Technologies */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Technologies & Tools
          </motion.h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-1 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600"
            >
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6">Core Libraries</h3>
                <ul className="space-y-3">
                  {["Python 3.x", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"].map((tech, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check size={18} className="text-primary shrink-0" />
                      <span className="text-muted-foreground">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative p-1 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"
            >
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6">Advanced Tools</h3>
                <ul className="space-y-3">
                  {["SQL", "Tableau/PowerBI", "Git & GitHub", "Jupyter Notebooks", "AWS/Cloud Integration", "Real Datasets"].map((tool, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check size={18} className="text-primary shrink-0" />
                      <span className="text-muted-foreground">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who Should Apply?</h2>
            <p className="text-lg text-muted-foreground">
              This bootcamp is ideal for anyone passionate about data and analytics. No prior data science experience required, but basic programming knowledge is helpful.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
            {eligibility.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative p-1 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg p-8 text-center h-full flex flex-col"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
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
              { icon: Book, title: "Complete Python Mastery", desc: "In-depth Python programming skills" },
              { icon: Users2, title: "Expert Guidance", desc: "Learn from experienced data scientists" },
              { icon: Cpu, title: "Hands-On Labs", desc: "Real-world coding projects and exercises" },
              { icon: Award, title: "Certification", desc: "Industry-recognized bootcamp certificate" },
              { icon: BarChart3, title: "Data Analysis Skills", desc: "Master Pandas, NumPy, SQL" },
              { icon: Database, title: "Database Training", desc: "Learn SQL and data management" },
              { icon: FileText, title: "Portfolio Projects", desc: "Build impressive data projects" },
              { icon: MessageCircle, title: "24/7 Support", desc: "Doubt clearing and help anytime" },
              { icon: Globe, title: "Industry Connections", desc: "Network with data science professionals" },
              { icon: Shield, title: "Job Assistance", desc: "Interview prep and placement support" },
              { icon: TrendingUp, title: "Career Growth", desc: "Clear pathway to data science roles" },
              { icon: Lightbulb, title: "Career Mentoring", desc: "Personalized guidance from mentors" },
              { icon: Code, title: "GitHub Portfolio", desc: "Build public repositories for hiring" },
              { icon: Bookmark, title: "Lifetime Access", desc: "Access all materials forever" }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative p-1 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 group"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Data Science Journey</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our next cohort and master data science in just 8 weeks. Build real projects and land your first data science job.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
