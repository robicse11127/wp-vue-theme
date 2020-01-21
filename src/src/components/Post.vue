<template>
    <div>
        <div v-for="post in posts" :key="post.id">
            <h2>{{ post.title.rendered }}</h2>
            <p v-html="post.content.rendered"></p>
        </div>
        
    </div>
</template>

<script>
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
                axios.get( 'http://localhost/wp-react/wp-json/wp/v2/posts', {
                    params: {
                        slug: 'dapibusnam-gordianorum-impleri-metus-domus-imitari-ap-quaeritando-ulla'
                    },
                })
                .then( (res) => {
                    this.posts = res.data
                    console.log(res)
                } )
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>