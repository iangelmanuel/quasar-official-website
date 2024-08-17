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
    title: 'Paquetes',
    url: '/packages',
    hash: '#packages'
  }
]
