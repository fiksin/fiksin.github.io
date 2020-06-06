<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <Navigation />
    </header>
    this is the focus layout :0
    <slot/>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  import Navigation from '../components/Navigation'
  export default {
  	// props: {
  	// 	color: {
  	// 		required: false,
  	// 		default: 'black'
  	// 	}
  	// },

    components: {
      'Navigation': Navigation
    }
  }
</script>