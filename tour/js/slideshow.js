/* -------------------------------------------
	MELLOWDOWN.NET
	http://www.mellowdown.net
------------------------------------------- */

var fadeTime = 700;
var delayTime = 5000;
var autoFlg = true;
var naviFlg = true;
var currentNo = 0;
var oldNo = 0;
var imageLength;
var tid;
	
$(function()
{
	imageLength = $("#slide ul > li").size();
	
	if (imageLength < 2) return;
	
	$("ul#list li").hide();
	$("ul#list li:eq(0)").fadeIn(1000);

	if (naviFlg)
	{
		$("#slide ul#list").after("<ul id=\"navi\"></ul>");
		for (i = 0; i < imageLength; i++)
		{
			$("ul#navi").append("<li id=\"imageNo_" + i + "\"><a href=\"javascript:void(0);\">" + eval(i + 1) + "</a></li>");
		}
		$("ul#navi li a:eq(" + currentNo + ")").addClass("current");
		
		$("ul#navi li").click(function()
		{
			var targetNo = $(this).attr("id").replace("imageNo_", "");
			if (targetNo != currentNo)
			{
				oldNo = currentNo;
				currentNo = targetNo;
				changeImage();
				if (autoFlg)
				{
					clearInterval(tid);
					tid = setInterval("setNo()",delayTime);
				}
			}
		});
	}
	if (autoFlg) tid = setInterval("setNo()",delayTime);
});

function setNo()
{
	oldNo = currentNo;
	currentNo++;
	if (currentNo >= imageLength)
	{
		currentNo = 0;
	}
	changeImage();
}
	
function changeImage()
{		
	$("ul#list li:eq(" + oldNo + ")").fadeOut(fadeTime);
	$("ul#list li:eq(" + currentNo + ")").fadeIn(fadeTime);
	
	if (naviFlg)
	{
		$("ul#navi li a:eq(" + oldNo + ")").removeClass("current");
		$("ul#navi li a:eq(" + currentNo + ")").addClass("current");
	}
}