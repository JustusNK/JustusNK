import type { FarmKpi } from '../types';

interface KpiCardProps {
  kpi: FarmKpi;
}

export function KpiCard({ kpi }: KpiCardProps) {
  return (
    <article className="card">
      <small>{kpi.label}</small>
      <p className="kpi">{kpi.value}</p>
      <span>Trend: {kpi.trend}</span>
    </article>
  );
}
