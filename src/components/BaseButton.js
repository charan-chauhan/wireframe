import PropTypes from 'prop-types';
import styles from '../styles/BaseButton.module.css';

export default function BaseButton({ variant = 'primary', size = 'md', children, className = '', ...props }) {
  const classes = `
    ${styles.btn} 
    ${styles[`btn_${variant}`]} 
    ${styles[`btn_${size}`]} 
    ${className}
  `.trim();

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

BaseButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
