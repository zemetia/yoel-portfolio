'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { staggerItem, StaggerContainer } from '@/components/animations/StaggerContainer';
import { Typography } from '@/components/ui/Typography';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useTranslations } from 'next-intl';

interface ProjectEntry {
  title: string;
  description: string;
  tags: string[];
}

export function ProjectsSection() {
  const t = useTranslations('projects');

  const projects: ProjectEntry[] = [
    {
      title: t.raw('entries.0.title') || 'Customer Churn Predictor',
      description:
        t.raw('entries.0.description') ||
        'Built an end-to-end machine learning pipeline to predict customer churn with 94% accuracy. Deployed as a REST API with real-time scoring and automated retraining.',
      tags: t.raw('entries.0.tags') || ['Python', 'XGBoost', 'FastAPI', 'Docker'],
    },
    {
      title: t.raw('entries.1.title') || 'Sentiment Analysis Engine',
      description:
        t.raw('entries.1.description') ||
        'Developed a deep learning-based sentiment analysis system processing 50K+ reviews daily. Achieved 87% F1-score using fine-tuned transformer models.',
      tags: t.raw('entries.1.tags') || ['PyTorch', 'Transformers', 'NLP', 'AWS'],
    },
    {
      title: t.raw('entries.2.title') || 'Sales Forecasting Dashboard',
      description:
        t.raw('entries.2.description') ||
        'Created an interactive time-series forecasting dashboard with Prophet and Streamlit. Reduced forecast error by 22% through feature engineering and ensemble methods.',
      tags: t.raw('entries.2.tags') || ['Python', 'Prophet', 'Streamlit', 'SQL'],
    },
    {
      title: t.raw('entries.3.title') || 'Recommendation System',
      description:
        t.raw('entries.3.description') ||
        'Designed a hybrid collaborative filtering and content-based recommendation engine serving 100K+ users. Improved click-through rate by 35% with personalized suggestions.',
      tags:
        t.raw('entries.3.tags') || ['Python', 'TensorFlow', 'Spark', 'Kubernetes'],
    },
    {
      title: t.raw('entries.4.title') || 'Fraud Detection Pipeline',
      description:
        t.raw('entries.4.description') ||
        'Built a real-time fraud detection system processing 10K transactions/second using gradient boosting and anomaly detection. Reduced false positives by 40% while maintaining 99% recall.',
      tags:
        t.raw('entries.4.tags') || ['Python', 'LightGBM', 'Kafka', 'PostgreSQL'],
    },
    {
      title: t.raw('entries.5.title') || 'Data Pipeline Automation',
      description:
        t.raw('entries.5.description') ||
        'Architected automated ETL pipelines integrating 15+ data sources into a centralized data warehouse. Reduced data processing time by 60% and enabled real-time analytics.',
      tags: t.raw('entries.5.tags') || ['Python', 'Airflow', 'dbt', 'BigQuery'],
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[var(--color-background)]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 w-[450px] h-[450px] rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-page relative z-10 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <FadeIn direction="up" delay={0.1}>
            <Typography
              variant="h2"
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-center"
            >
              {t.raw('heading') || 'Projects'}
            </Typography>
          </FadeIn>

          {/* Section subheading */}
          <FadeIn direction="up" delay={0.15}>
            <Typography
              variant="body"
              className="text-base sm:text-lg text-center mb-14 max-w-2xl mx-auto"
              style={{ color: 'var(--color-muted-foreground)' }}
            >
              {t.raw('subheading') ||
                'A selection of data science and machine learning projects I have worked on.'}
            </Typography>
          </FadeIn>

          {/* Projects grid */}
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.08}
            delayChildren={0.2}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="h-full border border-[var(--color-border)]/50 bg-[var(--color-card)]/40 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-primary)]/30 hover:shadow-md hover:shadow-[var(--color-primary)]/5 hover:bg-[var(--color-card)]/60">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl font-semibold">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <CardDescription
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--color-muted-foreground)' }}
                    >
                      {project.description}
                    </CardDescription>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border border-[var(--color-primary)]/25 bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
