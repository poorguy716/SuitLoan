// JavaScript Document
	$(function() {
		//定义一个数组，然后填充到每一个input中
        var arr = [ '用户名','手机号码','密码','确认密码','验证码' ];
        $('.one input').each(function(index, el) {
        	//$(el).attr('value','值')
        	$(el).val( arr[index] );
        });
		//鼠标获取光标
		$('.one input').focus(function(event) {
			
			//需要拿当前input中的val值和之前的默认内容进行对比
			var index = $(this).index('.t');
			if( $(this).val() == arr[index] ){
				$(this).val('');
				$(this).css('color','#333');
			}
			//alert($(this).attr('type'));
			//$(this).attr({'type':'password'});
		}).blur(function(event) {
			var index = $(this).index('.t');
			$(this).css('color','#999');
			//如果当前的内容为空，那么把之前的默认内容放回去
			if($(this).val() == ''){
				$(this).val( arr[index] );
			}
		});
		//通过当前input中自带的编号，找到相应arr中值
		
		//失去光标
		$('.one input').css(function(){
			
			});
	});