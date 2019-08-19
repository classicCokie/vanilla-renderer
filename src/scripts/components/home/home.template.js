function getHomeTemplate(state) {
    return /*html*/`
        <div class="home">
        <h1> Timer </h1>
        <h3> ${state.timer} </h3>

        <button id="plusButton">Plus </button>
        <button id="minusButton">Minus </button>

        <input id="myInput" type="text" placeholder="type some" value="${state.inputText}"/>

        <h2>${state.inputText}</h2>

        </div>
    `;
}
export default getHomeTemplate;