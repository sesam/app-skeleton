import html from 'html';
import { Back } from 'PathRouter';

export default ({ id }) => html`
  <div>
    <h3>Pattern test</h3>
    <p>
      ID: ${id}
    </p>
    <${Back}>Back</>
  </div>
  <br />
`;
