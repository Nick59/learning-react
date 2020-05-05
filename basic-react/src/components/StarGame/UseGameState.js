import React from 'react';
import utils from '../../math.utils';

const useGameState = () => {
    const [stars, setStars] = React.useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = React.useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = React.useState([]);
    const [secondsLeft, setSecondsLeft] = React.useState(10);
  
    React.useEffect(() => {
      if (secondsLeft > 0 && availableNums.length > 0) {
        const timerId = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
        return () => clearTimeout(timerId);
      }
    });
  
    const setGameState = (newCandidateNums) => {
      if (utils.sum(newCandidateNums) !== stars) {
              setCandidateNums(newCandidateNums);
      } else {
        const newAvailableNums = availableNums.filter(
          n => !newCandidateNums.includes(n)
        );
        setStars(utils.randomSumIn(newAvailableNums, 9));
        setAvailableNums(newAvailableNums);
        setCandidateNums([]);
      }
    };
  
    return { stars, availableNums, candidateNums, secondsLeft, setGameState };
  };

  export default useGameState;