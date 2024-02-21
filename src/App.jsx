import Player from './components/Player/Player.jsx';
import TimerChallenger from './components/Timer/TimerChallenger.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenger title="Easy" targetTimer={1} />
        <TimerChallenger title="Not Easy" targetTimer={5} />
        <TimerChallenger title="Getting Tough" targetTimer={10} />
        <TimerChallenger title="Pros Only" targetTimer={15} />

      </div>
    </>
  );
}

export default App;
