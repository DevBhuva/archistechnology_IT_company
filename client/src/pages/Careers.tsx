import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Users, Award, Heart, Zap } from "lucide-react";

export default function Careers() {
  const jobs = [
    {
      role: "Senior Full Stack Developer",
      type: "Full-time",
      location: "Ahmedabad / Remote",
      dept: "Engineering",
      experience: "3+ years"
    },
    {
      role: "UI/UX Designer",
      type: "Full-time", 
      location: "Ahmedabad",
      dept: "Design",
      experience: "2+ years"
    },
    {
      role: "React Native Developer",
      type: "Full-time",
      location: "Remote",
      dept: "Mobile",
      experience: "2+ years"
    },
    {
      role: "Business Development Executive",
      type: "Full-time",
      location: "Ahmedabad",
      dept: "Sales",
      experience: "1+ years"
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Great Team",
      desc: "Work with passionate and talented individuals"
    },
    {
      icon: Zap,
      title: "Growth Opportunities",
      desc: "Continuous learning and career development"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      desc: "Flexible working hours and remote options"
    },
    {
      icon: Award,
      title: "Recognition",
      desc: "Your contributions are valued and rewarded"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200')"}}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-primary/70"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-heading"
          >
            Join Our <span className="text-white">Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            We're on a mission to build innovative technology solutions. Join our global team of engineers, designers, and visionaries.
          </motion.p>
        </div>
      </div>

      {/* Why Join Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Why Work With Us?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-0 bg-white group">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <benefit.icon size={28} className="text-primary group-hover:text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Open Positions
          </motion.h2>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div key={index} className="relative p-1 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white group h-full">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{job.role}</h3>
                          <div className="flex flex-wrap gap-3">
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                              {job.dept}
                            </Badge>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock size={16} />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin size={16} />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Briefcase size={16} />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0">
                        <Link href="/contact">
                          <Button className="bg-primary hover:bg-primary/90 rounded-full px-6">
                            Apply Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-primary/5 rounded-3xl p-12 border border-primary/10"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Don't see a role for you?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              We are always looking for talented people. Send your resume and let's explore opportunities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 h-14 rounded-full">
                  Send Resume
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 h-14 rounded-full border-2">
                View Culture
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
