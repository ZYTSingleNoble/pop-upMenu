var popMenu = function(elemet, data) {
	this.isOpen = false; //当前是否展开
	var position = {
		bottom: 1,
		right: 1
	}
	var size = {
		width: 4,
		height: 4
	}
	var btn_title = "菜单";
	var menu_list = [{
		title: "item1",
		data:{}

	},{
		title: "item",

	}]
	if (data!=null) {
		if (data.hasOwnProperty("position")&&data.position instanceof Object) {
			position = data.position
		}
		if (data.hasOwnProperty("size")) {
			size = data.size
		}
		if (data.hasOwnProperty("title")) {
			btn_title = data.title
		}
		if (data.hasOwnProperty("menu")) {
			menu_list = data.menu
		}
	}
	
	var content = $(elemet);
	if(content != null) {
		var positonStyle = position.hasOwnProperty('top')?"top:"+position.top+"rem;":"bottom:"+position.bottom+"rem;";
		positonStyle+= position.hasOwnProperty('right')?"right:"+position.right+"rem;":"left:"+position.left+"rem";
		
		var html = '<div class="pop-up-menu-content"><button><span>'+btn_title+'</span></button>';
		html+='<ul>';
		for(let i=0;i<menu_list.length;i++){
			html+='<li data-index="'+i+'"><a href="javascript:void(0)">'+menu_list[i].title+'</a></li>';
		}
		html+='</ul></div>';
		content.html(html);
		content.find(".pop-up-menu-content").attr("style","width: "+size.width+"rem;height:"+size.height+"rem;"+positonStyle)
	}

	content.find("button").on("click", function() {
		if(this.isOpen) {
			content.find("button").removeAttr("style")
			content.find("li").forEach(function(li, index) {
				$(li).removeAttr("style")
			})
		} else {
			content.find("button").attr("style", "transform: scale(0.9,0.9);")
			content.find("li").forEach(function(li, index) {
				$(li).attr("style", "line-height:"+size.height+"rem;transform: translateY(-" + (size.height+0.5) * (index + 1) + "rem) scale(0.8,0.8);")
			})
		}
		this.isOpen = !this.isOpen
	})
	
	content.find("li").on("click",function () {
		if (data.hasOwnProperty("callback")&&data.callback instanceof Function) {
			var index = Number.parseInt($(this).attr("data-index"));
			data.callback(index,menu_list[index].data)
		}
	})
}