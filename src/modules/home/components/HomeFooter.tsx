import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

export const HomeFooter = () => {
  return (
    <footer className="homeFooter">
      <div className="homeFooterTitle">
        <h2>StreamAudio</h2>
      </div>
      <div className="homeFooterCopy">
        <FontAwesomeIcon icon={ faCopyright } /><p>{ new Date().getFullYear() } Joshua Moscosa</p> 
      </div>
    </footer>
  );
};
