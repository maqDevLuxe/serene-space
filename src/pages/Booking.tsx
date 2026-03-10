import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { ArrowRight, ArrowLeft, CheckCircle, Shield } from "lucide-react";

const questions = [
  {
    q: "What brings you here today?",
    options: ["Anxiety or worry", "Depression or sadness", "Relationship issues", "Trauma or PTSD", "Grief or loss", "Self-discovery"],
  },
  {
    q: "How would you prefer to connect with your therapist?",
    options: ["Video sessions", "Voice calls", "Text messaging", "No preference"],
  },
  {
    q: "Have you had therapy before?",
    options: ["Yes, currently in therapy", "Yes, in the past", "No, this is my first time"],
  },
  {
    q: "What time works best for you?",
    options: ["Morning (8am–12pm)", "Afternoon (12pm–5pm)", "Evening (5pm–9pm)", "Flexible"],
  },
];

const Booking = () => {
  const ref = useRevealOnScroll();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[step] = option;
    setAnswers(newAnswers);
  };

  const next = () => {
    if (step < questions.length - 1) setStep(step + 1);
    else setSubmitted(true);
  };

  const back = () => {
    if (step > 0) setStep(step - 1);
  };

  const progress = ((step + 1) / questions.length) * 100;

  return (
    <Layout>
      <div ref={ref}>
        {/* Header */}
        <section className="pt-32 pb-16 bg-secondary">
          <div className="container mx-auto px-6 text-center animate-calm-fade-in">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Begin Healing</p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-4">Book Your Session</h1>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Answer a few gentle questions so we can match you with the perfect therapist.
            </p>
          </div>
        </section>

        {/* Assessment */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-2xl">
            {!submitted ? (
              <div className="reveal revealed">
                {/* Progress */}
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="font-body text-xs text-muted-foreground">Question {step + 1} of {questions.length}</span>
                    <span className="font-body text-xs text-muted-foreground">{Math.round(progress)}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="bg-card rounded-lg p-8 md:p-12 shadow-soft">
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
                    {questions[step].q}
                  </h2>

                  <div className="grid grid-cols-1 gap-3">
                    {questions[step].options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelect(opt)}
                        className={`text-left font-body text-sm p-4 rounded-lg border-2 transition-all duration-500 ${
                          answers[step] === opt
                            ? "border-primary bg-accent text-accent-foreground"
                            : "border-border bg-card text-foreground hover:border-primary/40"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button
                      variant="calm-ghost"
                      onClick={back}
                      disabled={step === 0}
                    >
                      <ArrowLeft className="mr-1 h-4 w-4" /> Back
                    </Button>
                    <Button
                      variant="calm"
                      onClick={next}
                      disabled={!answers[step]}
                    >
                      {step < questions.length - 1 ? "Continue" : "Complete"} <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 mt-6">
                  <Shield className="h-3 w-3 text-muted-foreground" />
                  <span className="font-body text-xs text-muted-foreground">Your answers are encrypted and completely confidential</span>
                </div>
              </div>
            ) : (
              <div className="text-center animate-calm-fade-in">
                <div className="bg-card rounded-lg p-12 shadow-soft">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h2 className="font-display text-3xl font-semibold text-foreground mb-4">Assessment Complete</h2>
                  <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
                    Thank you for sharing. We're analyzing your responses to find the perfect therapist match.
                    You'll receive your personalized recommendations within 24 hours.
                  </p>
                  <Button variant="calm" size="lg" onClick={() => { setSubmitted(false); setStep(0); setAnswers([]); }}>
                    Start Over
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Booking;
