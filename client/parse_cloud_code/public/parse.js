console.log("parse start");
Parse.initialize("8lyw9RUk6Gk3xOqs22qdalYiPk8h36v10Ud51Il4", "IUg5DgmvoKba7cJIYGpV3F7MxXka6hNhaofjEQ93");
  
Parse.Cloud.run('hello', {}, {
  success: function(result) {
    // result is 'Hello world!'
    console.log(result);
  },
  error: function(error) {
    console.log(error);
    
  }
});