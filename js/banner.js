// JavaScript Document
$(function(){
	var windowWidth=$(window).width();
	$('.banner ul li').width(windowWidth);
	$('.banner ol li').click(function(){
		$(this).addClass('current').siblings('li').removeClass('current');
		var index=$(this).index();
		num=index;
		$('.banner ul').stop().animate({left:-index*windowWidth},500);
		});
	function autoPlay(){
		num++;
		if(num>1){
			num=0;
			}
		$('.banner ol li').eq(num).addClass('current').siblings('li').removeClass('current');
		$('.banner ul').stop().animate({left:-num*windowWidth},500);
		}
		function prevPlay(){
			num--;
			if(num<0){
				num=3;
				}
			$('.banner ol li').eq(num).addClass('current').siblings('li').removeClass('current');
			$('.banner ul').stop().animate({left:num*windowWidth},500);
			}
			var timer=null;
			var num=0;
			timer=setInterval(autoPlay,3000);
			//鼠标经过暂停
			$('.banner').hover(function(){
				clearInterval(timer);
				},function(){
					clearInterval(timer);
					timer=setInterval(autoPlay,3000);
					});
					//左右点击控制
					$('.banner .right').click(function(){
						autoPlay()
						});
					$('.banner .left').click(function(){
						prevPlay()
						});
	});