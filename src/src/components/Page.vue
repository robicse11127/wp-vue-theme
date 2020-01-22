<template>
    <div>
        <div v-for="page in pages" :key="page.id">
            <h2>{{ page.title.rendered }}</h2>
            <div v-html="page.content.rendered"></div>
        </div>
    </div>
</template>

<script>
    import config from '../config';
    import axios from 'axios';

    export default {
        name: 'Page',
        data: function() {
            return {
                pages: []
            }
        },
        mounted: function() {
            this.fetchPage();
        },
        methods: {
            fetchPage: function() {
                axios.get( config.app_url + '/wp-json/wp/v2/pages', {
                    params: {
                        slug: this.$route.params.slug
                    }
                })
                .then( (res) => {
                    this.pages = res.data
                    console.log(res.data)
                })
                .catch( (e) => {

                })
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>