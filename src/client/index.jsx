// in src/client/index.js
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "../shared/components/app";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <App {...this.props} />
      </BrowserRouter>
    );
  }
}
