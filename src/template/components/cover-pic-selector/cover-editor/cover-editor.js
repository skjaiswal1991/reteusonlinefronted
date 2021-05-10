import React, { Component } from "react";
import "./cover-editor.css";
export default class CoverEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      shapes:[],
      startX:null,
      startY:null,
      selectedShapeIndex:null,
      isDragging:false,
      canvas:null,
      ctx:null,
      cw:null,
      ch:null,
      offsetX:null,
      offsetY:null,
      cursor:props.cursor
    };
  }
  componentDidMount() {
    console.log('Here Canvase created');
    const canvasDiv = document.getElementById("canvasContainer")
    canvasDiv.style.minHeight = '330px'
    const canvasElement = document.createElement("CANVAS");
    canvasElement.style.width ='100%';
    canvasElement.style.height='100%';
    canvasElement.style.cursor=this.state.cursor;
    canvasElement.setAttribute("id","ro_canvas");
    canvasElement.width  = canvasDiv.offsetWidth;
    canvasElement.height = canvasDiv.offsetHeight;
    this.setState({
      cw:canvasDiv.offsetWidth,
      ch:canvasDiv.offsetHeight,
      canvas:canvasElement
    },()=>{
     // console.log(this.state);
      this.reOffset()
    })
    const thisVAl = this;
    canvasDiv.appendChild(canvasElement);
    const ctx = canvasElement.getContext("2d");
    const image = new window.Image();
    image.src = this.props.src;
    image.onload = (e) =>this.handleLoad(e,thisVAl);
  } 
  drawAll(){
    const ctx = this.state.canvas.getContext("2d");
    ctx.clearRect(0,0,this.state.cw,this.state.ch);
    for(var i=0;i<this.state.shapes.length;i++){
        var shape = this.state.shapes[i];
        if(shape.image){
            ctx.drawImage(shape.image,shape.x,shape.y);
        }
    }
  }

  handleLoad=(e,thisVAl)=>{    
      const element = [{x:0, y:0, width:e.target.width, height:e.target.height, image:e.target}]
      const mergedArray = [...thisVAl.state.shapes,...element]     
      thisVAl.setState({
        shapes:element
      })
      thisVAl.drawAll();
      // listen for mouse events
      thisVAl.state.canvas.onmousedown=(e)=>thisVAl.handleMouseDown(e,thisVAl);
      thisVAl.state.canvas.onmousemove=(e)=>thisVAl.handleMouseMove(e,thisVAl);
      thisVAl.state.canvas.onmouseup=(e)=>thisVAl.handleMouseUp(e,thisVAl);
      thisVAl.state.canvas.onmouseout=(e)=>thisVAl.handleMouseOut(e,thisVAl);
  }

  drawAgain(file){
    const ctx = this.state.canvas.getContext("2d");
    ctx.clearRect(0,0,this.state.cw,this.state.ch);
    const thisVAl = this;
    const img = new Image;
    img.onload = (e) =>this.handleLoad(e,thisVAl);
    img.src = URL.createObjectURL(file);
  }
  componentDidUpdate(oldProps) {
    // this.state.canvas.style.cursor = this.props.cursor
    console.log(oldProps.src,this.props.src);
    if (oldProps.src !== this.props.src) {
      console.log('here');
      this.drawAgain(this.props.src); 
    }
  }
  componentWillUnmount() {
    
  }
  reOffset(){
    const BB=this.state.canvas.getBoundingClientRect();
    this.setState(()=>{
      return {
        offsetX:BB.left,
        offsetY:BB.top
      }
    })    
  }
  isMouseInShape(mx,my,shape){
    if(shape.image){
      console.log(shape);
      // this is a rectangle
      var rLeft=shape.x;
      var rRight=shape.x+shape.width;
      var rTop=shape.y;
      var rBott=shape.y+shape.height;
      // math test to see if mouse is inside image
      if( mx>rLeft && mx<rRight && my>rTop && my<rBott){
          return(true);
      }
  }
  // the mouse isn't in any of this shapes
  return(false);
  }
  handleMouseDown(e,that){
    console.log('mouse down ',this.props.coverEdit);
   if(this.props.coverEdit){
    e.preventDefault();
    e.stopPropagation();
   // calculate the current mouse position
    that.setState({
      startX:parseInt(e.clientX-that.state.offsetX),
      startY:parseInt(e.clientY-that.state.offsetY)
    },()=>{
      for(var i=0;i<that.state.shapes.length;i++){
        if(that.isMouseInShape(that.state.startX,that.state.startY,that.state.shapes[i])){
          console.log("on mouse down stateX and startY and drag true",that.state.startX,that.state.startY)
          that.setState({
            selectedShapeIndex:i,
            isDragging:true
          })
          return;
        }
    }
    })
   }else{
     return
   }
  }
  handleMouseUp(e,that){
    console.log('mouse up');
    if(!that.state.isDragging){return;}
    e.preventDefault();
    e.stopPropagation();
    that.setState(()=>{
      console.log('set dragging true....');
      return{
        isDragging:false
      }
    })
    console.log('here is the value....',that.state.isDragging);
  }
  handleMouseOut(e,that){
    if(!that.state.isDragging){return;}
    e.preventDefault();
    e.stopPropagation();
    that.setState(()=>{
      return{
        isDragging:false
      }
    })
  }

  handleMouseMove(e,that){
      // return if we're not dragging
     
      if(!that.state.isDragging){return;}

     // debugger;
      // tell the browser we're handling this event
      e.preventDefault();
      e.stopPropagation();
      // calculate the current mouse position
      const mouseX=parseInt(e.clientX-that.state.offsetX);
      const mouseY=parseInt(e.clientY-that.state.offsetY);
      // how far has the mouse dragged from its previous mousemove position?
      var dx=mouseX-that.state.startX;
      var dy=mouseY-that.state.startY;
      // move the selected shape by the drag distance
      var selectedShape=that.state.shapes[that.state.selectedShapeIndex];
      selectedShape.x+=dx;
      selectedShape.y+=dy;
      console.log(selectedShape);
      // clear the canvas and redraw all shapes
      that.drawAll();
      // update the starting drag position (== the current mouse position)
      that.setState(()=>{
        return{
          startX:mouseX,
          startY:mouseY
        }
      })
      
  }



  render() {
    return (
      <div id="canvasContainer"></div>
    );
  }
}
