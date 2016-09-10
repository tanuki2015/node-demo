<?php get_header(); ?>

<div class="container text-center" id="home-loop">
  <?
    if( have_posts() ){
      while( have_posts() ){
        the_post();
        ?>
        <div class="post-item">
          <!-- <div class="post-content"><?php the_content(); ?></div> -->
          <div class="post-title"><h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a><h2></div>
          <?php the_post_thumbnail(array(300,300)); ?>
        </div>
        <?
      }
    }else{
      echo '没有日志可以显示';
    }
  ?>
</div>

<?php get_footer(); ?>
