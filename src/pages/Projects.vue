<template>
  <Layout>
    <h3 class="font-extrabold text-xl">projects</h3>
    <p class="py-2">current work:
    	<ul class="list-disc list-inside">
    	   <li><g-link class="links" to="/projectlist/spotify-lately">spotify lately</g-link>, a personal project exploring my listening habits and history (Python)</li>
            <li>a software engineering internship @ Apple, Apple Music Team, summer 2020</li>
        </ul>
    </p>

    <p class="py-2">previous internships/research:
    	<ul class="list-disc list-inside">
    		<li>hardware integration with Logic Pro X (Objective-C, C++) @ Apple, Music Apps Team, summer 2019</li>
            
            <li>third-party software integration with GarageBand iOS (Objective-C )@ Apple, Music Apps Team, summer 2019</li>
            
            <li>internal tools for content creation (Python) @ Apple, Music Apps Team, summer 2019</li>
            
            <li>a virtual reality application and integrated web application for tablets to test collaboration between users inside and outside of VR (Unity, HTML/CSS, JavaScript, C#) @ MIT Media Lab, Fluid Interfaces, summer 2018</li>

            <li>full-stack development of ConcertCue, a mobile web app for interactive concert programs (Python, JavaScript) @ MIT Music Technology Lab, summer 2017 - spring 2018</li>

    	</ul>
    </p>

    <p class="py-2">coursework:
        <ul class="list-disc list-inside">
            <li><g-link class="links" to="/projectlist/subreddits">examining subreddit connectivity and sentiment</g-link> (Python), 18.065 (Matrix Methods in Data Analysis, Signal Processing, and Machine Learning)

            <li>identifying indicators of musical artist popularity (Python, JavaScript), 6.S080 (Data Science)</li>
            
            <li><g-link class="links" to="/projectlist/peppa">peppa and friends</g-link>, a peppa pig-themed video game that teaches musical dictation (Python), 6.809 (Interactive Music Systems)</li>
            
            <li>painterly renderings of photographs (Python), 6.815 (Computational Photography)</li>
            
            <li>a digital tour guide for visitors to MIT (Python, C++, Teensy), 6.S08 (Interconnected Embedded Systems)</li>
        </ul>
    </p>

    <p class="py-2">side projects:
        <ul class="list-disc list-inside">
            <li>scripts to create show priority orders for meetings of the WMBR programming board (Python), fall 2018-fall 2019</li>

            <li><g-link class="links" to="/projectlist/biblios">Biblios</g-link>, a social network for book-lending (JavaScript, HTML/CSS), spring 2017</li>
        </ul>        
    </p>

    <p class="py-2">future work:
        <ul class="list-disc list-inside">
            <li>refactoring and expanding <g-link class="links" to="/projectlist/spotify-lately">spotify lately</g-link> (Python)</li>
        </ul>
    </p>

  </Layout>
</template>

<script>
    export default {
      metaInfo: {
        title: 'projects'
      }
    }
</script>

<style>
    .links {
        color: #900c3f;
        font-style: italic;
    }
</style>
