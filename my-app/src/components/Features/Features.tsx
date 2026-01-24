import Card from '@/components/UI/Card';
import './Features.css';

export default function Features() {
  return (
    <section className="features">
      <Card title="Real-Time Analytics">
        Watch your data react in real-time with neon visualizations.
      </Card>
      <Card title="Custom Experiments">
        Create experiments and watch outcomes unfold.
      </Card>
      <Card title="Optimized Solutions">
        Build lightning-fast software tailored to your project.
      </Card>
    </section>
  );
}