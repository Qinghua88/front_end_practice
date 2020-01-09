// check off todos by clicking
$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().remove();
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")
	}
});

$("#toggleForm").click(function(){
	$("input[type='text']").fadeToggle(100);
});