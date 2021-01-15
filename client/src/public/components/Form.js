class Form extends Component {
  // PROPS
  // text = text for the question
  // buttonValues = objects for the button (with key : int, text : str, correct : bool)
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       answerHidden: false
  //     })
  //   }, 1000);
  // }
  
  render() {
    return (
    <form action="#" onSubmit={this.checkCorrect}>
      <input style={{"border":"2px solid " + borderColor,"backgroundColor": backgroundColor}} type="text" value={this.state.text} onChange={this.handleTextChange}/>
      <input type="submit" value="Submit"/>
    </form> 
    )
  }
}

export default Form;