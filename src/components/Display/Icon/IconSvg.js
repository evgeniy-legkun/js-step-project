import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo,
        faArrowLeft
} from '@fortawesome/free-solid-svg-icons'
library.add(
    {
        faIgloo,
        faArrowLeft
    });

export  default function IconSvg() {
    ///
}

class IconSvg extends Component{
    render (){
        const {icon = 'igloo'} = this.props;
     return (
        <FontAwesomeIcon icon={icon}/>
     );
    }
}

export default IconSvg;
