import React from 'react';



class AddNote extends React.Component {
    constructor(props){
        super(props)
        this.state= {NoteName: '', note: '', ChosenFolder: ''}
    };
    UpdateNoteName(name){
        this.setState({NoteName: name})
        console.log(this.state.NoteName)
    };
    UpdateNoteContent(Content){
        this.setState({note: Content})
    }
    ChangeFolder(FolderType){
        this.setState({ChosenFolder: FolderType})
    } 
    render() {
         return(
             <form className='addNote'>
                 <label htmlFor='content'>Name Your Note</label>
                 <input type='text' className='NoteName' id='name' onChange={e => this.UpdateNoteName(e.target.value) }></input>
                 <input type='text' className='NoteContent' id='Content' onChange={e => this.UpdateNoteContent(e.target.value)}></input>
                 <select className='FolderType' id='FolderType' onChange={e => this.ChangeFolder(e.target.value)}></select>
                 <button type='submit' className='submit'>Add Note</button>
             </form>
         )
     }
};

export default AddNote;