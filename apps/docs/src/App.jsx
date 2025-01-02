import { Link, Button } from '@gene/ui';
import { spacing } from '@gene/tokens';
import './App.css';

function App() {
  console.log(spacing(3));

  return (
    <>
      <Link href="https://google.com">hello</Link>

      <Button>ddddd</Button>
    </>
  );
}

export default App;
