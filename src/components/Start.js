import React, {Component} from 'react';
import SidebarItem from './SidebarItem';

class Start extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      clear: false,
      theme: '',
      sidebars: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.updateText = this.updateText.bind(this);
    this.eachSidebar = this.eachSidebar.bind(this);
    this.update = this.update.bind(this);
    this.nextId = this.nextId.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  nextId() {
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  add(text) {
    this.setState(prevState => ({
      sidebars: [
        ...prevState.sidebars, {
          id: this.nextId(),
          sidebar: text
        }
      ]
    }))
  }

  remove(id) {
    this.setState(prevState => ({
        sidebars: prevState.sidebars.filter(sidebar => sidebar.id!==id)
    }))
}

  update(newText, i) {
    this.setState(prevState => ({
      sidebars: prevState.sidebars.map(
        sidebar => (sidebar.id !== i)
        ? sidebar
        : {
          ...sidebar,
          sidebar: newText
        })
    }))
  }

  updateText(state, i) {
  }

  eachSidebar(sidebar, i) {
    return (<SidebarItem key={i} index={i} onChange={this.update} onTypeChange={this.updateText} onRemove={this.remove}>
      {sidebar.sidebar}
    </SidebarItem>)
  }

  handleChange(e) {
    if (e.target.name === "theme") {
      this.setState({theme: e.target.value})
    }
    if (e.target.name === "style") {
      this.setState({style: e.target.value})
    }
  }

  render() {
    return (<div className="full-width">
      <h2>Expandable sidebar creator</h2>
      <p className="instructions">Chose a theme for the sidebar. Examples can be found in knowledgebase.</p>
      <div className="options">
        {/* <div className="question">
          <p>Will there be more than one sidebar in the article?</p>
          <div className="selection-item">
            <input type="radio" name="number" value="yes" id="yes" onChange={this.handleChange}/>
            <label htmlFor="yes">Yes</label>
            <input type="radio" name="number" value="no" id="no" onChange={this.handleChange}/>
            <label htmlFor="no">No</label>
          </div>
        </div> */}

        <div className="question">
          <p>Headline style:</p>
          <div className="selection-item">
            <input type="radio" name="style" value="centered" id="centered" defaultChecked onChange={this.handleChange}/>
            <label htmlFor="centered">Centered</label>
            <input type="radio" name="style" value="left" id="left" onChange={this.handleChange}/>
            <label htmlFor="left">Left aligned</label>
          </div>
        </div>
        {/* <div className="question">
          <p>Theme:</p>
          <div className="selection-item">
            <input type="radio" name="theme" value="light" id="light" defaultChecked onChange={this.handleChange}/>
            <label htmlFor="light">Light</label>
            <input type="radio" name="theme" value="dark" id="dark" onChange={this.handleChange}/>
            <label htmlFor="dark">Dark</label>
          </div>
        </div> */}

      </div>
      <button className={"add-section " + (this.state.number === 0 || !this.state.theme ? "notready" : "")} onClick={this.add.bind(null, 'New Note')} id="add">+ Add a sidebar</button>

      <div className="sidebar-section">
        {this.state.sidebars.map(this.eachSidebar)}
      </div>

    </div>)
  }
}

export default Start;
