
<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">
  <title>GTECH</title>


  <meta property="og:title" content="" />
  <meta property="og:description" content="" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image" content="" />
  <meta property="og:site_name" content="" />

  <meta property="fb:app_id" content="" />
  <meta name="twitter:card" content="">
  <meta name="twitter:site" content="">



<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="android-chrome-192x192.png">
<link rel="icon" type="image/png" sizes="16x16" href="android-chrome-192x192.png">
<link rel="manifest" href="site.webmanifest">
<link rel="mask-icon" href="safari-pinned-tab.svg" color="#1674bb">
<meta name="msapplication-TileColor" content="#1674bb">
<meta name="theme-color" content="#ffffff">


  <link rel="preload" href="https://use.typekit.net/lpv4chn.css" as="style">
  <link rel="preload" href="https://unpkg.com/flickity@2/dist/flickity.min.css" as="style">
  <link rel="stylesheet" href="https://unpkg.com/splitting/dist/splitting.css" />
  <link rel="stylesheet" href="https://unpkg.com/splitting/dist/splitting-cells.css" />

  <link rel="preconnect" href="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js">
  <link rel="preconnect" href="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollTrigger.min.js">
  <link rel="preconnect" href="https://cdnjs.cloudflare.com/ajax/libs/three.js/110/three.min.js">
  <link rel="preconnect" href="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js">

  <link rel="preload" href="assets/css/style.css" as="style">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>


  <link rel="preload" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
  <noscript><link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined&display=swap" rel="stylesheet" type="text/css"/></noscript>

  <link rel="stylesheet" href="https://use.typekit.net/lpv4chn.css">
  <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
  <link rel="stylesheet" href="assets/css/style.css?v=1.3">

</head>

<body >

<div id="app">

<div class="mainWrapper"  >



  <header>
    <div class="container">
      <div class="header-row row justify-content-between ">

        <div class="logo-wrap">
          <a class="logo d-block" href="index.php">
            <img src="assets/images/main-logo.png" alt="" class="imgload">
          </a>
        </div>

        <div class="nav-wrap dekstop-menu justify-content-center"  role="navigation">
          <?php include_once('includes/nav.php')?>
        </div>


        <div class="cta-search d-flex align-items-center justify-content-center">
            <a href="" class="btn btn-red"><div class="button__bg"></div><span class="btnText">Get in Touch</span></a>
            <button class="search-btn">
              <img src="assets/images/icon-search.svg" alt="" class="w-100">
            </button>
        </div>

        <div class="toggle-menu">
            <div class="bar"></div>
        </div>


      </div>
    </div>
  </header>
  <div class="mobile-menu " role="navigation">
    <div class="mobile-menu-wrapper">
        <div class="mobile-nav">
          <div class="mobile-menu-header d-flex align-items-center justify-content-between">
            <div class="mobile-logo">
              <img src="assets/images/main-logo.png" alt="" class="imgload w-100">
            </div>
            <button class="mobile-btn-back"><span class="b-icon material-icons-outlined ">arrow_back_ios</span></button>
            <span class="mobile-nav-current" data-navmobile-current=""></span>
            <div class="toggle-menu">
              <div class="bar"></div>
            </div>
          </div>
          <?php include "includes/nav.php" ?>
          <a href="" class="btn btn-red"><div class="button__bg"></div><span class="btnText">Get in Touch</span></a>

        </div>
    </div>
  </div>

  <div class="mainWrap">
