<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="description" content="傅敏设计"/>
    <meta name="keywords"
          content="傅敏,设计,武汉VI设计,CI设计,标志设计,商标设计,企业形象设计,品牌形象设计,平面广告设计,海报设计,网站设计,logo,标志,LOGO,企业形象,VIS,包装,画册,海报,摄影,网站,"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <?php
      if( is_home() ){ $title = get_bloginfo('name'); }
      else{ $title = wp_title( '', false ); }
      if( $paged > 0 ){ $title .= "-第" . $paged . "页"; }
    ?>
    <title><?php echo $title; ?> </title>
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
  </head>
  <body>
    <div class="wrapper">
      <div class="header">
        <div class="container">
            <nav class="navbar navbar-default">
                <nav class="container-fluid">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="<?php bloginfo('url'); ?>">傅敏设计</a>
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav" id="nav-btn">
                            <li><a href="<?php bloginfo('url'); ?>">首页<span class="sr-only">(current)</span></a></li>
                            <li><a href="<?php bloginfo('url'); ?>/category/logo/">标志 LOGO</a></li>
                            <li><a href="<?php bloginfo('url'); ?>/category/vis/">企业形象 VIS</a></li>
                            <li><a href="<?php bloginfo('url'); ?>/category/package/">包装</a></li>
                            <li><a href="<?php bloginfo('url'); ?>/category/painting/">画册</a></li>
                            <li><a href="<?php bloginfo('url'); ?>/category/newspaper/">海报</a></li>
                            <li><a href="<?php bloginfo('url'); ?>/contract/">联络</a></li>
                            <li><a href="<?php bloginfo('url'); ?>/aboutme/">关于傅敏</a></li>
                        </ul>
                        <form class="navbar-form navbar-right hidden-xs" role="search" action="http://localhost/wordpress/" method="get">
                            <div class="form-group">
                                <input name="s" value="<?php the_search_query(); ?>" type="search" id="inputBox" class="form-control" placeholder="Search">
                                <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                            </div>
                        </form>
                    </div>
                    <!-- /.navbar-collapse -->
                </nav>
            </nav>
