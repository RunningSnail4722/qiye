window.onload=function(){
			var Lis=document.getElementsByClassName("p");
			for (i=0;i<Lis.length;i++) {
				Lis[i].onmousemove=function(){
					this.className="lihover";
				}
				Lis[i].onmouseout=function () {
					this.className="";
				}
			}
			
			
			var c_banner=document.getElementById("c_banner");
			var List=document.getElementById("List");
			var buttons=document.getElementById("buttons").getElementsByTagName("span");
			var prev=document.getElementById("prev");
			var next=document.getElementById("next");
			var index=1;
			var animated=false;
			var timer;
			
			function showButton(){
				for (var i=0;i<buttons.length;i++) {
					if (buttons[i].className=="on") {
						buttons[i].className="";
						break;
					}
				}
				buttons[index - 1].className = "on";
			}
			
			function animate(offset){
				animated=true;
				var newLeft=parseInt(List.style.left)+offset;
				var time= 600;
				var intervel=10;
				var speed=offset/(time/intervel);
				
				function go(){
					if((speed<0&&parseInt(List.style.left)>newLeft)||(speed>0&&parseInt(List.style.left)<newLeft)){
						List.style.left=parseInt(List.style.left)+speed+'px';
						setTimeout(go,intervel);
					}
					else{
						animated=false;
						List.style.left=newLeft+"px";
						if(newLeft>-1349){
							List.style.left=-6745+"px";
						}
						if(newLeft<-6745){
							List.style.left=-1349+"px";
						}
					}
				}
				go();
			}
			
			function play(){
				timer=setInterval(function(){
					next.onclick();
				},3000);
			}
			
			function stop(){
				clearInterval(timer);
			}
			
			next.onclick=function(){
				if (index==5) {
					index=1;
				}
				else{
					index +=1;
				}
				showButton();
				if(!animated){
					animate(-1349);
				}
			}
			prev.onclick=function(){
				if (index==1) {
					index=5;
				}
				else{
					index -=1;
				}
				showButton();
				if(!animated){
					animate(1349);
				}
			}
			
			for (var i=0;i<buttons.length;i++) {
				buttons[i].onclick=function(){
					if (this.className=="on") {
						return;
					}
					var myIndex=parseInt(this.getAttribute("index"));
					var offset=-1349*(myIndex-index);
					index=myIndex;
					showButton();
					if(!animated){
						animate(offset);
					}
				}
			}
			c_banner.onmouseover=stop;
			c_banner.onmouseout=play;
			
			play();
			
			var cp=document.getElementById("b");
			var zhuanti=document.getElementById("zhuanti");
			var meiti=document.getElementById("meiti");
			var shiping=document.getElementById("shiping");
			var tupian=document.getElementById("tupian");
			
			cp.onclick= function()
			{
			var xmlhttp;
			if (window.XMLHttpRequest)
			{// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
			}
			else
			{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange=function()
			{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			    {
			    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
			    }
			}
			xmlhttp.open("GET","html/index1.html",true);
			xmlhttp.send();
			cp.style.background="#FF5809";
			cp.style.color="#FFFFFF";
			document.getElementById("a").style.background="#FFFFFF";
			document.getElementById("c").style.color="#000000";
			}
			meiti.onclick= function()
			{
			var xmlhttp;
			if (window.XMLHttpRequest)
			{// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
			}
			else
			{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange=function()
			{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			    {
			    document.getElementById("z_c").innerHTML=xmlhttp.responseText;
			    }
			}
			xmlhttp.open("GET","html/meiti.html",true);
			xmlhttp.send();
			meiti.style.color="#bc2826";
			zhuanti.style.color="#888888";
			}
			zhuanti.onclick= function()
			{
			var xmlhttp;
			if (window.XMLHttpRequest)
			{// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
			}
			else
			{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange=function()
			{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			    {
			    document.getElementById("z_c").innerHTML=xmlhttp.responseText;
			    }
			}
			xmlhttp.open("GET","html/zhuanti.html",true);
			xmlhttp.send();
			meiti.style.color="#888888";
			zhuanti.style.color="#bc2826";
			}
			tupian.onclick= function()
			{
			var xmlhttp;
			if (window.XMLHttpRequest)
			{// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
			}
			else
			{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange=function()
			{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			    {
			    document.getElementById("p_c").innerHTML=xmlhttp.responseText;
			    }
			}
			xmlhttp.open("GET","html/tupian.html",true);
			xmlhttp.send();
			tupian.style.color="#bc2826";
			shiping.style.color="#888888";
			}
			shiping.onclick= function()
			{
			var xmlhttp;
			if (window.XMLHttpRequest)
			{// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
			}
			else
			{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange=function()
			{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			    {
			    document.getElementById("p_c").innerHTML=xmlhttp.responseText;
			    }
			}
			xmlhttp.open("GET","html/shiping.html",true);
			xmlhttp.send();
			tupian.style.color="#888888";
			shiping.style.color="#bc2826";
			}
			
			$(window).scroll(function(){
    			var top=$(document).scrollTop();
    			if(top>150){
    				$("#li").css("display","block");
    			}
    			else{
    				$("#li").css("display","none");
    			}
    		})
			 
}
