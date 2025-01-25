// Child1 component
import Child2 from './child2';

function Child1({ names }) {
    return (
        <Child2 names={names} />
    );
    }

export default Child1;
