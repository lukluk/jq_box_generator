jq_box_generator
================
<div id="box"></div>
		<script>
			$('#box').boxify(function(){
				var result;//array of selected boxs
				result=$('#box').boxify('data');
				console.log(result) ;
			});
			/*
			or
			$('#box').boxify(function(){
				console.log($('#box').boxify('data'));
			},{
				selClass: "boxSelected",
                rows: 4,
                cols:3,
                width:100,
                height:100,
                margin:10

			});			
			*/
		</script>