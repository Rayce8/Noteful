import React from 'react';



class AddFolder extends React.Component {
    constructor(props){
        super(props)
        this.state= {FolderName: ''}
    };
    UpdateFolderName(content){
        this.setState({FolderName: content})
        console.log(this.state.FolderName)
    };
     
    render() {
         return(
             <form className='addFolder'>
                 <label htmlFor='content'>Name Your Folder</label>
                 <input type='text' className='content' id='content' onChange={e => this.UpdateFolderName(e.target.value) }></input>
                 <button type='submit' className='submit'>Add Folder</button>
             </form>
         )
     }
};

export default AddFolder;