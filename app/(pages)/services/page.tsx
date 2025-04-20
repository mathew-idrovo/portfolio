import { ServiceCard } from '@/app/components/Service-Card'

export default function ServicesPage() {
  const services = [
    {
      title: 'Desarrollo Frontend',
      description:
        'Creación de interfaces de usuario modernas, responsivas y optimizadas utilizando React y Next.js.',
      icon: 'Layout',
      href: '/services/frontend-development',
    },
    {
      title: 'Desarrollo React/Next.js',
      description:
        'Implementación de aplicaciones web con React y Next.js, aprovechando las últimas características y mejores prácticas.',
      icon: 'Code',
      href: '/services/react-nextjs',
    },
    {
      title: 'Optimización Web',
      description:
        'Mejora del rendimiento, velocidad de carga y experiencia de usuario de sitios web existentes.',
      icon: 'Zap',
      href: '/services/web-optimization',
    },
    {
      title: 'Diseño Responsivo',
      description:
        'Diseño y desarrollo de interfaces que funcionan perfectamente en todos los dispositivos y tamaños de pantalla.',
      icon: 'Smartphone',
      href: '/services/responsive-design',
    },
    {
      title: 'Desarrollo WordPress',
      description:
        'Creación y personalización de sitios WordPress con temas personalizados y optimización de rendimiento.',
      icon: 'Globe',
      href: '/services/wordpress-development',
    },
    {
      title: 'Pruebas Automatizadas',
      description:
        'Implementación de pruebas automatizadas con Playwright para garantizar la calidad y estabilidad del código.',
      icon: 'CheckCircle',
      href: '/services/automated-testing',
    },
  ]

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Mis <span className="text-cyan-600">Servicios</span>
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Ofrezco una amplia gama de servicios de desarrollo frontend, cada
            uno entregado con el mismo compromiso inquebrantable con la
            excelencia y la atención al detalle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
