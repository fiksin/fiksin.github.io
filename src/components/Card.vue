<template>
	<div class="card">
		{{ message }}
		<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded" @click="onClick">
			change
		</button>
	</div>
</template>

<script>
export default {
	name: 'Card',
	data () {
		return {
			message: "change meee !!",
			status: true
		}
	},
	methods: {
		onClick () {
			this.status = !this.status
			if (this.status) { 
				this.message = "change meee !!"
			} else {
				this.message = "here u go :~)"
			}
		}
	}
}
</script>

<style>
.card {
	padding: 5px;
	background: #FFF;
}
</style>