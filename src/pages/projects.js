import React from "react"
import { Link } from "gatsby"
import { projects } from "../components/projectList"
import Navbar from "../components/header"

function Intro(props)
{
    return (
    <div className = "w3-row-padding w3-margin-top">
        <h1 className = "w3-col l8 m12 w3-margin-top w3-padding-32">These are some of the projects I dont have the room to put on my resume. Enjoy!</h1>
    </div>
    )
}

function MyNavButton(props)
{
    if (props.selected === true)
    { return  <button href="#" className="w3-button w3-hover-black w3-black" onClick={() => props.onClick()}>{props.text}</button>; }
    return  <button href="#" className="w3-button w3-white" onClick={() => props.onClick()}>{props.text}</button>;
}

function Card(props)
{
    return (
            <div className = "w3-card-4 w3-margin w3-hover-opacity " onClick={() => props.onClick()}>
            <img src={props.project.src} alt={props.alt} className="yes"/>
            <div className="w3-container w3-black w3-padding-16 w3-center">
                <p><b>{props.project.title}</b></p>
                <p>{props.project.text}</p>
            </div>
            </div>
    )  
}

class GridInteractive extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // for modal
            display: 'none', 
            displayProj: null, 
          };
      }
    
    handleCardClick(p)
    { this.setState({display: 'block',displayProj: p});}

    closeModal()
    { this.setState({display: 'none',displayProj: null}); }

    goleft()
    { 
        var prevInd = this.state.displayProj.id;
        var newInd = prevInd > 0 ? prevInd-1 : this.props.projects.length -1;
        console.log(newInd);
        this.setState({display: 'block',displayProj: this.props.projects[newInd]}); 
    }

    goright()
    { 
        var prevInd = this.state.displayProj.id;
        var newInd = prevInd < (this.props.projects.length -1)? prevInd+1 : 0;
        console.log(newInd);
        this.setState({display: 'block',displayProj: this.props.projects[newInd]}); 
    }

    renderGrid()
    {
        var columns = 3;
        var quotient = Math.floor(this.props.projects.length/columns);
        var remainder = this.props.projects.length % columns;
        var itemsIn1 = quotient + (remainder > 0)
        var itemsIn2 = quotient + (remainder > 1)
        var l1 = this.props.projects.slice(0,itemsIn1)
        var l2 = this.props.projects.slice(itemsIn1,itemsIn1+ itemsIn2)
        var l3 = this.props.projects.slice(itemsIn1+ itemsIn2,this.props.projects.length)

        const p1 = l1.map((p) => <Card key = {p.id} project = {p} onClick={() => this.handleCardClick(p)}/>)
        const p2 = l2.map((p) => <Card key = {p.id} project = {p} onClick={() => this.handleCardClick(p)}/>)
        const p3 = l3.map((p) => <Card key = {p.id} project = {p} onClick={() => this.handleCardClick(p)}/>)
        
        return(
        <div>
            <div className="w3-row-padding w3-margin-top w3-padding-16">
                <div className = "w3-third w3-container ">{p1}</div>
                <div className = "w3-third w3-container ">{p2}</div>
                <div className = "w3-third w3-container ">{p3}</div>
            </div>
        </div>
        )
    }

    renderModal()
    {
        var disp = this.state.display;
        if (disp === 'block')
        {
            console.log(this.state.displayProj.id)
            return(
            <div id="modal01" className="w3-modal w3-black" style={{'padding-top':0, display:disp}}>
                <a onClick={() => this.closeModal()} className="w3-button w3-black w3-xlarge w3-display-topright">x</a>
                <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
                <img id="img01" className="w3-image"  src={this.state.displayProj.src}/>
                <p id="caption"> {this.state.displayProj.text} </p>
                </div>
                <button class="w3-button w3-black w3-display-left" onClick={() => this.goleft()} >&#10094;</button>
                <button class="w3-button w3-black w3-display-right" onClick={() => this.goright()}>&#10095;</button>
            </div>
            )
        }
        return (<div></div>)

    }

    render()
    {
        return (
            <div>
            {this.renderGrid()}
            {this.renderModal()}
            </div>  
        )  
    }
}


class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: [true, false, false],
          option : 0,
          projectSelected: 0
        };
      }

    handleClick(i) {
    const selected = [false, false, false];
    selected[i] = true;
    this.setState({selected: selected, option : i});
    console.log(selected);

    }

    renderButton(i) {
        var texts = ["All","Technology", "Creative"];
        return (
          <MyNavButton
            selected={this.state.selected[i]}
            onClick={() => this.handleClick(i)}
            text = {texts[i]}
          />
        );
      }
      renderGrid(){
            var option = this.state.option
            var selectedProjects = projects.filter(function(project) {
            return (project.options[option] ==true);
          });
          selectedProjects = selectedProjects.map((x, i) => {
            x.id = i; 
            return x;
          })
          return <GridInteractive projects = {selectedProjects}/>
      }

    render()
    {
        return (
            <div>
                <div className="w3-container w3-margin-top">
                <div className="w3-section w3-center">
                <span className="w3-margin-right">Filter:</span> 
                {this.renderButton(0)}
                {this.renderButton(1)}
                {this.renderButton(2)}
                </div>
                </div>
                {this.renderGrid()}
            </div>
        )  
    }

}

export default () => 
(
    <div>
    <Navbar selected = {[false, false, true]}/>
    <div className = "maxw w3-center">
        <div className = "w3-row w3-padding-64">
        <h1 className = "w3-center bigText">
            These are some of the projects I dont have the room to put on my resume.
        </h1> 
        </div>

        <Filter/>
    </div>
    </div>
)
