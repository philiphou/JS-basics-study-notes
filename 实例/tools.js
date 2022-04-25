function addClass(obj, str) {
    // 检查是否含有当前名称的class :
    if (!hasClass(obj, str)) {

        obj.className += ' ' + str;
    }
    // 参数obj 代表 class要添加的对象
}
// 创建一个函数来检查obj 的class 属性里是否含有某个姓名：
function hasClass(obj, str) {
    //利用正则表达式：
    // var reg = /\bb2\b/; //要检查是否含有b2, 要使用单词边界： \b； 
    // 为了调用参数，我们用构造函数： 
    var reg = new RegExp('\\b' +
        str + '\\b')

    return (reg.test(obj.className)) // 如果有 b2， 则返回true; 没有返回 false;


}
// 创建一个函数，删除一个元素对象中指定的class
function removeClass(obj, str) {
    // 要删除一个class  的属性，直接用空串''代替要删除的属性；创建一个正则表达式：
    var reg = new RegExp('\\b' + str + '\\b')
    if (reg.test(obj.className)) {

        obj.className = obj.className.replace(str, '')
    }


};

// toggleClass 可以用来切换一个类，如果元素中具有该类，则删除，如果元素中没有该类，则添加：
function toggleClass(obj, str) {
    // 首先判断 obj中是否含有类 str；
    if (hasClass(obj, str)) {
        removeClass(obj, str) // 有则删除
    } else {
        addClass(obj, str); // 无则添加；
    }

}
//
function move(obj, speed, target, attr, callback) {
    var currentValue = parseInt(getComputedStyle(obj, null)['left'])
    if (currentValue > target) {
        speed = -speed;
    }
    obj.timer = setInterval(function() {
        var oldValue = obj.offsetLeft;

        obj.style.left = oldValue + speed + 'px'

        if (speed > 0 && parseInt(obj.style.left) > target) {
            obj.style.left = target + 'px'
        } else if (speed < 0 && parseInt(obj.style.left) < target) {
            obj.style.left = target + 'px'
        };
        if (parseInt(obj.style.left) == target) {
            clearInterval(obj.timer)
        }

    }, 30)

    callback && callback();
};