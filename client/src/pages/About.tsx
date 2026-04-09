import { motion } from "framer-motion";
import { CheckCircle2, Users, Target, Award, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
            alt="Team work" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-heading"
          >
            Our Story & Vision
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between academic theory and industry reality since 2020.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 rounded-2xl" 
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 text-white">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To bridge the gap between academic learning and real-world industry experience by providing live AI/ML/Data Science projects, mentorship, and career opportunities to students and professionals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that the best way to learn technology is by building it. Our goal is to create a community of innovators who are ready to tackle the challenges of tomorrow.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 p-8 rounded-2xl border border-primary/20"
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 text-white">
              <Lightbulb size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be the world's leading platform for practical AI education and innovation, creating a seamless transition for students into the professional tech industry.
            </p>
          </motion.div>
        </div>

        {/* What Makes Us Unique */}
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
          >
            What Makes Us <span className="text-primary">Unique?</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 auto-rows-fr">
            {[
              { 
                icon: CheckCircle2, 
                title: "Practical Learning", 
                desc: "Focus on practical, hands-on learning over theory." 
              },
              { 
                icon: Users, 
                title: "Expert Mentorship", 
                desc: "Direct mentorship from industry experts." 
              },
              { 
                icon: Award, 
                title: "Real Projects", 
                desc: "Real-world project experience for students." 
              },
              { 
                icon: Target, 
                title: "Career Support", 
                desc: "Career guidance and placement support." 
              },
            ].map((item, i) => (
              <div key={i} className="relative p-1 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white group">
                  <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <item.icon size={28} className="text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
