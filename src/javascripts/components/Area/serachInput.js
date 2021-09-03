export default class searchInput{
    constructor(){
        this.rootElement = searchInput.createRootElement();
    }
    static createRootElement(){
        const searchWrapper = document.createElement('DIV');
        searchWrapper.classList.add("search-input");
        const searchInput = document.createElement('INPUT');
        searchWrapper.append(searchInput);
        
        const inputBtn = document.createElement('BUTTON');
        inputBtn.classList.add('search-btn');
        searchWrapper.append(inputBtn);
        return searchWrapper;
    }
    bindEvents(){
        
    }
    render(){
        return this.rootElement;
    }

}