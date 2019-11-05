import React from 'react';
import ApiContext from '../ApiContext';
import config from '../config';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import CircleButton from '../CircleButton/CircleButton'
import './AddNote.css'
class AddNote extends React.Component {
    constructor(props){
        super(props)
        this.state= {NoteName: '', note: '', ChosenFolder: ''}
    };
    static contextType = ApiContext;
    
    updateNoteName = (name) => {
        this.setState({NoteName: name})
        console.log(this.state.NoteName)
    };
    updateNoteContent = (Content) => {
        this.setState({note: Content})
    }
    changeFolder = (FolderType) => {
        this.setState({ChosenFolder: FolderType})
    } 

    AddNewNote = e => {
        e.preventDefault()
        const newNote = {name: this.state.NoteName  , modified:"2019-01-03T00:00:00.000Z",  folderId: this.state.ChosenFolder , 
        content: this.state.note}
    
        fetch(`${config.API_ENDPOINT}/notes`, {
          method: 'POST',
          body: JSON.stringify(newNote),
          headers: {
            'content-type': 'application/json'
          },
        })
          .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
            return res.json()
          })
          .then(() => {
            this.context.addNote(newNote)
            
            
          })
          .catch(error => {
            console.error({ error })
          })
      };




    render() {
        const folderPuller = this.context.folders;
         return(
             <div>
             <form className='addNote'>
                 <label htmlFor='name'>Name Your Note</label>
                 <input type='text' className='NoteName' id='name' onChange={e => this.updateNoteName(e.target.value) }></input>
                 <label htmlFor = 'content'>Write your note here</label>
                 <input type='text' className='NoteContent' id='Content' onChange={e => this.updateNoteContent(e.target.value)}></input>
                 <label htmlFor='Foldertype'>Choose what Folder you want your note to be in</label>
                 <select className='FolderType' id='FolderType' onChange={e => this.changeFolder(e.target.value)}>
                    {folderPuller.map(folder => (<option val={folder.id}>{folder.name}</option>))}
                 </select>
                 <button type='submit' className='submit' onClick= {this.AddNewNote}>Add Note</button>
             </form>
             <CircleButton
             tag='button'
             role='link'
             onClick={() => this.props.history.goBack()}
             className='Add__back-button'
           >
             <FontAwesomeIcon icon='chevron-left' />
             <br />
             Back
           </CircleButton>
           </div>
         )
     }
};
 
export default AddNote;