// 첫번째 버튼 click 시 value change 및 다음 문제 이동
$("#A").click(function() {
    // id = type 인 input tag의 value 가져오기(문제에 해당되는 MBTI type 확인)
    // MBTI type의 현재 value 가져오기
    var type = $("#type").val();
    var prevalue = $("#"+type).val();
    $("#"+type).val(parseInt(prevalue)+1); // 새로운 값으로 변경
    next(); // 다음 문제로 이동
});

// 두번째 버튼 click 시 다음 문제 이동
$("#B").click(function() {
    next();
});

// 답변 선택 시 다음 문제로 이동 & 결과 페이지
function next() {
    // 문항이 12개니까, 마지막 문제에 도달하면
    if (num == 13){
        $(".question").hide();
        $(".result").show();
        
        // 최종 MBTI 구하기
        var mbti = "";

        ($("#EI").val() < 2) ? mbti+="I" : mbti+="E";
        ($("#SN").val() < 2) ? mbti+="N" : mbti+="S";
        ($("#TF").val() < 2) ? mbti+="F" : mbti+="T";
        ($("#JP").val() < 2) ? mbti+="P" : mbti+="J";

        $("#shleyz-type").html(result[mbti]["shleyz-type"]);
        $("#shleyz-description").html(result[mbti]["shleyz-description"]);
        $("#mbti-type").html(result[mbti]["mbti-type"]);
        $("#mbti-explain").html(result[mbti]["mbti-explain"]);
        $("#result-img").attr("src", "image/"+result[mbti]["result-image"]);
        $("#good-mate").html(result[mbti]["good-mate"]);
        $("#bad-mate").html(result[mbti]["bad-mate"]);
        $("#menu-recommendation").html(result[mbti]["menu-recommendation"]);
    } else {
        // progress bar 채우기
        $(".progress-bar").attr("style", "width:calc(100/12*"+num+"%)");

        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++;
    }            
}