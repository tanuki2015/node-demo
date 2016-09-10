<?php get_header(); ?>
<div class="container text-center">
	<div id="page-box">
		<div class="post-item _404">
			<div class="post-content">您当前访问的页面不存在！<span id="jump">10</span> 秒后返回首页，或<a href="<?php bloginfo('url'); ?>">直接返回</a></div>
		</div>
	</div>
</div>
<?php get_footer(); ?>
<script>
  function countDown(secs){
  	$("#jump").html(secs);
  	if(--secs>0){ setTimeout( "countDown(" + secs + ")",1000 ); }
  	else{window.location.href="<?php bloginfo('url'); ?>"; }
  }
  countDown(6);
</script>
