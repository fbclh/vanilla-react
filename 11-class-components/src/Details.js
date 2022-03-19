import { Component } from "react";
import { useParams } from "react-router-dom";

class Details extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  // componentDidMount the same as userEffect() in Hooks
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();

    this.setState({ loading: false, ...json.pets[0] });
    // this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }

    const { animal, breed, city, state, description, name } = this.state;

    return (
      <div>
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city} - {state}
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  return <Details params={params} />;
};

export default WrappedDetails;
