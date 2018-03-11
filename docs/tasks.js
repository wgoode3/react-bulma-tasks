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
				<div className="hero is-primary">
					<div className="hero-body is-bold">
						<h1 className="title">Tasks</h1>
					</div>
				</div>
				<div className="box">
					<table className="table is-fullwidth">
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
	          							? <p><input type="checkbox" checked/>&nbsp;<span className="tag is-success">Completed</span></p>
	          							: <p><input type="checkbox" />&nbsp;<span className="tag is-danger">Pending</span></p> }
	          						</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}