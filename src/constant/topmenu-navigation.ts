interface TopMenuNavigation {
  title: string
  url: string
  hash: string
}

export const topMenuNavigation: TopMenuNavigation[] = [
  {
    title: 'Nosotros',
    url: '/',
    hash: '#about'
  },
  {
    title: 'Servicios',
    url: '/services',
    hash: ''
  },
  {
    title: 'Proyectos',
    url: '/projects',
    hash: '#projects'
  },
  {
    title: 'Equipo',
    url: '/team',
    hash: '#team'
  },
  {
    title: 'Paquetes',
    url: '/packages',
    hash: '#packages'
  },
  {
    title: 'Contacto',
    url: '/contact',
    hash: '#contact'
  }
]
