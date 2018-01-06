$(function(){
    var defaultURL = {url: ''};
    // 读取数据，第一个参数是指定要读取的key以及设置默认值
    chrome.storage.sync.get(defaultURL, function(items) {
        $("#url").val(items.url);
    });
})

$("#save").click(function () {
    var url = $("#url").val();
    chrome.storage.sync.set({url: url}, function() {
        $("#status").text('保存成功！');
        setTimeout(() => {$("#status").text("");}, 800);
    });
});
