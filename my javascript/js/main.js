var user_input;
var main_function = (function(){
	alert ("welcome you are enter in the main function");
	this.no_of_student = (function(){
		alert ("welcome you are enter in the second function");
		document.getElementById("getRowBtn").onclick=(function(){
			user_input = document.getElementById("GetInputVal").value;
			alert(user_input );
			var GetTotalRow = "";
			for( var i=1; i<= user_input; i++){
				var single_row = `
					<div class="row">
						<div class="col-md-4">
							<input type="text" class="form-control" id="name"  placeholder="Enter Name">
						</div>
						<div class="col-md-4">
							<input type="email" class="form-control" id="email"  placeholder="Enter Email">
						</div>
						<div class="col-md-4">
							<input type="text" class="form-control" id="phno"  placeholder="Enter Mobile Number">
						</div>
					</div>
					`;
					GetTotalRow += single_row;
			}
			GetTotalRow += `<button class = "btn btn-primary" onclick = "(new main_function()).output_data()">Submit and Display on Table</button>`;
			console.log(GetTotalRow);
			document.getElementById("display-row").innerHTML = GetTotalRow;
		});
	});

	this.output_data = (function(){
		console.log(user_input);
	});




});

