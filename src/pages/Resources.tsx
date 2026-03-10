import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { BookOpen, Headphones, FileText, Heart, Clock, ArrowRight } from "lucide-react";

import mindfulnessImg from "@/assets/mindfulness-bg.jpg";

const articles = [
  { title: "Understanding Anxiety: A Gentle Guide", cat: "Anxiety", read: "6 min", excerpt: "Anxiety is more than just worry. Learn to recognize its patterns and find gentle ways to ease its grip." },
  { title: "The Power of Mindful Breathing", cat: "Mindfulness", read: "4 min", excerpt: "Discover how simple breathing techniques can transform your relationship with stress." },
  { title: "Building Healthy Boundaries", cat: "Relationships", read: "8 min", excerpt: "Boundaries aren't walls — they're bridges to healthier, more authentic connections." },
  { title: "Sleep Hygiene for Mental Wellness", cat: "Self-Care", read: "5 min", excerpt: "Quality sleep is the foundation of mental health. Here's how to cultivate it." },
  { title: "Navigating Grief with Grace", cat: "Grief", read: "7 min", excerpt: "Grief has no timeline. Learn to honor your process with compassion." },
  { title: "The Art of Self-Compassion", cat: "Growth", read: "6 min", excerpt: "Treating yourself with the same kindness you offer others is revolutionary." },
];

const Resources = () => {
  const ref = useRevealOnScroll();

  return (
    <Layout>
      <div ref={ref}>
        {/* Header */}
        <section className="pt-32 pb-16 bg-secondary">
          <div className="container mx-auto px-6 text-center animate-calm-fade-in">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Knowledge & Healing</p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-4">Resources</h1>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Curated articles, guided exercises, and tools for your mental wellness journey.
            </p>
          </div>
        </section>

        {/* Resource types */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[
                { icon: BookOpen, title: "Articles & Guides", desc: "In-depth resources written by licensed professionals", count: "50+" },
                { icon: Headphones, title: "Guided Meditations", desc: "Audio sessions for relaxation and mindfulness", count: "30+" },
                { icon: FileText, title: "Worksheets", desc: "Practical exercises for self-reflection and growth", count: "25+" },
              ].map((r, i) => (
                <div key={r.title} className={`reveal reveal-delay-${i + 1} bg-card rounded-lg p-8 shadow-soft text-center hover:shadow-elevated transition-shadow duration-700`}>
                  <r.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{r.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-3">{r.desc}</p>
                  <span className="font-display text-2xl font-bold text-primary">{r.count}</span>
                </div>
              ))}
            </div>

            {/* Mindfulness feature */}
            <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img src={mindfulnessImg} alt="Mindfulness meditation" className="rounded-lg shadow-elevated w-full" />
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Featured</p>
                <h2 className="font-display text-3xl font-semibold text-foreground mb-4">Daily Mindfulness Practice</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  Start with just 5 minutes a day. Our guided mindfulness exercises are designed
                  by clinical psychologists to reduce stress and increase emotional resilience.
                </p>
                <Button variant="calm" asChild>
                  <Link to="/booking">Try a Free Session <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>

            {/* Articles grid */}
            <div className="reveal text-center mb-12">
              <h2 className="font-display text-3xl font-semibold text-foreground">Latest Articles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((a, i) => (
                <article key={a.title} className={`reveal reveal-delay-${(i % 3) + 1} bg-card rounded-lg p-8 shadow-soft hover:shadow-elevated transition-shadow duration-700 cursor-pointer group`}>
                  <span className="font-body text-xs uppercase tracking-wider text-primary">{a.cat}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors duration-500">{a.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{a.excerpt}</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span className="font-body text-xs">{a.read} read</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-6 text-center reveal">
            <Heart className="h-8 w-8 text-primary mx-auto mb-4 animate-gentle-float" />
            <h2 className="font-display text-3xl font-semibold text-foreground mb-4">Need Personalized Guidance?</h2>
            <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
              Our therapists can create a tailored plan just for you.
            </p>
            <Button variant="calm" size="lg" asChild>
              <Link to="/booking">Book a Session <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Resources;
