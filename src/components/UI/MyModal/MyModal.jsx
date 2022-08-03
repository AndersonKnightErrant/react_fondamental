import stl from './MyModal.module.css';

const MyModal = ({ children, visible, setVisibile }) => {
  const rootClasses = [stl.myModal]
	
	if (visible) {
		rootClasses.push(stl.active)
	}

	return (
		
    <div className={rootClasses.join(' ')}>
			<div className={stl.myModalContent}>
				{children}
			</div>
    </div>
  );
};

export default MyModal;
