export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d4967b5ee70f1a171b811da',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-khc3w2x7',
                  apiId: '620e4e4f-b73e-405d-b320-dcaa80ee9601'
                },
                {
                  buildHookId: '5d4967b5613c0caf487d436d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-83a4918s',
                  apiId: '48dbc309-283c-4a25-b503-4d5e29faf5a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Giftsery/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-83a4918s.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
