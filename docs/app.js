class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tasks: [
				{ 
					id: 0, text: "Learn React", completed: false 
				},
				{ 
					id: 1, text: "Learn Bulma", completed: false 
				},
				{ 
					id: 2, text: "???", completed: true 
				},
				{ 
					id: 3, text: "Profit!", completed: false 
				}
			]
		}
		this.handler = this.handler.bind(this)
	}

	handler(data){
		let newTasks = this.state.tasks.push({
			id: this.state.tasks.length,
			text: data,
			completed: false
		});
		this.setState({
			tasks: newTasks
		});
	}

	render(){
		return (
			<section className="section">
				<div className="hero is-primary">
					<div className="hero-body is-bold">
						<h1 className="title">Tasks</h1>
					</div>
				</div>
				<div className="box">
					<NewTask handler = { this.handler } />
					<Tasks items = { this.state.tasks } />
				</div>
			</section>
		);
	}
}

ReactDOM.render(<App/>,document.getElementById("app"));