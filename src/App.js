import Accordion from "./components/Accordion"


function App() {
    const items = [
        {
            id: 'ddsf',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want'
        },
        {
            id: 'ddsffd',
            label: 'Can I use JavaScript on a project?',
            content: 'You can use JavaScript on any project you want'
        },
        {
            id: 'ddsfqw;lk/',
            label: 'Can I use CSS on a project?',
            content: 'You can use CSS on any project you want'
        }
    ]
    return <Accordion items={items}/>
}

export default App;