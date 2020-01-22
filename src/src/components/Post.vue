<template>
    <div>
        <div v-for="post in posts" :key="post.id">
            <h2>{{ post.title.rendered }}</h2>
            <p v-html="post.content.rendered"></p>
        </div>
        
    </div>
</template>

<script>
    import config from '../config';
    import axios from 'axios';
    export default {
        name: 'Post',
        data: function() {
            return {
                posts: []
            }
        }, 
        mounted: function() {
            this.fetchPost()
        },
        methods: {
            fetchPost: function() {
                axios.get( config.app_url + '/wp-json/wp/v2/posts', {
                    params: {
                        slug: this.$route.params.slug
                    },
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