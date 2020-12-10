define([], () => {
    return {
        init: function() {
            const $username = $('#username');
            const $span = $('span');

            $username.on('blur', function() {
                $.ajax({
                    type: 'post',
                    url: 'http://localhost/dashboard/self/week7/projectname/php/reg.php',
                    data: {
                        xingming: $username.val()//传输用户名给后端
                    }
                }).done(function(data) {
                    //显示用户名是否存在
                    if (!data) { 
                        $span.css('color', 'green').html('√');
                    } else { 
                        $span.css('color', 'red').html('该用户名已存在');
                    }
                });
            });

        }
    }
})