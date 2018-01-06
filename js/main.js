// 评论数组
var str_list = '汉皇重色思倾国,御宇多年求不得,杨家有女初长成,养在深闺人未识,天生丽质难自弃,一朝选在君王侧,回眸一笑百媚生,六宫粉黛无颜色,春寒赐浴华清池,温泉水滑洗凝脂,侍儿扶起娇无力,始是新承恩泽时,云鬓花颜金步摇,芙蓉帐暖度春宵,春宵苦短日高起,从此君王不早朝,承欢侍宴无闲暇,春从春游夜专夜,后宫佳丽三千人,三千宠爱在一身,金屋妆成娇侍夜,玉楼宴罢醉和春,姊妹弟兄皆列土,可怜光彩生门户,遂令天下父母心,不重生男重生女,骊宫高处入青云,仙乐风飘处处闻,缓歌谩舞凝丝竹,尽日君王看不足,渔阳鼙鼓动地来,惊破霓裳羽衣曲,九重城阙烟尘生,千乘万骑西南行,翠华摇摇行复止,西出都门百余里,六军不发无奈何,宛转蛾眉马前死,花钿委地无人收,翠翘金雀玉搔头,君王掩面救不得,回看血泪相和流,黄埃散漫风萧索,云栈萦纡登剑阁,峨嵋山下少人行,旌旗无光日色薄,蜀江水碧蜀山青,圣主朝朝暮暮情,行宫见月伤心色,夜雨闻铃肠断声,天旋地转回龙驭,到此踌躇不能去,马嵬坡下泥土中,不见玉颜空死处'.split(',');
var index = 0; //角标一枚
var error = ["您提交评论的速度太快了，请稍后再发表评论。","请勿重复提交"];   //错误提示 页面获取
var multi = "";                 // 防重复提交字段
var interval = 1000;            // 提交间隔
var textId = 'textareaComment';     // 文本框id
var btnId = 'textCommentSubmit';    // 提交按钮id
var errorId = 'error';

$("#"+btnId).parent().before("提交状态:<input type='checkbox' id='dmflag'>");

setInterval(function(){
    if($('#dmflag').is(':checked')){
        building();
    }
},interval);

function  building() {
    //改变样式
    $("#"+textId).css('color',' rgb(102, 102, 102)');
    var html = $("#"+btnId).prop("outerHTML");
    if(index>=str_list.length){
        index=0;
    }
    $("#"+textId).val(str_list[index]+multi);
    $("#"+btnId).click();
    var result = $("#"+errorId).text();
    if($.inArray(result,error)<=-1||result.indexOf('评论成功')>-1||result.trim()==''||multi.length>(10000/interval)){
        //切换到下一条
        index++;
        multi = "";
    }
    else{
        multi += "_";
    }
    $("#"+btnId).parent().empty().append(html);
}
