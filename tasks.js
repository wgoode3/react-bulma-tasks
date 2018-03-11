class Tasks extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			tasks:props.items
		}
	}

	render(){
		return (	
			<div>
				<table className="table is-fullwidth is-hoverable is-striped">
					<thead>
						<tr>
							<th>Task</th>
							<th>Completed?</th>
						</tr>
					</thead>
					<tbody>
						{this.state.tasks.map((task)=> 
							<tr key={ task.id }>
								<td>{ task.text }</td>
								<td>
									{ ( task.completed )
	      							? <div className="tags has-addons"><span className="tag is-success">Completed</span><span className="tag is-light"><input type="checkbox" checked/></span></div>
	      							: <div className="tags has-addons"><span className="tag is-danger is-small">Pending</span><span className="tag is-light"><input type="checkbox" /></span></div> }
	      						</td>
							</tr>
						)}
					</tbody>
				</table>
				<div className="panel">
					<p className="panel-tabs">
						<a className="is-active">all</a>
						<a>completed</a>
						<a>pending</a>
					</p>
				</div>
			</div>
		);
	}
}