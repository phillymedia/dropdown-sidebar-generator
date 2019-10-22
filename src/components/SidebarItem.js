import React, {Component} from 'react'

class SidebarItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: "small",
      showcode: false,
      hidden: false,
      expandbar: false
    }

    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
    this.change = this.change.bind(this);
    this.hideSidebar = this.hideSidebar.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  remove() {
    this.props.onRemove(this.props.index)
  }

  hideSidebar() {
    this.setState({
      hidden: !this.state.hidden
    })
  }
  handleChange(e) {
    this.setState({
      expandbar:e.target.value === 'yes' ? true : false
    })
  }

  change(e) {
    if (e.target.name === "name") {
      this.setState({
        [e.target.name]: e.target.value.replace(/[^a-z0-9]+/gi, "")
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    this.props.onTypeChange(this.state, this.props.index)
  }

  save(e) {
    e.preventDefault();

    let csssSmall = `
      <style>${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-small{max-width:50%;float:right;margin:20px 0 30px 30px;padding:20px;background:#f1f1f1}@media only screen and (max-width: 480px){${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-small{max-width:100%;margin:20px 0;float:unset}}${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-small .collapsible-content::before{background:-o-linear-gradient(top, rgba(241,241,241,0) 0%, rgba(241,241,241,0.7) 20%, rgba(241,241,241,0.99) 65%, #f1f1f1 100%);background:-webkit-gradient(linear, left top, left bottom, from(rgba(241,241,241,0)), color-stop(20%, rgba(241,241,241,0.7)), color-stop(65%, rgba(241,241,241,0.99)), to(#f1f1f1));background:linear-gradient(to bottom, rgba(241,241,241,0) 0%, rgba(241,241,241,0.7) 20%, rgba(241,241,241,0.99) 65%, #f1f1f1 100%)}@media only screen and (max-width: 800px){${this.state.name ? "#" + this.state.name : ".g-sidebar"} ${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-small{max-width:65%;margin:10px 0 20px 20px;padding:15px}}${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-small .lbl-toggle{background-color:#ddd;margin:0 -20px -20px}
      </style>`

    let cssMedium = `
    <style>${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-medium{max-width:70%;float:right;margin:20px -35% 30px 30px;padding:20px;background:#f1f1f1}${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-medium .collapsible-content::before{background:-o-linear-gradient(top, rgba(241,241,241,0) 0%, rgba(241,241,241,0.7) 20%, rgba(241,241,241,0.99) 65%, #f1f1f1 100%);background:-webkit-gradient(linear, left top, left bottom, from(rgba(241,241,241,0)), color-stop(20%, rgba(241,241,241,0.7)), color-stop(65%, rgba(241,241,241,0.99)), to(#f1f1f1));background:linear-gradient(to bottom, rgba(241,241,241,0) 0%, rgba(241,241,241,0.7) 20%, rgba(241,241,241,0.99) 65%, #f1f1f1 100%)}@media only screen and (max-width: 800px){${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-medium{width:calc(100% + 40px);max-width:none;display:-webkit-box;display:-ms-flexbox;display:flex;float:none;margin:30px 0;padding:20px 0;border-top:1px solid #eee;border-bottom:1px solid #eee;background:white}${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-medium .collapsible-content::before{background:-o-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 20%, rgba(255,255,255,0.99) 65%, white 100%);background:-webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0)), color-stop(20%, rgba(255,255,255,0.7)), color-stop(65%, rgba(255,255,255,0.99)), to(white));background:linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 20%, rgba(255,255,255,0.99) 65%, white 100%)}${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-medium .lbl-toggle{background:#f1f1f1 !important;margin:0 0 -20px 0 !important}}@media only screen and (max-width: 800px){${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-medium{width:100%}}${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-medium .lbl-toggle{background-color:#ddd;margin:0 -20px -20px -20px}
    </style>
    `;
    let cssFull = `<style>${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-fullwidth{margin:30px 0px;padding:20px 0 0;border-top:1px solid #eee;border-bottom:1px solid #eee}</style>`;

    let css = `<style>${this.state.name ? "#" + this.state.name : ".g-sidebar"}{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}${this.state.name ? "#" + this.state.name : ".g-sidebar"} input[type='checkbox']{display:none}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .lbl-toggle{display:block;cursor:pointer;-webkit-transition:all 0.25s ease-out;-o-transition:all 0.25s ease-out;transition:all 0.25s ease-out;-webkit-box-flex:1;-ms-flex:1 1 100%;flex:1 1 100%;-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;color:#333;padding:5px 0;text-align:center;z-index:2;font-size:14px;text-transform:uppercase;letter-spacing:1px;font-weight:900;background-color:rgba(238,238,238,0.95);font-family:"Gotham Narrow SSm A", "Gotham Narrow SSm B", "Gotham Narrow Ssm", "Arial", sans-serif}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .lbl-toggle::before{content:' ';display:inline-block;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid currentColor;vertical-align:middle;margin-right:0.7rem;-webkit-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px);-webkit-transition:-webkit-transform 0.2s ease-out;transition:-webkit-transform 0.2s ease-out;-o-transition:transform 0.2s ease-out;transition:transform 0.2s ease-out;transition:transform 0.2s ease-out, -webkit-transform 0.2s ease-out}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .toggle:checked+.lbl-toggle::before{-webkit-transform:rotate(90deg) translateX(-3px);-ms-transform:rotate(90deg) translateX(-3px);transform:rotate(90deg) translateX(-3px)}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .collapsible-content{max-height:150px;overflow:hidden;-webkit-transition:max-height 0.25s ease-in-out;-o-transition:max-height 0.25s ease-in-out;transition:max-height 0.25s ease-in-out;position:relative}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .collapsible-content::before{position:absolute;left:0;right:0;top:70%;bottom:-20px;background:-o-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 20%, rgba(255,255,255,0.99) 65%, #fff 100%);background:-webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0)), color-stop(20%, rgba(255,255,255,0.7)), color-stop(65%, rgba(255,255,255,0.99)), to(#fff));background:linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 20%, rgba(255,255,255,0.99) 65%, #fff 100%);z-index:2;content:''}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .collapsible-content .content-inner{padding:0.5rem 1rem}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .toggle:checked+.lbl-toggle+.collapsible-content{max-height:1500px}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .toggle:checked+.lbl-toggle+.collapsible-content::before{content:unset}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .toggle:checked+.lbl-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .sidebar-title{font-size:22px;line-height:1.2;font-weight:700;margin-bottom:10px;text-align:center;font-family:"Gotham Narrow SSm A", "Gotham Narrow SSm B", "Gotham Narrow Ssm", "Arial", sans-serif}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .sidebar-title.title-left{text-align:left}${this.state.name ? "#" + this.state.name : ".g-sidebar"} p{margin-bottom:6px;font-size:16px;line-height:1.4em;color:#444;font-family:"Gotham Narrow SSm A", "Gotham Narrow SSm B", "Gotham Narrow Ssm", "Arial", sans-serif}${this.state.name ? "#" + this.state.name : ".g-sidebar"} p div,${this.state.name ? "#" + this.state.name : ".g-sidebar"} p iframe,${this.state.name ? "#" + this.state.name : ".g-sidebar"} p ul{margin:15px 0}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .sidebar-source{color:#888;font-size:11px;font-style:italic;margin-top:5px;position:relative;text-align:right;padding-right:5px}</style>`

    let script = `<script>!function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){return o(e[i][1][r]||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r}()({1:[function(require,module,exports){"use strict";!function(){function resizer(){var myLabels=document.querySelectorAll(".lbl-toggle");Array.from(myLabels).forEach(function(label){label.addEventListener("keydown",function(e){32!==e.which&&13!==e.which||(e.preventDefault(),label.click())})})}document.documentElement.className.indexOf("g-sidebar")>-1||(document.documentElement.className+=" g-sidebar","querySelector"in document&&document.addEventListener("DOMContentLoaded",resizer))}()},{}]},{},[1]);</script>`;

    let cssNoExpand = `<style>${this.state.name ? "#" + this.state.name : ".g-sidebar"}.noexpand .collapsible-content{max-height:100%}${this.state.name ? "#" + this.state.name : ".g-sidebar"}.noexpand .collapsible-content::before{content:unset}${this.state.name ? "#" + this.state.name : ".g-sidebar"}.noexpand .lbl-toggle{display:none}</style>`


    let bodyinput = this.state.body.split(/\n/g);
    var formattedBody = bodyinput.map(r => {
      if(r.includes("<a ")) {
        r = r.replace("<a ", '<a data-link-type="expand-sidebar" ')
      }
      if(r.includes("<") && r.includes(">")) {
        return r;
      } else {
        return `<p>${r}</p>`
      }
    })

    let code = `
      ${css}
      ${this.state.size === 'small' ? csssSmall : this.state.size === 'medium' ? cssMedium : cssFull }
      ${this.state.expandbar === true ? cssNoExpand : ''}
    <div${this.state.name ? ` id="${this.state.name}"` : ''} class="wrap-collabsible g-sidebar${this.state.size ? ' g-' + this.state.size : ''} ${this.state.expandbar === true && 'noexpand'}">
      <input id="${this.state.name && this.state.name}_collapsible" class="toggle" type="checkbox"/>
      <label for="${this.state.name && this.state.name}_collapsible" class="lbl-toggle">Expand</label>
      <div class="collapsible-content">
        <div class="content-inner">
          ${this.state.header ? `
            <div class="sidebar-title">${this.state.header}</div>` : ''}
            <div>${this.state.body ? formattedBody.map((p,i) => p ).join('') : ''}</div>
            ${this.state.credit ? `<div class="sidebar-source">${this.state.credit}</div>` : ''}
          </div>
        </div>
      </div>
    ${script}
    `

    // console.log(this.state.body.replace(/\n/g, '<br>\n'))

    this.setState({code: code, showcode: true})

    this.props.onChange(code, this.props.index)
  }

  render() {
    return (<div className={"sidebar-item " + (
        this.state.hidden ? 'hidden' : '')}>
      <div className="remove-sidebar" onClick={this.remove}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
      <h4 onClick={this.hideSidebar}>
        <span className="carret-down-button">
          <i className="fa fa-caret-down" aria-hidden="true"></i>
        </span>Sidebar {this.props.index + 1}</h4>
      <p className="instructions">Fill out the form to create a sidebar.
        <em>You can leave any of the fields blank, and they will be ignored.</em><br/>
        <strong>If you are going to have more than one sidebar on a page, be sure to give it a unique name.</strong>
      </p>
      <form className="infoform">
        <div className="input-display name-display">
          <div className="input-label">Name of sidebar (will not appear):</div>
          <input onChange={this.change} type="text" name="name" placeholder="sidebarname"/>
        </div>
        <div className="input-display question">
          <div className="input-label ">Exclude the expand button:</div>
          <div className="selection-item">
            <input type="radio" name="expand" value="no" id="no" defaultChecked onChange={this.handleChange}/>
            <label htmlFor="no">No</label>
            <input type="radio" name="expand" value="yes" id="yes" onChange={this.handleChange}/>
            <label htmlFor="yes">Yes</label>
          </div>
        </div>
        <div className="input-display">
          <div className="input-label">Header:</div>
          <input onChange={this.change} type="text" name="header" placeholder="Header goes here"/>
        </div>
        <div className="input-display">
          <div className="input-label">Body:</div>
          <textarea onChange={this.change} type="text" name="body" placeholder="The body of the sidebar goes here." rows="3"></textarea>
        </div>

        <div className="input-display">
          <div className="input-label">Credit or source:</div>
          <input onChange={this.change} type="text" name="credit" placeholder="Credit or source of text"/>
        </div>

        <div className="input-display">
          <div className="input-label">Size:</div>
          <select name="size" onChange={this.change}>
            <option value="small">Small (Floats inline on the right side)</option>
            <option value="fullwidth">Full width (100% width of text)</option>
              <option value="medium">Longform only - Medium (Floats to the right)</option>
          </select>
        </div>
      </form>
      {
        this.state.showcode ? (<textarea rows="8" className="code-textarea" value={this.state.code}></textarea>) : ''
      }
      <button onClick={this.save} className="show-code">{
          this.state.showcode ? "Update": "Show"
        }&nbsp;
        code</button>
    </div>)
  }
}

export default SidebarItem
