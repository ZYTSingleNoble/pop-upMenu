一个简单的向上弹出的菜单

一、导入必要的css文件 
	pop-up-menu.css

二、HTML部分
	<div id="menu"></div>
	
三、js部分
	在我的案例中用的zepto，也可以使用JQuery，这是必要的依赖
	导入pop-up.menu.js
	<script type="text/javascript">
		var pop = new popMenu("#menu", {
				position:{
					left:1,
					bottom:1
					//默认是右下角，单位rem
				},
				size:{
					width:4,
					height:4
					//默认大小，单位rem
				},
				title: "弹出菜单",
				menu:[
					{
						title:"item1",
						data:{
							//点击时回调的数据
						}
					},
					{
						title:"item2",
						data:{
							//点击时回调的数据
						}
					},
					{
						title:"item3",
						data:{
							//点击时回调的数据
						}
					}
				],
				
				callback: function(index, data) {
					//点击菜单回调
					console.log(index + data)
				}
			})
		</script>


