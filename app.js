function asTabs(node){
	var tabs = [];
	node.forEach(function(node,i){
	for(var i = 0; i < node.childNodes.length; i++){
		var child = node.childNodes[i];
		if(child.nodeType == document.ELEMENT_NODE)
			tabs.push(child);
	}
	});


	var tabList = document.createElement("div");
	tabs.forEach(function(tab,i){
		var button = document.createElement("button");
		button.textContent = tab.getAttribute("data-tabname");
		button.addEventListener("click", function(){ selectTab(i)});
		tabList.appendChild(button);
	});

	node.forEach(function(node,i){
		node.insertBefore(tabList, node.firstChild);
	});

	function selectTab(n){
		tabs.forEach(function(tab, i){
			if(i == n)
				tab.style.display = "";
			else
				tab.style.display = "none";
		});

		for(var i = 0; i < tabList.childNodes.length; i++){
			if(i == n)
				tabList.childNodes[i].style.background = "violet";
			else
				tabList.childNodes[i].style.background = "";
		}
	}

	selectTab(1);
}

function addTabToContent(node){
	var tabs = [];
	node.forEach(function(node, i){
		var childTabs = [];
		for(var i = 0; i < node.childNodes.length; i++){
			var child = node.childNodes[i];
			if(child.nodeType == document.ELEMENT_NODE)
				childTabs.push(child);
		}
		tabs.push(childTabs);
	});
	
	var tabList = [];
	tabs.forEach(function(tab,i){
		tabContentList = document.createElement("div");
		tab.forEach(function(tab, i){
			var button = document.createElement("button");
			button.textContent = tab.getAttribute("data-tabname");
			button.addEventListener("click", function(){selectTab(i)});
			tabContentList.appendChild(button);
		});
		tabList.push(tabContentList);
			function selectTab(n){
				tab.forEach(function(tab, i){
				if(n == i)
					tab.style.display = "";
				else
					tab.style.display = "none";
				});
			}

			selectTab(0);
	});

	node.forEach(function(node,i){
		node.insertBefore(tabList[i], node.firstChild);
	});
}
addTabToContent(document.querySelectorAll(".contentWrapper"));
asTabs(document.querySelectorAll(".contentWrapperOutter"));


