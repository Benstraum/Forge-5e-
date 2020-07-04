import React, {Component} from 'react'

class FeaturesTab extends Component{
    render(){
        let char = this.props.char
        return(
        <div >
            <h3><b>Racial features</b></h3>  
               <div className="features">
                   <p> {char.features_race}</p>
               </div>
               <br/>
              <h3> <b>Class Features</b></h3>
               <div className="features">
                   <p>{char.features_class.replace('{"', '').replace('"}', '')}</p>
               </div>
        </div>
        )
    }

}

export default FeaturesTab;