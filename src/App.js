import logo from './logo.svg';
import './App.css';
import {SimplePool} from 'nostr-tools'

const pool = new SimplePool()

window.pool = pool
window.relays = [
  'wss://relay.nostr.band',
  'wss://nos.lol',
  'wss://relay.damus.io',
  'wss://nostr.bitcoiner.social/',
  'wss://nostr21.com',
  'wss://relay.nostrify.io/',
  'wss://nostr-pub.wellorder.net',
  'wss://offchain.pub',
  'wss://relay.current.fyi',
  'wss://nostr.shroomslab.net',
  'wss://relayable.org',
  'wss://nostr.thank.eu',
  'ws://bigbadpc.local:4848'
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
