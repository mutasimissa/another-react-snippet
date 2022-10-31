import gridIcon from '../../assets/grid-icon.svg';
import listIcon from '../../assets/list-icon.svg';

export const PageToolbarViewTypeToggler = (props)=> {
    const {gridView, toggleView} = props;
    return (
        <div className='view-toggler-holder' onClick={toggleView}>
            <img src={gridView ? gridIcon : listIcon  } alt='icon' />
        </div>
    )
}