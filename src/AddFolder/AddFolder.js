import React from 'react';
import ApiContext from '../ApiContext';
import config from '../config';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import CircleButton from '../CircleButton/CircleButton'
import  './AddFolder.css'



class AddFolder extends React.Component {
    static contextType = ApiContext;
    constructor(props){
        super(props)
        this.state= {FolderName: ''}
    };
    UpdateFolderName = (content) => {
        this.setState({FolderName: content})
        console.log(this.state.FolderName)
    };
     

    CreateNewFolder = e => {
        e.preventDefault()
        const newFolder = {name: this.state.FolderName}
        
        fetch(`${config.API_ENDPOINT}/folders`, {
          method: 'POST',
          body: JSON.stringify(newFolder),
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
            this.context.addFolder(newFolder);
            ///this.NewFolderRedirect(newFolder)///
            
            
          })
          .catch(error => {
            console.error({ error })
          })
      };

      ///NewFolderRedirect = newFolder => {
        ///this.props.history.push(`/`)
      ///}


    render() {
         return(
             <div>
             <form className='addFolder'>
                 <label htmlFor='content'>Name Your Folder</label>
                 <input type='text' className='content' id='content' onChange={e => this.UpdateFolderName(e.target.value) }></input>
                 <button type='submit' className='submit' onClick={this.CreateNewFolder}>Add Folder</button>
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

export default AddFolder;