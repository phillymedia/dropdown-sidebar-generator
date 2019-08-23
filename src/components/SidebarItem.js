import React, {Component} from 'react'

class SidebarItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: "small",
      showcode: false,
      hidden: false
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
      <style>${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-small{max-width:50%;float:right;margin:20px 0 30px 30px;padding:20px;background:#f1f1f1}${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-small .sidebar-inner-text::before{background:-webkit-gradient(linear, left top, left bottom, from(rgba(241,241,241,0)), color-stop(20%, rgba(241,241,241,0.7)), color-stop(65%, rgba(241,241,241,0.99)), to(#f1f1f1));background:-o-linear-gradient(top, rgba(241,241,241,0) 0%, rgba(241,241,241,0.7) 20%, rgba(241,241,241,0.99) 65%, #f1f1f1 100%);background:linear-gradient(to bottom, rgba(241,241,241,0) 0%, rgba(241,241,241,0.7) 20%, rgba(241,241,241,0.99) 65%, #f1f1f1 100%)}@media only screen and (max-width: 800px){${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-small{max-width:65%;margin:10px 0 20px 20px;padding:15px}}${this.state.name ? "#" + this.state.name: ".g-sidebar"}.g-small .sidebar-expand{background-color:#ddd}
      </style>`

    let cssMedium = `
    <style>${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-medium{max-width:70%;float:right;margin:20px -35% 30px 30px;padding:20px;background:#f1f1f1}${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-medium .sidebar-inner-text::before{background:-webkit-gradient(linear, left top, left bottom, from(rgba(241,241,241,0)), color-stop(20%, rgba(241,241,241,0.7)), color-stop(65%, rgba(241,241,241,0.99)), to(#f1f1f1));background:-o-linear-gradient(top, rgba(241,241,241,0) 0%, rgba(241,241,241,0.7) 20%, rgba(241,241,241,0.99) 65%, #f1f1f1 100%);background:linear-gradient(to bottom, rgba(241,241,241,0) 0%, rgba(241,241,241,0.7) 20%, rgba(241,241,241,0.99) 65%, #f1f1f1 100%)}@media only screen and (max-width: 800px){${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-medium{width:calc(100% + 40px);max-width:none;display:block;float:none;margin:30px 0;padding:20px 0;border-top:1px solid #eee;border-bottom:1px solid #eee;background:white}${this.state.name ? "#" + this.state.name: ".g-sidebar"}.g-medium .sidebar-inner-text::before{background:-webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0)), color-stop(20%, rgba(255,255,255,0.7)), color-stop(65%, rgba(255,255,255,0.99)), to(white));background:-o-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 20%, rgba(255,255,255,0.99) 65%, white 100%);background:linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 20%, rgba(255,255,255,0.99) 65%, white 100%)}${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-medium .sidebar-expand{background:#f1f1f1 !important}}${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-medium .sidebar-expand{background-color:#ddd}
    </style>
    `;
    let cssFull = `<style>${this.state.name ? "#" + this.state.name : ".g-sidebar"}.g-fullwidth{margin:30px 0px;padding:20px 0;border-top:1px solid #eee;border-bottom:1px solid #eee}</style>`;

    let css = `<style>${this.state.name ? "#" + this.state.name : ".g-sidebar"}{overflow-y:hidden;position:relative}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .sidebar-inner-text{max-height:200px}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .sidebar-inner-text::before{position:absolute;left:0;right:0;top:60%;bottom:0;background:-webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0)), color-stop(20%, rgba(255,255,255,0.7)), color-stop(65%, rgba(255,255,255,0.99)), to(#fff));background:-o-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 20%, rgba(255,255,255,0.99) 65%, #fff 100%);background:linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 20%, rgba(255,255,255,0.99) 65%, #fff 100%);z-index:2;content:''}${this.state.name ? "#" + this.state.name: ".g-sidebar"} .sidebar-inner-text.g-expanded{max-height:100%;padding-bottom:20px}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .sidebar-inner-text.g-expanded::before{content:unset;background:none !important}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .sidebar-inner-text.g-expanded .fa{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .sidebar-title{font-size:22px;line-height:1.2;font-weight:700;margin-bottom:10px;text-align:center}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .sidebar-title.title-left{text-align:left}${this.state.name ? "#" + this.state.name : ".g-sidebar"} p{margin-bottom:6px;font-size:16px;line-height:1.4em;color:#444;font-family:"Gotham Narrow SSm A", "Gotham Narrow SSm B", "Gotham Narrow Ssm", "Arial", sans-serif}${this.state.name ? "#" + this.state.name : ".g-sidebar"} p iframe,${this.state.name ? "#" + this.state.name : ".g-sidebar"} p ul,${this.state.name ? "#" + this.state.name : ".g-sidebar"} p div{margin:15px 0}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .sidebar-source{color:#888;font-size:11px;font-style:italic;margin-top:5px;position:relative;text-align:right;padding-right:5px;}${this.state.name ? "#" + this.state.name : ".g-sidebar"} .sidebar-expand{color:#333;position:absolute;width:100%;height:auto;padding:5px 0;text-align:center;bottom:0;left:0;z-index:2;font-size:14px;text-transform:uppercase;letter-spacing:1px;font-weight:900;cursor:pointer;background-color:rgba(238,238,238,0.95)} .g-sidebar.noexpand .sidebar-inner-text{max-height:100%}.g-sidebar.noexpand .sidebar-inner-text::before{content:unset}.g-sidebar.noexpand .sidebar-inner-text .sidebar-expand{display:none}</style>`

    let script = `<script>!function d(a,o,s){function f(t,e){if(!o[t]){if(!a[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}var r=o[t]={exports:{}};a[t][0].call(r.exports,function(e){return f(a[t][1][e]||e)},r,r.exports,d,a,o,s)}return o[t].exports}for(var u="function"==typeof require&&require,e=0;e<s.length;e++)f(s[e]);return f}({1:[function(e,t,n){"use strict";-1<document.documentElement.className.indexOf("g-expand-init")||(document.documentElement.className+=" g-expand-init",$(document).ready(function(){$(".sidebar-expand").each(function(){$(this).click(function(){$(this).closest(".sidebar-inner-text").toggleClass("g-expanded"),$(this).find(".fa").toggleClass("fa-expanded"),"Expand"==$(this).find(".sidebar-etext").text()?$(this).find(".sidebar-etext").text("Minimize"):"Minimize"==$(this).find(".sidebar-etext").text()&&$(this).find(".sidebar-etext").text("Expand")})})}))},{}]},{},[1])</script>`;

    // .g-sidebar.noexpand .sidebar-inner-text{max-height:100%}.g-sidebar.noexpand .sidebar-inner-text::before{content:unset}.g-sidebar.noexpand .sidebar-inner-text .sidebar-expand{display:none}

    let bodyinput = this.state.body.split(/\n/g);
    var formattedBody = bodyinput.map(r => {
      if(r.includes("<") && r.includes(">")) {
        return r;
      } else {
        return `<p>${r}</p>`
      }
    })

    let code = `
      ${css}
      ${this.state.size === 'small' ? csssSmall : this.state.size === 'medium' ? cssMedium : cssFull }
    <div${this.state.name ? ` id="${this.state.name}"` : ''} class="g-sidebar${this.state.size ? ' g-' + this.state.size : ''} ${this.state.expandbar === true ? 'noexpand' : ''}">
      <div class="sidebar-inner-text">${this.state.header ? `
        <div class="sidebar-title">${this.state.header}</div>` : ''}
        <div>${this.state.body ? formattedBody.map((p,i) => p ).join('') : ''}</div>
        ${this.state.credit ? `<div class="sidebar-source">${this.state.credit}</div>` : ''}
          <div class="sidebar-expand">
            <span class="sidebar-etext">Expand</span>
            <span class="efa"><i class="fa fa-chevron-down" aria-hidden="true">&zwj;</i></span>
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
