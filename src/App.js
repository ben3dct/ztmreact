import { Component } from "react";

class App extends Component {
    constructor() {
        super();

        this.state = {
            entities: [],
            searchField: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => this.setState({ entities: users }));
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState({ searchField });
    };

    render() {
        console.log("render");
        const { entities, searchField } = this.state;
        const { onSearchChange } = this;

        const filteredEntities = entities.filter((entity) =>
            entity.name.toLocaleLowerCase().includes(searchField)
        );
        console.log(searchField);
        console.log(filteredEntities);
        return (
            <div className='container'>
                <input
                    className='search-box'
                    type='search'
                    placeholder='Search Names'
                    onChange={onSearchChange}
                />
                {filteredEntities.map((ent) => (
                    <div key={ent.id}>Name: {ent.name}</div>
                ))}
            </div>
        );
    }
}
export default App;
