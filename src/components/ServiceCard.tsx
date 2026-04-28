import type { ServiceModule } from '../types';

interface ServiceCardProps {
  module: ServiceModule;
}

export function ServiceCard({ module }: ServiceCardProps) {
  return (
    <article className="card">
      <h3>{module.title}</h3>
      <p>{module.description}</p>
    </article>
  );
}
