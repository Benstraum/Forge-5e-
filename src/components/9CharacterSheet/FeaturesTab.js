import React, {Component} from 'react'

class FeaturesTab extends Component{
    render(){
        let char = this.props.char
        return(
        <div >
            <p><b>Racial features</b></p>
               
               <div className="features">
                   <p> {char.features_race}</p>
               </div>
         
              <p> <b>Class Features</b></p>
          
               <div className="features">
                   <p>{char.features_class.replace('{"', '').replace('"}', '')}</p>
               </div>
        </div>
        )
    }

}

export default FeaturesTab;