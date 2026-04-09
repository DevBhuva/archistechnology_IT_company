import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Check, Clock, Award, GraduationCap, Users, Briefcase, Target, Code, Database, Zap, Cloud, Book, Users2, Cpu, BarChart3, Bookmark, MessageCircle, FileText, Globe, Shield, TrendingUp, Lightbulb } from "lucide-react";

export default function DeepLearning() {
  const eligibility = [
    { icon: GraduationCap, label: "ML Engineers", desc: "With ML fundamentals" },
    { icon: Users, label: "Research Enthusiasts", desc: "Wanting to dive deep" },
    { icon: Briefcase, label: "Professional Developers", desc: "Looking to specialize" },
    { icon: Target, label: "PhD Candidates", desc: "Strengthening research skills" }
  ];

  const modules = [
    {
      title: "Neural Networks Fundamentals",
      duration: "3 weeks",
      topics: ["Perceptrons", "Backpropagation", "Optimization Algorithms", "Regularization Techniques"],
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Convolutional Neural Networks",
      duration: "3 weeks",
      topics: ["CNN Architecture", "Image Classification", "Object Detection", "Transfer Learning"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Recurrent Neural Networks",
      duration: "2 weeks",
      topics: ["LSTM & GRU", "Sequence Processing", "NLP Applications", "Time Series"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Generative Models & Advanced Topics",
      duration: "4 weeks",
      topics: ["GANs", "Variational Autoencoders", "Transformers", "Large Language Models"],
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://images.unsplash.com/photo-1551269901-5c2e6e4ff800?auto=format&fit=crop&q=80&w=1200')"}}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-primary/70"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-heading"
          >
            Deep Learning <span className="text-white">Specialization</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Master Neural Networks, TensorFlow, and PyTorch. Build your own generative AI models and stay ahead in the AI revolution.
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
            12-Week Curriculum
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Modules */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8 auto-rows-fr">
                {modules.map((module, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative p-1 rounded-lg bg-gradient-to-br ${module.gradient}`}
                  >
                    <div className="bg-white rounded-lg p-8 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-bold flex-1">{module.title}</h3>
                        <Badge className="whitespace-nowrap ml-2">{module.duration}</Badge>
                      </div>
                      <div className="space-y-3 flex-1">
                        {module.topics.map((topic, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <Check size={16} className="text-primary shrink-0" />
                            <span className="text-sm text-muted-foreground">{topic}</span>
                          </div>
                        ))}
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
              className="relative p-1 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 h-fit sticky top-20"
            >
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-2">Deep Learning</h3>
                <p className="text-sm text-muted-foreground mb-4">Advanced AI expertise program</p>
                <Badge className="mb-6 w-full justify-center py-2">12 Weeks Advanced</Badge>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg mb-4">You Will Get:</h4>
                    <div className="space-y-3">
                      {[
                        "Research paper implementation projects",
                        "GPU cloud computing credits (500+ hours)",
                        "Guest lectures from AI researchers",
                        "Publication support in peer review journals",
                        "Industry-recognized specialization certificate",
                        "Capstone project with real-world application",
                        "Direct connection to AI companies hiring",
                        "1-on-1 mentorship from AI PhD holders"
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

      {/* Tools & Frameworks */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Tools & Frameworks
          </motion.h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-1 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600"
            >
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-lg font-bold mb-6">Deep Learning Frameworks</h3>
                <ul className="space-y-3">
                  {["TensorFlow", "PyTorch", "Keras", "NumPy", "SciPy"].map((tool, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check size={18} className="text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">{tool}</span>
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
                <h3 className="text-lg font-bold mb-6">Cloud & GPU</h3>
                <ul className="space-y-3">
                  {["Google Colab", "AWS SageMaker", "Azure ML", "NVIDIA CUDA", "Docker & Kubernetes"].map((tool, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check size={18} className="text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative p-1 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600"
            >
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-lg font-bold mb-6">Advanced Tools</h3>
                <ul className="space-y-3">
                  {["Jupyter & VS Code", "Git & GitHub", "Weights & Biases", "TensorBoard", "MLflow"].map((tool, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check size={18} className="text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
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
            {[
              { icon: Book, title: "Advanced AI Knowledge", desc: "Master state-of-the-art deep learning" },
              { icon: Users2, title: "Research Mentorship", desc: "Learn from PhD and research experts" },
              { icon: Cloud, title: "GPU Cloud Credits", desc: "Free computing resources for training" },
              { icon: Award, title: "Specialization Certificate", desc: "Recognized advanced certification" },
              { icon: Cpu, title: "Framework Expertise", desc: "Master TensorFlow and PyTorch" },
              { icon: Database, title: "Research Papers", desc: "Implementations of cutting-edge research" },
              { icon: FileText, title: "Publication Ready", desc: "Prepare work for academic publication" },
              { icon: MessageCircle, title: "Expert Guidance", desc: "One-on-one sessions with researchers" },
              { icon: Globe, title: "Research Network", desc: "Connect with AI researchers worldwide" },
              { icon: Shield, title: "Academic Credits", desc: "Eligible for university recognition" },
              { icon: Zap, title: "Capstone Project", desc: "Build your own AI innovation" },
              { icon: Lightbulb, title: "Innovation Lab", desc: "Access to latest AI research tools" },
              { icon: TrendingUp, title: "Career Advancement", desc: "Path to AI researcher roles" },
              { icon: Bookmark, title: "Lifetime Resources", desc: "Forever access to all materials" }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative p-1 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 group"
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

      {/* Who Can Apply */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prerequisites & Eligibility</h2>
            <p className="text-lg text-muted-foreground">
              This is an advanced program. You should have completed a foundational ML program or have equivalent experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
            {eligibility.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative p-1 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg p-8 text-center h-full flex flex-col"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Become an AI Expert</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Master deep learning and join the frontier of artificial intelligence. Build models that will change the world.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 h-12">
                  Start Specialization
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
