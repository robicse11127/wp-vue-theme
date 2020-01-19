var config = {
    api: {
        posts: "<?php echo esc_url_raw( rest_url( 'wp/v2/posts/' ) ); ?>"
    },
    nonce: "<?php echo wp_create_nonce( 'wp_rest' ); ?>"
};

var posts = Vue.component('post-list', {
    template: '#post-list-tmpl',
    data: function() {
        return{
            posts: []
        }
    },
    mounted: function () {
        this.getPosts();
    },
    methods: {
        getPosts: function () {
            var self = this;
            $.get( config.api.posts, function( r ){
                self.$set( self, 'posts', r );
            });

        },
    }
});

var post = Vue.component( 'post', {
    template: '#post-tmpl',
    data: function() {
        return{
            post: []
        }
    },
    mounted: function () {
        this.getPost();
    },
    methods: {
        getPost: function(){
           var self = this;
           $.get( config.api.posts +  self.$route.params.id, function(r){
               r.title = r.title.rendered;
               r.content = r.content.rendered;
               self.$set( self, 'post', r );
            });
        }
    }
});


var router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', template: '<div>Hi Roy.</div>' },
        { path: '/posts', name: 'posts', component: posts },
        { path: '/posts/:id', name: 'post', component: post },
    ]
});


new Vue({
    router,
}).$mount('#app')