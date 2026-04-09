import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Check, Clock, Award, GraduationCap, Users, Briefcase, Target, TrendingUp, BarChart3, Megaphone } from "lucide-react";

export default function DigitalMarketing() {
  const modules = [
    {
      title: "SEO Mastery",
      duration: "4 Weeks",
      description: "Learn search engine optimization, keyword research, content strategy, and organic growth techniques.",
      features: ["Technical SEO", "Keyword Research & Analysis", "Content Strategy", "Link Building Techniques"],
      gradient: "from-green-500 to-emerald-600",
      borderColor: "border-l-4 border-green-500"
    },
    {
      title: "Social Media & Advertising",
      duration: "4 Weeks",
      description: "Master social media strategy, content creation, and paid campaigns on Facebook, Instagram, LinkedIn, and Google Ads.",
      features: ["Social Media Strategy", "Content Creation", "Paid Advertising (FB, Insta, LinkedIn)", "Analytics & ROI Tracking"],
      gradient: "from-blue-500 to-indigo-600",
      borderColor: "border-l-4 border-blue-500"
    },
    {
      title: "Email Marketing & Analytics",
      duration: "3 Weeks",
      description: "Email campaign strategies, automation, segmentation, and data-driven analytics to measure ROI.",
      features: ["Email Campaign Strategy", "Automation & Segmentation", "A/B Testing", "Performance Analytics"],
      gradient: "from-purple-500 to-pink-600",
      borderColor: "border-l-4 border-purple-500"
    },
    {
      title: "Brand & Conversion Strategy",
      duration: "4 Weeks",
      description: "Build powerful brands, conversion optimization, customer journey mapping, and market positioning.",
      features: ["Brand Building", "Conversion Optimization", "Customer Journey Mapping", "Market Positioning"],
      gradient: "from-orange-500 to-red-600",
      borderColor: "border-l-4 border-orange-500"
    }
  ];

  const benefits = [
    { icon: TrendingUp, title: "Practical Training", description: "Hands-on training with industry tools" },
    { icon: Megaphone, title: "Real Projects", description: "Work on actual client campaigns" },
    { icon: Award, title: "Certification", description: "Industry-recognized certificate" },
    { icon: Users, title: "Expert Mentorship", description: "Learn from seasoned professionals" },
    { icon: Briefcase, title: "Portfolio Building", description: "Create impressive digital portfolio" },
    { icon: BarChart3, title: "Live Data Analysis", description: "Real campaign performance tracking" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-adf4e565db18?auto=format&fit=crop&q=80&w=1200')"}}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-primary/70"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-heading"
          >
            Digital <span className="text-white">Marketing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Master modern digital marketing strategies to drive growth for any business. Learn from industry experts.
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
            Our Digital Marketing Programs
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto auto-rows-fr">
            {/* SEO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative p-1 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600`}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-500 border-0 bg-white overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-600" />
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white">
                      <TrendingUp size={28} />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2 block">Course</Badge>
                      <Badge variant="outline">8 Weeks</Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">SEO Mastery</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">Learn search engine optimization, keyword research, content strategy, and organic growth techniques.</p>
                  
                  <div className="space-y-3 mb-8 flex-1">
                    {["Technical SEO", "Keyword Research", "Content Strategy", "Link Building"].map((feature, i) => (
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

            {/* Social Media & Ads */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`relative p-1 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600`}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-500 border-0 bg-white overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600" />
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white">
                      <Megaphone size={28} />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2 block">Course</Badge>
                      <Badge variant="outline">10 Weeks</Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Social Media & Advertising</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">Master social media strategy, content creation, and paid campaigns on all major platforms.</p>
                  
                  <div className="space-y-3 mb-8 flex-1">
                    {["Social Strategy", "Content Creation", "Paid Advertising", "Analytics & ROI"].map((feature, i) => (
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

            {/* Bootcamp */}
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
                      <BarChart3 size={28} />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2 block">Bootcamp</Badge>
                      <Badge variant="outline">16 Weeks</Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Complete Digital Marketing Bootcamp</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">Comprehensive training covering all aspects of digital marketing from SEO to analytics to brand strategy.</p>
                  
                  <div className="space-y-3 mb-8 flex-1">
                    {["SEO Mastery", "Social Media Mgmt", "Email Marketing", "Data Analytics"].map((feature, i) => (
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
            Digital Marketing Course Curriculum
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
                  className="relative p-1 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600"
                >
                  <div className="bg-white rounded-lg p-8 h-full flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white mb-4">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Digital Marketing Journey Today</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Master all aspects of digital marketing and become a certified digital marketing professional.
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
