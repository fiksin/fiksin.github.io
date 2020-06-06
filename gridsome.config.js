// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteUrl: 'https://fiksin.github.io',

  plugins: [
  	// {
		// use: 'gridsome-plugin-tailwindcss',
		/* These are the default options. You don't need to set any options to get going.
		options: {
		tailwindConfig: './some/file/js',
		purgeConfig: {},
		presetEnvConfig: {},
		shouldPurge: true,
		shouldImport: true,
		shouldTimeTravel: true
		}
		*/
  	// },

    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'MarkdownProject',
        baseDir: './src/content/projects',
        pathPrefix: '/projectlist', //website.com/projects/introduction/
        template: './src/templates/MarkdownProject.vue',
        plugins: [
          'remark-attr'
        ],
        refs: {
          tags: 'Tag'
        }
      }
    },

    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Tag',
        baseDir: './src/tags',
        pathPrefix: '/tags', //website.com/projects/introduction/
        template: './src/templates/Tag.vue'
      }
    }

  	// {
  	// 	use: '@gridsome/source-filesystem',
  	// 	options: {
  	// 		typeName: 'Project',
  	// 		path: './content/blog/*.json'
  	// 	}
  	// }
  ]
}
