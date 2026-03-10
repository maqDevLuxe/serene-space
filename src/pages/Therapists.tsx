import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { ArrowRight, Star, Filter } from "lucide-react";

import therapist1 from "@/assets/therapist-1.jpg";
import therapist2 from "@/assets/therapist-2.jpg";
import therapist3 from "@/assets/therapist-3.jpg";

const therapists = [
  { img: therapist1, name: "Dr. Sarah Mitchell", spec: "Anxiety & Depression", exp: "12 years", rating: 4.9, sessions: 2400, approaches: ["CBT", "Mindfulness"] },
  { img: therapist2, name: "Dr. James Bennett", spec: "Trauma & PTSD", exp: "15 years", rating: 4.8, sessions: 3100, approaches: ["EMDR", "Somatic"] },
  { img: therapist3, name: "Dr. Maria Santos", spec: "Relationships & Identity", exp: "10 years", rating: 4.9, sessions: 1800, approaches: ["Attachment", "Narrative"] },
  { img: therapist1, name: "Dr. Emily Chen", spec: "Grief & Loss", exp: "8 years", rating: 4.7, sessions: 1200, approaches: ["ACT", "Grief Counseling"] },
  { img: therapist2, name: "Dr. Michael Torres", spec: "Addiction & Recovery", exp: "14 years", rating: 4.8, sessions: 2800, approaches: ["MI", "12-Step"] },
  { img: therapist3, name: "Dr. Amara Johnson", spec: "Child & Adolescent", exp: "11 years", rating: 4.9, sessions: 2100, approaches: ["Play Therapy", "CBT"] },
];

const Therapists = () => {
  const ref = useRevealOnScroll();

  return (
    <Layout>
      <div ref={ref}>
        {/* Header */}
        <section className="pt-32 pb-16 bg-secondary">
          <div className="container mx-auto px-6 text-center animate-calm-fade-in">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Our Experts</p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-4">Meet Our Therapists</h1>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Every therapist is board-certified, deeply experienced, and committed to your healing journey.
            </p>
          </div>
        </section>

        {/* Filter bar */}
        <section className="py-6 border-b border-border">
          <div className="container mx-auto px-6 flex flex-wrap items-center gap-3">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="font-body text-sm text-muted-foreground">Filter:</span>
            {["All", "Anxiety", "Trauma", "Relationships", "Grief", "Addiction"].map((f) => (
              <button
                key={f}
                className={`font-body text-xs px-4 py-1.5 rounded-full transition-all duration-500 ${
                  f === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {therapists.map((t, i) => (
                <div key={t.name} className={`reveal reveal-delay-${(i % 3) + 1} bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-700 group`}>
                  <div className="overflow-hidden">
                    <img src={t.img} alt={t.name} className="w-full h-56 object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-xl font-semibold text-foreground">{t.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-primary text-primary" />
                        <span className="font-body text-xs text-foreground">{t.rating}</span>
                      </div>
                    </div>
                    <p className="font-body text-sm text-primary">{t.spec}</p>
                    <p className="font-body text-xs text-muted-foreground mt-1">{t.exp} experience • {t.sessions.toLocaleString()} sessions</p>
                    <div className="flex gap-2 mt-3">
                      {t.approaches.map((a) => (
                        <span key={a} className="font-body text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">{a}</span>
                      ))}
                    </div>
                    <Button variant="calm" size="sm" asChild className="mt-5 w-full">
                      <Link to="/booking">Book Session <ArrowRight className="ml-1 h-3 w-3" /></Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Therapists;
