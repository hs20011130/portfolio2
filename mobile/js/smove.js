//해당 년도를 부드럽게 이동 코드
$('.history_menu 1i a').click(function(e){ //각각의 년도 버튼을 클릭하면
e.preventDefault();

var target_value = 0; //각각의 목적지

if($(this).hasClass('linkl')){ //첫번째 버튼 클릭 시
  target_value = 1000;
}else if($(this).hasClass('link2')){
  target_value = 2150;
}else if($(this).hasClass('link3')){
  target_value = 3630;
}else if($(this).hasClass('link4')){
target_value = 4590;
}
$("htm1, body").stop() .animate({"scrollTop": target_value},1000);
//해다 모전지로 X크로탄은 부드럽게 이동