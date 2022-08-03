import stl from './MyModal.module.css';

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [stl.myModal]
	
	if (visible) {
		rootClasses.push(stl.active)
	}

	return (
		
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
			<div className={stl.myModalContent} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
    </div>
  );
};

export default MyModal;
