import './styles.css';
import { CountdownTimer } from './CountdownTimerClass';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2021'),
});

timer.renderCounterOnPage();
