import { KpiCard } from './components/KpiCard';
import { ServiceCard } from './components/ServiceCard';
import { useDashboard } from './hooks/useDashboard';

export default function App() {
  const { user, kpis, services } = useDashboard();

  return (
    <main className="app-shell">
      <section className="hero">
        <h1>BioPro Grid</h1>
        <p>
          Welcome, {user.name}. Your role is <strong>{user.role}</strong> in {user.country}.
        </p>
        <p>Unified intelligence for farming, compliance, and traceability.</p>
      </section>

      <h2 className="section-title">Operational KPIs</h2>
      <section className="grid">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} />
        ))}
      </section>

      <h2 className="section-title">Core Modules</h2>
      <section className="grid">
        {services.map((module) => (
          <ServiceCard key={module.id} module={module} />
        ))}
      </section>

      <h2 className="section-title">Getting Started</h2>
      <ul className="list">
        <li>Set up a farm profile and map your first parcel.</li>
        <li>Run a scouting session and log observations.</li>
        <li>Create compliance tasks for chemical usage records.</li>
      </ul>
    </main>
  );
}
