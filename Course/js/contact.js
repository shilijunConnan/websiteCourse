$(function () {
    $("form").submit(function () {
        var name = $.trim($("input[name='yourname']").val());
        var mail = $.trim($("input[name='mail']").val());
        var msg = $.trim($("textarea[name='msg']").val());
        if (name == "" || mail == "" || msg == "") {
            alert("提交失败，请填写完整信息");
            return false;
        } else {
            alert("提交成功");
            return true;
        }
    })
    // $.ajax({
    //     url:"js/data.json",
    //     type: "GET",//请求方式为get
    //     dataType: "json", //返回数据格式为json
    //     success: function(data) {//请求成功完成后要执行的方法
    //         //each循环 使用$.each方法遍历返回的数据date
    //         $.each(data.msg, function(i, item) {
    //             var str = '<div>姓名:' + item.name+'</div>';
    //             alert(str);
    //         })
    //
    //     }
    // })
})