import React from 'react'
import './EditThumnailToggleBtns.css'
import UploadBtn from '../common/UploadBtn'
import CameraBtn from '../common/CameraBtn'

const EditThumnailToggleBtns = ({ status, handleBackClick, handleVideoBtnClick, handleFileBtnClick}) => {
    const renderBtn = (isSelected, handleClick, content) => (
        <button type="button" className={isSelected ? 'selected' : ''} onClick={handleClick}>
            {content}
        </button>
    )
    
    return (
        <div className='EditThumnailToggleBtns'>
            {renderBtn(
                status.needsCurrentImage,
                handleBackClick,
                <span>元画像</span>
             )}
            {renderBtn(
                status.needShowThumnailVideo,
                handleVideoBtnClick,
                <CameraBtn />
             )}
            {renderBtn(
                status.needShowThumnailUpload,
                handleFileBtnClick,
                <UploadBtn />
             )}
        </div>
    )
}

export default EditThumnailToggleBtns