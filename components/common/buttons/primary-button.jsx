import styles from './primary-button.module.scss';

const PrimaryButton = props => {
  let className = styles.main;
  if (props.className) className += ' ' + props.className;

  return <button {...props} className={className} />;
};

export default PrimaryButton;
