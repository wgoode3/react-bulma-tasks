class NewTask extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			task: "",
		}
		this.handler = props.handler;
	}

	setTask(e){
		this.setState({
			task:e.target.value
		});
	}

	submit(e){
		e.preventDefault();
		this.handler(this.state.task);
		this.setState({
			task:""
		});
	}

	render(){
		return (
			<div className="box">
			<form onSubmit={(e)=>{this.submit(e);}}>

					<div className="column">
						<div className="level">
							<div className="level-item">
								<p className="subtitle is-4">New Task:</p>
							</div>
							<div className="level-item control has-icons-left">
								<input onChange={(e)=>{this.setTask(e);}}
									value={this.state.task}
									type="text"
									placeholder="Your task"
									className="input"
								/>
								<span className="icon is-small is-left">
									<i className="fas fa-briefcase"></i>
								</span>
							</div>

							<div className="level-item">
								<input type="submit" 
									value="New Task" 
									className="button is-primary level-item"
								/>
							</div>
						</div>
					</div>

			</form>
			</div>
		);
	}
}