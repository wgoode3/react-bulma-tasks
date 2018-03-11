class Tasks extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			tasks:props.items,
			filter:props.items,

		}
		this.thing = this.thing.bind(this);
		this.check = props.check;
	}

	thing(e){
		let f = e.target.text;
		this.filter(f);
		e.target.parentNode.childNodes.forEach((node) => {
			node.classList.remove("is-active");
		});
		e.target.classList.add("is-active");
	}

	filter(f){
		let filtered = [];
		if(f==="all"){
			filtered = this.state.tasks;
		}else{
			let bool = f === "completed";
			for(let i=0; i<this.state.tasks.length; i++){
				if(this.state.tasks[i].completed === bool){
					filtered.push(this.state.tasks[i]);
				}
			}
		}
		this.setState({
			filter: filtered
		});
	}

	render(){
		return (	
			<div>
				<div className="panel">
					<p className="panel-tabs">
						<a className="is-active" onClick={this.thing}>all</a>
						<a onClick={this.thing}>completed</a>
						<a onClick={this.thing}>active</a>
					</p>
				</div>
				<table className="table is-fullwidth is-hoverable is-striped">
					<thead>
						<tr>
							<th>task</th>
							<th>complete</th>
						</tr>
					</thead>
					<tbody>
						{this.state.filter.map((task)=> 
							<tr key={ task.id }>
								<td>{ task.text }</td>
								<td data-id={task.id}>
								{ ( task.completed )
      							? <div className="tags has-addons"><span className="tag is-success">completed</span><span className="tag is-light"><input type="checkbox" checked onChange={this.check} /></span></div>
      							: <div className="tags has-addons"><span className="tag is-danger is-small">active</span><span className="tag is-light"><input type="checkbox" onChange={this.check} /></span></div> }
      							</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		);
	}
}