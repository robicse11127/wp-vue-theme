<template>
    <div>
        <div v-for="post in posts" :key="post.id">
            <h2><router-link :to="'/wp-react/'+post.slug">{{ post.title.rendered }}</router-link></h2>
            <p v-html="post.excerpt.rendered"></p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Posts',
        data: function() {
            return {
                posts: []
            }
        },
        mounted: function() {
            this.fetchPosts()
        },
        methods: {
            fetchPosts: function() {
                axios.get( 'http://localhost/wp-react/wp-json/wp/v2/posts', {
                    params: {
                        per_page: 20
                    }
                })
                .then( (res) => {
                    this.posts = res.data
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>