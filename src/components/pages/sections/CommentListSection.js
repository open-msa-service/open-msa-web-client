import React from 'react';


class CommentListSection extends React.Component{

    state = {
        comment:[]
    }

    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.setState({
            comment:this.props.comment
        })
    }

    render(){

        const comment = this.state.comment;
        
        return(
            <>
                <img
                    src={comment.profileHref}
                    alt="프로필 사진"
                    className="profile-circle rounded-circle avatar-img z-depth-1-half"
                />
                <span className="profile-name">{comment.username}</span>
                <p></p>
                <p>{comment.content}</p>
                <hr />
            </>
        )
    }

}

export default CommentListSection;