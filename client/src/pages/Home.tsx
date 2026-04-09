import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge";;
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Cloud, Smartphone, Lock, Database, Zap, Check, Users, Target, TrendingUp, ArrowRight, Briefcase, Globe, Lightbulb, Settings, ChevronRight, BarChart3, MessageCircle, Cpu } from "lucide-react";
export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const services = [
    {
      title: "Web & Mobile Development",
      icon: Code2,
      desc: "Custom web and mobile applications built with latest technologies. Responsive design, scalable architecture, and seamless user experiences.",
      gradient: "from-blue-500 to-cyan-600",
      features: ["React, Vue, Angular", "Node.js, Python", "iOS & Android", "Progressive Web Apps"]
    },
    {
      title: "Cloud Solutions",
      icon: Cloud,
      desc: "Cloud infrastructure setup, migration, and optimization. Multi-cloud strategy for maximum availability and cost efficiency.",
      gradient: "from-purple-500 to-pink-600",
      features: ["AWS, Azure, GCP", "Kubernetes & Docker", "Serverless Architecture", "Cost Optimization"]
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      desc: "Transform raw data into actionable insights. Big data processing, analytics dashboards, and business intelligence solutions.",
      gradient: "from-orange-500 to-red-600",
      features: ["Data Warehousing", "BI & Analytics", "Real-time Dashboards", "ML Pipelines"]
    },
    {
      title: "Security & DevOps",
      icon: Lock,
      desc: "Enterprise-grade security implementations and DevOps automation. Ensure your systems are secure, scalable, and maintainable.",
      gradient: "from-green-500 to-teal-600",
      features: ["Security Audits", "CI/CD Pipeline", "Infrastructure as Code", "Monitoring & Logging"]
    },
    {
      title: "AI & Machine Learning",
      icon: Cpu,
      desc: "AI-powered solutions from chatbots to predictive analytics. Custom ML models trained on your data to solve business problems.",
      gradient: "from-pink-500 to-purple-600",
      features: ["NLP & Chatbots", "Computer Vision", "Predictive Models", "LLM Integration"]
    },
    {
      title: "Consulting & Strategy",
      icon: Lightbulb,
      desc: "Technology strategy, digital transformation, and enterprise architecture. Expert guidance for your digital journey.",
      gradient: "from-indigo-500 to-blue-600",
      features: ["Tech Stack Selection", "Architecture Design", "Roadmap Planning", "Team Augmentation"]
    }
  ];

  const whyChooseUs = [
    { id: "01", title: "Expert Team", desc: "Experienced developers, architects, and consultants with 10+ years in the industry" },
    { id: "02", title: "Agile Delivery", desc: "Flexible, iterative development with regular updates and transparent communication" },
    { id: "03", title: "Custom Solutions", desc: "Tailored technology solutions designed specifically for your business needs" },
    { id: "04", title: "24/7 Support", desc: "Dedicated support team available round the clock for critical issues" },
  ];

  const technologies = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" }
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Migration",
      company: "RetailCo",
      desc: "Migrated legacy monolithic application to microservices on Kubernetes, reducing deployment time by 80%",
      result: "3x faster deployments",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Real-time Analytics Dashboard",
      company: "FinanceHub",
      desc: "Built a real-time analytics platform processing 1M+ events daily using Apache Kafka and Elasticsearch",
      result: "1M events/day processed",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "AI-Powered Recommendation Engine",
      company: "MediaStream",
      desc: "Developed ML-based recommendation system increasing user engagement by 45%",
      result: "45% engagement increase",
      gradient: "from-pink-500 to-orange-600"
    }
  ];




  return (
    <>
    <div className="flex flex-col min-h-screen">
       {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000" 
            alt="IT Solutions" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 font-medium text-sm mb-6 backdrop-blur-sm">
              Enterprise Technology Solutions
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-7xl font-bold font-heading leading-tight mb-6">
              Transform Your Business with <span className="text-primary">Next-Gen Technology</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Custom software development, cloud solutions, and digital transformation for forward-thinking companies. We build scalable, secure, and innovative technology solutions.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 h-14 rounded-full">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="text-lg px-8 h-14 rounded-full border-2 border-white/20 text-white hover:bg-white/10">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/30 font-medium text-sm mb-4">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive IT Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">From custom development to cloud infrastructure, we provide end-to-end technology solutions</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
              <div key={index} className={`relative p-1 rounded-2xl bg-gradient-to-r ${service.gradient} group h-full`}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="border-0 transition-all duration-300 overflow-hidden bg-white h-full hover:shadow-xl">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-white mb-6`}>
                        <Icon size={28} />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{service.desc}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check size={16} className="text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            )})}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/30 font-medium text-sm mb-4">Why Partner With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">We deliver high-quality solutions with dedication, transparency, and proven expertise</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-1 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 group h-full"
              >
                <Card className="h-full border-0 bg-white hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center flex flex-col h-full">
                    <div className={`w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-2xl font-bold`}>
                      {item.id}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/30 font-medium text-sm mb-4">Tech Stack</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Modern Technologies We Use</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Built with cutting-edge, industry-standard technologies</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative p-1 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl transition-all cursor-pointer bg-white h-full"
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12 md:w-14 md:h-14" />
                  <span className="text-xs md:text-sm font-medium text-foreground text-center">{tech.name}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/30 font-medium text-sm mb-4">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">See how we've helped companies transform their operations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-1 rounded-2xl bg-gradient-to-r ${study.gradient} h-full`}
              >
                <Card className="h-full border-0 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-8 flex flex-col h-full">
                    <Badge className="w-fit mb-4" variant="secondary">{study.company}</Badge>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{study.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{study.desc}</p>
                    <div className="pt-6 border-t border-slate-200">
                      <div className="text-sm text-muted-foreground mb-2">Key Result</div>
                      <div className="text-2xl font-bold text-primary">{study.result}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-16 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Digital Transformation?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our technology solutions can drive growth and innovation for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 h-14 rounded-full">
                  Get In Touch
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 h-14 rounded-full border-2 border-white/20 text-white hover:bg-white/10">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}