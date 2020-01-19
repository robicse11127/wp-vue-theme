<?php
get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
                <div id="app">
                    <p>
                        <router-link to="/">Home</router-link>
                        <router-link to="/posts">Posts</router-link>
                    </p>
                    <router-view></router-view>
                </div>

                <script type="text/html" id="post-list-tmpl">
                    <div id="posts">
                        <div v-for="post in posts">
                            <article v-bind:id="'post-' + post.id">
                                <header>
                                    <h2 class="post-title">
                                        {{post.title.rendered}}
                                    </h2>
                                </header>
                                <div class="entry-content" v-html="post.excerpt.rendered"></div>
                                <router-link :to="{ name: 'post', params: { id: post.id }}">
                                    Read More
                                </router-link>
                            </article>
                        </div>
                    </div>
                </script>

                <script type="text/html" id="post-tmpl">
                    <div class="post">

                        <article v-bind:id="'post-' + post.id">
                            <header>
                                <h2 class="post-title">
                                    {{post.title}}
                                </h2>
                            </header>
                            <div class="entry-content" v-html="post.content"></div>

                        </article>
                    </div>
                </script>

                <script>
                (function($){
                   



                })( jQuery );

            </script>


		</main><!-- .site-main -->
	</div><!-- .content-area -->

<?php get_footer(); ?>
