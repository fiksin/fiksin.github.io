<template>
  <Layout>
    <h3 class="font-extrabold text-xl">about me</h3>

    <section class="flex-container">
        <div class="left-half">
            <p class="py-2">I'm a graduate student at MIT pursuing a Masters in Engineering in computer science. I did my undergraduate studies at MIT and graduated in May 2020 with a major in computer science and a minor in music.
            <br><br>
            In my free time, I play vibraphone in the MIT Festival Jazz Ensemble. I also produce and host a radio show on WMBR (88.1 FM) called Bass Case (airs Saturdays at 12PM Eastern), and I work as one of two program directors for the station. You can find the playlists for every show I've produced <a class="text" href="https://www.track-blaster.com/wmbr/index.php?program=342">here</a>.
            </p>
        </div>

        <div class="right-half">
            <g-image src="~/fiksin.png" width="250%"></g-image>
        </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'about me'
  }
}
</script>

<style>
    .flex-container {
        display: flex;
        text-align: left;
    }

    .left-half {
        margin: 0;
    }

    .right-half {
        padding-left: 1rem;
        right: 0px;
    }

    .text {
        color: #900c3f;
        /*font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;*/
    }
</style>