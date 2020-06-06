<template>
    
    <div>
        <!-- <h1 class="font-extrabold text-l"> {{ $page.markdownProject.title }} </h1> -->
<!--         <strong>Tags: </strong>
        <span v-for="tag in $page.markdownProject.tags" :key="tag.id">
            <g-link :to="tag.path"> {{ tag.id }} </g-link>
        </span> -->
        <VueRemarkContent />
<!--             <template v-slot:tags>
                <ul>
                    <li v-for="tag in $page.markdownProject.tags" :key="tag.id">
                        <g-link :to="tag.path">{{ tag.id }}</g-link>
                    </li>
                </ul>
            </template> -->
    </div>

</template>


<script>
    


</script>

<page-query>
query MarkdownProject($id: ID!) {
    markdownProject(id: $id) {
        title
        tags {
            id
            path
        }
    }
}
</page-query>