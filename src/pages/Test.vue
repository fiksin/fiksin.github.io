<template>
    <Layout>
        <h1 class="font-extrabold text-xl">this is the test zone</h1>

        <ul>
            <li v-for="proj in currentProj">
            {{ proj.title + ": " + proj.description }}
            </li>
            <!-- <li v-for="proj in projs" :key="proj.title">{{ proj.title + " - " + proj.date}} </li> -->
        </ul>

        <Card />
        <Card />
        <Card />
    </Layout>
</template>

<script>
import Card from '~/components/Card.vue'
import projs from '@/content/projs.json'

export default {
    metaInfo: {
        title: 'test'
    },
    components: {
        Card
    },
    data () {
        return {
            projs
        }
    },
    computed: {
        currentProj () {
            return this.projs
            .filter((projs) => {
                return projs.status.match("in progress")
            })
        },
        completedProj () {
            return this.projs
            .filter((projs) => {
                return projs.status.match("complete")
            })
        }
    }
}
</script>

<page-query>
query {
  posts: allProject {
    edges {
      node {
        title
        date
        description
        status
      }
    }
  }
}
</page-query>