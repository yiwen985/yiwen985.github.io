// 输入页面数回车后跳转页面
function jumpPage(e, pageNum) {
    // 兼容FF和IE和Opera
    var event = e || window.event;
    var key = event.which || event.keyCode || event.charCode;
    if (key == 13) {
        window.location.href = '/page' + pageNum;
        return true;
    }
    return false;
}