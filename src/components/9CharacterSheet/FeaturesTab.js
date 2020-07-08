import React, {Component} from 'react'

class FeaturesTab extends Component{
    render(){
        //this is a display for now but I will turn into a textarea so users will
        // be able to crop out and make notes on their abilities / add others
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