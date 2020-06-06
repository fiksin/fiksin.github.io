<template>
	<Layout>

	<div v-for="edge in $page.docs.edges" :key='edge.node.id'>
		<g-link :to="edge.node.path"> {{ edge.node.title }} </g-link>
	</div>

	</Layout>
</template>

<script>
    export default {
      metaInfo: {
        title: 'pagelist'
      }
    }
</script>

<page-query>
query MarkdownProject {
	docs:allMarkdownProject {
		edges {
			node {
				id
				path
				title
			}
		}
	}
}
</page-query>