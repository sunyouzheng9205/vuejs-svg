export default [
  {
    path: '/',
    component: () => import('@/layout/Layout'),
    children: [
      {
        path: '',
        name: 'svg_list',
        component: () => import('@/pages/SvgList')
      }
    ]
  }
]
