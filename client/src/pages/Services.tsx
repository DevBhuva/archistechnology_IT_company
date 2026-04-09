import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Smartphone, Code, Palette, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const quickServices = [
    "Web Development",
    "Software Development", 
    "UX & UI",
    "Mobile Application Development"
  ];

  const mainServices = [
    {
      icon: Globe,
      title: "Web Development",
      desc: "Creating responsive, modern web applications using cutting-edge technologies for optimal user experience.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
      features: ["React & Next.js", "Node.js Backend", "Responsive Design", "SEO Optimized"]
    },
    {
      icon: Code,
      title: "Software Development",
      desc: "Full-stack software solutions tailored to your business needs with scalable architecture.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      features: ["Custom Applications", "API Development", "Database Design", "Cloud Integration"]
    },
    {
      icon: Palette,
      title: "UX & UI Design",
      desc: "User-centered design approach creating intuitive interfaces that delight users and drive engagement.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      desc: "Native and cross-platform mobile applications that provide seamless user experiences.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200')"}}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-primary/70"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-heading"
          >
            Our <span className="text-white">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            We are offering a comprehensive range of IT services designed to meet the diverse needs of our clients.
          </motion.p>
        </div>
      </div>

      {/* Quick Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Quick Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, index) => (
              <div key={index} className="relative p-1 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group cursor-pointer h-full"
                >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{service}</h3>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Our Expertise In Detail
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 auto-rows-fr">
            {mainServices.map((service, index) => (
              <div className="relative p-1 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-500 border-0 bg-white overflow-hidden group">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                        <service.icon size={24} />
                      </div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-3xl p-12 shadow-sm border max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              We understand that every challenge is unique. Contact us to discuss your specific requirements and let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 h-14 rounded-full">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/programs">
                <Button variant="outline" size="lg" className="px-8 h-14 rounded-full border-2">
                  View Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
