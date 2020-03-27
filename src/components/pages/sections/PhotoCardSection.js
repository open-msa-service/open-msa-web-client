import React from 'react';
import {MDBContainer} from "mdbreact";
import Lightbox from "react-image-lightbox";

class PhotoCardSection extends React.Component{
    
    state = {
        imageSrc : [],
        photoIndex : 0,
        isOpen : false
    }
    
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        let tempSrc = this.props.imgSrc.substring(0, this.props.imgSrc.length-1).split(",");
        let imgSrc = tempSrc.map((src) => {
            return "/images/timeline/"+src;
        });

        this.setState({
            imageSrc : imgSrc
        })

    }

    render(){

        const images = this.state.imageSrc;
        const photoIndex = this.state.photoIndex;
        const isOpen = this.state.isOpen;

        return(
                <MDBContainer>
                    <figure>
                        <img
                            className="timeline-img d-block img-fluid"
                            src={this.state.imageSrc[0]}
                            alt="First slide"
                            onClick={()=>{
                                this.setState({
                                    isOpen:true
                                })
                            }} />
                    </figure>
                    {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        imageTitle={photoIndex + 1 + "/" + images.length}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % images.length
                        })
                        }
                    />
                    )}
                </MDBContainer>
                
        )
    }
}

export default PhotoCardSection;