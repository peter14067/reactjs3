var YouBikeSite = React.createClass({
	getInitialState : function(){
		return {
			site : [],
		};
	},
  	render : function(){
		var site = this.props.site;
  		return (
  			<div className="row">
  				<div className="column">{site.sno}</div>
  				<div className="column">{site.sarea}</div>
  				<div className="column">{site.sna}</div>
  				<div className="column">{site.sbi}</div>
  				<div className="column">{site.mday}</div>
  			</div>
  		);
  	}
});
var YouBikeSiteRow = React.createClass({
	render : function(){
		console.log('YouBikeSiteList');
		return (
			<div className="dataBody">
				{this.props.siteList.map(function(site) {
					//console.log(site);
       					return (<YouBikeSite site={site} />);
       				})}
			</div>
		);
	}
});
var YouBikeTable = React.createClass({
	getInitialState : function(){
		return {
			siteList : [],
			page : 1 
		};
	},
	componentDidMount : function(){
		this.loadYouBikeSiteInfo();
	},
	loadYouBikeSiteInfo : function(){
		console.log('this.state.page: ' + this.state.page);
		var pageSize = 10,
			offset = (this.state.page >= 1 ? this.state.page - 1 : 0) * pageSize;	
		console.log(offset);
		var youBikeSiteUrl = '/youbike/' + pageSize + '/' + offset;
		$.ajax({
			url : youBikeSiteUrl,
			dataType : 'json',
			cache : false,
			success : function(data){
				if(data.result && data.result.results)
				{
					this.setState({
						siteList : data.result.results
					});
				}
				//console.log(this.state.siteList);
			}.bind(this),
			error : function(xhr, status, err){
				console.error(youBikeSiteUrl, status, err.toString());
			}.bind(this)
		});
	},
	nextPage : function()
	{
		this.state.page += 1;
		this.loadYouBikeSiteInfo();
	},
	previousPage : function()
	{
		this.state.page -= 1;
		if(this.state.page < 0)
		{
			this.state.page = 0;
		}
		this.loadYouBikeSiteInfo();
	},
	render : function(){
		return (
			<div className="youBikeView">
				<h2>YouBike Site Information</h2>
				<div className="youBikeTable">
					<div className="dataHead">
						<div className="row">
							<div className="column">場站代號</div>
							<div className="column">場站區域</div>
							<div className="column">場站名稱</div>
							<div className="column">目前車輛數</div>
							<div className="column">資料更新時間</div>
						</div>
					</div>
					<YouBikeSiteRow siteList={this.state.siteList}/>
				</div>
				<div className="buttonList">
					<button onClick={this.previousPage}>上一頁</button>
					<button onClick={this.nextPage}>下一頁</button>
				</div>
			</div>
		)
	}
});
ReactDOM.render(
    <YouBikeTable />,
    document.getElementById('container')
);
