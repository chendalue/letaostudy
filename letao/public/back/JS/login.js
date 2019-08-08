$(function() {

  // 1. 进行表单校验
  //    校验要求: (1) 用户名不能为空
  //              (2) 密码不能为空, 且必须是 6-12 位

  $("#form").bootstrapValidator({
      // 对字段进行校验
      fields:{
        username: {
          validators: {
            notEmpty:{
                // 为空时显示的提示信息
                message: "用户名不能为空"
              },
              // 长度要求 2-6 位
              stringLength: {
                min: 2,
                max: 6,
                message: "用户名长度必须是 2-6 位"
              },
              
            }
          

        },

        password:{
          validators: {
            notEmpty:{
                // 为空时显示的提示信息
                message: "密码不能为空"
              },
              // 长度要求 2-6 位
              stringLength: {
                min: 6,
                max: 12,
                message: "密码长度必须是 6-12 位"
              },
              
            }       

        }

      }
    })


});
