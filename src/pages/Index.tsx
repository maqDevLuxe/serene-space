import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Counter from "@/components/Counter";
import BreathingExercise from "@/components/BreathingExercise";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import {
  Shield, Heart, Users, Brain, Video, MessageCircle, Phone,
  Star, Lock, ArrowRight, CheckCircle, Leaf, BookOpen, Award, Clock
} from "lucide-react";

import heroImg from "@/assets/hero-calm.jpg";
import natureImg from "@/assets/nature-calm.jpg";
import therapist1 from "@/assets/therapist-1.jpg";
import therapist2 from "@/assets/therapist-2.jpg";
import therapist3 from "@/assets/therapist-3.jpg";

const Index = () => {
  const ref = useRevealOnScroll();

  return (
    <Layout>
      <div ref={ref}>
        {/* 1. Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <img
            src={heroImg}
            alt="Peaceful meditation art"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/40" />
          <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl animate-calm-fade-in-slow">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Welcome to MindHaven
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-semibold text-foreground leading-tight text-balance mb-6">
              Your Safe Space for Healing
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              Connect with certified therapists in a confidential, compassionate environment.
              Begin your journey toward peace of mind today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="calm" size="lg" asChild>
                <Link to="/booking">Begin Assessment <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button variant="calm-outline" size="lg" asChild>
                <Link to="/therapists">Meet Our Therapists</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 2. Certified Therapy Boards */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="reveal text-center mb-12">
              <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Trusted & Accredited</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Certified by Leading Boards</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {[
                { name: "APA", full: "American Psychological Association" },
                { name: "NBCC", full: "National Board for Certified Counselors" },
                { name: "AASW", full: "American Association of Social Workers" },
                { name: "ABPP", full: "American Board of Professional Psychology" },
              ].map((board, i) => (
                <div key={board.name} className={`reveal reveal-delay-${i + 1} flex flex-col items-center gap-2 p-6`}>
                  <Award className="h-10 w-10 text-primary" />
                  <span className="font-display text-xl font-bold text-foreground">{board.name}</span>
                  <span className="font-body text-xs text-muted-foreground text-center">{board.full}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Modes of Therapy */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="reveal text-center mb-16">
              <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Flexible Care</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Modes of Therapy</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Video, title: "Video Sessions", desc: "Face-to-face therapy from the comfort and safety of your own space." },
                { icon: MessageCircle, title: "Text Therapy", desc: "Async messaging with your therapist whenever you need support." },
                { icon: Phone, title: "Voice Calls", desc: "Audio-only sessions for those who prefer conversational privacy." },
              ].map((mode, i) => (
                <div key={mode.title} className={`reveal reveal-delay-${i + 1} bg-card rounded-lg p-8 shadow-soft hover:shadow-elevated transition-shadow duration-700`}>
                  <mode.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{mode.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{mode.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. The Matching Process */}
        <section className="py-24 bg-lavender-mist">
          <div className="container mx-auto px-6">
            <div className="reveal text-center mb-16">
              <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">How It Works</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">The Matching Process</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Take Assessment", desc: "A gentle questionnaire about your needs and preferences." },
                { step: "02", title: "Get Matched", desc: "Our algorithm pairs you with the ideal therapist." },
                { step: "03", title: "Meet & Connect", desc: "Have your first session and feel the connection." },
                { step: "04", title: "Heal & Grow", desc: "Continue your journey with consistent, compassionate care." },
              ].map((item, i) => (
                <div key={item.step} className={`reveal reveal-delay-${i + 1} text-center`}>
                  <span className="font-display text-5xl font-bold text-primary/30">{item.step}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Clinical Effectiveness Metrics */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="reveal text-center mb-16">
              <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Evidence-Based</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Clinical Effectiveness</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { stat: "94%", label: "Client Improvement Rate", desc: "Significant symptom reduction within 12 sessions" },
                { stat: "89%", label: "Would Recommend", desc: "Clients who recommend MindHaven to loved ones" },
                { stat: "4.9", label: "Average Rating", desc: "Based on 12,000+ verified session reviews" },
              ].map((m, i) => (
                <div key={m.label} className={`reveal reveal-delay-${i + 1} bg-card rounded-lg p-8 text-center shadow-soft`}>
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary">{m.stat}</p>
                  <p className="font-display text-lg font-semibold text-foreground mt-2">{m.label}</p>
                  <p className="font-body text-sm text-muted-foreground mt-2">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Interactive Mindfulness Exercise */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="reveal text-center mb-12">
              <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Try It Now</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">4-7-8 Breathing Exercise</h2>
              <p className="font-body text-sm text-muted-foreground max-w-md mx-auto">
                A calming technique used by therapists worldwide. Inhale for 4s, hold for 7s, exhale for 8s.
              </p>
            </div>
            <div className="reveal reveal-delay-1">
              <BreathingExercise />
            </div>
          </div>
        </section>

        {/* 7. Curated Therapist Directory */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="reveal text-center mb-16">
              <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Our Team</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Curated Therapist Directory</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { img: therapist1, name: "Dr. Sarah Mitchell", spec: "Anxiety & Depression", exp: "12 years" },
                { img: therapist2, name: "Dr. James Bennett", spec: "Trauma & PTSD", exp: "15 years" },
                { img: therapist3, name: "Dr. Maria Santos", spec: "Relationships & Identity", exp: "10 years" },
              ].map((t, i) => (
                <div key={t.name} className={`reveal reveal-delay-${i + 1} bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-700 group`}>
                  <div className="overflow-hidden">
                    <img src={t.img} alt={t.name} className="w-full h-64 object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground">{t.name}</h3>
                    <p className="font-body text-sm text-primary mt-1">{t.spec}</p>
                    <p className="font-body text-xs text-muted-foreground mt-1">{t.exp} experience</p>
                    <Button variant="calm-ghost" size="sm" asChild className="mt-4">
                      <Link to="/booking">Book Session <ArrowRight className="ml-1 h-3 w-3" /></Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal text-center mt-12">
              <Button variant="calm-outline" asChild>
                <Link to="/therapists">View All Therapists <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 8. Full-width Nature Image */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={natureImg}
            alt="Serene nature landscape"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/20" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="reveal text-center">
              <Leaf className="h-10 w-10 text-primary-foreground mx-auto mb-4 animate-gentle-float" />
              <p className="font-display text-3xl md:text-5xl font-semibold text-primary-foreground text-balance max-w-2xl px-6">
                "The wound is the place where the Light enters you."
              </p>
              <p className="font-body text-sm text-primary-foreground/80 mt-4">— Rumi</p>
            </div>
          </div>
        </section>

        {/* 9. Counters */}
        <section className="py-24 bg-lavender-mist">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <Counter end={48500} suffix="+" label="Sessions Completed" />
              <Counter end={320} suffix="+" label="Active Therapists" />
              <Counter end={15000} suffix="+" label="Lives Touched" />
              <Counter end={98} suffix="%" label="Satisfaction Rate" />
            </div>
          </div>
        </section>

        {/* 10. Mental Wealth Blog */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="reveal text-center mb-16">
              <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Insights</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Mental Wealth Blog</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Understanding Anxiety: A Gentle Guide", cat: "Anxiety", read: "6 min" },
                { title: "The Power of Mindful Breathing", cat: "Mindfulness", read: "4 min" },
                { title: "Building Healthy Boundaries", cat: "Relationships", read: "8 min" },
              ].map((post, i) => (
                <article key={post.title} className={`reveal reveal-delay-${i + 1} bg-card rounded-lg p-8 shadow-soft hover:shadow-elevated transition-shadow duration-700 cursor-pointer group`}>
                  <span className="font-body text-xs uppercase tracking-wider text-primary">{post.cat}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-3 mb-3 group-hover:text-primary transition-colors duration-500">{post.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span className="font-body text-xs">{post.read} read</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="reveal text-center mt-12">
              <Button variant="calm-outline" asChild>
                <Link to="/resources">Read More Articles <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 11. Confidentiality */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Your Privacy</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">Uncompromised Confidentiality</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  Your mental health journey is deeply personal. We employ bank-grade encryption,
                  anonymized data storage, and HIPAA-compliant protocols to ensure your conversations
                  remain absolutely private.
                </p>
                <div className="space-y-4">
                  {[
                    "256-bit AES encryption for all sessions",
                    "HIPAA & GDPR fully compliant",
                    "Anonymous session identifiers",
                    "No data sold to third parties — ever",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="font-body text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal reveal-delay-2 flex items-center justify-center">
                <div className="relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-accent flex items-center justify-center animate-breathe">
                    <Lock className="h-16 w-16 md:h-20 md:w-20 text-primary" />
                  </div>
                  <Shield className="absolute top-0 right-0 h-12 w-12 text-primary/50 animate-gentle-float" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Anonymized Client Reviews */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="reveal text-center mb-16">
              <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Voices of Hope</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Client Stories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { text: "MindHaven gave me my life back. The matching process found me a therapist who truly understands me.", id: "Anonymous, 34" },
                { text: "I was skeptical about online therapy, but the video sessions feel just as personal and safe as in-person.", id: "Anonymous, 28" },
                { text: "The breathing exercises alone have helped my anxiety more than I ever expected. This platform is a gift.", id: "Anonymous, 41" },
              ].map((review, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 1} bg-card rounded-lg p-8 shadow-soft`}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="font-body text-sm text-foreground leading-relaxed italic mb-4">"{review.text}"</p>
                  <p className="font-body text-xs text-muted-foreground">— {review.id}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 13. Start Assessment CTA */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="reveal text-center max-w-2xl mx-auto">
              <Heart className="h-10 w-10 text-primary mx-auto mb-6 animate-gentle-float" />
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
                Your Healing Journey Begins with a Single Step
              </h2>
              <p className="font-body text-muted-foreground mb-10 leading-relaxed">
                Take our gentle, 5-minute assessment to be matched with a therapist who understands your unique needs.
                No commitment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="calm" size="lg" asChild>
                  <Link to="/booking">Start Free Assessment <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button variant="calm-outline" size="lg" asChild>
                  <Link to="/resources">Explore Resources</Link>
                </Button>
              </div>
              <p className="font-body text-xs text-muted-foreground mt-6">
                100% confidential • No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
