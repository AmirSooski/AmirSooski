<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>صفحه فرود دریافت شده از وب روبیک</title>
	<!-- Custom stylesheet -->
	<link type="text/css" rel="stylesheet" href="css/bootstrap.css" />
	<link type="text/css" rel="stylesheet" href="css/style.css" />
	<link type="text/css" rel="stylesheet" href="css/animate.css" />
</head>

<body>
	<header>
		<div class="container">
			<img src="pics/logo.png" class="logo"/></div>
	</header>
	<div class="jumbotron">
		<div id="black"></div>
		<div style="" class="animated fadeInDown">
			<div class="container">
				<div class="col-md-12">
					<h1>دریافت صفحه فرود کاربردی<br class="visible-lg"/> از سایت وب روبیک</h1>
					<hr style="width:25%;text-align:left;margin:30px 0; border:2.5px solid #fff;"/>
				</div>
				<div class="col-md-8">
					<h2 class="subtitle">روزانه از فایل های جدید در فرمت های گرافیک، سورس و آموزش بهره مند شوید و به سادگی از طریق آثار خود کسب درآمد کنید.</h2>
				</div>
			</div>
		</div>
	</div>

	<div class="container" id="main-wrapper">
		<div class="col-md-7 main-content">
			<h3></h3>
			<p>اگر شما هم در زمینه طراحی وب فعالیت دارید، با عضویت در وب روبیک می توانید از خدمات فوق العاده سایت استفاده کنید:</p>
			<div class="white-box">
				<ul>
					<li><p class="">روزانه فایل های جدید و بروز گرافیکی و سورس وب را دریافت کرده و در طرح گرافیکی یا پروژه های برنامه نویسی خود استفاده کنید.</p></li>
					<li><p class="">گالری خود را به صورت رایگان ایجاد کنید و با اشتراک گذاری آثار خود، کسب درآمد کنید.</p></li>
					<li><p class="">با دریافت فایل های آموزشی همراه با گرافیک یا سورس وب، به سادگی مهارت های طراحی وب خود را تقویت کنید و روز به روز پیشرفت کنید.</p></li>
				</ul>
			</div><!-- /. End White Box 0-->
		</div>
		<div class="col-md-4 col-md-offset-1">
			<div class="form-container">
				<h4>همین حالا با تکمیل فرم زیر، فایل مورد نظر را دریافت کنید!</h4>
				<form  method="post" name="frmContentDownload">
					<div><label for="FirstName1">نام</label><input class="form-control" name="FirstName1" type="text" value="" /></div>
					<div><label for="LastName1">نام خانوادگی</label><input class="form-control" name="LastName1" type="text" value="" /></div>
					<div><label for="emailAddress">پست الکترونیک</label><input class="form-control" name="emailAddress" type="text" value="" /></div>
					<div><label for="Company1">نام شرکت</label><input class="form-control" name="Company1" type="text" value="" /></div>
					<div><label for="Title1">عنوان فعالیت</label><input class="form-control" name="Title1" type="text" value="" /></div>
					<div><input class="btn btn-primary btn-lg btn-block" type="submit" value="دریافت فایل" /></div>
				</form>
			</div>
		</div>
	</div>
	<footer>
		<div class="container">کلیه حقوق مادی و معنوی این وب سایت برای وب روبیک محفوظ است.</div>
	</footer>
	<script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script>
		$('.form-container label').each(function(){
			var getTitle = $(this).html();
			$(this).parent().find('input').attr('placeholder', getTitle)
		});
	</script>
</body><!-- This templates was downloaded from (https://webrubik.com) -->

</html>
