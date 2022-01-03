import { ScrollTriggerContext } from '../components/ScrollTriggerProvider';
import { useContext } from 'react';

export const useScrollTrigger = () => useContext(ScrollTriggerContext);
