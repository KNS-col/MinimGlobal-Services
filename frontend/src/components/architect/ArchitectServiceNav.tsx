import { ARCHITECT_SERVICES, type ArchitectService } from '@/data/architect'

type Props = {
  current?: ArchitectService
}

export default function ArchitectServiceNav({ current }: Props) {
  return (
    <aside className="ma-service-nav" aria-label="Architectural services">
      <h2>Our Services</h2>
      <nav>
        <ul>
          {ARCHITECT_SERVICES.map((service) => (
            <li key={service.id}>
              <a
                href={`/businesses/architect${service.path}`}
                className={current?.id === service.id ? 'is-active' : undefined}
              >
                {service.shortTitle}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
