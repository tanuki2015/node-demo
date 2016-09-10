<?php get_header(); ?>
      <!-- header end -->
      <div class="jumbotron text-center">
          <h1>Hello, world!</h1>

          <p>A productive web framework that
            <br>
            does not compromise speed and maintainability.</p>

          <p><a class="btn btn-info btn-lg button-radius button-title" href="#" role="button">Build APIs, HTML 5 apps & more
            <br>
            <span class="button-teaser">See our guides</span>
          </a>
          </p>
      </div>

      </div>
      </div>
      <!--巨幕end -->

      <div class="container" id="pagebody">
        <div class="panel panel-info">
          <div class="panel-heading">标志Logo</div>
          <div class="panel-body">
            <div class="row">
              <?php
                $args = array(
                  'numberposts' => 3,
                  'category' => '2',
                  'orderby' => 'post_date'
                );
                $rand_posts = get_posts( $args );
                ?>
                <?php
                foreach ( $rand_posts as $post ) {
                    setup_postdata( $post );
              ?>

              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="<?php the_post_thumbnail(array(300,300)); ?>
                  <!-- 这上面img的结束标签，因为wordpress缩略图的原因，直接显示在页面上了，删除后居然能行 -->
                  <div class="caption text-center">
                    <h5> <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h5>
                    <p>帕拉伊巴珠宝集团（北京）设计时间：2012年</p>
                  </div>
                </div>
              </div>
                  <?php } wp_reset_postdata(); ?>
            </div>
          </div>
        </div>

        <div class="panel panel-info">
          <div class="panel-heading">企业形象VIS</div>
          <div class="panel-body">
            <div class="row">
              <?php
                $args = array(
                  'numberposts' => 3,
                  'category' => '3',
                  'orderby' => 'post_date'
                );
                $rand_posts = get_posts( $args );
                ?>
                <?php
                foreach ( $rand_posts as $post ) {
                    setup_postdata( $post );
              ?>

              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="<?php the_post_thumbnail(array(300,300)); ?>
                  <!-- 这上面img的结束标签，因为wordpress缩略图的原因，直接显示在页面上了，删除后居然能行 -->
                  <div class="caption text-center">
                    <h5> <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h5>
                    <!-- <p><?php get_the_excerpt(); ?></p> 摘要拿不到-->
                  </div>
                </div>
              </div>
                  <?php } wp_reset_postdata(); ?>
            </div>
          </div>
        </div>

        <div class="panel panel-info">
          <div class="panel-heading">包装</div>
          <div class="panel-body">
            <div class="row">
              <?php
                $args = array(
                  'numberposts' => 3,
                  'category' => '4',
                  'orderby' => 'post_date'
                );
                $rand_posts = get_posts( $args );
                ?>
                <?php
                foreach ( $rand_posts as $post ) {
                    setup_postdata( $post );
              ?>

              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="<?php the_post_thumbnail(array(300,300)); ?>
                  <!-- 这上面img的结束标签，因为wordpress缩略图的原因，直接显示在页面上了，删除后居然能行 -->
                  <div class="caption text-center">
                    <h5> <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h5>
                    <!-- <p>帕拉伊巴珠宝集团（北京）设计时间：2012年</p> -->
                  </div>
                </div>
              </div>
                  <?php } wp_reset_postdata(); ?>
            </div>
          </div>
        </div>


      </div>
      <!-- pagebody end -->

<?php get_footer(); ?>
