import React from 'react'
import { SketchPicker } from 'react-color'
import ModalControll from './ModalControll'
import './ColorPicker.css'


class ColorPicker extends ModalControll {
    constructor(props){
        super(props)
        this.state= {
            selectedColor: null
        }
    }
    handlePickerChange = (color, event) => {
        this.setState({ selectedColor: color.hex })
        this.props.setColor(color.hex)
    }
    render() {
        const color = this.state.selectedColor || this.props.currentColor

        const modal = this.generateModalBoilerplate({
            id: 'color-picker-modal',
            content: <SketchPicker 
                color={color} 
                onChange={this.handlePickerChange}/>
        })
        
        return (
            <div className='ColorPicker'>
                <span 
                    className="color-panel" 
                    onClick={this.openModal} 
                    style={{ backgroundColor: color }}></span>

                {modal}
            </div>
        )
    }
}


export default ColorPicker