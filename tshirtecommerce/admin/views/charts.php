<div class="row">
	<div class="col-md-12">
		<div class="control-panel-box">
		</div>
	</div>
</div>
<div class="row">
	<div class="col-md-6">
		<div class="panel panel-default">
			<div class="panel-heading">
				<i class="clip-bars"></i>
				Top Art Sales
				<div class="panel-tools">
					<a class="btn btn-xs btn-link panel-collapse collapses" href="#"></a>
				</div>
			</div>
			
			<div class="panel-body">
				<div class="fc-toolbar">
					<div class="pull-right">
						<div class="btn-group" role="group">
							<button type="button" class="btn btn-default btn-top-sales btn-top-sales-month" onclick="store.charts.sales('month')">Month</button>
							<button type="button" class="btn btn-default btn-top-sales btn-top-sales-week" onclick="store.charts.sales('week')">Week</button>
						</div>
					</div>
					<div class="pull-left"><strong><?php echo date('M Y', time()); ?></strong></div>
				</div>
				
				<table class="table table-hover" id="top-sales">
					<thead>
						<tr>
							<th class="left">Number</th>
							<th class="left">Thumb</th>
							<th>Date</th>
							<th class="hidden-xs">Sales</th>
						</tr>
					</thead>
					<tbody class="top-sales" id="top-sales-month">
					</tbody>
					
					<tbody class="top-sales" id="top-sales-week">
					</tbody>
				</table>
			</div>
		</div>
	</div>
	
	<div class="col-md-6">
		<div class="panel panel-default">
			<div class="panel-heading">
				<i class="clip-bars"></i>
				Top Art Keyword
				<div class="panel-tools">
					<a class="btn btn-xs btn-link panel-collapse collapses" href="#"></a>
				</div>
			</div>
			
			<div class="panel-body">
				<div class="fc-toolbar">
					<div class="pull-right">
						<div class="btn-group" role="group">
							<button type="button" class="btn btn-default btn-top-search btn-top-search-month" onclick="store.charts.search('month')">Month</button>
							<button type="button" class="btn btn-default btn-top-search btn-top-search-week" onclick="store.charts.search('week')">Week</button>
						</div>
					</div>
					<div class="pull-left"><strong><?php echo date('M Y', time()); ?></strong></div>
				</div>
				
				<table class="table table-hover" id="top-search">
					<thead>
						<tr>
							<th class="left">Number</th>							
							<th class="left">Keyword</th>							
							<th class="hidden-xs">Count</th>
						</tr>
					</thead>
					<tbody class="top-search" id="top-search-month">
					</tbody>
					
					<tbody class="top-search" id="top-search-week">
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
store.charts.search('month');
store.charts.sales('month');
</script>