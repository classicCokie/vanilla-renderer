import getComponentTemplate from './home.template';
import renderElement from '../../core/renderElement';

function homeController() {

    var state = {
        timer: 1,
        inputText: "hey"
    };
   
    function setState(newState) {
        state = newState;
        render();
    };

    function render() {
        renderElement(document, getComponentTemplate(state), 'home');
        const plusButton = document.getElementById('plusButton');
        const minusButton = document.getElementById('minusButton');
        const myInput = document.getElementById('myInput');
        plusButton.addEventListener('click', ()=> setState({timer: state.timer + 1}));
        minusButton.addEventListener('click', () => setState({timer: state.timer - 1}));
        
        myInput.addEventListener('input', (event) => setState({timer: state.timer, inputText: event.target.value}));
    }

    render();
    

}

export default homeController;