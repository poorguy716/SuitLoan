// JavaScript Document
	$(function(){
		$('.common li').mouseover(function(){
			//确立自身   排除兄弟
			$(this).addClass('current').siblings('li').removeClass('current');
			//通过当前li下的编号，找对应的dl这组中那个
			var index = $(this).index();
			//找到dl中对应的那一个，排他   确立自身   排除兄弟
			/*$('dl:eq('+index+')').addClass('current').siblings('dl').removeClass('current');*/
			$('.explain-box').eq(index).addClass('current').siblings('.explain-box').removeClass('current');
			
		});
	})