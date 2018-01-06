// 设置page_action时根据指定访问页面显示图标及页面
chrome.runtime.onInstalled.addListener(function(){
    var defaultURL = {url: ''};
    // 读取数据，第一个参数是指定要读取的key以及设置默认值
    chrome.storage.sync.get(defaultURL, function(items) {
        chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
            chrome.declarativeContent.onPageChanged.addRules([
                {
                    conditions: [
                        new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: items.url}})
                    ],
                    actions: [new chrome.declarativeContent.ShowPageAction()]
                }
            ]);
        });
    });
});
