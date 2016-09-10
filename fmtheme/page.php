<?php get_header(); ?>
<div class="container text-center">
	<div id="page-box">
		<?
			the_post();
		?>
		<div class="post-item">
			<div class="post-title"><h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a><h2></div>
			<div class="post-meta">
				<?php echo __( 'time', 'xf' ); ?>：<?php the_time( 'Y-m-d' ); ?>
			</div>
			<div class="post-content"><?php the_content(); ?></div>
		</div>
	</div>
</div>
<?php get_footer(); ?>
