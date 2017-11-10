$( function() { 
	//Tree Controls 
	$('#btn-row-1-val-1').click(function() {
		$('#btn-row-1-val-2,#btn-row-1-val-3').removeClass('btn-tree-select');
		$('.row-1a-arrow-1').addClass('fa2');
		$('.row-1a-arrow-2,.row-1a-arrow-3').removeClass('fa2');
		var id = $(this).attr('id');
		$('#'+id).addClass('btn-tree-select');
		for(var i=1;i<=6;i++){
			if(i == 1 || i==3){
				$('#btn-row-2-val-'+i).removeAttr('disabled');
				$('#btn-row-2-val-'+i).removeClass('btn-tree-disable');
				$('#btn-row-2-val-'+i).addClass('btn-tree-chart');	
				$('#btn-row-2-val-'+i).removeClass('btn-tree-select');	

				$('#btn-row-3-val-'+i).attr('disabled','disabled');
				$('#btn-row-3-val-'+i).addClass('btn-tree-disable');
				$('#btn-row-3-val-'+i).removeClass('btn-tree-select');
				$('#btn-row-3-val-'+i).removeClass('btn-tree-chart');

				$('#btn-row-4-val-'+i).attr('disabled','disabled');
				$('#btn-row-4-val-'+i).addClass('btn-tree-disable');
				$('#btn-row-4-val-'+i).removeClass('btn-tree-select');
				$('#btn-row-4-val-'+i).removeClass('btn-tree-chart');

				$('#btn-row-5-val-'+i).attr('disabled','disabled');
				$('#btn-row-5-val-'+i).addClass('btn-tree-disable');
				$('#btn-row-5-val-'+i).removeClass('btn-tree-select');
				$('#btn-row-5-val-'+i).removeClass('btn-tree-chart');			

				$('.row-1b-arrow-'+i).addClass('fa2');
				$('.row-2a-arrow-'+i).removeClass('fa2');
				$('.row-3a-arrow-'+i).removeClass('fa2');
				$('.row-4a-arrow-'+i).removeClass('fa2');	
			}
			else{
				$('#btn-row-2-val-'+i).attr('disabled','disabled');
				$('#btn-row-2-val-'+i).addClass('btn-tree-disable');
				$('#btn-row-2-val-'+i).removeClass('btn-tree-select');
				$('#btn-row-2-val-'+i).removeClass('btn-tree-chart');

				$('#btn-row-3-val-'+i).attr('disabled','disabled');
				$('#btn-row-3-val-'+i).addClass('btn-tree-disable');
				$('#btn-row-3-val-'+i).removeClass('btn-tree-select');
				$('#btn-row-3-val-'+i).removeClass('btn-tree-chart');

				if( i == 2 || i == 5){
					$('#btn-row-4-val-'+i).attr('disabled','disabled');
					$('#btn-row-4-val-'+i).addClass('btn-tree-disable');
					$('#btn-row-4-val-'+i).removeClass('btn-tree-select');
					$('#btn-row-4-val-'+i).removeClass('btn-tree-chart');
				}
				
				$('#btn-row-5-val-'+i).attr('disabled','disabled');
				$('#btn-row-5-val-'+i).addClass('btn-tree-disable');
				$('#btn-row-5-val-'+i).removeClass('btn-tree-select');
				$('#btn-row-5-val-'+i).removeClass('btn-tree-chart');	

				$('.row-1b-arrow-'+i).removeClass('fa2');
				$('.row-2a-arrow-'+i).removeClass('fa2');
				$('.row-3a-arrow-'+i).removeClass('fa2');
				$('.row-4a-arrow-'+i).removeClass('fa2');
			}					
		}
	});

	$('#btn-row-1-val-2').click(function() {
        document.getElementById('Category').value = '2';
            document.getElementById('SubCategory').value = '';
		$('#btn-row-1-val-1,#btn-row-1-val-3').removeClass('btn-tree-select');
		$('.row-1a-arrow-2').addClass('fa2');
		$('.row-1a-arrow-1,.row-1a-arrow-3').removeClass('fa2');
		var id = $(this).attr('id');
		$('#'+id).addClass('btn-tree-select');
		for(var i=1;i<=6;i++){
			if(i==3){
				$('#btn-row-2-val-'+i).attr('disabled','disabled');
				$('#btn-row-2-val-'+i).addClass('btn-tree-disable'); 
				$('#btn-row-2-val-'+i).addClass('btn-tree-chart');	
				$('#btn-row-2-val-'+i).removeClass('btn-tree-select');	

				$('#btn-row-3-val-'+i).attr('disabled','disabled');
				$('#btn-row-3-val-'+i).addClass('btn-tree-disable');
				$('#btn-row-3-val-'+i).removeClass('btn-tree-select');
				$('#btn-row-3-val-'+i).removeClass('btn-tree-chart');

				$('#btn-row-4-val-'+i).attr('disabled','disabled');
				$('#btn-row-4-val-'+i).addClass('btn-tree-disable');
				$('#btn-row-4-val-'+i).removeClass('btn-tree-select');
				$('#btn-row-4-val-'+i).removeClass('btn-tree-chart');

				$('#btn-row-5-val-'+i).attr('disabled','disabled');
				$('#btn-row-5-val-'+i).addClass('btn-tree-disable');
				$('#btn-row-5-val-'+i).removeClass('btn-tree-select');
				$('#btn-row-5-val-'+i).removeClass('btn-tree-chart');

				$('.row-1b-arrow-'+i).removeClass('fa2');
				$('.row-2a-arrow-'+i).removeClass('fa2');
				$('.row-3a-arrow-'+i).removeClass('fa2');
				$('.row-4a-arrow-'+i).removeClass('fa2');		
			}
			else{
				$('#btn-row-2-val-'+i).removeAttr('disabled');
				$('#btn-row-2-val-'+i).removeClass('btn-tree-disable');
				$('#btn-row-2-val-'+i).addClass('btn-tree-chart');
				$('#btn-row-2-val-'+i).removeClass('btn-tree-select');

				$('#btn-row-3-val-'+i).attr('disabled','disabled');
				$('#btn-row-3-val-'+i).addClass('btn-tree-disable');
				$('#btn-row-3-val-'+i).removeClass('btn-tree-select');
				$('#btn-row-3-val-'+i).removeClass('btn-tree-chart');

				if( i == 2 || i == 5){
					$('#btn-row-4-val-'+i).attr('disabled','disabled');
					$('#btn-row-4-val-'+i).addClass('btn-tree-disable');
					$('#btn-row-4-val-'+i).removeClass('btn-tree-select');
					$('#btn-row-4-val-'+i).removeClass('btn-tree-chart');
				}
				
				$('#btn-row-5-val-'+i).attr('disabled','disabled');
				$('#btn-row-5-val-'+i).addClass('btn-tree-disable');
				$('#btn-row-5-val-'+i).removeClass('btn-tree-select');
				$('#btn-row-5-val-'+i).removeClass('btn-tree-chart');

				$('.row-1b-arrow-'+i).addClass('fa2');
				$('.row-2a-arrow-'+i).removeClass('fa2');
				$('.row-3a-arrow-'+i).removeClass('fa2');
				$('.row-4a-arrow-'+i).removeClass('fa2');	
			}					
		}
	});

	$('#btn-row-1-val-3').click(function() {
        document.getElementById('Category').value = '3';
            document.getElementById('SubCategory').value = '';
		$('#btn-row-1-val-1,#btn-row-1-val-2').removeClass('btn-tree-select');
		$('.row-1a-arrow-3').addClass('fa2');
		$('.row-1a-arrow-1,.row-1a-arrow-2').removeClass('fa2');
		var id = $(this).attr('id');
		$('#'+id).addClass('btn-tree-select');
		for(var i=1;i<=6;i++){					
			$('#btn-row-2-val-'+i).removeAttr('disabled');
			$('#btn-row-2-val-'+i).removeClass('btn-tree-disable');
			$('#btn-row-2-val-'+i).addClass('btn-tree-chart');
			$('#btn-row-2-val-'+i).removeClass('btn-tree-select');	

			$('#btn-row-3-val-'+i).attr('disabled','disabled');
			$('#btn-row-3-val-'+i).addClass('btn-tree-disable');
			$('#btn-row-3-val-'+i).removeClass('btn-tree-select');
			$('#btn-row-3-val-'+i).removeClass('btn-tree-chart');

			if( i == 2 || i == 5){
				$('#btn-row-4-val-'+i).attr('disabled','disabled');
				$('#btn-row-4-val-'+i).addClass('btn-tree-disable');
				$('#btn-row-4-val-'+i).removeClass('btn-tree-select');
				$('#btn-row-4-val-'+i).removeClass('btn-tree-chart');
			}

			$('#btn-row-5-val-'+i).attr('disabled','disabled');
			$('#btn-row-5-val-'+i).addClass('btn-tree-disable');
			$('#btn-row-5-val-'+i).removeClass('btn-tree-select');
			$('#btn-row-5-val-'+i).removeClass('btn-tree-chart');	

			$('.row-1b-arrow-'+i).addClass('fa2');
			$('.row-2a-arrow-'+i).removeClass('fa2');
			$('.row-3a-arrow-'+i).removeClass('fa2');
			$('.row-4a-arrow-'+i).removeClass('fa2');
		}
	});

});

function btnClickRow3(id){
	//console.log(id);
	for(var i=1;i<=6;i++){
		if(id == ('btn-row-2-val-'+i)){
			$('#btn-row-2-val-'+i).removeAttr('disabled');
			$('#btn-row-2-val-'+i).removeClass('btn-tree-disable');
			$('#btn-row-2-val-'+i).addClass('btn-tree-select');

			$('#btn-row-3-val-'+i).removeAttr('disabled');
			$('#btn-row-3-val-'+i).removeClass('btn-tree-disable');
			$('#btn-row-3-val-'+i).addClass('btn-tree-select');
			if( i == 2 || i == 5){
				$('#btn-row-4-val-'+i).removeAttr('disabled');
				$('#btn-row-4-val-'+i).removeClass('btn-tree-disable');
				$('#btn-row-4-val-'+i).addClass('btn-tree-select');
			}

			$('#btn-row-5-val-'+i).removetype="button"
			$('#btn-row-5-val-'+i).removeClass('btn-tree-disable');
			$('#btn-row-5-val-'+i).addClass('btn-tree-select');

			
			$('.row-2a-arrow-'+i).addClass('fa2');
			$('.row-3a-arrow-'+i).addClass('fa2');
			$('.row-4a-arrow-'+i).addClass('fa2');
		}
		else{
			$('#btn-row-2-val-'+i).removeClass('btn-tree-chart');
			$('#btn-row-2-val-'+i).addClass('btn-tree-disable');
			$('#btn-row-2-val-'+i).attr('disabled','disabled');

			$('.row-2a-arrow-'+i).removeClass('fa2');
			$('.row-3a-arrow-'+i).removeClass('fa2');
			$('.row-4a-arrow-'+i).removeClass('fa2');
			
		}
	}
}