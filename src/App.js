import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

function App() {

    const handleClick = () => {
        console.log('Click!');
    }

    return <div>
        <div>
            <Button success rounded outline onClick={handleClick}>
                <GoBell />
                Click Me!
            </Button>
        </div>
        <div>
            <Button danger outline>Buy Now</Button>
        </div>
        <div>
            <Button warning>
                <GoCloudDownload />
                See Deal
            </Button>
        </div>
        <div>
            <Button secondary outline>Hide Ads</Button>
        </div>
        <div>
            <Button primary rounded>
                <GoDatabase />
                Something
            </Button>
        </div>
    </div>
}

export default App;